{
    cars = ["bmw", "toyota", "volvo"];
}

{
    const districts = ["jessore", "magura", "faridpur", "rajbari", "dhaka", "feni"];

    for(i = 0; i < districts.length; i++ ){
        if(districts[i].length > 4){
            // console.log(districts[i]); // Feni not showing
        }
    }
    // console.log(typeof districts);
}

{
    const device = [
        "light",
        "fan",
        {
            mouse: 500,
            desktop: 20000,
            keyboard: 1000
        },
        function helloWorld() { 
            // console.log("Hello World!");
        }
    ];

    device[3]();
}

{
    let myArray = [
        { name: "John Doe", age: 30 },
        function greet() {
            // console.log("Hello!");
        }
    ];

    myArray[1]();
}

{
    let books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Penguin" },
        { title: "Moby-Dick", author: "Herman Melville", publisher: "Penguin" },
        { title: "Pride and Prejudice", author: "Jane Austen", publisher: "Penguin" },
    ];
    
    // console.log(books instanceof Object);

    function displayBookInfo(book) {
        // console.log(`Title: ${book.title}\nAuthor: ${book.author}\nPublisher: ${book.publisher}\n`);
    }

    books.forEach(displayBookInfo);
}

{
    const fruits = ["mango", "banana", "apple", "lichi", "coconut"];
    const totalItem = fruits.length; //Here value is 5
    const lastItem = fruits[fruits.length - 1]; 
    // console.log(lastItem);
}

{
    const myTeam = ["mehedi", "rajib", "anup", "jalil"];
    let fLen = myTeam.length;

    let text = "<ul>";
    for(let i = 0; i < fLen; i++){
        text += "<li>" + myTeam[i] + "</li>";
    }

    text += "</ul>";
    // document.getElementById("message").innerHTML = text;
}

{
    const coder71 = ["prosen", "rajib", "anup", "jalil", "saima"];

    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }

    let text = "<ul>";
    coder71.forEach(myFunction);
    text += "</ul>";

    // document.getElementById("message").innerHTML = text;
}

{
    const letter = ["a", "b", "c"];
    letter[3] = "Prosen";
    letter.push("rajib");
    letter[letter.length] = "Mehedi";
    letter[10] = "Haha";
}

{
    const myEducation = [];
    myEducation["primary"] = "Jessore Institute Govt. Primary School Jessore";
    myEducation["high"] = "Sammiloni Institution Jessore";
    // console.log(myEducation);
}

{
    // Array or Obeject check
    const number = [1,2,3];
    const person = {name: "prosen"};

    // console.log(person instanceof  Array);
    // console.log(Array.isArray(person));
}