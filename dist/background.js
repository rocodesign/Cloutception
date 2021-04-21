/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NAVIGATION_EVENT = void 0;
exports.NAVIGATION_EVENT = 'NAVIGATION_EVENT';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method === 'GET') {
        var url = request.url;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.text())
            .then((response) => sendResponse(response))
            .catch();
        return true;
    }
    if (request.method === 'POST') {
        fetch(request.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: 'result=' + request.data
        })
            .then((response) => response.json())
            .then((response) => sendResponse(response))
            .catch((error) => console.log('Error:', error));
        return true;
    }
});
const handleHistoryEvent = (event) => {
    chrome.tabs.sendMessage(event.tabId, {
        type: constants_1.NAVIGATION_EVENT,
        detail: event.url
    });
};
chrome.webNavigation.onHistoryStateUpdated.addListener(handleHistoryEvent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXJlYWN0LXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tcmVhY3QtdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXJlYWN0LXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvLi9zcmMvYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWEsd0JBQWdCLEdBQUcsa0JBQWtCOzs7Ozs7O1VDQWxEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxpRkFBOEM7QUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZO0lBQzFFLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDNUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUc7UUFDckIsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQzthQUNDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDLEtBQUssRUFBRTtRQUNWLE9BQU8sSUFBSTtLQUNaO0lBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNqQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsK0RBQStEO2dCQUN2RSxjQUFjLEVBQUUsa0RBQWtEO2FBQ25FO1lBQ0QsSUFBSSxFQUFFLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSTtTQUMvQixDQUFDO2FBQ0MsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUk7S0FDWjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQUcsQ0FDekIsS0FBOEQsRUFDOUQsRUFBRTtJQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFDbkMsSUFBSSxFQUFFLDRCQUFnQjtRQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUc7S0FDbEIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fRVZFTlQgPSAnTkFWSUdBVElPTl9FVkVOVCdcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IE5BVklHQVRJT05fRVZFTlQgfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICB2YXIgdXJsID0gcmVxdWVzdC51cmxcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZW5kUmVzcG9uc2UocmVzcG9uc2UpKVxyXG4gICAgICAuY2F0Y2goKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGZldGNoKHJlcXVlc3QudXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgYXBwbGljYXRpb24veG1sLCB0ZXh0L3BsYWluLCB0ZXh0L2h0bWwsICouKicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6ICdyZXN1bHQ9JyArIHJlcXVlc3QuZGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2VuZFJlc3BvbnNlKHJlc3BvbnNlKSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKSlcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgaGFuZGxlSGlzdG9yeUV2ZW50ID0gKFxyXG4gIGV2ZW50OiBjaHJvbWUud2ViTmF2aWdhdGlvbi5XZWJOYXZpZ2F0aW9uRnJhbWVkQ2FsbGJhY2tEZXRhaWxzXHJcbikgPT4ge1xyXG4gIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGV2ZW50LnRhYklkLCB7XHJcbiAgICB0eXBlOiBOQVZJR0FUSU9OX0VWRU5ULFxyXG4gICAgZGV0YWlsOiBldmVudC51cmxcclxuICB9KVxyXG59XHJcblxyXG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkhpc3RvcnlTdGF0ZVVwZGF0ZWQuYWRkTGlzdGVuZXIoaGFuZGxlSGlzdG9yeUV2ZW50KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9