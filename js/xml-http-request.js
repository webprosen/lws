// JSON =  JavaScript Object Notation
// API = Application Programming Interface
// AJAX = Asynchronous JavaScript And XML
// XML = Extensible Markup Language
// XHR = Xml Http Request
// GET, POST, PUT, DELETE

{
    const getButton = document.getElementById('get');
    const sendButton = document.getElementById('send');

    const getData = function() {
        
        const xhr = new XMLHttpRequest();
        
        xhr.open("get", "https://jsonplaceholder.typicode.com/posts/1");
        xhr.send();
        xhr.onload = function () {
            var result = xhr.response;
            result = JSON.parse(result);
            console.log(result);
        }

    }

    const sendData = function() {

    }

    getButton.addEventListener("click", getData);
    sendButton.addEventListener("click", sendData);

}