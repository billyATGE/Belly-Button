function init() {
    resetData();
    var selector = d3.select("#selDataset");
  

    d3.json("./StarterCode/samples.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  

      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildGauge(firstSample);
      buildMetadata(firstSample);

    });
}
init();