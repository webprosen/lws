// Implicit binding ============================================================
{
    var printName = function(name){
        console.log(name);
    }
    printName("Prosen Biswas");
}

{
    var printPlayerNameFunction = function (obj) {
        obj.printPlayerName = function () {
            console.log(this.name);
        }
    }

    let rajib = {
        name: "Rajib Rakhmit",
        age: 32
    }

    let mehedi = {
        name: "Md. Mehedi Hasan",
        age: 35
    }

    printPlayerNameFunction(mehedi);
    mehedi.printPlayerName();
}

{
    var person = function (name, age, fatherName, fatherAge) {
        return {
            name: name,
            age: age,
            printName: function () {
                console.log(this.name);
            },
            father: {
                name: fatherName,
                age: fatherAge,
                printName: function () {
                    console.log(this.name);
                }
            }

        }
    }

    var prosen = person("Prosen Biswas", 25, "Sanjit Biswas", 60);
    prosen.printName();
    prosen.father.printName();
}



// Explicit binding ============================================================

{
    var printBio = function(v1, v2, v3){
        console.log(`${this.name} is expert in ${v1}, ${v2}, ${v3}`);
    }

    var prosen = {
        name: "Proshenjit Biswas",
        age: 25
    }

    var v1 = "Laravel";
    var v2 = "Shopify";
    var v3 = "Mern";

    printBio.call(prosen, v1, v2, v3);

}

{
    var printBio = function(v1, v2, v3){
        console.log(`${this.name} is expert in ${v1}, ${v2}, ${v3}`);
    }

    var showmik = {
        name: "Showmik Biswas",
        age: 25
    }

    var v1 = "Cricket";
    var v2 = "Football";
    var v3 = "Badminton";

    var v = [v1, v2, v3];

    printBio.apply(showmik, v);

}


{
    var printBio = function(v1, v2, v3){
        console.log(`${this.name} is expert in ${v1}, ${v2}, ${v3}`);
    }

    var john = {
        name: "John Doe",
        age: 25
    }

    var v1 = "TypeScript";
    var v2 = "C#";
    var v3 = "Pythopn";

    var v = [v1, v2, v3];

    var johnDoe = printBio.bind(john, v1, v2, v3);

    johnDoe();

}

// New binding ============================================================
{
    function bikeInfo (bikeName, bikeCc){
        this.bikeName = bikeName;
        this.bikeCc = bikeCc;

        console.log(`${bikeName} is ${bikeCc}cc`);
    }

    var pulsar = new bikeInfo("Pulsar", 200);
}


// Window binding ============================================================
{
    function printName(){
        console.log(this); // window === this
    }

    let sakib = {
        name: "Sakib Amin",
        age: 65
    }

    printName();
}