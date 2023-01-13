{
    const fruits = ['mango', 'apple', 'banana', 'coconut', 'lemon'];

    fruits.toString(); // Array value to string
    fruits.join(" * "); // Seperated values with custom character

    fruits.unshift("prosen") // Added item in first position
    fruits.push("rajib"); // Added item in last position

    fruits.shift() // Remove first element of array or Remove lowest index
    fruits.pop(); // Remove last elemnet of array or Remove large index

    delete fruits[0]; // Remove value but keep space

    // console.log(fruits);
}

{
    const vehicles = ['car', 'truck', 'train', 'boat', 'haha'];

    vehicles.splice(2, 2, 'hello', 'world');
    vehicles.splice(0, vehicles.length);
    // console.log(vehicles);

}

{
    const myBoy = ['john', 'doe'];
    const myGirl = ['natasha', 'ria'];
    const myGirlTwo = ['anisha', 'moyna'];
    const myChildren = myBoy.concat(myGirl, myGirlTwo);
    const test = myChildren.concat("haha");

    // console.log(test);
}

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(2, 4);
    console.log(citrus);
}