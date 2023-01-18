// JSON =  JavaScript Object Notation
// API = Application Programming Interface
// AJAX = Asynchronous JavaScript And XML
// XML = Extensible Markup Language
// XHR = Xml Http Request
// GET, POST, PUT, DELETE

{
    const getButton = document.getElementById('get');
    const sendButton = document.getElementById('send');

    const sendRequest = function(method, url, data) {
        console.log(data);

        const promise = new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.send();
            xhr.responseType = "json";
            // xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function() {
                if(xhr.status >= 400){
                    reject("This is error");
                    
                }else{
                    resolve(xhr.response);
                }
            };
            xhr.onerror = function() {
                reject("This is error/error");
            };
        });
        
        return promise;
    }

    const getData = function() {
        sendRequest("get", "https://jsonplaceholder.typicode.com/todos/1")
        .then(result => {
            console.log(result);
        });
    }

    const sendData = function() {
        sendRequest("post", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({title: 'foo', body: 'prosen', userId: 1}))
        .then(result => {
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        });
    }

    getButton.addEventListener("click", getData);
    sendButton.addEventListener("click", sendData);
    
}