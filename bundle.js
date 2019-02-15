/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToDoActionBar.js":
/*!**************************!*\
  !*** ./ToDoActionBar.js ***!
  \**************************/
/*! exports provided: ToDoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoActionBar\", function() { return ToDoActionBar; });\nfunction ToDoActionBar(descriptionToBeAdded, timeStamp) {\n        this.toDoText=descriptionToBeAdded;\n        this.toDoId=timeStamp;\n        this.toDoStatus=false;\n        this.toDoChecked=false;\n    }\n\n    ToDoActionBar.prototype.init=function(toDoManager) {\n        var that = this;\n        document.getElementById(\"add_button\").addEventListener('click', function() {\n            that.addToDoItem(toDoManager);\n        });\n        document.getElementById(\"delete_all\").addEventListener('click', function() {\n            that.deleteAllItems(toDoManager);\n        });\n        document.getElementById(\"delete_selected_button\").addEventListener('click', function() {\n            that.deleteSelected(toDoManager);\n        });\n    }\n\n    ToDoActionBar.prototype.addToDoItem=function(toDoManager) {\n        var date = new Date();\n        var timeStamp = date.getTime();\n        var textEntered = document.getElementById(\"textbox\");\n        var descriptionToBeAdded = textEntered.value;\n        if(!descriptionToBeAdded) {\n             var textFromPrompt = prompt(\"enter something\", \" \");\n             descriptionToBeAdded = textFromPrompt;\n        }\n        var toDoElement = new ToDoActionBar(descriptionToBeAdded, timeStamp);\n        toDoManager.toDoListArray[timeStamp] = toDoElement;\n        textEntered.value = \"\";\n        toDoManager.render();\n    } \n\n   ToDoActionBar.prototype.deleteAllItems=function(toDoManager) {\n        for(var toDoItemTimeStamp in toDoManager.toDoListArray) {\n           delete toDoManager.toDoListArray[toDoItemTimeStamp];\n        }   \n        toDoManager.render();\n    }\n\n    ToDoActionBar.prototype.deleteSelected=function(toDoManager) {\n        for(var toDoItemTimeStamp in toDoManager.toDoListArray) {\n            var selectedParentElement = document.querySelector(`[toDoId=\"${toDoItemTimeStamp}\"]`);\n            if(selectedParentElement.querySelector('[data-type=\"check\"]').checked) {\n                delete toDoManager.toDoListArray[toDoItemTimeStamp];   \n            }\n        }\n        toDoManager.render();\n    }\n\n\n\n//# sourceURL=webpack:///./ToDoActionBar.js?");

/***/ }),

/***/ "./ToDoItem.js":
/*!*********************!*\
  !*** ./ToDoItem.js ***!
  \*********************/
