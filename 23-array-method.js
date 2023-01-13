window.addEventListener("popstate", function() {
    alert("Back button was pressed!");
});

{
    const fruits = ['mango', 'apple', 'banana', 'coconut', 'lemon'];

    {
        fruits.toString(); // Array value to string
        fruits.join(" * "); // Seperated values with custom character

        fruits.unshift("prosen") // Added item in first position
        fruits.push("rajib"); // Added item in last position

        fruits.shift() // Remove first element of array or Remove lowest index
        fruits.pop(); // Remove last elemnet of array or Remove large index
    }

    delete fruits[1];
    console.log(delete fruits[10]);

    
}


