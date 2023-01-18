// JSON =  JavaScript Object Notation
// API = Application Programming Interface
// AJAX = Asynchronous JavaScript And XML
// XML = Extensible Markup Language
// XHR = Xml Http Request
// GET, POST, PUT, DELETE

{
    const getButton = document.getElementById('get');
    const sendButton = document.getElementById('send');

    const sendRequest = function(method, url) {

        const promise = new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = function () {
                resolve(xhr.response);
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

    getButton.addEventListener("click", getData);
    
}