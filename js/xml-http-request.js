// JSON =  JavaScript Object Notation
// API = Application Programming Interface
// AJAX = Asynchronous JavaScript And XML
// XML = Extensible Markup Language
// XHR = Xml Http Request

{
    const getButton = document.getElementById('get');
    const sendButton = document.getElementById('send');

    const getData = function() {
        const xhr = new XMLHttpRequest();
        // GET, POST, PUT, DELETE
        xhr.open("get", "https://ipinfo.io/json");
        xhr.send();
        xhr.onload = function () {
            var result = xhr.response;
            result = JSON.parse(result);
            document.getElementById('demo').innerHTML = result.city;
        }

    }

    const sendData = function() {

    }

    getButton.addEventListener("click", getData);
    sendButton.addEventListener("click", sendData);

}

const fetchData = () => {
    fetch('https://ipinfo.io/json')
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
    })
}

fetchData();

