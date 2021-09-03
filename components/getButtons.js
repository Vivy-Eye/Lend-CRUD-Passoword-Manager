"use strict";

function getButtons(place = "row", type = "button") {
	const div = document.createElement("div");
	const Eve = (el, fu) => el.addEventListener("click", fu, false);
	const Create = (type) => document.createElement(type);
	const [plus, minus] = [Create(type), Create(type)];

	[plus.classList, minus.classList] = [place + "__i-add", place + "__i-dell"];
	[plus.innerText, minus.innerText] = ["+", "-"];
	Eve(plus, addTableEl);
	Eve(minus, dellTableEl);

	div.classList = place + "__buttons";
	[plus, minus].map((el) => div.appendChild(el));

	return div;
}
