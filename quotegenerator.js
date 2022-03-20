var quotes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'The way to get started is to quit talking and begin doing. -Walt Disney',
    'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking. -Steve Jobs',
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
    'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough. -Oprah Winfrey',
    'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success. -James Cameron',
    'Life is what happens when you\'re busy making other plans. -John Lennon'
]

function newQuote () {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

window.onload = function (){
    window.setInterval(function (){
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let dateNow = date.toLocaleDateString();


        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;


        document.getElementById("clock").innerHTML =`${hours}:${minutes}:${seconds}-${dateNow}`;

    }, 1000)
}

