(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppDrawer = function (_HTMLElement) {
    _inherits(AppDrawer, _HTMLElement);

    _createClass(AppDrawer, [{
        key: "open",
        get: function get() {
            return this.hasAttribute("open");
        },
        set: function set(val) {
            val ? this.setAttribute("open", '') : this.removeAttribute('open');
        }
    }, {
        key: "disabled",
        get: function get() {
            return this.hasAttribute("disabled");
        },
        set: function set(val) {
            val ? this.setAttribute("disabled", '') : this.removeAttribute('disabled');
        }
    }], [{
        key: "observedAttributes",
        get: function get() {
            return ["open"];
        }
    }]);

    function AppDrawer() {
        _classCallCheck(this, AppDrawer);

        return _possibleConstructorReturn(this, (AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call(this));
    }

    _createClass(AppDrawer, [{
        key: "connectedCallback",
        value: function connectedCallback() {
            var _this2 = this;

            this.addEventListener("click", function () {
                _this2.open = !_this2.open;
            });
            this.textContent = this.open ? "OPEN" : "CLOSED";
        }
    }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            this.textContent = this.open ? "OPEN" : "CLOSED";
        }
    }]);

    return AppDrawer;
}(HTMLElement);

customElements.define("app-drawer", AppDrawer);

},{}]},{},[1]);
