"use strict";

// const Get = (el, pa = document) => pa.querySelector(el);
// const GetAll = (el, pa = document) => pa.querySelectorAll(el);
// const Add = (el, co) => co.appendChild(el);
// const TogClass = (el, val) => el.classList.toggle(val);
// const Eve = (el, fu, ev = "click") => el.addEventListener(ev, fu, false);
// const Create = (el = "div") => document.createElement(el);

const GetPa = (el, int = 1) => {
	let Pa = el.parentElement;
	for (; int > 1; int--) Pa = GetPa(Pa);
	return Pa;
};
// Need to switch local sesion storage
const GetStor = (name) => sessionStorage[name];
const AddStor = (name, string) => (sessionStorage[name] = string);
const DelStor = (name) => sessionStorage.removeItem(name);
const DelStorAll = () => sessionStorage.clear();
const GetStorAll = () => {
	const ns = [];
	const except = [
		"key",
		"getItem",
		"setItem",
		"removeItem",
		"clear",
		"length",
	];

	for (let name in sessionStorage) //
		except.includes(name) || ns.push(name);

	return ns;
};
