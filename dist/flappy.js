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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_game__ = __webpack_require__(8);

// import { PlaneMovement } from './components/PlaneMovement';
// import { SceneManager } from './components/SceneManager';
// import { Sprite, BoundingBox } from 'engine/library/objects';
// import { Vector } from 'engine/library/maths';
// import { Viewport, Canvas, Camera } from 'engine/library/screen';
// import { BoxCollider } from 'engine/library/collisions/colliders';
// import SceneGraph from 'engine/library/SceneGraph';
class FlappyGame extends __WEBPACK_IMPORTED_MODULE_0_engine_game__["a" /* Game */] {
    onStart() {
        // const scene = SceneGraph.instance;
        // const sceneManager = scene.instantiate('sceneManager', {
        //     components: [
        //         SceneManager,
        //     ],
        // });
        // const planeRed = scene.instantiate('plane', {
        //     position: new Vector(50, -50),
        //     // collider: BoxCollider,
        //     sprite: {
        //         assets: [
        //             'assets/images/planeRed1.png',
        //             // 'assets/images/planeRed2.png',
        //             // 'assets/images/planeRed3.png',
        //         ],
        //         bounds: new BoundingBox(
        //             new Vector(50, -50), 
        //             new Vector(50, 50)
        //         ),
        //         // timing: 150,
        //     },
        //     collider: new BoxCollider(
        //         new BoundingBox(
        //             new Vector(50, -50), 
        //             new Vector(50, 50)
        //         ),
        //     ),
        //     components: [
        //         PlaneMovement,
        //     ],
        // });
    }
}
const game = new FlappyGame();
game.initialise();


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// import { bootGameLoop } from 'engine/library/GameLoop';
// import { Camera } from 'engine/library/screen';
// import { Vector } from 'engine/library/maths';
/**
 * Base container for a game. A game should extend this
 * and fill it with game specific logic.
 */
