const questionsArr = [
    {
    id: 1,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HyperTool Multi Language",
        "HyperText and links Markup Language"
    ]
    },
    {
    id: 2,
    question: "What is the purpose of the <head> tag in HTML?",
    answer: "To contain meta-information about the document",
    options: [
        "To display the main content of the webpage",
        "To contain meta-information about the document",
        "To create headers for sections",
        "To define the body of the document"
    ]
    },
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
let score;
let countQueston = 0;

/*------------------------ Cached Element References ------------------------*/
 const startBtn = document.querySelector('.start-button');
 const body = document.querySelector('body');
 const displayQuestion = document.querySelector('.displayQuestion')
 const questionsContainer = document.querySelector('.questions-container');
 const optionsQus = document.querySelector('#optionss')
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
       showQuestions(0);
    }


    const showQuestions = (index) => {
        let que_tag = questionsArr[index].question;
        displayQuestion.innerText = que_tag;
         
        
        //clear the previos one
        let optionsList = document.getElementById("optionss");
        optionsList.innerHTML = '';
    
        //print the options 
        let option_tag = '<li>' + questionsArr[index].options[0] + '</li>' +
                        '<li>' + questionsArr[index].options[1] + '</li>' +
                        '<li>' + questionsArr[index].options[2] + '</li>' +
                        '<li>' + questionsArr[index].options[3] + '</li>';
    
        optionsList.innerHTML = option_tag;
    }
    
   

/*----------------------------- Event Listeners -----------------------------*/

 startBtn.addEventListener('click' ,start ); 









