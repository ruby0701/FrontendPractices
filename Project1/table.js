let text4 = "";
let textarea4 = document.getElementById('answer4');
let button4 = document.getElementById("answer4Btn");
console.log("Here in the function4");
button4.addEventListener('click', function getText4() {
    text4 = textarea4.value;
    console.log(text4);
});
