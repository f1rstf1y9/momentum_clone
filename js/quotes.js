const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do not love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
  {
    quote: "Who controls the past controls the future.",
    author: "George Orwell",
  },
  {
    quote: "A friend in power is a friend lost.",
    author: "Henry Adams",
  },
  {
    quote: "The hardest work is to go idle.",
    author: "Jewish Proverb",
  },
  {
    quote: "Nothing is more despicable than respect based on fear.",
    author: "Albert Camus",
  },
  {
    quote: "Anything you'er good at contributes to happiness.",
    author: "Bertrand Russell",
  },
];

const quote = document.querySelector("#quote_sen");
const author = document.querySelector("#quote_name > b");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;