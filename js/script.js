
/*-------------------------------- Variables --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
 const startBtn = document.querySelector('.start-button');
 const body = document.querySelector('body');
 const questionsContainer = document.querySelector('.questions-container');
//  console.log(startBtn);
//  console.log(body)

/*-------------------------------- Functions --------------------------------*/
    const start = () => {
        console.log('start')
       let startcont = document.querySelector('.start-container');
      
       startcont.hidden = true ;
       questionsContainer.hidden = false ;
    }


/*----------------------------- Event Listeners -----------------------------*/

 startBtn.addEventListener('click' ,start ); 