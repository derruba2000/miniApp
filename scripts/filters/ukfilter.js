miniApp.filter('ukfilter', function(){
    return function(data){
        var filtered = [];
        for (var k = 0; k < data.length; k++){
            if ( 'UK' == data[k].country ) filtered.push(data[k]);
        }
        return filtered;
    }
});