const answersList=document.querySelectorAll("ol.answers li");

answersList.forEach(li=>li.addEventListener("click",checkClickedAnswer))


const  correctAnswers = {
   question10:"B",

   question20:"B",

   question30:"D",

   question40:"A",

   question50:"C",
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
