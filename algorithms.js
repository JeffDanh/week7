// Friday Algorithms and Interview Questions

function zero(arr){
    var pairs = [];
    arr.forEach(function(e){
        for(var i = 0; i < arr.length; i++){
            if(e + arr[i] == 0){
                pairs.push([e, arr[i]]);
                // if(e == pairs[i][0] || e != pairs[i][1]){
                //     pairs.pop();
                // }
            }
        }
    });
    pairs.forEach(function(e, index){
        for(var i = 0; i < pairs.length; i++){
            if(e[1] == pairs[i][0]){
                pairs.splice(index, 1);
                console.log(e);
                console.log(e[0]);
            }
            else if(e[0] == e[1]){
                pairs.splice(index, 1);
                console.log(e);
            }
        }
        
    })
    console.log(pairs);
}

zero([-2, 1, 0, 2]);