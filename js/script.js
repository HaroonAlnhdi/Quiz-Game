const questionsArr = [
   
   
    {
    id: 3,
    question: "What tag is used to create a hyperlink in HTML?",
    answer: "<a>",
    options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
    ]
    },
    {
    id: 4,
    question: "How do you add an image to an HTML document?",
    answer: "<img src='url' alt='description'>",
    options: [
        "<image src='url'>",
        "<img src='url' alt='description'>",
        "<pic src='url'>",
        "<img url='url'>"
    ]
    },
    {
    id: 5,
    question: "What is the difference between <div> and <span> tags?",
    answer: "<div> is a block-level element, <span> is an inline element",
    options: [
        "<div> is an inline element, <span> is a block-level element",
        "<div> is a block-level element, <span> is an inline element",
        "Both are inline elements",
        "Both are block-level elements"
    ]
    },
    {
    id: 6,
    question: "What tag is used for creating a form in HTML?",
    answer: "<form>",
    options: [
        "<form>",
        "<input>",
        "<textarea>",
        "<button>"
    ]
    },
    {
    id: 7,
    question: "Which HTML attribute is used to define inline styles?",
    answer: "style",
    options: [
        "style",
        "class",
        "id",
        "styles"
    ]
    },
    {
    id: 8,
    question: "How do you specify a comment in HTML?",
    answer: "<!-- comment -->",
    options: [
        "<!-- comment -->",
        "// comment",
        "/* comment */",
        "‘ comment ‘"
    ]
    },
    {
    id: 9,
    question: "What is the correct HTML tag for inserting a line break?",
    answer: "<br>",
    options: [
        "<br>",
        "<lb>",
        "<break>",
        "<newline>"
    ]
    },
    {
    id: 10,
    question: "Which tag is used to create a numbered list in HTML?",
    answer: "<ol>",
    options: [
        "<ul>",
        "<ol>",
        "<li>",
        "<dl>"
    ]
    },
    {
    id: 11,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
    ]
    },
    {
    id: 12,
    question: "Which HTML attribute is used to define inline styles?",
    answer: "style",
    options: [
        "style",
        "class",
        "id",
        "styles"
    ]
    },
    {
    id: 13,
    question: "Which property is used to change the background color?",
    answer: "background-color",
    options: [
        "color",
        "background-color",
        "bgcolor",
        "bg-color"
    ]
    },
    {
    id: 14,
    question: "How do you center text in CSS?",
    answer: "text-align: center;",
    options: [
        "text-align: center;",
        "align: center;",
        "text-center: true;",
        "center: true;"
    ]
    },
    {
    id: 15,
    question: "Which property is used to change the font of an element?",
    answer: "font-family",
    options: [
        "font-family",
        "font-weight",
        "font-style",
        "font-text"
    ]
    },
    {
    id: 16,
    question: "How do you add a comment in CSS?",
    answer: "/* comment */",
    options: [
        "/* comment */",
        "// comment",
        "<!-- comment -->",
        "# comment"
    ]
    },
    {
    id: 17,
    question: "Which property is used to change the text color of an element?",
    answer: "color",
    options: [
        "color",
        "text-color",
        "font-color",
        "foreground-color"
    ]
    },
    {
    id: 18,
    question: "Which property is used to change the space between lines of text?",
    answer: "line-height",
    options: [
        "line-height",
        "line-spacing",
        "text-spacing",
        "line-gap"
    ]
    },
    {
    id: 19,
    question: "Which CSS property controls the text size?",
    answer: "font-size",
    options: [
        "font-size",
        "text-size",
        "font-height",
        "text-height"
    ]
    },
    {
    id: 20,
    question: "What is the correct CSS syntax to make all <p> elements bold?",
    answer: "p {font-weight: bold;}",
    options: [
        "p {font-weight: bold;}",
        "p {text-weight: bold;}",
        "p {font: bold;}",
        "p {text: bold;}"
    ]
    },
    {
        
    id: 21,
    question: "What does 'var' stand for in JavaScript?",
    answer: "variable",
    options: [
        "variable",
        "variant",
        "variety",
        "void array"
    ]
    },
    {
    id: 22,
    question: "Which symbol is used for comments in JavaScript?",
    answer: "//",
    options: [
        "//",
        "/* */",
        "<!-- -->",
        "#"
    ]
    },
    {
    id: 23,
    question: "How do you declare a JavaScript variable?",
    answer: "var x;",
    options: [
        "var x;",
        "variable x;",
        "x var;",
        "declare x;"
    ]
    },
    {
    id: 24,
    question: "Which operator is used to assign a value to a variable?",
    answer: "=",
    options: [
        "=",
        "+",
        "-",
        "=="
    ]
    },
    {
    id: 25,
    question: "How do you write a function in JavaScript?",
    answer: "function myFunction() {}",
    options: [
        "function = myFunction() {}",
        "def myFunction() {}",
        "function myFunction() {}",
        "function: myFunction() {}"
    ]
    },
    {
    id: 26,
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: "onclick",
    options: [
        "onclick",
        "onmouseclick",
        "onchange",
        "onmouseover"
    ]
    },
    {
    id: 27,
    question: "How do you find the length of an array in JavaScript?",
    answer: "array.length",
    options: [
        "array.length",
        "array.size",
        "array.count",
        "array.length()"
    ]
    }
];





