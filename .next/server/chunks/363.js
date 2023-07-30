"use strict";
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 6363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout),
  "y": () => (/* binding */ siteTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Logo.js


const Logo = ({ height , width  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: "/images/logo.svg",
        height: height,
        width: width,
        alt: "MVSG"
    });
};
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
;// CONCATENATED MODULE: ./src/components/NavItem.js



const NavItem = ({ text , href , active  })=>{
    const currentRoute = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: currentRoute === href ? "nav__link active" : "nav__link",
        children: text
    });
};
/* harmony default export */ const components_NavItem = (NavItem);

;// CONCATENATED MODULE: ./src/components/Navbar.js





const menuList = [
    {
        text: "About",
        href: "/about"
    }
];
const Navbar = ()=>{
    const [navActive, setNavActive] = (0,external_react_.useState)(null);
    const [activeIdx, setActiveIdx] = (0,external_react_.useState)(-1);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "nav",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "nav__logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                        height: "35",
                        width: "70"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>setNavActive(!navActive),
                    className: `nav__menu-bar`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${navActive ? "active" : ""} nav__menu-list`,
                    children: menuList.map((menu, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>{
                                setActiveIdx(idx);
                                setNavActive(false);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_NavItem, {
                                active: activeIdx === idx,
                                ...menu
                            })
                        }, menu.text))
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/layout.js


const siteTitle = "Maxine VSG";
function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                style: {
                    overflow: "hidden"
                },
                children: children
            })
        ]
    });
}


/***/ })

};
;