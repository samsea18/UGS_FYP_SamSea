import pandas as pd
import numpy as np
import re
from datasketch import MinHash, MinHashLSHForest
import time
from nltk.corpus import stopwords
stopENG = set(stopwords.words("english"))
pd.set_option('display.max_colwidth', -1)

#read the data input
raw = pd.read_csv("D:\\workspace\\BSc Computing Science\\UGS_FYP_SamSea\\Recommendation_Engine\\data\\TransactionsData04.csv" , error_bad_lines=False, index_col=False, dtype='unicode')

#assign unique product ids to all products
raw2 = raw.assign(prod_id =(raw['prod_name']).astype('category').cat.codes)
raw3 = (raw2[['prod_id', 'prod_name', 'prod_category_id']]).apply(pd.to_numeric, errors='ignore')

#filter products with invalid names
raw4 = raw3.drop(raw3[raw3.prod_id <= 0].index)

#generate purchase count per product and drop duplicate product id
raw5 = (raw4.groupby(['prod_id']).agg({'prod_id': 'count'}).rename(columns={'prod_id': 'purchase_count'}).reset_index())
raw5.sort_values('purchase_count', ascending=False).head(n=10)
raw6 = raw5.merge(raw4, left_on='prod_id', right_on='prod_id', how='left')
raw7 = raw6.drop_duplicates(['prod_id'])

#read another csv containing the list of product categories for this dataset
prod_cat_names = pd.read_csv("D:\\workspace\\BSc Computing Science\\UGS_FYP_SamSea\\Recommendation_Engine\\data\\comscore2004_prod_category_list.csv" , error_bad_lines=False, index_col=False, dtype='unicode')
prod_cat_names['category_id'] = pd.to_numeric(prod_cat_names['category_id'])

raw8 = raw7.merge(prod_cat_names, left_on='prod_category_id', right_on='category_id', how='left')
raw8['prod_name_cat'] = raw8.prod_name.astype(str).str.cat(raw8.category_name.astype(str), sep='\t')

#convert list to dataframe for processing
data = pd.DataFrame({'text':raw8['prod_name_cat']})

#to compensate for the array's index
data.index = np.arange(1, len(data) + 1)


#Preprocess will split a string of text into individual tokens/shingles
def preprocess(text):
    text = re.sub(r'[^\w\s]',' ',text)
    tokens = text.lower()
    tokens = tokens.split()
    filtered_words = [word for word in tokens if word not in stopENG]
    return filtered_words


#Create Minhash Forest for Queries
def build_forest(data, perms):
    start_time = time.time()
    
    minhash = []
    
    for text in data['text']:
        tokens = preprocess(text)
        m = MinHash(num_perm=perms)
        for s in tokens:
            m.update(s.encode('utf8'))
        minhash.append(m)
        
    # There is another optional parameter l or Prefix Tree (default l=8).
    forest = MinHashLSHForest(num_perm=perms, l=8)
    
    for i,m in enumerate(minhash):
        forest.add(i,m)
        
    forest.index()
    
    print('It took %s seconds to build forest.' %(time.time()-start_time))
    
    return forest


#Number of Permutations 128 default
permutations = 128
forest = build_forest(data, permutations)

# compute similarity
def jaccard_score(prod_id, rec_list):
    
    jaccard_list = []
    prod_name_cat = get_prod_name_cat(prod_id)
    
    s1 = set(preprocess(prod_name_cat))

    for x in range(len(rec_list)):
        
        rec_prod_name_cat = get_prod_name_cat(rec_list.prod_id[x])
        s2 = set(preprocess(rec_prod_name_cat))

        actual_jaccard = float(len(s1.intersection(s2)))/float(len(s1.union(s2)))
        jaccard_list.append(actual_jaccard)


    df = pd.DataFrame({'jaccard_sim':jaccard_list})
    
    return df


#queries for recommendations
def recommend_item(prod_id, database, perms, num_results, forest):
    start_time = time.time()
    
    prod_name = get_prod_name(prod_id)
    tokens = preprocess(prod_name)
    m = MinHash(num_perm=perms)
    for s in prod_name:
        m.update(s.encode('utf8'))
        
    idx_array = np.array(forest.query(m, num_results))
    if len(idx_array) == 0:
        return None # if your query is empty, return none
    
    result = database.iloc[(idx_array)]['text']
    
    print('It took %s seconds to query forest.' %(time.time()-start_time))
    
    output1 = (pd.Series.to_frame(result)).reset_index()
    output2 = (output1.join(output1['text'].str.split('\t', 1, expand=True).rename(columns={0:'prod_name', 1:'prod_cat'})))
    output3 = (output2.rename(columns={'index':'prod_id'})).drop(output2.columns[[1]], axis=1)
        
    j_score = jaccard_score(prod_id, output3)
    
    final_output = output3.join(j_score)
    
    return (final_output)

# get product name from product id
def get_prod_name(target_id):   
    text = raw8[raw8.prod_id == target_id]['prod_name'].item()
    return text

# get product-name-category from product id
def get_prod_name_cat(target_id):   
    text = raw8[raw8.prod_id == target_id]['prod_name_cat'].item()
    return text


#Number of Recommendations to return
num_recommendations = 5

prod_id = 58238
prod_name = get_prod_name(prod_id)

result = recommend_item(prod_id, data, permutations, num_recommendations, forest)

print('\n Top Recommendation(s) for [%s] is(are)' %(prod_name))
print(result)