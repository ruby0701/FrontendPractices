let text6 = "";
let textarea6 = document.getElementById('answer6');
let button6 = document.getElementById("answer6Btn");
console.log("Here in the function6");
button6.addEventListener('click', function getText6() {
    text6 = textarea6.value;
    console.log(text6);
});
