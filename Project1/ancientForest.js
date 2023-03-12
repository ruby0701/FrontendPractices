//get value from answer1
let text1 = "";
let textarea1 = document.getElementById('answer1');
let button1 = document.getElementById("answer1Btn");
console.log("Here in the function1");
button1.addEventListener('click', function getText1() {
    text1 = textarea1.value;
    console.log(text1);
});


const _text1 = text1;
export { _text1 as text1 };