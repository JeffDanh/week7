// Callback Exercises

// Function Rewrites

// function add(x, y) {
//     var result = x + y; 
//     return result; 
//  } 
 
//  function subtract(x, y) { 
//     return x - y; 
//  } 
 
//  function greeting(person) { 
//     return 'Hola, ' + person + '!'; 
//  } 
 
//  function product(numbers) { 
//     return numbers.reduce(function(a, b) { 
//        return a * b; 
//     }, 1); 
//  }

function add(x, y, callback){
    var result = x + y;
    callback(result);
}

add(1, 2, function(result){
    console.log(result);
});

function subtract(x, y, callback){
    var result = x - y;
    callback(result);

}
subtract(4, 2, function(result){
    console.log(result);

});

function greeting(person, callback){
    var result = 'Hola, ' + person + '!';
    callback(result);

}
greeting("jeff", function(result){
    console.log(result);
});

function product(numbers, callback){
    var result = numbers.reduce(function(a, b) {
        return a * b;
    }, 1);
    callback(result);
}
product([4, 5], function(result){
    console.log(result);
});


// Function Rewrites with a Delay
function add(x, y, callback){
    setTimeout(function(){
        var result = x + y;
        callback(result);
    }, 1000);   
}

add(1, 2, function(result){
    console.log(result);
});

function subtract(x, y, callback){
    setTimeout(function(){
        var result = x - y;
        callback(result);
    }, 1000);   
}
subtract(4, 2, function(result){
    console.log(result);

});

function greeting(person, callback){
    setTimeout(function(){
        var result = 'Hola, ' + person + '!';
        callback(result);
    }, 1000);
}
greeting("jeff", function(result){
    console.log(result);
});

function product(numbers, callback){
    setTimeout(function(){
        var result = numbers.reduce(function(a, b) {
        return a * b;
        }, 1);
        callback(result);
    }, 1000);
    
}
product([4, 5], function(result){
    console.log(result);
});