// JSON =  JavaScript Object Notation
// API = Application Programming Interface
// AJAX = Asynchronous JavaScript And XML
// XML = Extensible Markup Language
// XHR = Xml Http Request
// GET, POST, PUT, DELETE

// GET
{
    const getButton = document.getElementById('get');

    const getData = function() {
        
        const xhr = new XMLHttpRequest();
        
        xhr.open("get", "https://jsonplaceholder.typicode.com/posts/1");
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = function () {
            var result = xhr.response;
            // result = JSON.parse(result);
            console.log(result);
        }

    }

    getButton.addEventListener("click", getData);
}