{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    // console.log(fruits);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    // console.log(fruits);
}

{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(
        function(a, b){
            return a - b
        }
    );

    // console.log(points);

}

{
    const points = [40, 100, 40, 5, 25, 10];
    points.sort(
        function(a, b){
            return b - a
        }
    );

    // console.log(points);

}

{
    const points = [40, 100, 455];
    points.sort(function(){
        return 0.5 - Math.random()
    });

    // console.log(Math.random());
}

{
    const points = [40, 100, 40, 5, 25, 10];
    points.sort(
        function(a, b){
            return a - b
        }
    );
    console.log(points);

    let lowest = points[0];
    let highest = points[points.length - 1];

    console.log(lowest +"/"+ highest);

}