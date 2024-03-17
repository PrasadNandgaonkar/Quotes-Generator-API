const api_url="https://api.quotable.io/random";
const quote = document.getElementById('quote')
const author = document.getElementById('author')

async function getQuote(){
    const response = await fetch(api_url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
window.onload = getQuote(api_url);

async function speak() {
    const speechText = quote.textContent + " by " + author.textContent;
    
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(speechText);
    
    // Speak the text
    speechSynthesis.speak(utterance);
}


function tweet() {
    const tweetText = encodeURIComponent(quote.innerHTML + " ---- by " + author.innerHTML);
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + tweetText;
    window.open(tweetUrl, "Tweet Window", "width=600, height=300");
}



