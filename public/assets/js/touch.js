/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/touch.js":
/*!*******************************!*\
  !*** ./resources/js/touch.js ***!
  \*******************************/
/***/ (() => {

eval("/* ! touch.js | Huro | Css Ninja 2020-2021 */\n\n/* ==========================================================================\nTouch functions using Hammer.js\n========================================================================== \n\n\"use strict\";\n\n$(document).ready(function () {\n\n    (function (factory) {\n        if (typeof define === 'function' && define.amd) {\n            define(['jquery', 'hammerjs'], factory);\n        } else if (typeof exports === 'object') {\n            factory(require('jquery'), require('hammerjs'));\n        } else {\n            factory(jQuery, Hammer);\n        }\n    }(function ($, Hammer) {\n        function hammerify(el, options) {\n            var $el = $(el);\n            if (!$el.data(\"hammer\")) {\n                $el.data(\"hammer\", new Hammer($el[0], options));\n            }\n        }\n\n        $.fn.hammer = function (options) {\n            return this.each(function () {\n                hammerify(this, options);\n            });\n        };\n\n        // extend the emit method to also trigger jQuery events\n        Hammer.Manager.prototype.emit = (function (originalEmit) {\n            return function (type, data) {\n                originalEmit.call(this, type, data);\n                $(this.element).trigger({\n                    type: type,\n                    gesture: data\n                });\n            };\n        })(Hammer.Manager.prototype.emit);\n    }));\n\n    $('.sidebar-panel li').on('click', function(){\n        if ((window.matchMedia(\"(max-width: 768px)\").matches) && (window.matchMedia(\"(orientation:portrait)\").matches)) {\n            $(this).closest('.sidebar-panel').removeClass('is-active');\n            $('.huro-hamburger .icon-box-toggle').removeClass('active');\n        }\n    })\n\n    if (typeof window.orientation !== 'undefined') {\n\n        $('.sidebar-panel .inner').each(function () {\n            var $this = $(this);\n            var h = new Hammer(this);\n            h.on(\"swipeleft\", function () {\n                console.log(\"Swipe left detected.\");\n                $this.closest('.sidebar-panel').removeClass('is-active');\n                $('.huro-hamburger .icon-box-toggle').removeClass('active');\n            })\n        });\n\n        $('.sidebar-search .inner').each(function () {\n            var $this = $(this);\n            var h = new Hammer(this);\n            h.on(\"swipeleft\", function () {\n                console.log(\"Swipe left detected.\");\n                $this.closest('.sidebar-search').removeClass('is-active');\n                $('.huro-hamburger .icon-box-toggle').removeClass('active');\n            })\n        });\n\n        $('.is-messages #conversations-list').each(function () {\n            var $this = $(this);\n            var h = new Hammer(this);\n            h.on(\"swipeleft\", function () {\n                console.log(\"Swipe left detected.\");\n                $this.closest('.is-messages').removeClass('is-active');\n                $('.huro-hamburger .icon-box-toggle').removeClass('active');\n            })\n        });\n\n        $('.main-sidebar .sidebar-inner, .view-wrapper').each(function () {\n            var $this = $(this);\n            var h = new Hammer(this);\n            h.on(\"swiperight\", function () {\n                console.log(\"Swipe Right detected.\");\n                $('.sidebar-panel').addClass('is-active');\n                $('.huro-hamburger .icon-box-toggle').addClass('active');\n            })\n        });\n\n        $('.conversation-area .conversation').each(function () {\n            var $this = $(this);\n            var h = new Hammer(this);\n            h.on(\"swipeleft\", function () {\n                console.log(\"Swipe left detected.\");\n                $this.closest('.conversation-area').removeClass('is-active');\n            })\n        });\n    }\n\n})*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdG91Y2guanM/MDNmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAhIHRvdWNoLmpzIHwgSHVybyB8IENzcyBOaW5qYSAyMDIwLTIwMjEgKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblRvdWNoIGZ1bmN0aW9ucyB1c2luZyBIYW1tZXIuanNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXG5cInVzZSBzdHJpY3RcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdoYW1tZXJqcyddLCBmYWN0b3J5KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ2hhbW1lcmpzJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFjdG9yeShqUXVlcnksIEhhbW1lcik7XG4gICAgICAgIH1cbiAgICB9KGZ1bmN0aW9uICgkLCBIYW1tZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gaGFtbWVyaWZ5KGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBpZiAoISRlbC5kYXRhKFwiaGFtbWVyXCIpKSB7XG4gICAgICAgICAgICAgICAgJGVsLmRhdGEoXCJoYW1tZXJcIiwgbmV3IEhhbW1lcigkZWxbMF0sIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQuZm4uaGFtbWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhhbW1lcmlmeSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGV4dGVuZCB0aGUgZW1pdCBtZXRob2QgdG8gYWxzbyB0cmlnZ2VyIGpRdWVyeSBldmVudHNcbiAgICAgICAgSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQgPSAoZnVuY3Rpb24gKG9yaWdpbmFsRW1pdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFbWl0LmNhbGwodGhpcywgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBnZXN0dXJlOiBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KShIYW1tZXIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCk7XG4gICAgfSkpO1xuXG4gICAgJCgnLnNpZGViYXItcGFuZWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXMpICYmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjpwb3J0cmFpdClcIikubWF0Y2hlcykpIHtcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnNpZGViYXItcGFuZWwnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcuaHVyby1oYW1idXJnZXIgLmljb24tYm94LXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAkKCcuc2lkZWJhci1wYW5lbCAuaW5uZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaCA9IG5ldyBIYW1tZXIodGhpcyk7XG4gICAgICAgICAgICBoLm9uKFwic3dpcGVsZWZ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN3aXBlIGxlZnQgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICAgICAgICAgICR0aGlzLmNsb3Nlc3QoJy5zaWRlYmFyLXBhbmVsJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5odXJvLWhhbWJ1cmdlciAuaWNvbi1ib3gtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXItc2VhcmNoIC5pbm5lcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoID0gbmV3IEhhbW1lcih0aGlzKTtcbiAgICAgICAgICAgIGgub24oXCJzd2lwZWxlZnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3dpcGUgbGVmdCBkZXRlY3RlZC5cIik7XG4gICAgICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLnNpZGViYXItc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5odXJvLWhhbWJ1cmdlciAuaWNvbi1ib3gtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmlzLW1lc3NhZ2VzICNjb252ZXJzYXRpb25zLWxpc3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaCA9IG5ldyBIYW1tZXIodGhpcyk7XG4gICAgICAgICAgICBoLm9uKFwic3dpcGVsZWZ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN3aXBlIGxlZnQgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICAgICAgICAgICR0aGlzLmNsb3Nlc3QoJy5pcy1tZXNzYWdlcycpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuaHVyby1oYW1idXJnZXIgLmljb24tYm94LXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5tYWluLXNpZGViYXIgLnNpZGViYXItaW5uZXIsIC52aWV3LXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaCA9IG5ldyBIYW1tZXIodGhpcyk7XG4gICAgICAgICAgICBoLm9uKFwic3dpcGVyaWdodFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTd2lwZSBSaWdodCBkZXRlY3RlZC5cIik7XG4gICAgICAgICAgICAgICAgJCgnLnNpZGViYXItcGFuZWwnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmh1cm8taGFtYnVyZ2VyIC5pY29uLWJveC10b2dnbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY29udmVyc2F0aW9uLWFyZWEgLmNvbnZlcnNhdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoID0gbmV3IEhhbW1lcih0aGlzKTtcbiAgICAgICAgICAgIGgub24oXCJzd2lwZWxlZnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3dpcGUgbGVmdCBkZXRlY3RlZC5cIik7XG4gICAgICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLmNvbnZlcnNhdGlvbi1hcmVhJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KSovIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy90b3VjaC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/touch.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/touch.js"]();
/******/ 	
/******/ })()
;