// =======================================
// QuoteVerse
// =======================================

// Elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const categoryText = document.getElementById("category");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const darkBtn = document.getElementById("darkBtn");

// History
let history = [];
let historyPosition = -1;

// ===============================
// Display Quote
// ===============================

function displayQuote(index) {

    const quote = quotes[index];

    quoteText.classList.add("fade");

    setTimeout(() => {

        quoteText.textContent = `"${quote.text}"`;
        authorText.textContent = `— ${quote.author}`;
        categoryText.textContent = quote.category;

        quoteText.classList.remove("fade");

    }, 250);

    localStorage.setItem("lastQuoteIndex", index);

    updateButtons();

}

// ===============================
// Enable / Disable Buttons
// ===============================

function updateButtons() {

    prevBtn.disabled = historyPosition <= 0;

    nextBtn.disabled = historyPosition >= history.length - 1;

}

// ===============================
// Random Quote
// ===============================

function generateQuote() {

    let randomIndex;

    do {

        randomIndex = Math.floor(Math.random() * quotes.length);

    } while (
        history.length > 0 &&
        randomIndex === history[history.length - 1]
    );

    // Remove forward history

    history = history.slice(0, historyPosition + 1);

    history.push(randomIndex);

    historyPosition = history.length - 1;

    displayQuote(randomIndex);

}

// ===============================
// Previous
// ===============================

function previousQuote() {

    if (historyPosition > 0) {

        historyPosition--;

        displayQuote(history[historyPosition]);

    }

}

// ===============================
// Next
// ===============================

function nextQuote() {

    if (historyPosition < history.length - 1) {

        historyPosition++;

        displayQuote(history[historyPosition]);

    }

}

// ===============================
// Copy
// ===============================

function copyQuote() {

    const text =
`${quoteText.textContent}

${authorText.textContent}`;

    navigator.clipboard.writeText(text);

    copyBtn.textContent = "Copied";

    setTimeout(() => {

        copyBtn.textContent = "Copy";

    }, 1500);

}

// ===============================
// Share
// ===============================

function shareQuote() {

    const text =
`${quoteText.textContent}

${authorText.textContent}`;

    if (navigator.share) {

        navigator.share({

            title: "QuoteVerse",

            text

        });

    } else {

        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
        );

    }

}

// ===============================
// Dark Mode
// ===============================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );

}

// ===============================
// Load
// ===============================

window.onload = () => {

    if (localStorage.getItem("darkMode") === "true") {

        document.body.classList.add("dark");

    }

    // Start with one random quote

    generateQuote();

};

// ===============================
// Events
// ===============================

newQuoteBtn.onclick = generateQuote;

prevBtn.onclick = previousQuote;

nextBtn.onclick = nextQuote;

copyBtn.onclick = copyQuote;

shareBtn.onclick = shareQuote;

darkBtn.onclick = toggleDarkMode;