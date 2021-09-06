"use strict";

// const Get = (el, pa = document) => pa.querySelector(el);
// const GetAll = (el, pa = document) => pa.querySelectorAll(el);
// const Add = (el, co) => co.appendChild(el);
// const TogClass = (el, val) => el.classList.toggle(val);
// const Eve = (el, fu, ev = "click") => el.addEventListener(ev, fu, false);
// const Create = (el = "div") => document.createElement(el);

const getRandomInt = (min = 0, max = 9) => {
	const //
		math = Math.random(),
		mathI = math * (max - min),
		floor = Math.floor(mathI),
		minMFR = floor + min;
	return minMFR;
};

const GetPa = (el, int = 1) => {
	let Pa = el.parentElement;
	for (; int > 1; int--) Pa = GetPa(Pa);
	return Pa;
};

const GetStor = (name) => localStorage[name];
const AddStor = (name, string) => (localStorage[name] = string);
const DelStor = (name) => localStorage.removeItem(name);
const DelStorAll = () => localStorage.clear();
const GetStorAll = () => {
	const ns = [];
	const except = ["key", "getItem", "setItem", "removeItem", "clear", "length"];

	for (let name in localStorage) //
		except.includes(name) || ns.push(name);

	return ns;
};
