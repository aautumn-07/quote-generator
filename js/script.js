// =============================
// Select Elements
// =============================

const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const categoryText = document.querySelector("#category");

const newQuoteBtn = document.querySelector("#newQuoteBtn");
const copyBtn = document.querySelector("#copyBtn");
const shareBtn = document.querySelector("#shareBtn");
const darkBtn = document.querySelector("#darkBtn");


// =============================
// Variables
// =============================

let currentIndex = -1;


// =============================
// Generate Quote
// =============================

function generateQuote(){

    let randomIndex;


    do{

        randomIndex =
        Math.floor(Math.random()*quotes.length);

    }
    while(randomIndex === currentIndex);



    currentIndex=randomIndex;


    const quote = quotes[randomIndex];


    quoteText.classList.add("fade");


    setTimeout(()=>{


        quoteText.textContent =
        `"${quote.text}"`;


        authorText.textContent =
        `— ${quote.author}`;


        categoryText.textContent =
        quote.category;


        quoteText.classList.remove("fade");


    },300);



    localStorage.setItem(
        "lastQuote",
        JSON.stringify(quote)
    );

}



// =============================
// Copy Quote
// =============================

function copyQuote(){


const text =
`${quoteText.textContent}
${authorText.textContent}`;



navigator.clipboard.writeText(text);



copyBtn.textContent="Copied ✓";


setTimeout(()=>{

copyBtn.textContent="Copy";

},2000);



}



// =============================
// Share Quote
// =============================

function shareQuote(){


const text =
`${quoteText.textContent}
${authorText.textContent}`;



if(navigator.share){


navigator.share({

title:"QuoteVerse",

text:text

});


}

else{


window.open(
`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
);


}


}



// =============================
// Dark Mode
// =============================


darkBtn.onclick=function(){


document.body.classList.toggle("dark");


localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);


}



// =============================
// Load Saved Settings
// =============================


window.onload=function(){


generateQuote();


if(localStorage.getItem("darkMode")==="true"){

document.body.classList.add("dark");

}


}



// =============================
// Events
// =============================


newQuoteBtn.onclick=generateQuote;

copyBtn.onclick=copyQuote;

shareBtn.onclick=shareQuote;