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
  static getAll(s) {
    // querySelectorAll
    return document.querySelectorAll(s);
  }
  static forAll(s,f) {
    // querySelectorAll.forEach
    document.querySelectorAll(s).forEach(f);
  }
  static eLambda(s) {
    // s is a one-input function
    // returns a lambda that runs s on the event target, to be used in event handlers
    return e => s(e.target);
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
Element.prototype.toggleClass = function(s) {
  return this.hasClass(s) ? this.delClass(s) : this.addClass(s);
}

// CONSOLE

qwik.c =  class {}

qwik.c.log = function() {
  // console log
  return Function.prototype.bind.call(console.log, console);
}();
qwik.c.dir = function() {
  // console log - json format
  return Function.prototype.bind.call(console.dir, console);
}();
qwik.c.xml = function() {
  // console log - xml format
  return Function.prototype.bind.call(console.dirxml, console);
}();
qwik.c.warn = function() {
  // console warn
  return Function.prototype.bind.call(console.warn, console);
}();
qwik.c.err = function() {
  // console error
  return Function.prototype.bind.call(console.error, console);
}();
qwik.c.clear = function() {
  // clears console
  return Function.prototype.bind.call(console.clear, console);
}();
qwik.c.tStart = function() {
  // starts timing console
  return Function.prototype.bind.call(console.time, console);
}();
qwik.c.tEnd = function() {
  // ends timing console
  return Function.prototype.bind.call(console.timeEnd, console);
}();
qwik.c.tLog = function() {
  // logs value of a timer to console
  return Function.prototype.bind.call(console.timeLog, console);
}();
qwik.c.table = function() {
  // console table - better way to represent arrays/json
  return Function.prototype.bind.call(console.table, console);
}();
qwik.c.count = function() {
  // starts a new console count
  return Function.prototype.bind.call(console.count, console);
}();
qwik.c.cReset = function() {
  // resets a console count
  return Function.prototype.bind.call(console.countReset, console);
}();
qwik.c.gStart = function() {
  // starts console group
  return Function.prototype.bind.call(console.group, console);
}();
qwik.c.gCollapsed = function() {
  // starts collapsed console group
  return Function.prototype.bind.call(console.groupCollapsed, console);
}();
qwik.c.gEnd = function() {
  // ends console group
  return Function.prototype.bind.call(console.groupEnd, console);
}();
qwik.c.debug = function() {
  // outputs a message to console with log level "debug"
  return Function.prototype.bind.call(console.debug, console);
}();
qwik.c.pStart = function() {
  // starts browser profiler
  return Function.prototype.bind.call(console.profile, console);
}();
qwik.c.pEnd = function() {
  // ends browser profiler
  return Function.prototype.bind.call(console.profileEnd, console);
}();
qwik.c.trace = function() {
  // outputs stack trace
  return Function.prototype.bind.call(console.trace, console);
}();
qwik.c.assert = function() {
  // if assertion (first param) is false, logs second param as an error
  return Function.prototype.bind.call(console.assert, console);
}();
qwik.c.tStamp = function() {
  // labels time on timer
  return Function.prototype.bind.call(console.timeStamp, console);
}();