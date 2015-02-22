(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/App.js":[function(require,module,exports){
"use strict";

var ColorPoint = require("./ColorPoint");

var cp = new ColorPoint(25, 8, "red");

window.cp = cp;

console.log(cp.toString());


},{"./ColorPoint":"/Users/ksilberbauer/projects/gulp-browserify-es6-template/src/js/ColorPoint.js"}],"/Users/ksilberbauer/projects/gulp-browserify-es6-template/src/js/ColorPoint.js":[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
	if (staticProps) Object.defineProperties(child, staticProps);if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _get = function get(_x, _x2, _x3) {
	_function: while (true) {
		var object = _x,
		    property = _x2,
		    receiver = _x3;
		desc = parent = getter = undefined;
		var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				_x = parent;
				_x2 = property;
				_x3 = receiver;
				continue _function;
			}
		} else if ("value" in desc && desc.writable) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	}
};

var _inherits = function (subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
};

var _classCallCheck = function (instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
};

var Point = require("./Point");

var ColorPoint = (function (Point) {
	function ColorPoint(x, y, color) {
		_classCallCheck(this, ColorPoint);

		_get(Object.getPrototypeOf(ColorPoint.prototype), "constructor", this).call(this, x, y);
		this.color = color;
	}

	_inherits(ColorPoint, Point);

	_prototypeProperties(ColorPoint, null, {
		toString: {
			value: function toString() {
				return _get(Object.getPrototypeOf(ColorPoint.prototype), "toString", this).call(this) + " in " + this.color;
			},
			writable: true,
			configurable: true
		}
	});

	return ColorPoint;
})(Point);

