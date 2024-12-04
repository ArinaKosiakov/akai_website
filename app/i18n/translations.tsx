import LocalizedStrings from "localized-strings";
import { EN } from "./en";
// import { De } from "./de";
// import { It } from "./it";

const appString = new LocalizedStrings<EN>({
  // add | IT if i want other languages
  // ["it-IT"]: new It(),
  // it: new It(),
  en: new EN(),
  // de: new De(),
});

const availableLangs = ["en" /*, "it"  , "de" */];

var storedLang = localStorage.getItem("selectedLang");

const userLang =
  storedLang || navigator.language || (navigator as any).userLanguage;

let firstToken = (userLang || "").split("-")[0];

if (availableLangs.includes(firstToken)) {
  appString.setLanguage(firstToken);
} else {
  appString.setLanguage("en");
}

//console.log("lang", firstToken);
export var currentLang = firstToken || "en";
export const ls = appString;

export function setAppLang(code: string) {
  currentLang = code;
  ls.setLanguage(code);
}
