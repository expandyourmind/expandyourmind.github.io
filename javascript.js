var quotes = [
				'You fuck me so good, baby ;)',
				'You are smart as hell.',
				'You can cook!',
				'You listen to me.',
				'You cuddle me when I am sad.',
				'You are warm when I am cold.',
				'You are a great artist',
				'You Have Gorgeous eyes',
				'You Have Pretty Hair',
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * 		
(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}