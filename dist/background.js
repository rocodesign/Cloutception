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
    if (event
        .parentFrameId !== -1) {
        return;
    }
    chrome.tabs.sendMessage(event.tabId, {
        type: constants_1.NAVIGATION_EVENT,
        detail: event.url
    });
};
chrome.webNavigation.onHistoryStateUpdated.addListener(handleHistoryEvent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXJlYWN0LXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tcmVhY3QtdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXJlYWN0LXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvLi9zcmMvYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWEsd0JBQWdCLEdBQUcsa0JBQWtCOzs7Ozs7O1VDQWxEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxpRkFBOEM7QUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZO0lBQzFFLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDNUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUc7UUFDckIsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQzthQUNDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25DLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDLEtBQUssRUFBRTtRQUNWLE9BQU8sSUFBSTtLQUNaO0lBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNqQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsK0RBQStEO2dCQUN2RSxjQUFjLEVBQUUsa0RBQWtEO2FBQ25FO1lBQ0QsSUFBSSxFQUFFLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSTtTQUMvQixDQUFDO2FBQ0MsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUk7S0FDWjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQUcsQ0FDekIsS0FBa0UsRUFDbEUsRUFBRTtJQUNGLElBQ0ksS0FBK0U7U0FDOUUsYUFBYSxLQUFLLENBQUMsQ0FBQyxFQUN2QjtRQUNBLE9BQU07S0FDUDtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFDbkMsSUFBSSxFQUFFLDRCQUFnQjtRQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUc7S0FDbEIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fRVZFTlQgPSAnTkFWSUdBVElPTl9FVkVOVCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBOQVZJR0FUSU9OX0VWRU5UIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnR0VUJykge1xuICAgIHZhciB1cmwgPSByZXF1ZXN0LnVybFxuICAgIGZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZW5kUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgZmV0Y2gocmVxdWVzdC51cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCBhcHBsaWNhdGlvbi94bWwsIHRleHQvcGxhaW4sIHRleHQvaHRtbCwgKi4qJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnXG4gICAgICB9LFxuICAgICAgYm9keTogJ3Jlc3VsdD0nICsgcmVxdWVzdC5kYXRhXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZW5kUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59KVxuXG5jb25zdCBoYW5kbGVIaXN0b3J5RXZlbnQgPSAoXG4gIGV2ZW50OiBjaHJvbWUud2ViTmF2aWdhdGlvbi5XZWJOYXZpZ2F0aW9uVHJhbnNpdGlvbkNhbGxiYWNrRGV0YWlsc1xuKSA9PiB7XG4gIGlmIChcbiAgICAoKGV2ZW50IGFzIHVua25vd24pIGFzIGNocm9tZS53ZWJOYXZpZ2F0aW9uLldlYk5hdmlnYXRpb25QYXJlbnRlZENhbGxiYWNrRGV0YWlscylcbiAgICAgIC5wYXJlbnRGcmFtZUlkICE9PSAtMVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGV2ZW50LnRhYklkLCB7XG4gICAgdHlwZTogTkFWSUdBVElPTl9FVkVOVCxcbiAgICBkZXRhaWw6IGV2ZW50LnVybFxuICB9KVxufVxuXG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkhpc3RvcnlTdGF0ZVVwZGF0ZWQuYWRkTGlzdGVuZXIoaGFuZGxlSGlzdG9yeUV2ZW50KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==