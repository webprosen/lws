// Synchronous behavior
{
    function processOrder() {
        console.log("Processing order for customer 1");

        var currentTime = new Date().getTime();
        while(currentTime + 3000 >= new Date().getTime());

        console.log("Processed order for customer 1");
    }

    console.log("Take order for customer 1");
    processOrder();
    console.log("Completed order for customer 1");
}

// Asynchronous behavior (1)
{
    function processOrder() {

        console.log("Processing order for customer 1");

        setTimeout(()=>{
            console.log("Cooking completed");
        }, 3000);

        console.log("Deliverd order for customer 1");

    }

    console.log("Take order for customer 1");
    processOrder();
    console.log("Completed order for customer 1");
}

// Asynchronous behavior (2)
{
    const takeOrder = function(customer, callback) {
        console.log(`Take order for ${customer}`);
        callback(customer);
    }

    const processOrder = function(customer, callback2) {
        console.log(`Processing order for ${customer}`);

        setTimeout(()=>{
            console.log("Cooking completed");
            console.log(`Processed order for ${customer}`);
        }, 3000);

        callback2(customer);

    }

    const completeOrder = function(customer) {
        console.log(`Completed order for ${customer}`);
    }

    takeOrder("Prosen", (customer)=>{

        processOrder(customer, (customer)=>{

            completeOrder(customer);

        });

    });

    
}

console.log(200);
