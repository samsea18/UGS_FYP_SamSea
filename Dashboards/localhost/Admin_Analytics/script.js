//COMMONLY USED CODES

var legendBarLayout = {
    legend : {
      orientation: 'h',
      y:-0.15
  },
}

var legendBarLayout2 = {
    legend : {
      orientation: 'h',
      y:-0.15,
      x:0.32
  },
}


//REAL-TIME LINE CHART
function rand() { 
  return Math.floor(Math.random() * 20);
}

var layout = {
  autosize: false,
  width: 500,
  height: 350,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  }
}

Plotly.plot('RTLine', [{
  y: [1,2,3].map(rand),
  mode: 'lines',
  line: {color: '#80CAF6'}
}], layout);

var cnt = 0;

var interval = setInterval(function() {
  
  Plotly.extendTraces('RTLine', {
    y: [[rand()]]
  }, [0])

  if(cnt === 10) clearInterval(interval);
}, 5000);


//SINGLE BAR CHART
var bardata1 = [
  {
    x: ['Jan', 'Feb', 'Mar'],
    y: [75, 124, 95],
    type: 'bar'
  }
];

Plotly.newPlot('barchart1', bardata1);


//DOUBLE BAR CHART
//---------------------------SALES BY CUSTOMER TYPE
var trace1 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'New Customers',
  type: 'bar'
};

var trace2 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [12, 18, 29],
  name: 'Returning Customers',
  type: 'bar'
};

var data1 = [trace1, trace2];


//--------------------------- RETURNING CUSTOMER TRAFFIC ON SELECT
//----------------GENDER
var trace3 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [50, 90, 60],
  name: 'Male',
  type: 'bar'
};

var trace4 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [25, 34, 35],
  name: 'Female',
  type: 'bar'
};

var data2 = [trace3, trace4];

//------------------DEVICE
var trace5 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [35, 34, 35],
  name: 'Web',
  type: 'bar'
};

var trace6 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [40, 90, 60],
  name: 'Mobile',
  type: 'bar'
};

var data3 = [trace5, trace6];

Plotly.newPlot('group_bar1', data1, legendBarLayout);
Plotly.newPlot('group_bar2', data2, legendBarLayout);
Plotly.newPlot('group_bar3', data3, legendBarLayout);


//HORIZONTAL BAR CHART
var hbardata1 = [{
  type: 'bar',
  x: [5, 14, 22, 37, 40],
  y: ['Reviews', 'Purchases', 'Add-to-cart', 'Clicks', 'Visits' ],
  orientation: 'h',
  marker:{
    color: ['rgba(204,204,204,1)', 'rgba(255, 0, 0, 1)', 'rgba(255,255,0,1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 120, 0, 1)']
  },
}];

var hbardata2 = [{
  type: 'bar',
  x: [7, 40, 53, 96, 120],
  y: ['Reviews', 'Purchases', 'Add-to-cart', 'Clicks', 'Visits' ],
  orientation: 'h',
  marker:{
    color: ['rgba(204,204,204,1)', 'rgba(255, 0, 0, 1)', 'rgba(255,255,0,1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 120, 0, 1)']
  },
}];

var hbardata3 = [{
  type: 'bar',
  x: [32, 117, 237, 312, 509],
  y: ['Reviews', 'Purchases', 'Add-to-cart', 'Clicks', 'Visits' ],
  orientation: 'h',
  marker:{
    color: ['rgba(204,204,204,1)', 'rgba(255, 0, 0, 1)', 'rgba(255,255,0,1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 120, 0, 1)']
  },
}];

var layout = {
    width : 569.6,
};


Plotly.newPlot('hbar1', hbardata1);
Plotly.newPlot('hbar2', hbardata2, layout);
Plotly.newPlot('hbar3', hbardata3, layout);


//DOUBLE LINE CHART
var trace1 = {
  x: ['2019-01', '2019-02', '2019-03', '2019-04'],
  y: [10, 15, 13, 17],
  name: 'Impressions',
  type: 'scatter'
};

var trace2 = {
  x: ['2019-01', '2019-02', '2019-03', '2019-04'],
  y: [16, 5, 11, 9],
  name: 'Purchases',
  type: 'scatter'
};

var data1 = [trace1, trace2];

Plotly.newPlot('double_line', data1, legendBarLayout, {responsive: true});

//Tabulated data
var values1 = [
      ['1', '2', '3', '4', '5'],
      ['iPhone XS Max', 'Gucci T-Shirt', 'AirPods 2', 'Adidas Ultraboost BLACK', "Nike Airmax 97'"],
      [2135, 1821, 1678, 1256, 817],
      ]

