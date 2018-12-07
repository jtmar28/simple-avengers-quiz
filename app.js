const question1Form = document.querySelector('#form1');
const question2Form = document.querySelector('#form2');
const question3Form = document.querySelector('#form3');
const question4Form = document.querySelector('#form4');
let correct = 0;

function loadEventListeners(){
    document.querySelector('.question1').addEventListener('click', submitAnswer1);
    document.querySelector('.question2').addEventListener('click', submitAnswer2);
    document.querySelector('.question3').addEventListener('click', submitAnswer3);
    document.querySelector('.question4').addEventListener('click', submitAnswer4);
}

function submitAnswer1(e){
    const answer = document.querySelector('.answer');
    if(answer.checked){
        correct++;
    }
    removeQuestion(question1Form);
    counter();
    e.preventDefault();
}

function submitAnswer2(e){
    const answer = document.querySelector('.answer');
    if(answer.checked){
        correct++;
    }
    removeQuestion(question2Form);
    counter();
    e.preventDefault();
}
function submitAnswer3(e){
    const answer = document.querySelector('.answer');
    if(answer.checked){
        correct++;
    }
    removeQuestion(question3Form);
    counter();
    e.preventDefault();
}
function submitAnswer4(e){
    const answer = document.querySelector('.answer');
    if(answer.checked){
        correct++;
    }
    removeQuestion(question4Form);
    counter();
    e.preventDefault();
}
function removeQuestion(form){
    form.innerHTML = '';
}
function counter(){
    const counter = document.querySelector('.counter');
    counter.innerHTML = correct;
}
loadEventListeners();