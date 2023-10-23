function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function IconLocaleProvider(props, svgRef) {
    return /*#__PURE__*/React.createElement("svg", _extends({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        focusable: false,
        ref: svgRef
    }, props), /*#__PURE__*/React.createElement("rect", {
        x: 2,
        y: 2,
        width: 20,
        height: 20,
        rx: 3,
        fill: "#DDE3E8"
    }), /*#__PURE__*/React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.40092 4.14168C7.89573 4.43335 7.72264 5.07933 8.01431 5.58452L8.26474 6.01828H5.12664C4.50441 6.01828 4 6.49116 4 7.0745C4 7.65784 4.50441 8.13073 5.12664 8.13073L6.46453 8.13073C6.46453 9.85786 7.05673 11.4467 8.04915 12.7052C7.2723 13.1546 6.37034 13.4119 5.4083 13.4119C4.82496 13.4119 4.35207 13.8848 4.35207 14.4681C4.35207 15.0514 4.82496 15.5243 5.4083 15.5243C6.97917 15.5243 8.43562 15.0344 9.63321 14.1991C10.8308 15.0344 12.2872 15.5243 13.8581 15.5243C14.4415 15.5243 14.9143 15.0514 14.9143 14.4681C14.9143 13.8848 14.4415 13.4119 13.8581 13.4119C12.8961 13.4119 11.9941 13.1546 11.2173 12.7052C12.2097 11.4467 12.8019 9.85786 12.8019 8.13073L14.1398 8.13073C14.762 8.13073 15.2664 7.65784 15.2664 7.0745C15.2664 6.49116 14.762 6.01828 14.1398 6.01828H10.704L9.84375 4.52829C9.55208 4.0231 8.9061 3.85001 8.40092 4.14168ZM10.6894 8.13073H8.57698C8.57698 9.31986 8.96999 10.4172 9.63321 11.2999C10.2964 10.4172 10.6894 9.31986 10.6894 8.13073Z",
        fill: "#4CC3FA"
    }), /*#__PURE__*/React.createElement("path", {
        d: "M13.0025 19C13.5829 19 13.8928 18.7078 14.1105 17.9545L14.46 16.8961H17.4872L17.8302 17.9545C18.0478 18.6883 18.3842 19 18.9646 19C19.5911 19 20 18.6364 20 18.0714C20 17.8442 19.9406 17.5844 19.8219 17.2208L17.8368 11.474C17.474 10.4156 16.9728 10 16.0231 10C15.0734 10 14.5589 10.4221 14.2028 11.474L12.211 17.2208C12.0594 17.6558 12 17.9026 12 18.1169C12 18.6364 12.4089 19 13.0025 19ZM14.9085 15.3442L15.9308 11.987H16.0363L17.0453 15.3442H14.9085Z",
        fill: "#324350"
    }));
}

const ForwardRef = /*#__PURE__*/React.forwardRef(IconLocaleProvider);
export default ForwardRef;