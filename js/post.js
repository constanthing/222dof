const headings = document.querySelectorAll(":is(h2, h3, h4, h5, h6)");

const postNavigation = document.querySelector("#post-navigation");

function getNumber(tag) {
	// tag = element
	tag = tag.tagName;
	return parseInt(tag.slice(1))
}

function createLi(element) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.innerText = element.innerText;
	a.classList.add("clickable")
    // target respective heading
    a.setAttribute("href", `#h${headingIndex}`)
	li.appendChild(a)

    headingIndex += 1;

	return li;
}
function createUl(element) {
	const ul = document.createElement("ul");
	ul.appendChild(element)
	return ul;
}

let previousElement = null;
let previous = null;
let headingIndex = 0;

for (const heading of headings) {
    heading.setAttribute("id", `h${headingIndex}`)

	const headingElement = createLi(heading);

	if (previous == null) {
		previous = heading;
		postNavigation.appendChild(headingElement)
		previousElement = headingElement;
		continue;
	}

	const headingNumber = getNumber(heading);
	const previousNumber = getNumber(previous);

	if (headingNumber > previousNumber) {
		previousElement.appendChild(createUl(headingElement))
	} else if (headingNumber < previousNumber) {
		let parent = previousElement.parentElement;
		const diff = previousNumber - headingNumber;
		for (let i = 0; i < diff; i++) {
			parent = parent.parentElement;
		}
		parent.appendChild(headingElement)
	} else if (headingNumber == previousNumber) {
		previousElement.after(headingElement)
	}
	previous = heading;
	previousElement = headingElement;
}