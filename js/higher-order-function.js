//  Higher order function
{
    function myFunction(){
        return function(){
            console.log("Higher order function");
        }
    }
    // myFunction()();
}

// Example without higher order function
{
    var numbers = [2, 4, 6, 8, 10];

    var result = [];

    for(let i = 0; i < numbers.length; i++){
        result.push(numbers[i] * 2);
    }
    console.log(result);
}

// Example with higher order function
{
    var numbers = [2, 4, 6, 8, 10];
    var result = numbers.map(function(item){
        return item * 2;
    });
    console.log(result);
}
