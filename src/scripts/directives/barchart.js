miniApp.directive('barchart', function(){
    function link(scope, element, attr){
        var height = 100;
        var color = attr.color;
        var chartorder = attr.chartorder;
        var svg = d3.select(element[0]).append(chartorder).append('svg').attr('width', 500).attr('height', height);
        var rect = svg.selectAll('rect');
        
        scope.$watch('data', function(data){
            if(!data){ return; }
            d3.select(chartorder).remove();
            var svg = d3.select(element[0]).append(chartorder).append('svg').attr('width', 500).attr('height', height);
            var rect = svg.selectAll('rect');
            var max = d3.max(data);
            // scale factor
            var scale = height / max;
            var scaled_data =
                data.map(function(d){
                return d * scale;
            });
            rect = rect.data(scaled_data);
            rect.exit().remove();
            rect.enter().append('rect')
            .on("click", function(d) {
                console.log(d);
            })
            .style('fill',color)
            .attr({
                width: 40,
                height: function(d){ if (d >= 0){ return d;} else {return 0;} },
                x: function(d, i){ return i * 50 },
                // y pixels count down
                y: function(d){ if (height - d >=0){return height - d;} else {return 0;}}
            });
        }, true);
    }
 
    return{
        link: link,
        restrict: 'E',
        scope: { data: '=', color: '&' }
    };
});