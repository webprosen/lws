// Promise for avoid callback nested hell

// Real life example using promise (1)
{
    var hasMeeting = false;

    const meeting = new Promise((resolve, reject)=>{
        if(!hasMeeting){
            const meetingDetails = {
                name: "Technical Meeting",
                location: "Google Meet",
                time: "10:00 PM"
            };
            resolve(meetingDetails);
        }else{
            reject(new Error('Meeting already scheduled!'));
        }
    });

    const addToCalender = (meetingDetails) =>{
        const calender = `${meetingDetails.name} has been scheduled ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calender);
    }

    meeting
    .then(addToCalender)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.message);
    });
}

// Real life example using promise (2)
{
    const promise1 = Promise.resolve('Promise 1 resolved');

    const promise2 = new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve('Promise 2 resolved')
        },3000);

    });

    promise1.then((res) => console.log(res));
    promise2.then((res) => console.log(res));

    Promise.all([promise1, promise2]).then((res)=>{
        console.log(res);
    });

    Promise.race([promise1, promise2]).then((res)=>{
        console.log(res);
    });
}
