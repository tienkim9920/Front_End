function fetchHTML(path, selector) {
    fetch(path)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}

fetchHTML('./include/Tra1.html', '.modal1');

document.getElementById('li1').addEventListener('click', () => {
    fetchHTML('./include/Tra1.html', '.modal1');
    document.getElementById('modal1').setAttribute('style', 'animation-name: fadeIn; animation-duration: 1s; animation-timing-function: ease-in-out;');
    document.getElementById('modal2').setAttribute('style', 'opacity: 0; display: none');
    document.getElementById('modal3').setAttribute('style', 'opacity: 0; display: none');
    document.getElementById('modal4').setAttribute('style', 'opacity: 0; display: none');
    document.getElementById('li1').setAttribute('style', 'border-bottom: 1px solid #0C713D; border-top: 1px solid #0C713D; color: #0C713D; animation-name: fadeIn; animation-duration: 0.5s; animation-timing-function: ease-in-out;');
    document.getElementById('li2').setAttribute('style', 'border-bottom: none; border-top: none; color: none;');
    document.getElementById('li3').setAttribute('style', 'border-bottom: none; border-top: none; color: none;');
    document.getElementById('li4').setAttribute('style', 'border-bottom: none; border-top: none; color: none;');
});

document.getElementById('li2').addEventListener('click', () => {
    fetchHTML('./include/Tra2.html', '.modal2');
    document.getElementById('modal2').setAttribute('style', 'display: block; animation-name: fadeIn; animation-duration: 1s; animation-timing-function: ease-in-out;');
    document.getElementById('modal1').setAttribute('style', 'opacity: 0; display: none');
    document.getElementById('modal3').setAttribute('style', 'opacity: 0; display: none');
    document.getElementById('modal4').setAttribute('style', 'opacity: 0; display: none');
    document.getElementById('li2').setAttribute('style', 'border-bottom: 1px solid #0C713D; border-top: 1px solid #0C713D; color: #0C713D; animation-name: fadeIn; animation-duration: 0.5s; animation-timing-function: ease-in-out;');
    document.getElementById('li1').setAttribute('style', 'border-bottom: none; border-top: none; color: #808080;');
    document.getElementById('li3').setAttribute('style', 'border-bottom: none; border-top: none; color: none;');
    document.getElementById('li4').setAttribute('style', 'border-bottom: none; border-top: none; color: none;');
});