class Game {
    /**
     * Starts the engine game loop and the game's logic
     */
    initialise() {
        // Camera.instance.transform.setPosition(new Vector(0, 0));
        // bootGameLoop(this.onStart);
    }
    /**
     * Logic to run once after the main game loop is started
     */
    onStart() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDczYjVkMjRiMTIzM2U4ZDcyYTciLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RtQztBQUNuQyw4REFBOEQ7QUFDOUQsNERBQTREO0FBRTVELGdFQUFnRTtBQUNoRSxpREFBaUQ7QUFDakQsb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUNyRSxzREFBc0Q7QUFFdEQsZ0JBQWlCLFNBQVEseURBQUk7SUFDekIsT0FBTztRQUNILHFDQUFxQztRQUNyQywyREFBMkQ7UUFDM0Qsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixTQUFTO1FBQ1QsTUFBTTtRQUVOLGdEQUFnRDtRQUNoRCxxQ0FBcUM7UUFDckMsZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsNkNBQTZDO1FBQzdDLGdEQUFnRDtRQUNoRCxnREFBZ0Q7UUFDaEQsYUFBYTtRQUNiLG1DQUFtQztRQUNuQyxvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIsU0FBUztRQUNULGlDQUFpQztRQUNqQywyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQ3BDLGlDQUFpQztRQUNqQyxhQUFhO1FBQ2IsU0FBUztRQUNULG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsU0FBUztRQUNULE1BQU07SUFDVixDQUFDO0NBQ0o7QUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7Ozs7O0FDaERMO0FBRWIsMERBQTBEO0FBQzFELGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFFakQ7OztHQUdHO0FBQ0c7SUFFRjs7T0FFRztJQUNILFVBQVU7UUFDTiwyREFBMkQ7UUFDM0QsOEJBQThCO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sS0FBSSxDQUFDO0NBRWY7QUFBQTtBQUFBIiwiZmlsZSI6ImZsYXBweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3M2I1ZDI0YjEyMzNlOGQ3MmE3IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ2VuZ2luZS9nYW1lJztcbi8vIGltcG9ydCB7IFBsYW5lTW92ZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudCc7XG4vLyBpbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyJztcblxuLy8gaW1wb3J0IHsgU3ByaXRlLCBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuLy8gaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuLy8gaW1wb3J0IHsgVmlld3BvcnQsIENhbnZhcywgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbi8vIGltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMnO1xuLy8gaW1wb3J0IFNjZW5lR3JhcGggZnJvbSAnZW5naW5lL2xpYnJhcnkvU2NlbmVHcmFwaCc7XG5cbmNsYXNzIEZsYXBweUdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBvblN0YXJ0KCkge1xuICAgICAgICAvLyBjb25zdCBzY2VuZSA9IFNjZW5lR3JhcGguaW5zdGFuY2U7XG4gICAgICAgIC8vIGNvbnN0IHNjZW5lTWFuYWdlciA9IHNjZW5lLmluc3RhbnRpYXRlKCdzY2VuZU1hbmFnZXInLCB7XG4gICAgICAgIC8vICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIC8vICAgICAgICAgU2NlbmVNYW5hZ2VyLFxuICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gY29uc3QgcGxhbmVSZWQgPSBzY2VuZS5pbnN0YW50aWF0ZSgncGxhbmUnLCB7XG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogbmV3IFZlY3Rvcig1MCwgLTUwKSxcbiAgICAgICAgLy8gICAgIC8vIGNvbGxpZGVyOiBCb3hDb2xsaWRlcixcbiAgICAgICAgLy8gICAgIHNwcml0ZToge1xuICAgICAgICAvLyAgICAgICAgIGFzc2V0czogW1xuICAgICAgICAvLyAgICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDEucG5nJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQyLnBuZycsXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMy5wbmcnLFxuICAgICAgICAvLyAgICAgICAgIF0sXG4gICAgICAgIC8vICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgIC8vICAgICAgICAgICAgIG5ldyBWZWN0b3IoNTAsIC01MCksIFxuICAgICAgICAvLyAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCA1MClcbiAgICAgICAgLy8gICAgICAgICApLFxuICAgICAgICAvLyAgICAgICAgIC8vIHRpbWluZzogMTUwLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGNvbGxpZGVyOiBuZXcgQm94Q29sbGlkZXIoXG4gICAgICAgIC8vICAgICAgICAgbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAvLyAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCAtNTApLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbmV3IFZlY3Rvcig1MCwgNTApXG4gICAgICAgIC8vICAgICAgICAgKSxcbiAgICAgICAgLy8gICAgICksXG4gICAgICAgIC8vICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIC8vICAgICAgICAgUGxhbmVNb3ZlbWVudCxcbiAgICAgICAgLy8gICAgIF0sXG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9IG5ldyBGbGFwcHlHYW1lKCk7XG5nYW1lLmluaXRpYWxpc2UoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nYW1lcy9mbGFwcHkvZmxhcHB5LnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgeyBib290R2FtZUxvb3AgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9HYW1lTG9vcCc7XG4vLyBpbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuLy8gaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIEJhc2UgY29udGFpbmVyIGZvciBhIGdhbWUuIEEgZ2FtZSBzaG91bGQgZXh0ZW5kIHRoaXNcbiAqIGFuZCBmaWxsIGl0IHdpdGggZ2FtZSBzcGVjaWZpYyBsb2dpYy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBlbmdpbmUgZ2FtZSBsb29wIGFuZCB0aGUgZ2FtZSdzIGxvZ2ljXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgLy8gQ2FtZXJhLmluc3RhbmNlLnRyYW5zZm9ybS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKDAsIDApKTtcbiAgICAgICAgLy8gYm9vdEdhbWVMb29wKHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIG9uY2UgYWZ0ZXIgdGhlIG1haW4gZ2FtZSBsb29wIGlzIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBvblN0YXJ0KCkge31cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9nYW1lLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==