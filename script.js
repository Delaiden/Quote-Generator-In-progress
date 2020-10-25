// let apiQuotes = [];

// show new quote
function newQuote(){
    //vyber si random quote z apiquotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

//get Quote from api

/* async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error Here      
    }
} */

// On load
//getQuote();
newQuote();
