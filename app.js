const title = document.getElementById("title");
const travel = document.getElementById("travel-button");

const greetings = [
  "hello",
  "bonjour",
  "hola",
  "olá",
  "guten tag",
  "asalaam alaikum",
  "konnichiwa",
  "anyoung haseyo",
  "Zdravstvuyte",
];

const linksOfPlaces = [
  "https://torresdelpaine.com/en/",
  "https://www.destinationosoyoos.com/spotted-lake/",
  "https://www.hillwalktours.com/walking-hiking-blog/the-giants-causeway-in-10-amazing-facts/",
];

let index = 0;
const random = Math.floor(Math.random() * linksOfPlaces.length);

// Print out whole word
function change() {
  title.innerHTML = greetings[index];
  travel.href = `${linksOfPlaces[random]}`;
  index += 1;
  if (index >= greetings.length) {
    index = 0;
  }
}

const interval = setInterval(change, 3000);

interval;
