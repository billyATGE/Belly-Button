function resetData() {
    d3.select("#sample-metadata").html("");


};


function buildMetadata(sample) {
    d3.json("./StarterCode/samples.json").then((data) => {
      var metadata= data.metadata;
      var resultsarray= metadata.filter(sampleobject => sampleobject.id == sample);
      var result= resultsarray[0]
      Object.entries(result).forEach(([key, value]) => {
        d3.select("#sample-metadata").append("h6").text(`${key}: ${value}`);
      });
    });
  }

  function optionChanged(newSample) {
    resetData() 
    buildGauge(newSample);
    buildCharts(newSample);
    buildMetadata(newSample);
  }