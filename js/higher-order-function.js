//  Higher order function
// Take function as a parameter or Return something or Both
{
    function myFunction() {
        return function() {
            console.log("Higher order function");
        }
    }
    // myFunction()();
}

// Example 1 without higher order function
{
    var numbers = [2, 4, 6, 8, 10];

    var result = [];

    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);
    }
    // console.log(result);
}

// Example 1 with higher order function
{
    var numbers = [2, 4, 6, 8, 10];
    var result = numbers.map(function(item) {
        return item * 2;
    });
    // console.log(result);
}
    // Short syntax
{
    var numbers = [2, 4, 6, 8, 10];
    var result = numbers.map((item)=>item * 2);
    // console.log(result);
}

// Example 2 without higher order function

{
    var players = [
        {
            name: "Sakib",
            avg: 55.90
        },
        {
            name: "Tamim",
            avg: 50.15
        },
        {
            name: "Nasir",
            avg: 34.12
        },
        {
            name: "Liton",
            avg: 23.50
        },
        {
            name: "Mashrafe",
            avg: 10.12
        }
    ];

    var topAvg = [];

    for(let i = 0; i < players.length; i++) {
        if(players[i].avg > 50) {
            topAvg.push(players[i]);
        }
    }

    // console.log(players);
}

// Example 2 with higher order function
{
    var players = [
        {
            name: "Sakib",
            avg: 55.90
        },
        {
            name: "Tamim",
            avg: 50.15
        },
        {
            name: "Nasis",
            avg: 34.12
        },
        {
            name: "Liton",
            avg: 23.50
        },
        {
            name: "Mashrafe",
            avg: 10.12
        }
    ];

    var topAvg = players.filter((player) => player.avg >= 50 );

    // console.log(topAvg);
}

// Self practice
{
    const cricket = [
        {
            name: "Sakib",
            avg: 55.90
        },
        {
            name: "Tamim",
            avg: 50.15
        },
        {
            name: "Nasis",
            avg: 34.12
        },
        {
            name: "Liton",
            avg: 23.50
        },
        {
            name: "Mashrafe",
            avg: 10.12
        }
    ];

    const football = [
        {
            name: "Sakib",
            avg: 55.90
        },
        {
            name: "Tamim",
            avg: 50.15
        },
        {
            name: "Nasis",
            avg: 34.12
        },
        {
            name: "Liton",
            avg: 23.50
        },
        {
            name: "Mashrafe",
            avg: 10.12
        }
    ];


    const allPlayers = cricket.concat(football);

    // console.log(allPlayers);

}

// Custom higher order function making...