module.exports = ColorPoint;


},{"./Point":"/Users/ksilberbauer/projects/gulp-browserify-es6-template/src/js/Point.js"}],"/Users/ksilberbauer/projects/gulp-browserify-es6-template/src/js/Point.js":[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
	if (staticProps) Object.defineProperties(child, staticProps);if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _classCallCheck = function (instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
};

var Point = (function () {
	function Point(x, y) {
		_classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	}

	_prototypeProperties(Point, null, {
		prop: {
			get: function () {
				return this.val.length;
			},
			set: function (value) {
				this.val = value;
			},
			configurable: true
		},
		toString: {
			value: function toString() {
				return "(" + this.x + ", " + this.y + ")";
			},
			writable: true,
			configurable: true
		}
	});

	return Point;
})();

module.exports = Point;


},{}]},{},["./src/js/App.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3NpbGJlcmJhdWVyL3Byb2plY3RzL2d1bHAtYnJvd3NlcmlmeS1lczYtdGVtcGxhdGUvc3JjL2pzL0FwcC5qcyIsIi9Vc2Vycy9rc2lsYmVyYmF1ZXIvcHJvamVjdHMvZ3VscC1icm93c2VyaWZ5LWVzNi10ZW1wbGF0ZS9zcmMvanMvQ29sb3JQb2ludC5qcyIsIi9Vc2Vycy9rc2lsYmVyYmF1ZXIvcHJvamVjdHMvZ3VscC1icm93c2VyaWZ5LWVzNi10ZW1wbGF0ZS9zcmMvanMvUG9pbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV6QyxJQUFJLEVBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztBQUV0QyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7QUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7O0FDUjNCLFlBQVksQ0FBQzs7QUFFYixJQUFJLG9CQUFvQixHQUFHLFVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUU7QUFBRSxLQUFJLFdBQVcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEFBQUMsSUFBSSxhQUFhLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7Q0FBRSxDQUFDOztBQUV0TixJQUFJLElBQUksR0FBRyxTQUFTLEdBQUc7eUJBQTZCO01BQTVCLE1BQU07TUFBRSxRQUFRO01BQUUsUUFBUTtBQUFRLE1BQUksR0FBb0YsTUFBTSxHQUE2TSxNQUFNO0FBQXJULE1BQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQUFBQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7QUFBRSxPQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEFBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQUUsV0FBTyxTQUFTLENBQUM7SUFBRSxNQUFNO1NBQWEsTUFBTTtVQUFFLFFBQVE7VUFBRSxRQUFROztJQUFJO0dBQUUsTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUFFLFVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztHQUFFLE1BQU07QUFBRSxPQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEFBQUMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQUUsV0FBTyxTQUFTLENBQUM7SUFBRSxBQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUFFO0VBQUU7Q0FBQSxDQUFDOztBQUUxYyxJQUFJLFNBQVMsR0FBRyxVQUFVLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFBRSxLQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO0FBQUUsUUFBTSxJQUFJLFNBQVMsQ0FBQywwREFBMEQsR0FBRyxPQUFPLFVBQVUsQ0FBQyxDQUFDO0VBQUUsQUFBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEFBQUMsSUFBSSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMs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V0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDMUM7QUFDRCxXQUFRLEVBQUUsSUFBSTtBQUNkLGVBQVksRUFBRSxJQUFJO0dBQ2xCO0VBQ0QsQ0FBQyxDQUFDOztBQUVILFFBQU8sS0FBSyxDQUFDO0NBQ2IsQ0FBQSxFQUFHLENBQUM7O0FBRUwsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb2xvclBvaW50ID0gcmVxdWlyZShcIi4vQ29sb3JQb2ludFwiKTtcblxudmFyIGNwID0gbmV3IENvbG9yUG9pbnQoMjUsIDgsIFwicmVkXCIpO1xuXG53aW5kb3cuY3AgPSBjcDtcblxuY29uc29sZS5sb2coY3AudG9TdHJpbmcoKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTlyYzJsc1ltVnlZbUYxWlhJdmNISnZhbVZqZEhNdlozVnNjQzFpY205M2MyVnlhV1o1TFdWek5pMTBaVzF3YkdGMFpTOXpjbU12YW5NdlFYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNTVUZCU1N4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZET3p0QlFVVjZReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVjBReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXpzN1FVRkZaaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRElpd2labWxzWlNJNklpOVZjMlZ5Y3k5cmMybHNZbVZ5WW1GMVpYSXZjSEp2YW1WamRITXZaM1ZzY0MxaWNtOTNjMlZ5YVdaNUxXVnpOaTEwWlcxd2JHRjBaUzl6Y21NdmFuTXZRWEJ3TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2liR1YwSUVOdmJHOXlVRzlwYm5RZ1BTQnlaWEYxYVhKbEtDY3VMME52Ykc5eVVHOXBiblFuS1R0Y2JseHViR1YwSUdOd0lEMGdibVYzSUVOdmJHOXlVRzlwYm5Rb01qVXNJRGdzSUNkeVpXUW5LVHRjYmx4dWQybHVaRzkzTG1Od0lEMGdZM0E3WEc1Y2JtTnZibk52YkdVdWJHOW5LR053TG5SdlUzUnlhVzVuS0NrcE95SmRmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcHJvdG90eXBlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChjaGlsZCwgc3RhdGljUHJvcHMsIGluc3RhbmNlUHJvcHMpIHsgaWYgKHN0YXRpY1Byb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZCwgc3RhdGljUHJvcHMpOyBpZiAoaW5zdGFuY2VQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQucHJvdG90eXBlLCBpbnN0YW5jZVByb3BzKTsgfTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjICYmIGRlc2Mud3JpdGFibGUpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxudmFyIFBvaW50ID0gcmVxdWlyZShcIi4vUG9pbnRcIik7XG5cbnZhciBDb2xvclBvaW50ID0gKGZ1bmN0aW9uIChQb2ludCkge1xuXHRmdW5jdGlvbiBDb2xvclBvaW50KHgsIHksIGNvbG9yKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yUG9pbnQpO1xuXG5cdFx0X2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sb3JQb2ludC5wcm90b3R5cGUpLCBcImNvbnN0cnVjdG9yXCIsIHRoaXMpLmNhbGwodGhpcywgeCwgeSk7XG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHR9XG5cblx0X2luaGVyaXRzKENvbG9yUG9pbnQsIFBvaW50KTtcblxuXHRfcHJvdG90eXBlUHJvcGVydGllcyhDb2xvclBvaW50LCBudWxsLCB7XG5cdFx0dG9TdHJpbmc6IHtcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRcdFx0cmV0dXJuIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbG9yUG9pbnQucHJvdG90eXBlKSwgXCJ0b1N0cmluZ1wiLCB0aGlzKS5jYWxsKHRoaXMpICsgXCIgaW4gXCIgKyB0aGlzLmNvbG9yO1xuXHRcdFx0fSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gQ29sb3JQb2ludDtcbn0pKFBvaW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvclBvaW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpOVZjMlZ5Y3k5cmMybHNZbVZ5WW1GMVpYSXZjSEp2YW1WamRITXZaM1ZzY0MxaWNtOTNjMlZ5YVdaNUxXVnpOaTEwWlcxd2JHRjBaUzl6Y21NdmFuTXZRMjlzYjNKUWIybHVkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQlFVRXNTVUZCU1N4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZET3p0SlFVVjZRaXhWUVVGVkxHTkJRVk1zUzBGQlN6dEJRVU5zUWl4VlFVUk9MRlZCUVZVc1EwRkRTQ3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVczdkMEpCUkd4Q0xGVkJRVlU3TzBGQlJXUXNOa0pCUmtrc1ZVRkJWU3cyUTBGRlVpeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZPMEZCUTFvc1RVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdSVUZEYmtJN08xZEJTa2tzVlVGQlZTeEZRVUZUTEV0QlFVczdPM05DUVVGNFFpeFZRVUZWTzBGQlRXWXNWVUZCVVR0VlFVRkJMRzlDUVVGSE8wRkJRMVlzVjBGQlR5d3lRa0ZRU0N4VlFVRlZMRFJEUVU5WkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUXpsRE96czdPenM3VVVGU1NTeFZRVUZWTzBkQlFWTXNTMEZCU3pzN1FVRlhPVUlzVFVGQlRTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNaUxDSm1hV3hsSWpvaUwxVnpaWEp6TDJ0emFXeGlaWEppWVhWbGNpOXdjbTlxWldOMGN5OW5kV3h3TFdKeWIzZHpaWEpwWm5rdFpYTTJMWFJsYlhCc1lYUmxMM055WXk5cWN5OURiMnh2Y2xCdmFXNTBMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWRtRnlJRkJ2YVc1MElEMGdjbVZ4ZFdseVpTZ25MaTlRYjJsdWRDY3BPMXh1WEc1amJHRnpjeUJEYjJ4dmNsQnZhVzUwSUdWNGRHVnVaSE1nVUc5cGJuUWdlMXh1WEhSamIyNXpkSEoxWTNSdmNpaDRMQ0I1TENCamIyeHZjaWtnZTF4dVhIUmNkSE4xY0dWeUtIZ3NJSGtwTzF4dVhIUmNkSFJvYVhNdVkyOXNiM0lnUFNCamIyeHZjanRjYmx4MGZWeHVYRzVjZEhSdlUzUnlhVzVuS0NrZ2UxeHVYSFJjZEhKbGRIVnliaUJ6ZFhCbGNpNTBiMU4wY21sdVp5Z3BJQ3NnSnlCcGJpQW5JQ3NnZEdocGN5NWpiMnh2Y2p0Y2JseDBmVnh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFTnZiRzl5VUc5cGJuUTdJbDE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcHJvdG90eXBlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChjaGlsZCwgc3RhdGljUHJvcHMsIGluc3RhbmNlUHJvcHMpIHsgaWYgKHN0YXRpY1Byb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZCwgc3RhdGljUHJvcHMpOyBpZiAoaW5zdGFuY2VQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQucHJvdG90eXBlLCBpbnN0YW5jZVByb3BzKTsgfTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9O1xuXG52YXIgUG9pbnQgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBQb2ludCh4LCB5KSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50KTtcblxuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXG5cdF9wcm90b3R5cGVQcm9wZXJ0aWVzKFBvaW50LCBudWxsLCB7XG5cdFx0cHJvcDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbC5sZW5ndGg7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy52YWwgPSB2YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHR9LFxuXHRcdHRvU3RyaW5nOiB7XG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0XHRcdHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xuXHRcdFx0fSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUG9pbnQ7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpOVZjMlZ5Y3k5cmMybHNZbVZ5WW1GMVpYSXZjSEp2YW1WamRITXZaM1ZzY0MxaWNtOTNjMlZ5YVdaNUxXVnpOaTEwWlcxd2JHRjBaUzl6Y21NdmFuTXZVRzlwYm5RdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBsQlFVMHNTMEZCU3p0QlFVTkRMRlZCUkU0c1MwRkJTeXhEUVVORkxFTkJRVU1zUlVGQlJTeERRVUZETzNkQ1FVUllMRXRCUVVzN08wRkJSVlFzVFVGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRXQ3hOUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RlFVTllPenR6UWtGS1NTeExRVUZMTzBGQlZVNHNUVUZCU1R0UlFVcEJMRmxCUVVjN1FVRkRWaXhYUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaQ08xRkJSVThzVlVGQlF5eExRVUZMTEVWQlFVVTdRVUZEWml4UlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU5xUWpzN08wRkJSVVFzVlVGQlVUdFZRVUZCTEc5Q1FVRkhPMEZCUTFZc2FVSkJRVmNzU1VGQlNTeERRVUZETEVOQlFVTXNWVUZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGSk8wbEJRMmhET3pzN096czdVVUZvUWtrc1MwRkJTenM3TzBGQmJVSllMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZESWl3aVptbHNaU0k2SWk5VmMyVnljeTlyYzJsc1ltVnlZbUYxWlhJdmNISnZhbVZqZEhNdlozVnNjQzFpY205M2MyVnlhV1o1TFdWek5pMTBaVzF3YkdGMFpTOXpjbU12YW5NdlVHOXBiblF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiR0Z6Y3lCUWIybHVkQ0I3WEc1Y2RHTnZibk4wY25WamRHOXlLSGdzSUhrcElIdGNibHgwWEhSMGFHbHpMbmdnUFNCNE8xeHVYSFJjZEhSb2FYTXVlU0E5SUhrN1hHNWNkSDFjYmx4dVhIUm5aWFFnY0hKdmNDZ3BJSHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTUyWVd3dWJHVnVaM1JvTzF4dVhIUjlYRzVjYmx4MGMyVjBJSEJ5YjNBb2RtRnNkV1VwSUh0Y2JseDBYSFIwYUdsekxuWmhiQ0E5SUhaaGJIVmxPMXh1WEhSOVhHNWNibHgwZEc5VGRISnBibWNvS1NCN1hHNWNkRngwY21WMGRYSnVJR0FvSkh0MGFHbHpMbmg5TENBa2UzUm9hWE11ZVgwcFlEdGNibHgwZlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRkJ2YVc1ME95SmRmUT09Il19