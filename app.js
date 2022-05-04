const title = document.getElementById("title");
const travelButton = document.getElementById("travel-button");

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
	"https://www.destinationosoyoos.com/spotted-lake/",
	"https://www.hillwalktours.com/walking-hiking-blog/the-giants-causeway-in-10-amazing-facts/",
];

const getRandomUrl = () => {
  return Math.floor(Math.random() * linksOfPlaces.length);
}

let index = 0;

const loopThroughGreetings = () => {
	title.innerHTML = greetings[index];
  index += 1;
  if (index >= greetings.length) {
      index = 0 
  }
	changeButtonUrl();
};

const changeButtonUrl = () => {
  travelButton.href = linksOfPlaces[getRandomUrl()];
}

const interval = setInterval(loopThroughGreetings, 2000);

interval;
