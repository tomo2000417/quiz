const answersList=document.querySelectorAll("ol.answers li");

answersList.forEach(li=>li.addEventListener("click",checkClickedAnswer))


const  correctAnswers = {
   question1:"D",

   question2:"A",

   question3:"C",

   question4:"B",

   question4:"B",
};


function checkClickedAnswer(event){

    const clickedAnswerElement=event.currentTarget;


    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId=clickedAnswerElement.closest("ol.answers").dataset.id;

    const correctAnswer=correctAnswers[questionId];

 

    let message;
   
    let answerColorCode;
   
if(selectedAnswer===correctAnswer){

message="正解!";
answerColorCode ="";
}else{

    message="残念！不正解。";
    answerColorCode ="#fa8787";
}


    alert(message);

  
    document.querySelector("span#correct-answer").style.color=answerColorCode;
   
    document.querySelector("div#section-correct-answer").style.display="block";
}




