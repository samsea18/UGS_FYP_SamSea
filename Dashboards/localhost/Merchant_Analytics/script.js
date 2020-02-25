//REAL-TIME LINE CHART
function rand() { 
  return Math.floor(Math.random() * 10);
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



//DOUBLE BAR CHART
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

var data = [trace1, trace2];


var legendBarLayout = {
    legend : {
      orientation: 'h',
      y:-0.15
  },
  barmode: 'group'
}

Plotly.newPlot('group_bar', data, legendBarLayout);


//DOUBLE LINE CHART
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1, trace2];


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
    values: [["<b>No.</b>"], ["<b>Product</b>"], ["<b>Views</b>"]],
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
    width : 350,
    tracetoggle: false
};

Plotly.newPlot('table1', data1, layout);
Plotly.newPlot('table2', data2, layout);
Plotly.newPlot('table3', data3, layout);


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
    width : 523,
};


Plotly.newPlot('hbar1', hbardata1);
Plotly.newPlot('hbar2', hbardata2, layout);
Plotly.newPlot('hbar3', hbardata3, layout);


//jQuery handlers for Clickstream Analysis on-select 
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