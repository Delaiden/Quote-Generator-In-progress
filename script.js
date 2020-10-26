const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function complete (){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// show new quote

function newQuote() {
    loading();
    //vyber si random quote z apiquotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check if Author field is blank and replace it with quote 'Unkown'

    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //Check quote length to determine styling

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //Set Quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}



//get Quote from api

/* async function getQuote() {
    loading();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error Here      
    }
}  */

// Tweet quote - pouzivaj backtick pod escapom ``
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
//getQuote();
newQuote();
