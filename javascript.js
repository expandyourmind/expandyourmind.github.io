var quotes = [
	'You fuck me so good, baby. ;)',
	'You are smart as hell.',
	'You can cook!',
	'You listen to me.',
	'You cuddle me when I am sad.',
	'You are warm when I am cold.',
	'You are a great artist.',
	'You Have Gorgeous eyes.',
	'You Have Pretty Hair.',
  'You smell good.',
  'You have a beautiful smile.',
  'You have a fine booty.',
  'You watch Doctor Who with me.',
  'You give great gifts.',
  'You are always thinking of me.',
  'You love me back.',
  'You kiss me with passion.',
  'You are a good mother to our kitties.',
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * 		
(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
