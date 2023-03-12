let text7 = "";
let textarea7 = document.getElementById('answer7');
let button7 = document.getElementById("answer7Btn");
console.log("Here in the function7");
button7.addEventListener('click', function getText7() {
    text7 = textarea7.value;
    console.log(text7);
});
