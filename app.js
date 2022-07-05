/*
If you have ideas on improving the code, feel free to do so, by either
introducing a new way to handle functions, renaming or simply commenting
alongside variables to help understand what the code is doing. 
New features are welcomed.
*/

import { contributorsInformation } from "./modules/data/contributorsInformation.mjs";
import { greetingsList } from "./modules/data/greetingsList.mjs";

const greetingsTitle = document.getElementById("title");
const travelButton = document.getElementById("travel-button");
const contributorContainer = document.getElementById("contributor-container")

let greetingsIndex = 0

// used for fetching said contributors name, github and links 
let contributorIndex;

function generateRandomNumber(reference) {
	return	Math.floor(Math.random() * reference.length);
}

function startProgram(){
	// reset parent container
	contributorContainer.replaceChildren('') 
	contributorIndex = chooseRandomContributor(contributorsInformation);
	greetingsTitle.innerHTML= loopThroughGreetings(greetingsList)
	travelButton.href = getRandomLinkFromContributor(contributorsInformation)
	contributorContainer.appendChild(getContributorsNameAndGithub(contributorsInformation))
}

// generates an index for a contributor in the list
function chooseRandomContributor(list){
	const randomContributor = generateRandomNumber(list);
	return randomContributor
}

function getRandomLinkFromContributor(list){
	const contributorsLinks = list[contributorIndex].links;
	const randomLink = contributorsLinks[generateRandomNumber(contributorsLinks)];
	
	return randomLink;
}

function loopThroughGreetings(list){
	const greeting = list[greetingsIndex]
	greetingsIndex++
	if (greetingsIndex >= list.length) greetingsIndex = 0
	return greeting
}

/*
fetches contributor's details and creates a button the leads 
to their github account. depends on contributorIndex
*/
function getContributorsNameAndGithub(list){
	const container = document.createElement('div')
	const aTag = document.createElement('a')
	const pTag = document.createElement('p')
	const name = list[contributorIndex].name
	const github = list[contributorIndex].github
	const message = 'contributor - '

	container.style.display = 'flex'
	
	aTag.append(name)	
	aTag.href = github
	pTag.append(message)
	container.appendChild(pTag)
	container.appendChild(aTag)
	return container
}

setInterval(startProgram, 2000)