"use strict";

const getStor = ({ name }) => localStorage[name];
const addStor = ({ name, string }) => (localStorage[name] = string);
const delStor = ({ name }) => localStorage.removeItem(name);
const delStorAll = () => localStorage.clear();
const getStorAll = () => {
  const exceptions = [
    "IsThisFirstTime_Log_From_LiveServer",
    "key",
    "getItem",
    "setItem",
    "removeItem",
    "clear",
    "length",
  ];
  const Names = [];

  for (let name in localStorage) exceptions.includes(name) || Names.push(name);
  // for (let name in localStorage) !~exceptions.indexOf(name) && Names.push(name);

  return Names;
};
