// When setTimeout
// Call Stack => Web API => Callback Queue via Even Loop

// Sync
// {
//     var currentTime = new Date().getTime();

//     var processOrder = () => {
//         console.log("Food processing");
//         // while (currentTime + 3000 >= new Date().getTime());
//         console.log("Food processed");
//     }

//     console.log("Order taking");
//     processOrder();
//     console.log("Order delivered");
// }

// Async
// {
//     var currentTime = new Date().getTime();

//     var processOrder = () => {
//         console.log("B");
//         setTimeout(()=>{
//             console.log("E");
//         }, 3000);
//         console.log("C");
//     }

//     console.log("A");
//     processOrder();
//     console.log("D");
// }


{
    const takeOrder = (customer) => {
        console.log(`Take order for ${customer}`);
    }

    const processOrder = (customer) => {
        console.log(`Processing order for {$customer}`);

        setTimeout(() => {
            console.log(`Cooking completed for {$customer}`);
            console.log(`Processed order for {$customer}`);
        }, 3000);
    }

    const completeOrder = (customer) => {
        console.log(`Completed order for ${customer}`);
    }


    
}