var values2 = [
      ['1', '2', '3', '4', '5'],
      ['MacBook Pro 2018', 'Adidas Stan Smith', 'JBL Bluetooth Speaker ', 'iPod Touch 2', 'LV Clutch'],
      [2135, 1821, 1678, 1256, 817],
      ]

var values3 = [
      ['1', '2', '3', '4', '5'],
      ['Apple', 'Balenciaga', 'Adidas', 'Samsung Electronics Co.', 'RALPH LAUREN'],
      [2135, 1821, 1678, 1256, 817],
      ]


var data1 = [{
  type: 'table',
  columnwidth: [20,80,40],
  header: {
    values: [["<b>No.</b>"], ["<b>Product</b>"], ["<b>Purchases</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values1,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]} 
  }
}]

var data2 = [{
  type: 'table',
  columnwidth: [20,80,40],
  header: {
    values: [["<b>No.</b>"], ["<b>Product</b>"], ["<b>Views</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values2,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]} 
  }
}]

var data3 = [{
  type: 'table',
  columnwidth: [20,80,40],
  header: {
    values: [["<b>No.</b>"], ["<b>Merchant</b>"], ["<b>Views</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values3,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]} 
  }
}]

var layout = {
    margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 25
  },
    height : 180,
    width : 280,
    tracetoggle: false
};

Plotly.newPlot('table1', data1, layout);
Plotly.newPlot('table2', data2, layout);
Plotly.newPlot('table3', data3, layout);


// HEATMAP
var HMdata1 = [
  {
    z: [[1, 20, 30, 50, 1, 12, 18], [31, 46, 11, 33, 60, 80, 30], [29, 13, 30, 60, 1, 10, 20]],
    x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    y: ['Morning', 'Afternoon', 'Evening'],
    type: 'heatmap'
  }
];

var HMdata2 = [
  {
    z: [[58, 26, 60, 120, 15, 24, 40], [16, 42, 66, 103, 23, 31, 44],[71, 93, 29, 67, 101, 178, 62]],
    x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    y: ['Morning', 'Afternoon', 'Evening'],
    type: 'heatmap'
  }
];

var HMdata3 = [
  {
    z: [[310, 460, 110, 330, 600, 800, 300], [290, 130, 300, 600, 10, 100, 200], [10, 200, 300, 500, 10, 120, 180]],
    x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    y: ['Morning', 'Afternoon', 'Evening'],
    type: 'heatmap'
  }
];

var HMlayout = {
    margin: {
    l: 100,
    r: 100,
    b: 60,
    t: 25
  },
    height : 250,
    width : 800,
    tracetoggle: false
};


Plotly.newPlot('heatmap1', HMdata1, HMlayout);
Plotly.newPlot('heatmap2', HMdata2, HMlayout);
Plotly.newPlot('heatmap3', HMdata3, HMlayout);




// Dropdown list functions
function myFunction() {
  document.getElementById("customerTraffic").classList.toggle("show");
}

// Closes the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("customerTraffic");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


//jQuery handlers for Customer Traffic Graph
$("#customerTraffic").change(function() {
  if ($(this).val() == "device") {
    $('#baar3').show();
    $('#baar1').hide();
    $('#baar2').hide();
  }
  else if ($(this).val() == "gender") {
    $('#baar2').show();
    $('#baar1').hide();
    $('#baar3').hide();
  }
  else if($(this).val() == "all") {
    $('#baar1').show();
    $('#baar2').hide();
    $('#baar3').hide();
  }
  else {
    $('#baar2').hide();
    $('#baar3').hide();
  } 
});

//jQuery handlers for Traffic Analysis Graph
$("#trafficAnalysis").change(function() {
  if ($(this).val() == "3months") {
    $('#hm3').show();
    $('#hm1').hide();
    $('#hm2').hide();
  }
  else if ($(this).val() == "month") {
    $('#hm2').show();
    $('#hm1').hide();
    $('#hm3').hide();
  }
  else if($(this).val() == "week") {
    $('#hm1').show();
    $('#hm2').hide();
    $('#hm3').hide();
  }
  else {
    $('#hm2').hide();
    $('#hm3').hide();
  } 
});

//jQuery handlers for Clickstream Analysis Graph
$("#clickstreamAnalysis").change(function() {
  if ($(this).val() == "month") {
    $('#hb3').show();
    $('#hb1').hide();
    $('#hb2').hide();
  }
  else if ($(this).val() == "week") {
    $('#hb2').show();
    $('#hb1').hide();
    $('#hb3').hide();
  }
  else if($(this).val() == "day") {
    $('#hb1').show();
    $('#hb2').hide();
    $('#hb3').hide();
  }
  else {
    $('#hb2').hide();
    $('#hb3').hide();
  } 
});





// ---------------------------------------------------------------  WORD CLOUD

//Simple animated example of d3-cloud - https://github.com/jasondavies/d3-cloud
//Based on https://github.com/jasondavies/d3-cloud/blob/master/examples/simple.html

// Encapsulate the word cloud functionality
function wordCloud(selector) {

    var fill = d3.scale.category20();
    var selector = "#cloudWord";
    var width = 599.6; 
    var height = 445

    //Construct the word cloud's SVG element
    var svg = d3.select(selector).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(280,250)");


    //Draw the word cloud
    function draw(words) {
        var cloud = svg.selectAll("g text")
                        .data(words, function(d) { return d.text; })

        //Entering words
        cloud.enter()
            .append("text")
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr('font-size', 1)
            .text(function(d) { return d.text; });

        //Entering and existing words
        cloud
            .transition()
                .duration(600)
                .style("font-size", function(d) { return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("fill-opacity", 1);

        //Exiting words
        cloud.exit()
            .transition()
                .duration(200)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 1)
                .remove();
    }


    return {

        //Recompute the word cloud for a new set of words. 
        update: function(words) {
            d3.layout.cloud().size([500, 400])
                .words(words)
                .padding(5)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Impact")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();
        }
    }

}

var words = [
    "ADIDAS ULTRABOOST NIKE AIRMAX GUCCI BALENCIAGA MistAire Ultrasonic Cool Mist Humidifier BLACK+DECKER Cordless Lithium Hand Vacuum", 
    "Mellanni Bed Sheet Set Philips Wake-Up Light URPOWER Essential Oil Diffuser Fujifilm Instax Mini 9", 
    "HoMedics White Noise Machine Instant Pot Duo Plus Amazon Echo Dot 3rd Generation What Do You Meme Adult Party Game", 
    "Lodge Pre-Seasoned Skillet Himalayan Glow Himalayan Pink Salt Lamp Amazon Fire Stick with Alexa Voice Remote TruSkin Vitamin C Serum", 
    "SafeRest Hypoallergenic Waterproof Mattress Protector NutriBullet High Speed Blender Aztec Secret Indian Healing Clay", 
    "Bissell CleanView Bagless Vacuum With OnePass Tinkle Eyebrow Razor Pack Crayola Color Bath Dropz Igloo Countertop Compact Ice Maker", 
    "Hydro Flask Water Bottle Yi Dome Indoor Security Surveillance System PopSockets Expanding Grip Cowin E7 Noise Cancelling Bluetooth Headphones", 
    "Trianium Fidget Cube nintendo switch laptop fidget spinner headphones ps4 fitbit kindle bluetooth headphones instant pot",
"fire stick external hard drive books tv ipad tablet ssd micro sd card roku toilet paper game of thrones wireless headphones",
"backpack alexa air fryer monitor harry potter bluetooth speakers switch xbox one kindle fire doctor who shoes iphone charger prime video",
"hdmi cable paper towels desk gift card pop socket echo lego iphone 7 case coffee maker water bottle echo dot apple watch earbuds",
"gaming chair star wars wireless mouse essential oils office chair keyboard gaming mouse socks coffee playstation 4 xbox one controller",
"mouse pad printer sd card wireless earbuds iphone 7 plus case gift cards for amazon camera iphone 7 mouse ps4 controller shower curtain",
"ps4 games drone iphone bluetooth earbuds iphone 6 iphone 6 case smart watch iphone x case movies mattress microwave vacuum cleaner",
"laptops protein powder yoga mat iphone 6s case projector hard drive gtx 1080 aa batteries gtx 1070 dash cam computer desk snes classic",
"nerf guns gaming headset chromebook flash drive iphone 8 plus case fan blender iphone 7 case iphone 7 plus case iphone 6 case",
"iphone x case iphone 6s case iphone 8 plus case toilet paper paper towels water bottle coffee shower curtain aa batteries fan"

]

// process the array of words 
function getWords(i) {
    return words[i]
            .replace(/[!\.,:;\?]/g, '')
            .split(' ')
            .map(function(d) {
                return {text: d, size: 10 + Math.random() * 60};
            })
}

//refreshes word cloud to simulate 'live' database connection
function showNewWords(vis, i) {
    i = i || 0;

    vis.update(getWords(i ++ % words.length))
    setTimeout(function() { showNewWords(vis, i + 1)}, 5000)
}

//Create a new instance of the word cloud visualisation.
var myWordCloud = wordCloud('body');

//Start cycling through the demo data
showNewWords(myWordCloud);