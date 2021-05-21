function buildCharts(sample) {

    d3.json("./StarterCode/samples.json").then((data) => {
      var samples= data.samples;
      var resultsarray= samples.filter(sampleobject => sampleobject.id == sample);
      var result= resultsarray[0]
  
      var ids = result.otu_ids;
      var labels = result.otu_labels;
      var values = result.sample_values;
  

      var LayoutBubble = {
        margin: { t: 0 },
        xaxis: { title: "Id's" },
        hovermode: "closest",
        };
  
        var DataBubble = [
        {
          x: ids,
          y: values,
          text: labels,
          mode: "markers",
          marker: {
            color: ids,
            size: values,
            }
        }
      ];
  
      Plotly.plot("bubble", DataBubble, LayoutBubble);
  
      //  Build a bar Chart
      
      var bar_data =[
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          orientation:"h"
  
        }
      ];
  
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("bar", bar_data, barLayout);
    });
  }

  function buildGauge(sample){
    d3.json("./StarterCode/samples.json")
    .then(data => {
        var samples= data.samples;
        var resultsarray= samples.filter(sampleobject => sampleobject.id == sample);
        var result= resultsarray[0]
        var subjectData = data.metadata
            .filter((subject) => subject.id == result.id);
        
        var value = subjectData[0].wfreq;


        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                type: 'indicator',
                mode: 'gauge+number+delta',
                value: value,
                
                title: {
                    text: 'Belly Button Washing Frequency <br><i>Scrubs per Week</i>',
                    font: { size: 24, color: 'black', family: 'Arial' }
                },
                gauge: {
                    axis: { range: [null, 9], tickwidth: 1, tickcolor: 'darkgrey' },
                    bar: { color: 'red', thickness: 0.3 },
                    bgcolor: 'white',
                    borderwidth: 0,
                    bordercolor: 'gray',
                    
        
                    axes: [{
                        pointers: [{
                            value: 80,
                            type: 'Marker',
                            markerType: 'Circle'
                        }]
                    }],          
                    steps: [
                        { range: [0, 1], color: '#c2ddff' },
                        { range: [1, 2], color: '#8fc1ff' },
                        { range: [2, 3], color: '#5ca5ff' },
                        { range: [3, 4], color: '#2989ff'},
                        { range: [4, 5], color: '#0777ff' },
                        { range: [5, 6], color: '#0067e4' },
                        { range: [6, 7], color: '#0057c2' },
                        { range: [7, 8], color: '#00397e' },
                        { range: [8, 9], color: '#001a3a' }
                    ],
                },
            },
        ];

        var layout = {
            width: 440,
            height: 360,
            margin: { t: 35, r: 15, l: 15, b: 0 },
            font: { color: 'black', family: 'Arial' }
        };

        Plotly.newPlot('gauge', data, layout);
    });
  }