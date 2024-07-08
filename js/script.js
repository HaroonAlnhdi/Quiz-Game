

/*-------------------------------- Variables --------------------------------*/
let timer 
let score
let countQueston

/*------------------------ Cached Element References ------------------------*/
 const startBtn = document.querySelector('.start-button');
 const body = document.querySelector('body');
 const questionsContainer = document.querySelector('.questions-container');
 const messeageContainer = document.querySelector('.messsage-container')
 const next = document.querySelector('.Next')
 const reset =document.querySelector('.reset')
 
//  console.log(startBtn);
//  console.log(body)

/*-------------------------------- Functions --------------------------------*/
    const start = () => {
        // console.log('start')
       let startcont = document.querySelector('.start-container');
        
       startcont.hidden = true ;
       questionsContainer.hidden = false ;
       messeageContainer.hidden = false
    }


    const showQuestions = () => {
      
      


    }
   

/*----------------------------- Event Listeners -----------------------------*/

 startBtn.addEventListener('click' ,start ); 