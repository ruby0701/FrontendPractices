let text3 = "";
let textarea3 = document.getElementById('answer3');
let button3 = document.getElementById("answer3Btn");
console.log("Here in the function3");
button3.addEventListener('click', function getText3() {
    text3 = textarea3.value;
    console.log(text3);
});
