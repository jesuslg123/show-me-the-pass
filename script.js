console.log("hi!")

initialize()

function initialize() {
	var inputs = document.getElementsByTagName('input')
	for (i = 0; i < inputs.length; i ++) {
		var input = inputs[i]
		var type = input.getAttribute("type")
		if (type == 'password') {
			processInput(input)
		}
	}

}


function processInput (element) {
	var parent = element.parentElement

	var button = document.createElement("Button")
	button.textContent = "S/H"
	button.type = "button"
	button.onclick = function(e) {
		var type = element.getAttribute("type")
		if (type == "text") {
			type = "password"
		} else {
			type = "text"
		}
		element.setAttribute("type", type)
	}
	customizeButton(button, element)
	parent.appendChild(button)
}


function customizeButton(button, element) {
	var rect = element.getBoundingClientRect()
	console.log(rect)
	button.style.position = 'absolute'
	button.style.bottom = rect.bottom + 'px'
	button.style.left = rect.width + 'px'
	button.style.height = rect.height + 'px'
}
