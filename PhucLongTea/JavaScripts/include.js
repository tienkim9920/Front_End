function fetchHTML(path, selector) {
    fetch(path)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}


fetchHTML('./include/HotLine.html', '.HotLine');
fetchHTML('./include/Footer.html', '.footer');