/*! exports provided: ToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoItem\", function() { return ToDoItem; });\n    function ToDoItem() {\n    }\n\n   ToDoItem.prototype.init = function(toDoManager) {\n        var that = this;\n        document.getElementById(\"bottom_div\").addEventListener('click', function(){\n            that.listHandler(toDoManager, event);\n        });\n    }\n\n    ToDoItem.prototype.createFragment = function(timeStamp,descriptionToBeAdded) {\n        var item = document.querySelector(\".inner_div\");\n        var clone = item.cloneNode(true);\n        clone.querySelector('[data-list=\"list\"]').textContent = descriptionToBeAdded;\n        clone.setAttribute(\"toDoId\", timeStamp);\n        clone.removeAttribute(\"id\");\n        clone.classList.remove(\"inner_div\");\n        clone.classList.add(\"div_list\");\n        return clone;\n    }\n\n    ToDoItem.prototype.listHandler = function(toDoManager, event) {\n            if(event.target !== event.currentTarget) {\n                var targetElement=event.target;\n                var toDoItemId = (function(targetElement){\n                    while(true) {\n                    if(targetElement.getAttribute(\"data-type\") !== \"list_div\") {\n                       targetElement=targetElement.parentElement;\n                    }\n                    else {\n                       break;\n                    }\n                    }\n                    return targetElement.getAttribute(\"toDoId\");\n                })(targetElement);\n                switch(event.target.getAttribute(\"data-type\")) {\n                    case \"done\":\n                        switch(toDoManager.toDoListArray[toDoItemId].toDoStatus) {\n                            case false: \n                                toDoManager.toDoListArray[toDoItemId].toDoStatus = true;\n                                 break;\n                            case true:\n                                toDoManager.toDoListArray[toDoItemId].toDoStatus = false;\n                                break;\n                        }\n                    break;\n                    case \"delete\":\n                        delete toDoManager.toDoListArray[toDoItemId];\n                    break;\n                    case \"update\":\n                        var updateFromPrompt = prompt(\"enter to update\",\" \");\n                        toDoManager.toDoListArray[toDoItemId].toDoText+=updateFromPrompt;\n                    break;\n                    case \"check\":\n                    switch(toDoManager.toDoListArray[toDoItemId].toDoChecked){\n                        case false:\n                        toDoManager.toDoListArray[toDoItemId].toDoChecked=true;\n                        break;\n                        case true:\n                        toDoManager.toDoListArray[toDoItemId].toDoChecked=false;\n                        break;\n                    }\n                        break;\n                    \n                    default: break;\n                }\n                toDoManager.render();\n            }\n        event.stopPropagation();\n    }\n\n    \n\n//# sourceURL=webpack:///./ToDoItem.js?");

/***/ }),

/***/ "./ToDoManger.js":
/*!***********************!*\
  !*** ./ToDoManger.js ***!
  \***********************/
/*! exports provided: ToDoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoManager\", function() { return ToDoManager; });\n/* harmony import */ var _ToDoActionBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoActionBar */ \"./ToDoActionBar.js\");\n/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoItem */ \"./ToDoItem.js\");\n\n\n\nfunction ToDoManager() {\n        this.toDoListArray = { };\n    }\n\n   ToDoManager.prototype.init=function() {\n        const toDoActionBar = new _ToDoActionBar__WEBPACK_IMPORTED_MODULE_0__[\"ToDoActionBar\"]();\n        toDoActionBar.init(this);\n        const toDoItem = new _ToDoItem__WEBPACK_IMPORTED_MODULE_1__[\"ToDoItem\"]();\n        toDoItem.init(this);\n    }\n\n    ToDoManager.prototype.render=function() {\n        var toDoContainer = document.getElementById(\"bottom_div\");\n        toDoContainer.innerHTML = \"\";\n        for(var timeStamp in this.toDoListArray) {\n            const toDoItem = new _ToDoItem__WEBPACK_IMPORTED_MODULE_1__[\"ToDoItem\"]();\n            var descriptionToBeAdded = this.toDoListArray[timeStamp].toDoText;\n            var clone=toDoItem.createFragment(timeStamp,descriptionToBeAdded);\n            document.querySelector(\".bottom\").appendChild(clone);\n\n            var selectedElement = clone.querySelector('[data-list=\"list\"]');\n            if(this.toDoListArray[timeStamp].toDoStatus) {\n                selectedElement.classList.remove('list');\n                selectedElement.classList.add('list_changed'); \n            }\n            else {\n                selectedElement.classList.remove('list_changed'); \n                selectedElement.classList.add('list');  \n            }\n            if(this.toDoListArray[timeStamp].toDoChecked){\n               var selectedCheckBox=clone.querySelector('[data-type=\"check\"]');\n               selectedCheckBox.setAttribute(\"checked\",\"checked\");\n            }\n        }\n    }\n\n\n\n//# sourceURL=webpack:///./ToDoManger.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoManger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoManger */ \"./ToDoManger.js\");\n\n(function() {\n    const toDoManager = new _ToDoManger__WEBPACK_IMPORTED_MODULE_0__[\"ToDoManager\"]();\n    toDoManager.init();\n })();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });