let text2 = "";
let textarea2 = document.getElementById('answer2');
let button2 = document.getElementById("answer2Btn");
console.log("Here in the function2");
button2.addEventListener('click', function getText2() {
    text2 = textarea2.value;
    console.log(text2);
});
