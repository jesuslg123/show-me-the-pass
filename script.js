initialize()

function initialize() {
	var inputs = document.querySelectorAll('input[type="password"]')
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
	var button = createButton(element)
	box = createPasswordBox()
	element.after(box)
	box.appendChild(element)
	element.after(button)
}
	
function createButton(element) {
	var button = document.createElement("Button")
	var element_style = window.getComputedStyle(element)
	IMG_LOCK = '<img style="height:100%" src="'+getUrlForBrowser('icons/lock.png')+'">'
        IMG_UNLOCK = '<img style="height:100%" src="'+getUrlForBrowser('icons/unlock.png')+'">'
	console.log(element_style.paddingTop)

	try {
		button.innerHTML = IMG_UNLOCK
	} catch (error) {
		button.innerHTML = 'U'
		console.log(error)
	}
	
	button.type = 'button'
	button.style.background = 'transparent'
	button.style.height = '100%'
	button.style.marginLeft = '-40px'
	button.style.marginTop = element_style.marginTop
	button.style.border = 'none'
	button.onclick = function (e) {
		var type = element.getAttribute("type")
		if (type == "text") {
			type = "password"
			try {
				button.innerHTML = IMG_UNLOCK
			} catch (error) {
				button.innerHTML = 'U'
				console.log(error)
			}
		} else {
			type = "text"
			try {
				button.innerHTML = IMG_LOCK
			} catch (error) {
				button.innerHTML = 'U'
				console.log(error)
			}
		}
		element.setAttribute("type", type)
	}
	return button
}

function createPasswordBox(){
	var box = document.createElement('div')
	box.style.display = 'flex'
	return box
}
