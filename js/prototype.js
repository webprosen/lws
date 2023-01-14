// JavaScript prototype details
{
    let person = {
    };

    person.name = "Jasim";
    person.age = 45;
    person.eat = function (){
        console.log("Person is eating");
    };
    person.sleep = function (){
        console.log("Person is sleeping");
    };

    // person.play();

}

{
    function Person (name, age){

        let person = {
        };

        person.name = name;
        person.age = age;

        person.eat = function (){
            console.log("Person is eating");
        };
        person.sleep = function (){
            console.log("Person is sleeping");
        };

        return person;
    };

    const sakib = Person("Sakib-Al-Hasan", 36);
    const nasir = Person("Nasir Hossain", 31);

    // console.log(sakib);

}

{
    const personMethods = {
        eat(){
            console.log("Person is eating");
        },
        sleep(){
            console.log("Person is sleeping");
        },
        play(){
            console.log("Person is playing");
        }
    }

    function Person (name, age){

        let person = {
        };

        person.name = name;
        person.age = age;
        person.eat = personMethods.eat;
        person.sleep = personMethods.sleep;
        person.play = personMethods.play;

        return person;
    };

    const sakib = Person("Sakib-Al-Hasan", 36);
    const nasir = Person("Nasir Hossain", 31);
    
    // console.log(sakib);

}

{
    const personMethods = {
        eat(){
            console.log("Person is eating");
        },
        sleep(){
            console.log("Person is sleeping");
        },
        play(){
            console.log("Person is playing");
        }
    }

    function Person (name, age){

        let person = Object.create(personMethods);
        person.name = name;
        person.age = age;

        return person;
    };

    const sakib = Person("Sakib-Al-Hasan", 36);

    // console.log(sakib);

}

{
    function Person(name, age){

        let person = Object.create(Person.prototype);
        person.name = name;
        person.age = age;

        return person;
    };

    Person.prototype = {
        eat(){
            console.log("Person is eating");
        },
        sleep(){
            console.log("Person is sleeping");
        },
        play(){
            console.log("Person is playing");
        }
    };

    const sakib = Person("Sakib-Al-Hasan", 36);

    // console.log(sakib);

}


{
    function Person(name, age){

        // let this = Object.create(Person.prototype);

        this.name = name;
        this.age = age;

        // return this;
    };

    Person.prototype = {
        eat(){
            console.log("Person is eating");
        },
        sleep(){
            console.log("Person is sleeping");
        },
        play(){
            console.log("Person is playing");
        }
    };

    // const sakib = Person("Sakib-Al-Hasan", 36);
    const sakib = new Person("Sakib-Al-Hasan", 36);
    sakib.play();
}

{
    class Person{

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        eat(){
            console.log("Person is eating");
        }
        sleep(){
            console.log("Person is sleeping");
        }
        play(){
            console.log("Person is playing");
        }

    }

    const sakib = new Person("Sakib-Al-Hasan", 36);
    sakib.sleep();

}

{
    let person = new Object();
}

// Object.Create Details
{
    const captain = {
        name: "Mashrafe",
        age: 36,
        country: "Bangladesh"
    }

    const player = Object.create(captain);

    // console.log();

}

// Prototype is a property of a function that points to an object
{
    function test(){
    }
    // console.dir(test.prototype);
}

