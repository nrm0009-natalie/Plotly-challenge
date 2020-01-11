// ---------- first round of code is to generate dropddown menu and default charts & graphs ------------------ //

// Use D3 fetch to read the JSON file
d3.json("samples.json").then((importedData) => {
    console.log(importedData);

    // //////// building function to add id numbers to dropdown menu///////////
    function dropdown() {

      // building a function to create an array for the "names" data
      function BuildnamesArray() {
        // separate "names" object from the rest of the json data
        var namesArray = importedData.names;
        // Use D3 to select the dropdown menu (document=html)
        var dropdown_menu = document.getElementById("selDataset")
    
        for (i = 0; i < namesArray.length; i++) {
          var option = document.createElement("option")
          option.value = namesArray[i]
          option.text = namesArray[i]
          dropdown_menu.appendChild(option)
        }
      };
      BuildnamesArray();
    };
    dropdown();
    



    // building the function for the bar chart
    function buildCharts() {
      // clear previous data from tables and charts
      d3.selectAll('tr').remove()
      d3.select("bar").remove()
      d3.select("bubble").remove()
      // separate "samples" object from the rest of the json data
      var samples = importedData.samples;
      // filter the new object by the current id requested by the dropdown 
      var samplesArray = samples.filter(sampleObj => sampleObj.id == currentId);
      // select the index of the array inside the object 
      var currentSample = samplesArray[0];

      // create variables from only the first 10 entries in the array and reverse their order
      var otu_ids = currentSample.otu_ids.slice(0,10).reverse();
      var otu_labels = currentSample.otu_labels.slice(0,10).reverse();
      var sample_values = currentSample.sample_values.slice(0,10).reverse();

      otu_array = []
      //  had to change otu_ids to an array and add "OTU" to force javascript to change it to a string and recognize they are labels
      for (i = 0; i < otu_ids.length; i++) {
        otu_array.push("OTU " + otu_ids[i])
      };
      console.log(otu_array);

      console.log(otu_ids);
      console.log(sample_values);
      console.log(otu_labels);


    // create variables for ALL entries in the array for the bubble chart (not just top 10)
    var BUBBLEotu_ids = currentSample.otu_ids;
    var BUBBLEotu_labels = currentSample.otu_labels;
    var BUBBLEsample_values = currentSample.sample_values;


      var barData = [
        { x: sample_values,
          y: otu_array,
          text: otu_labels,
          type: "bar",
          orientation: "h"
        }
      ];

      var barLayout = {
        title: "Top 10 Sample Values for Selected Subject"
      };
      

      var bubbleChart = [
        {x: BUBBLEotu_ids,
        y: BUBBLEsample_values,
        text: BUBBLEotu_labels,
        mode: 'markers',
        marker: {
          size: BUBBLEsample_values, 
          color: BUBBLEotu_ids }
        }
      ];

      var layout = {
        title: 'All OTUs for Selected Subject',
        xaxis: {    
          title: {
          text: 'OTU ID'}},
        yaxis: {    
            title: {
            text: 'OTU Count'}}
        };



      Plotly.newPlot("bar", barData, barLayout);
      Plotly.newPlot("bubble", bubbleChart, layout);

      // separate "metadata" object from the rest of the json data
      var metadata = importedData.metadata;
      // filter the new object by the current id requested by the dropdown 
      var metadataArray = metadata.filter(sampleObj => sampleObj.id == currentId);
      // select the index of the array inside the object 
      var currentDemo = metadataArray[0];
      
      console.log(currentDemo);




      // create an empty array for demographic data (foreach can't iterate an object)
      demoArray = []
      for (var key in currentDemo) {
        if (currentDemo.hasOwnProperty(key)) {
            demoArray.push(key + " : " + currentDemo[key]);
        }
    }

      // Get a reference to the table body
      var tbody = d3.select("tbody");

      // Create a table and print table to web page
      demoArray.forEach((data) => {
      var row = tbody.append("tr");
      var cell = row.append("td");
      cell.text(data);
      // });
      });
      
 
  }
 
var currentId = 940;
buildCharts();
  
});



// ---------- second round of code runs optionChanged function from HTML and changes plots to filter by selected sample ------------- //


  function optionChanged(value){
    // Use D3 fetch to read the JSON file
d3.json("samples.json").then((importedData) => {
  console.log(importedData);

  // building the function for the bar chart
  function buildCharts() {
    // clear previous data from tables and charts
    d3.selectAll('tr').remove()
    d3.select("bar").remove()
    d3.select("bubble").remove()
    // separate "samples" object from the rest of the json data
    var samples = importedData.samples;
    // filter the new object by the current id requested by the dropdown 
    var samplesArray = samples.filter(sampleObj => sampleObj.id == value);
    // select the index of the array inside the object 
    var currentSample = samplesArray[0];

    // create variables from only the first 10 entries in the array and reverse their order
    var otu_ids = currentSample.otu_ids.slice(0,10).reverse();
    var otu_labels = currentSample.otu_labels.slice(0,10).reverse();
    var sample_values = currentSample.sample_values.slice(0,10).reverse();

    otu_array = []
    //  had to change otu_ids to an array and add "OTU" to force javascript to change it to a string and recognize they are labels
    for (i = 0; i < otu_ids.length; i++) {
      otu_array.push("OTU " + otu_ids[i])
    };


    // create variables for ALL entries in the array for the bubble chart (not just top 10)
    var BUBBLEotu_ids = currentSample.otu_ids;
    var BUBBLEotu_labels = currentSample.otu_labels;
    var BUBBLEsample_values = currentSample.sample_values;


    var barData = [
      { x: sample_values,
        y: otu_array,
        text: otu_labels,
        type: "bar",
        orientation: "h"
      }
    ];

    var barLayout = {
      title: "Top 10 Sample Values for Selected Subject"
    };
    

    var bubbleChart = [
    {x: BUBBLEotu_ids,
      y: BUBBLEsample_values,
      text: BUBBLEotu_labels,
      mode: 'markers',
      marker: {
        size: BUBBLEsample_values, 
        color: BUBBLEotu_ids }
      }
    ];

    var layout = {
      title: 'All OTUs for Selected Subject',
      xaxis: {    
        title: {
        text: 'OTU ID'}},
      yaxis: {    
          title: {
          text: 'OTU Count'}}
      };



    Plotly.newPlot("bar", barData, barLayout);
    Plotly.newPlot("bubble", bubbleChart, layout);

    // separate "metadata" object from the rest of the json data
    var metadata = importedData.metadata;
    // filter the new object by the current id requested by the dropdown 
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == value);
    // select the index of the array inside the object 
    var currentDemo = metadataArray[0];
    
    console.log(currentDemo);




    // create an empty array for demographic data (foreach can't iterate an object)
    demoArray = []
    for (var key in currentDemo) {
      if (currentDemo.hasOwnProperty(key)) {
          demoArray.push(key + " : " + currentDemo[key]);
      }
  }

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Create a table and print table to web page
    demoArray.forEach((data) => {
    var row = tbody.append("tr");
    var cell = row.append("td");
    cell.text(data);
    // });
    });
    

}

buildCharts();

});

};


  

  

  

  