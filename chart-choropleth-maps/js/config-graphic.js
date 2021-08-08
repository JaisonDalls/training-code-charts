anychart.onDocumentReady(function(){
    anychart.data.loadJsonFile ("https://static.anychart.com/git-storage/word-press/data/choropleth-map-tutorial/data.json", function (data) {
        // Variables
        var geoData = data.records
        var sumCases = 0;
        var numC;
        var data = [];
        var sumDeaths = 0;
        var numD;

        // Go through the initial data
        for (var i = 0; i < geoData.length; i++) {
            // convert strings to numbers and save them to new variables
            numC = parseInt(geoData[i].cases);

            // check if we are in the same country by comparing the geoId. 
            // if the country is the same add the cases to the appropriate variables
            if ((geoData[i + 1]) != null && (geoData[i].geoId == geoData[i + 1].geoId)) {
            sumCases = sumCases + numC;
            }
            else {
            // add last day cases of the same country
            sumCases = sumCases + numC;

            // insert the resulting data in the array using the AnyChart keywords 
            data.push({ id: geoData[i].geoId, value: sumCases, title: geoData[i].countriesAndTerritories })

            // reset the variables to start over
            sumCases = 0;
                                
            }
        };

        var chart = anychart.map(data);
        chart.geoData(anychart.maps.world);

        // specify the chart type and set the series 
        var series = chart.choropleth(data);
        
        // set the chart title
        chart.title("COVID-19 Global Cases");

        // color scale ranges
        ocs = anychart.scales.ordinalColor([
        { less: 99 },
        { from: 100, to: 999 },
        { from: 1000, to: 9999 },
        { from: 10000, to: 29999 },
        { from: 30000, to: 39000 },
        { from: 40000, to: 59000 },
        { from: 60000, to: 99999 },
        { greater: 100000 }
        ]);
                
        // set scale colors
        ocs.colors(["rgb(252,245,245)", "rgb(241,219,216)","rgb(229,190,185)", "rgb(211,152,145)", "rgb(192,117,109)", "rgb(178,93,86)", "rgb(152,50,48)", "rgb(150,33,31)"]);

        // tell the series what to use as a colorRange (colorScale)
        series.colorScale(ocs);

        // enable the legend
        chart.legend(true);

        // set the source mode of the legend and add styles
        chart.legend()
        .itemsSourceMode("categories") 
        .position('right')
        .align('top')
        .itemsLayout('vertical')
        .padding(50, 0, 0, 20)
        .paginator(false);

        // Go through the initial data
        for (var i = 0; i < geoData.length; i++) {
            // convert strings to numbers and save them to new variables
            numC = parseInt(geoData[i].cases);
            numD = parseInt(geoData[i].deaths);

            // check if we are in the same country by comparing the geoId
            // if the country is the same, add cases and deaths to the appropriate variables
            if ((geoData[i + 1]) != null && (geoData[i].geoId == geoData[i + 1].geoId)) {
                sumCases = sumCases + numC;
                sumDeaths = sumDeaths + numD;
            }
            else {

            // add last day cases and deaths of the same country
            sumCases = sumCases + numC;
            sumDeaths = sumDeaths + numD;

            // variable to store data that will be used for bubbles
            var bubbleData=[];

            // store only the countries that have at least 1 death
            for (var i=0; i<data.length; i++) {
                if (data[i].size>0){
                    bubbleData.push(data[i]);
                }
            };

            // insert the resulting data in the array using the AnyChart keywords 
            data.push({ id: geoData[i].geoId, value: sumCases, size: sumDeaths, title: geoData[i].countriesAndTerritories })

            // reset the variables to start over
            sumCases = 0;
            sumDeaths = 0;

        }
        };

        // set the maximum size of the bubble
        chart.maxBubbleSize(25);

        // set the minimum size of the bubble
        chart.minBubbleSize(3);



        // create a series for bubbles
        var series_1 = chart.bubble(bubbleData);

        // set colors and stroke of bubbles
        series_1.normal().fill("black", 0.3);
        series_1.hovered().fill("black", 0.1);
        series_1.selected().fill("black", 0.5);
        series_1.normal().stroke("rgb(150,33,31)");
        series_1.hovered().stroke("rgb(150,33,31)", 2);
        series_1.selected().stroke("rgb(150,33,31)", 4);

        // tooltip formatting
        series.tooltip().format("Total Confirmed Cases: {%value}");
        series_1.tooltip().format("Total Deaths: {%size}");

        // set the container id
        chart.container('container');

        // draw the chart
        chart.draw();
    });
});




