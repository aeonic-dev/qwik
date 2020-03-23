// qwik
// javascript library for "qwiker" implementation of frequently used methods

'use strict';

// MAIN CLASS

class qwik {

  // USER INTERACTION
  static say(s) {
    // simple alert
    alert(s);
  }
  static ask(s,d="") {
    // simple prompt
    return prompt(s,d);
  }

  // DOCUMENT INTERACTION
  static get(s) {
    // querySelector
    return document.querySelector(s);
  }
}

var q = qwik; // shorthand

// SUBTYPES

qwik.w = class {
  // WINDOW INTERACTION
  static getUrl() {
    // get href
    return window.location.href;
  }
  static setUrl(s) {
    // set href, return old
    var x = this.getUrl();
    window.location.href = s;
    return x;
  }
  static getHash() {
    // return url hash or false if none
    if (window.location.hash) {
        return window.location.hash.substr(1);
    }
    return false;
  }
  static getParam(s) {
    // get query paramater or false if not set
    var x = new URLSearchParams(window.location.search);
    if (x.has(s)) {
      return x.get(s);
    }
    return false;
  }
}

qwik.c =  class {
  // CONSOLE INTERACTION
  static log(s) {
    // console log
    console.log(s);
  }
  static dir(s) {
    // console log - json format
    console.dir(s);
  }
  static xml(s){
    // conole log - xml/html format
    console.dirxml(s);
  }
  static warn(s) {
    // console warn
    console.warn(s);
  }
  static error(s) {
    // console error
    console.error(s);
  }
  static clear() {
    // clears console
    console.clear();
  }
  static tStart(s) {
    // starts timing console
    console.time(s);
  }
  static tEnd(s) {
    // ends timing console
    console.timeEnd(s);
  }
  static tLog(s){
    // logs value timer to console
    console.timeLog(s);
  }
  static table(s) {
    // console table
    console.table(s);
  }
  static cStart(s) {
    // starts new console count
    console.count(s);
  }
  static cReset(s) {
    // resets console count of a given label
    console.countReset(s);
  }
  static gStart(s) {
    // starts console group
    console.group(s);
  }
  static gCollapsed(s) {
    // creates console group collapsed
    console.groupCollapsed(s);
  }
  static gEnd(s) {
    // ends console group
    console.groupEnd(s);
  }
  static debug(s) {
    // outputs a message to console with log level "debug"
    console.debug(s);
  }
  static pStart(s){
    // starts browsers profiler
    console.profile(s);
  }
  static pEnd(s){
    //stops profiler
    console.profileEnd();
  }
  static trace(s){
    // outputs stack trace
    console.trace(s);
  }
}

// OVERRIDES

Element.prototype.html = function(s) {
  // set inner html, return old value
  var x = this.innerHTML;
  this.innerHTML = s;
  return x;
}
Element.prototype.setOn = function(s) {
  // set element enabled, return whether it was changed
  var x = this.disabled;
  this.disabled = !s;
  return !s == x;
}
Element.prototype.isOn = function() {
  // set element enabled, return whether it was changed
  return !this.disabled;
}
Element.prototype.on = function(e,s) {
  // add event listener for e with function s
  return this.addEventListener(e,s);
}
Element.prototype.addClass = function(s) {
  // add class to element, return whether it was changed
  var x = this.classList.contains(s);
  this.classList.add(s);
  return !x;
}
Element.prototype.delClass = function(s) {
  // remove class from element, return whether it was changed
  var x = this.classList.contains(s);
  this.classList.remove(s);
  return x;
}
Element.prototype.hasClass = function(s) {
  // check if element has class
  return this.classList.contains(s);
}
