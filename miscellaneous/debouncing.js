const element = document.querySelector('#myInput');
let timeout;
element.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        someApi();
    }, 1000);
});

function someApi() {
    console.log('calling api...');
}