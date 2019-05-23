initialize()

function initialize() {
	let inputs = document.querySelectorAll('input[type="password"]')
	for (let input of inputs) {
		processInput(input)
	}
}

function getUrlForBrowser(url){
	if(typeof(chrome) !== 'undefined')
		return chrome.extension.getURL(url)
	else if (typeof(browser) !== 'undefined')
		return browser.extension.getURL(url)
	else
		throw "Unrecognized browser"
}

function processInput (element) {
	let button = createButton(element)
	box = createPasswordBox()
	element.after(box)
	box.appendChild(element)
	element.after(button)
}
	
function createButton(element) {
	let button = document.createElement("Button")
	let element_style = window.getComputedStyle(element)
	const IMG = (status) => '<img style="margin:auto;vertical-align: middle" src="'+getUrlForBrowser('icons/'+status+'.png')+'">'

	try {
		button.innerHTML = IMG('unlock')
	} catch (error) {
		button.innerHTML = 'U'
		console.log(error)
	}
	
	button.type = 'button'
	button.style.background = 'transparent'
	button.style.margin = element_style.margin
	button.style.padding = element_style.padding
	button.style.marginLeft = '-40px'
	button.style.border = 'none'
	button.onclick = function () {
		let type = element.getAttribute("type")
		if (type == "text") {
			type = "password"
			try {
				button.innerHTML = IMG('unlock')
			} catch (error) {
				button.innerHTML = 'U'
				console.log(error)
			}
		} else {
			type = "text"
			try {
				button.innerHTML = IMG('lock')
			} catch (error) {
				button.innerHTML = 'L'
				console.log(error)
			}
		}
		element.setAttribute("type", type)
	}
	return button
}

function createPasswordBox(){
	let box = document.createElement('div')
	box.style.display = 'flex'
	return box
}