/*-------------------------------- Variables --------------------------------*/
let timer ;
let finaltime;
let score = 0 ;
let scorePersent = 0;
let wrongAnswers = 0;
let countQueston = 0;
let index = 0

/*------------------------ Cached Element References ------------------------*/
 const startBtn = document.querySelector('.start-button');
 const body = document.querySelector('body');
 const displayQuestion = document.querySelector('.displayQuestion')
 const questionsContainer = document.querySelector('.questions-container');
 const optionsQus = document.querySelector('#optionss')
 const messeageContainer = document.querySelector('.messsage-container')
 const nextBtn = document.querySelector('.Next')
 const resetBtn = document.querySelector('.reset')
 const message = document.querySelector('.messages')
 const timeDisplay = document.getElementById('time');
 const dislayCountQueston = document.querySelector('#correct-score')
 const scorePersentDisplay =document.querySelector('#scorePersent')

//  console.log(startBtn);
//  console.log(body)

/*-------------------------------- Functions --------------------------------*/
    const start = () => {
        // console.log('start')
       let startcont = document.querySelector('.start-container');
        
       startcont.hidden = true ;
       questionsContainer.hidden = false ;
       messeageContainer.hidden = false
       showQuestions(index);
       Timer(1)
    //    checkAnswer();
    }

       
        let counter
    const Timer = (time) => { 
   
        counter = setInterval(timer,1000)
        function timer(){
            timeDisplay.textContent = time
            time ++;
            //to get the last time to used to print -- use (-1) to make the time currect 
            finaltime = time -1
        }
    
    }

    const stopTimer = () => {
      clearInterval(counter); 
       
    };

    const nextQuestion =() =>{
        // console.log('click')
        checkAnswer();
        index++;
          
        if (index < questionsArr.length) {
            dislayCountQueston.innerHTML = 1 + index ; 
            
             return showQuestions(index); 
    }else {
        console.log('End of questions');
        message.innerText = " Complite Questions , Time: " + finaltime + ' Seconds .   Score : '+ score +'  Wrong Answers: ' + wrongAnswers;
        stopTimer() 
        nextBtn.disabled = true;
        
    }
}

    const showQuestions = (index) => {
        // Display questions :
        let que_tag = questionsArr[index].question;
        displayQuestion.innerText = que_tag;

    
        // Clear previous options
        let optionsList = document.getElementById("optionss");
        optionsList.innerHTML = ''; 
        let options = questionsArr[index].options;
    
        // Generate random indices for options
        let randomIndices = Array.from({ length: options.length }, (_, i) => i);
        randomIndices.sort(() => Math.random() - 0.5); 
    
        // Display options
        randomIndices.forEach(idx => {
            let li = document.createElement('li');
            li.textContent = options[idx];
            optionsList.appendChild(li);
        });
       
        selectOption();
        nextBtn.disabled = true;
        
    };
    


    function selectOption() {

       optionsQus.querySelectorAll('li').forEach((option) => {

        option.addEventListener('click' , () => {

        const activeOption = optionsQus.querySelector('.selected')
            if(optionsQus.querySelector('.selected')){
                message.innerText = " Please Select Answer "
                activeOption.classList.remove('selected')
            }
            // console.log('click')
            option.classList.add('selected');
            nextBtn.disabled = false
            
        })
       })
    }
    
    
    const checkAnswer = () => {
        const activeOption = optionsQus.querySelector('.selected');
        if (activeOption) {
            const selectedAnswer = activeOption.textContent;
            const correctAnswer = questionsArr[index].answer;

            if (selectedAnswer === correctAnswer) {
                score++;
                scorePersent = (score/25)*100
                scorePersentDisplay.innerHTML = scorePersent
                message.textContent = "Correct!";
            } else {
                wrongAnswers++;
                message.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
            }
        } else {
            message.textContent = "Please select an option!";
        }
    };

   
    
    const playAgain = () => {
        location.reload();
    };
    
    
   
/*----------------------------- Event Listeners -----------------------------*/

 startBtn.addEventListener('click' ,start ); 
 nextBtn.addEventListener('click'  ,nextQuestion)
 resetBtn.addEventListener('click' , playAgain )














