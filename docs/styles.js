(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* stylelint-disable font-family-no-missing-generic-family-keyword */\r\n@font-face {\n  font-family: 'KaTeX_AMS';\n  src: url('KaTeX_AMS-Regular.woff2') format('woff2'), url('KaTeX_AMS-Regular.woff') format('woff'), url('KaTeX_AMS-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Caligraphic';\n  src: url('KaTeX_Caligraphic-Bold.woff2') format('woff2'), url('KaTeX_Caligraphic-Bold.woff') format('woff'), url('KaTeX_Caligraphic-Bold.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Caligraphic';\n  src: url('KaTeX_Caligraphic-Regular.woff2') format('woff2'), url('KaTeX_Caligraphic-Regular.woff') format('woff'), url('KaTeX_Caligraphic-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Fraktur';\n  src: url('KaTeX_Fraktur-Bold.woff2') format('woff2'), url('KaTeX_Fraktur-Bold.woff') format('woff'), url('KaTeX_Fraktur-Bold.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Fraktur';\n  src: url('KaTeX_Fraktur-Regular.woff2') format('woff2'), url('KaTeX_Fraktur-Regular.woff') format('woff'), url('KaTeX_Fraktur-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-Bold.woff2') format('woff2'), url('KaTeX_Main-Bold.woff') format('woff'), url('KaTeX_Main-Bold.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-BoldItalic.woff2') format('woff2'), url('KaTeX_Main-BoldItalic.woff') format('woff'), url('KaTeX_Main-BoldItalic.ttf') format('truetype');\n  font-weight: bold;\n  font-style: italic;\n}\r\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-Italic.woff2') format('woff2'), url('KaTeX_Main-Italic.woff') format('woff'), url('KaTeX_Main-Italic.ttf') format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\r\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-Regular.woff2') format('woff2'), url('KaTeX_Main-Regular.woff') format('woff'), url('KaTeX_Main-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Math';\n  src: url('KaTeX_Math-BoldItalic.woff2') format('woff2'), url('KaTeX_Math-BoldItalic.woff') format('woff'), url('KaTeX_Math-BoldItalic.ttf') format('truetype');\n  font-weight: bold;\n  font-style: italic;\n}\r\n@font-face {\n  font-family: 'KaTeX_Math';\n  src: url('KaTeX_Math-Italic.woff2') format('woff2'), url('KaTeX_Math-Italic.woff') format('woff'), url('KaTeX_Math-Italic.ttf') format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\r\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url('KaTeX_SansSerif-Bold.woff2') format('woff2'), url('KaTeX_SansSerif-Bold.woff') format('woff'), url('KaTeX_SansSerif-Bold.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url('KaTeX_SansSerif-Italic.woff2') format('woff2'), url('KaTeX_SansSerif-Italic.woff') format('woff'), url('KaTeX_SansSerif-Italic.ttf') format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\r\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url('KaTeX_SansSerif-Regular.woff2') format('woff2'), url('KaTeX_SansSerif-Regular.woff') format('woff'), url('KaTeX_SansSerif-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Script';\n  src: url('KaTeX_Script-Regular.woff2') format('woff2'), url('KaTeX_Script-Regular.woff') format('woff'), url('KaTeX_Script-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Size1';\n  src: url('KaTeX_Size1-Regular.woff2') format('woff2'), url('KaTeX_Size1-Regular.woff') format('woff'), url('KaTeX_Size1-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Size2';\n  src: url('KaTeX_Size2-Regular.woff2') format('woff2'), url('KaTeX_Size2-Regular.woff') format('woff'), url('KaTeX_Size2-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Size3';\n  src: url('KaTeX_Size3-Regular.woff2') format('woff2'), url('KaTeX_Size3-Regular.woff') format('woff'), url('KaTeX_Size3-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Size4';\n  src: url('KaTeX_Size4-Regular.woff2') format('woff2'), url('KaTeX_Size4-Regular.woff') format('woff'), url('KaTeX_Size4-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n@font-face {\n  font-family: 'KaTeX_Typewriter';\n  src: url('KaTeX_Typewriter-Regular.woff2') format('woff2'), url('KaTeX_Typewriter-Regular.woff') format('woff'), url('KaTeX_Typewriter-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\r\n.katex {\n  font: normal 1.21em KaTeX_Main, Times New Roman, serif;\n  line-height: 1.2;\n  text-indent: 0;\n  text-rendering: auto;\n}\r\n.katex * {\n  -ms-high-contrast-adjust: none !important;\n}\r\n.katex .katex-version::after {\n  content: \"0.10.2\";\n}\r\n.katex .katex-mathml {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\r\n.katex .katex-html {\n  /* \\newline is an empty block at top level, between .base elements */\n}\r\n.katex .katex-html > .newline {\n  display: block;\n}\r\n.katex .base {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\r\n.katex .strut {\n  display: inline-block;\n}\r\n.katex .textbf {\n  font-weight: bold;\n}\r\n.katex .textit {\n  font-style: italic;\n}\r\n.katex .textrm {\n  font-family: KaTeX_Main;\n}\r\n.katex .textsf {\n  font-family: KaTeX_SansSerif;\n}\r\n.katex .texttt {\n  font-family: KaTeX_Typewriter;\n}\r\n.katex .mathdefault {\n  font-family: KaTeX_Math;\n  font-style: italic;\n}\r\n.katex .mathit {\n  font-family: KaTeX_Main;\n  font-style: italic;\n}\r\n.katex .mathrm {\n  font-style: normal;\n}\r\n.katex .mathbf {\n  font-family: KaTeX_Main;\n  font-weight: bold;\n}\r\n.katex .boldsymbol {\n  font-family: KaTeX_Math;\n  font-weight: bold;\n  font-style: italic;\n}\r\n.katex .amsrm {\n  font-family: KaTeX_AMS;\n}\r\n.katex .mathbb,\n.katex .textbb {\n  font-family: KaTeX_AMS;\n}\r\n.katex .mathcal {\n  font-family: KaTeX_Caligraphic;\n}\r\n.katex .mathfrak,\n.katex .textfrak {\n  font-family: KaTeX_Fraktur;\n}\r\n.katex .mathtt {\n  font-family: KaTeX_Typewriter;\n}\r\n.katex .mathscr,\n.katex .textscr {\n  font-family: KaTeX_Script;\n}\r\n.katex .mathsf,\n.katex .textsf {\n  font-family: KaTeX_SansSerif;\n}\r\n.katex .mathboldsf,\n.katex .textboldsf {\n  font-family: KaTeX_SansSerif;\n  font-weight: bold;\n}\r\n.katex .mathitsf,\n.katex .textitsf {\n  font-family: KaTeX_SansSerif;\n  font-style: italic;\n}\r\n.katex .mainrm {\n  font-family: KaTeX_Main;\n  font-style: normal;\n}\r\n.katex .vlist-t {\n  display: inline-table;\n  table-layout: fixed;\n}\r\n.katex .vlist-r {\n  display: table-row;\n}\r\n.katex .vlist {\n  display: table-cell;\n  vertical-align: bottom;\n  position: relative;\n}\r\n.katex .vlist > span {\n  display: block;\n  height: 0;\n  position: relative;\n}\r\n.katex .vlist > span > span {\n  display: inline-block;\n}\r\n.katex .vlist > span > .pstrut {\n  overflow: hidden;\n  width: 0;\n}\r\n.katex .vlist-t2 {\n  margin-right: -2px;\n}\r\n.katex .vlist-s {\n  display: table-cell;\n  vertical-align: bottom;\n  font-size: 1px;\n  width: 2px;\n  min-width: 2px;\n}\r\n.katex .msupsub {\n  text-align: left;\n}\r\n.katex .mfrac > span > span {\n  text-align: center;\n}\r\n.katex .mfrac .frac-line {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: solid;\n}\r\n.katex .mfrac .frac-line,\n.katex .overline .overline-line,\n.katex .underline .underline-line,\n.katex .hline,\n.katex .hdashline,\n.katex .rule {\n  min-height: 1px;\n}\r\n.katex .mspace {\n  display: inline-block;\n}\r\n.katex .llap,\n.katex .rlap,\n.katex .clap {\n  width: 0;\n  position: relative;\n}\r\n.katex .llap > .inner,\n.katex .rlap > .inner,\n.katex .clap > .inner {\n  position: absolute;\n}\r\n.katex .llap > .fix,\n.katex .rlap > .fix,\n.katex .clap > .fix {\n  display: inline-block;\n}\r\n.katex .llap > .inner {\n  right: 0;\n}\r\n.katex .rlap > .inner,\n.katex .clap > .inner {\n  left: 0;\n}\r\n.katex .clap > .inner > span {\n  margin-left: -50%;\n  margin-right: 50%;\n}\r\n.katex .rule {\n  display: inline-block;\n  border: solid 0;\n  position: relative;\n}\r\n.katex .overline .overline-line,\n.katex .underline .underline-line,\n.katex .hline {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: solid;\n}\r\n.katex .hdashline {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: dashed;\n}\r\n.katex .sqrt > .root {\n  margin-left: 0.27777778em;\n  margin-right: -0.55555556em;\n}\r\n.katex .sizing,\n.katex .fontsize-ensurer {\n  display: inline-block;\n}\r\n.katex .sizing.reset-size1.size1,\n.katex .fontsize-ensurer.reset-size1.size1 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size1.size2,\n.katex .fontsize-ensurer.reset-size1.size2 {\n  font-size: 1.2em;\n}\r\n.katex .sizing.reset-size1.size3,\n.katex .fontsize-ensurer.reset-size1.size3 {\n  font-size: 1.4em;\n}\r\n.katex .sizing.reset-size1.size4,\n.katex .fontsize-ensurer.reset-size1.size4 {\n  font-size: 1.6em;\n}\r\n.katex .sizing.reset-size1.size5,\n.katex .fontsize-ensurer.reset-size1.size5 {\n  font-size: 1.8em;\n}\r\n.katex .sizing.reset-size1.size6,\n.katex .fontsize-ensurer.reset-size1.size6 {\n  font-size: 2em;\n}\r\n.katex .sizing.reset-size1.size7,\n.katex .fontsize-ensurer.reset-size1.size7 {\n  font-size: 2.4em;\n}\r\n.katex .sizing.reset-size1.size8,\n.katex .fontsize-ensurer.reset-size1.size8 {\n  font-size: 2.88em;\n}\r\n.katex .sizing.reset-size1.size9,\n.katex .fontsize-ensurer.reset-size1.size9 {\n  font-size: 3.456em;\n}\r\n.katex .sizing.reset-size1.size10,\n.katex .fontsize-ensurer.reset-size1.size10 {\n  font-size: 4.148em;\n}\r\n.katex .sizing.reset-size1.size11,\n.katex .fontsize-ensurer.reset-size1.size11 {\n  font-size: 4.976em;\n}\r\n.katex .sizing.reset-size2.size1,\n.katex .fontsize-ensurer.reset-size2.size1 {\n  font-size: 0.83333333em;\n}\r\n.katex .sizing.reset-size2.size2,\n.katex .fontsize-ensurer.reset-size2.size2 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size2.size3,\n.katex .fontsize-ensurer.reset-size2.size3 {\n  font-size: 1.16666667em;\n}\r\n.katex .sizing.reset-size2.size4,\n.katex .fontsize-ensurer.reset-size2.size4 {\n  font-size: 1.33333333em;\n}\r\n.katex .sizing.reset-size2.size5,\n.katex .fontsize-ensurer.reset-size2.size5 {\n  font-size: 1.5em;\n}\r\n.katex .sizing.reset-size2.size6,\n.katex .fontsize-ensurer.reset-size2.size6 {\n  font-size: 1.66666667em;\n}\r\n.katex .sizing.reset-size2.size7,\n.katex .fontsize-ensurer.reset-size2.size7 {\n  font-size: 2em;\n}\r\n.katex .sizing.reset-size2.size8,\n.katex .fontsize-ensurer.reset-size2.size8 {\n  font-size: 2.4em;\n}\r\n.katex .sizing.reset-size2.size9,\n.katex .fontsize-ensurer.reset-size2.size9 {\n  font-size: 2.88em;\n}\r\n.katex .sizing.reset-size2.size10,\n.katex .fontsize-ensurer.reset-size2.size10 {\n  font-size: 3.45666667em;\n}\r\n.katex .sizing.reset-size2.size11,\n.katex .fontsize-ensurer.reset-size2.size11 {\n  font-size: 4.14666667em;\n}\r\n.katex .sizing.reset-size3.size1,\n.katex .fontsize-ensurer.reset-size3.size1 {\n  font-size: 0.71428571em;\n}\r\n.katex .sizing.reset-size3.size2,\n.katex .fontsize-ensurer.reset-size3.size2 {\n  font-size: 0.85714286em;\n}\r\n.katex .sizing.reset-size3.size3,\n.katex .fontsize-ensurer.reset-size3.size3 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size3.size4,\n.katex .fontsize-ensurer.reset-size3.size4 {\n  font-size: 1.14285714em;\n}\r\n.katex .sizing.reset-size3.size5,\n.katex .fontsize-ensurer.reset-size3.size5 {\n  font-size: 1.28571429em;\n}\r\n.katex .sizing.reset-size3.size6,\n.katex .fontsize-ensurer.reset-size3.size6 {\n  font-size: 1.42857143em;\n}\r\n.katex .sizing.reset-size3.size7,\n.katex .fontsize-ensurer.reset-size3.size7 {\n  font-size: 1.71428571em;\n}\r\n.katex .sizing.reset-size3.size8,\n.katex .fontsize-ensurer.reset-size3.size8 {\n  font-size: 2.05714286em;\n}\r\n.katex .sizing.reset-size3.size9,\n.katex .fontsize-ensurer.reset-size3.size9 {\n  font-size: 2.46857143em;\n}\r\n.katex .sizing.reset-size3.size10,\n.katex .fontsize-ensurer.reset-size3.size10 {\n  font-size: 2.96285714em;\n}\r\n.katex .sizing.reset-size3.size11,\n.katex .fontsize-ensurer.reset-size3.size11 {\n  font-size: 3.55428571em;\n}\r\n.katex .sizing.reset-size4.size1,\n.katex .fontsize-ensurer.reset-size4.size1 {\n  font-size: 0.625em;\n}\r\n.katex .sizing.reset-size4.size2,\n.katex .fontsize-ensurer.reset-size4.size2 {\n  font-size: 0.75em;\n}\r\n.katex .sizing.reset-size4.size3,\n.katex .fontsize-ensurer.reset-size4.size3 {\n  font-size: 0.875em;\n}\r\n.katex .sizing.reset-size4.size4,\n.katex .fontsize-ensurer.reset-size4.size4 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size4.size5,\n.katex .fontsize-ensurer.reset-size4.size5 {\n  font-size: 1.125em;\n}\r\n.katex .sizing.reset-size4.size6,\n.katex .fontsize-ensurer.reset-size4.size6 {\n  font-size: 1.25em;\n}\r\n.katex .sizing.reset-size4.size7,\n.katex .fontsize-ensurer.reset-size4.size7 {\n  font-size: 1.5em;\n}\r\n.katex .sizing.reset-size4.size8,\n.katex .fontsize-ensurer.reset-size4.size8 {\n  font-size: 1.8em;\n}\r\n.katex .sizing.reset-size4.size9,\n.katex .fontsize-ensurer.reset-size4.size9 {\n  font-size: 2.16em;\n}\r\n.katex .sizing.reset-size4.size10,\n.katex .fontsize-ensurer.reset-size4.size10 {\n  font-size: 2.5925em;\n}\r\n.katex .sizing.reset-size4.size11,\n.katex .fontsize-ensurer.reset-size4.size11 {\n  font-size: 3.11em;\n}\r\n.katex .sizing.reset-size5.size1,\n.katex .fontsize-ensurer.reset-size5.size1 {\n  font-size: 0.55555556em;\n}\r\n.katex .sizing.reset-size5.size2,\n.katex .fontsize-ensurer.reset-size5.size2 {\n  font-size: 0.66666667em;\n}\r\n.katex .sizing.reset-size5.size3,\n.katex .fontsize-ensurer.reset-size5.size3 {\n  font-size: 0.77777778em;\n}\r\n.katex .sizing.reset-size5.size4,\n.katex .fontsize-ensurer.reset-size5.size4 {\n  font-size: 0.88888889em;\n}\r\n.katex .sizing.reset-size5.size5,\n.katex .fontsize-ensurer.reset-size5.size5 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size5.size6,\n.katex .fontsize-ensurer.reset-size5.size6 {\n  font-size: 1.11111111em;\n}\r\n.katex .sizing.reset-size5.size7,\n.katex .fontsize-ensurer.reset-size5.size7 {\n  font-size: 1.33333333em;\n}\r\n.katex .sizing.reset-size5.size8,\n.katex .fontsize-ensurer.reset-size5.size8 {\n  font-size: 1.6em;\n}\r\n.katex .sizing.reset-size5.size9,\n.katex .fontsize-ensurer.reset-size5.size9 {\n  font-size: 1.92em;\n}\r\n.katex .sizing.reset-size5.size10,\n.katex .fontsize-ensurer.reset-size5.size10 {\n  font-size: 2.30444444em;\n}\r\n.katex .sizing.reset-size5.size11,\n.katex .fontsize-ensurer.reset-size5.size11 {\n  font-size: 2.76444444em;\n}\r\n.katex .sizing.reset-size6.size1,\n.katex .fontsize-ensurer.reset-size6.size1 {\n  font-size: 0.5em;\n}\r\n.katex .sizing.reset-size6.size2,\n.katex .fontsize-ensurer.reset-size6.size2 {\n  font-size: 0.6em;\n}\r\n.katex .sizing.reset-size6.size3,\n.katex .fontsize-ensurer.reset-size6.size3 {\n  font-size: 0.7em;\n}\r\n.katex .sizing.reset-size6.size4,\n.katex .fontsize-ensurer.reset-size6.size4 {\n  font-size: 0.8em;\n}\r\n.katex .sizing.reset-size6.size5,\n.katex .fontsize-ensurer.reset-size6.size5 {\n  font-size: 0.9em;\n}\r\n.katex .sizing.reset-size6.size6,\n.katex .fontsize-ensurer.reset-size6.size6 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size6.size7,\n.katex .fontsize-ensurer.reset-size6.size7 {\n  font-size: 1.2em;\n}\r\n.katex .sizing.reset-size6.size8,\n.katex .fontsize-ensurer.reset-size6.size8 {\n  font-size: 1.44em;\n}\r\n.katex .sizing.reset-size6.size9,\n.katex .fontsize-ensurer.reset-size6.size9 {\n  font-size: 1.728em;\n}\r\n.katex .sizing.reset-size6.size10,\n.katex .fontsize-ensurer.reset-size6.size10 {\n  font-size: 2.074em;\n}\r\n.katex .sizing.reset-size6.size11,\n.katex .fontsize-ensurer.reset-size6.size11 {\n  font-size: 2.488em;\n}\r\n.katex .sizing.reset-size7.size1,\n.katex .fontsize-ensurer.reset-size7.size1 {\n  font-size: 0.41666667em;\n}\r\n.katex .sizing.reset-size7.size2,\n.katex .fontsize-ensurer.reset-size7.size2 {\n  font-size: 0.5em;\n}\r\n.katex .sizing.reset-size7.size3,\n.katex .fontsize-ensurer.reset-size7.size3 {\n  font-size: 0.58333333em;\n}\r\n.katex .sizing.reset-size7.size4,\n.katex .fontsize-ensurer.reset-size7.size4 {\n  font-size: 0.66666667em;\n}\r\n.katex .sizing.reset-size7.size5,\n.katex .fontsize-ensurer.reset-size7.size5 {\n  font-size: 0.75em;\n}\r\n.katex .sizing.reset-size7.size6,\n.katex .fontsize-ensurer.reset-size7.size6 {\n  font-size: 0.83333333em;\n}\r\n.katex .sizing.reset-size7.size7,\n.katex .fontsize-ensurer.reset-size7.size7 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size7.size8,\n.katex .fontsize-ensurer.reset-size7.size8 {\n  font-size: 1.2em;\n}\r\n.katex .sizing.reset-size7.size9,\n.katex .fontsize-ensurer.reset-size7.size9 {\n  font-size: 1.44em;\n}\r\n.katex .sizing.reset-size7.size10,\n.katex .fontsize-ensurer.reset-size7.size10 {\n  font-size: 1.72833333em;\n}\r\n.katex .sizing.reset-size7.size11,\n.katex .fontsize-ensurer.reset-size7.size11 {\n  font-size: 2.07333333em;\n}\r\n.katex .sizing.reset-size8.size1,\n.katex .fontsize-ensurer.reset-size8.size1 {\n  font-size: 0.34722222em;\n}\r\n.katex .sizing.reset-size8.size2,\n.katex .fontsize-ensurer.reset-size8.size2 {\n  font-size: 0.41666667em;\n}\r\n.katex .sizing.reset-size8.size3,\n.katex .fontsize-ensurer.reset-size8.size3 {\n  font-size: 0.48611111em;\n}\r\n.katex .sizing.reset-size8.size4,\n.katex .fontsize-ensurer.reset-size8.size4 {\n  font-size: 0.55555556em;\n}\r\n.katex .sizing.reset-size8.size5,\n.katex .fontsize-ensurer.reset-size8.size5 {\n  font-size: 0.625em;\n}\r\n.katex .sizing.reset-size8.size6,\n.katex .fontsize-ensurer.reset-size8.size6 {\n  font-size: 0.69444444em;\n}\r\n.katex .sizing.reset-size8.size7,\n.katex .fontsize-ensurer.reset-size8.size7 {\n  font-size: 0.83333333em;\n}\r\n.katex .sizing.reset-size8.size8,\n.katex .fontsize-ensurer.reset-size8.size8 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size8.size9,\n.katex .fontsize-ensurer.reset-size8.size9 {\n  font-size: 1.2em;\n}\r\n.katex .sizing.reset-size8.size10,\n.katex .fontsize-ensurer.reset-size8.size10 {\n  font-size: 1.44027778em;\n}\r\n.katex .sizing.reset-size8.size11,\n.katex .fontsize-ensurer.reset-size8.size11 {\n  font-size: 1.72777778em;\n}\r\n.katex .sizing.reset-size9.size1,\n.katex .fontsize-ensurer.reset-size9.size1 {\n  font-size: 0.28935185em;\n}\r\n.katex .sizing.reset-size9.size2,\n.katex .fontsize-ensurer.reset-size9.size2 {\n  font-size: 0.34722222em;\n}\r\n.katex .sizing.reset-size9.size3,\n.katex .fontsize-ensurer.reset-size9.size3 {\n  font-size: 0.40509259em;\n}\r\n.katex .sizing.reset-size9.size4,\n.katex .fontsize-ensurer.reset-size9.size4 {\n  font-size: 0.46296296em;\n}\r\n.katex .sizing.reset-size9.size5,\n.katex .fontsize-ensurer.reset-size9.size5 {\n  font-size: 0.52083333em;\n}\r\n.katex .sizing.reset-size9.size6,\n.katex .fontsize-ensurer.reset-size9.size6 {\n  font-size: 0.5787037em;\n}\r\n.katex .sizing.reset-size9.size7,\n.katex .fontsize-ensurer.reset-size9.size7 {\n  font-size: 0.69444444em;\n}\r\n.katex .sizing.reset-size9.size8,\n.katex .fontsize-ensurer.reset-size9.size8 {\n  font-size: 0.83333333em;\n}\r\n.katex .sizing.reset-size9.size9,\n.katex .fontsize-ensurer.reset-size9.size9 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size9.size10,\n.katex .fontsize-ensurer.reset-size9.size10 {\n  font-size: 1.20023148em;\n}\r\n.katex .sizing.reset-size9.size11,\n.katex .fontsize-ensurer.reset-size9.size11 {\n  font-size: 1.43981481em;\n}\r\n.katex .sizing.reset-size10.size1,\n.katex .fontsize-ensurer.reset-size10.size1 {\n  font-size: 0.24108004em;\n}\r\n.katex .sizing.reset-size10.size2,\n.katex .fontsize-ensurer.reset-size10.size2 {\n  font-size: 0.28929605em;\n}\r\n.katex .sizing.reset-size10.size3,\n.katex .fontsize-ensurer.reset-size10.size3 {\n  font-size: 0.33751205em;\n}\r\n.katex .sizing.reset-size10.size4,\n.katex .fontsize-ensurer.reset-size10.size4 {\n  font-size: 0.38572806em;\n}\r\n.katex .sizing.reset-size10.size5,\n.katex .fontsize-ensurer.reset-size10.size5 {\n  font-size: 0.43394407em;\n}\r\n.katex .sizing.reset-size10.size6,\n.katex .fontsize-ensurer.reset-size10.size6 {\n  font-size: 0.48216008em;\n}\r\n.katex .sizing.reset-size10.size7,\n.katex .fontsize-ensurer.reset-size10.size7 {\n  font-size: 0.57859209em;\n}\r\n.katex .sizing.reset-size10.size8,\n.katex .fontsize-ensurer.reset-size10.size8 {\n  font-size: 0.69431051em;\n}\r\n.katex .sizing.reset-size10.size9,\n.katex .fontsize-ensurer.reset-size10.size9 {\n  font-size: 0.83317261em;\n}\r\n.katex .sizing.reset-size10.size10,\n.katex .fontsize-ensurer.reset-size10.size10 {\n  font-size: 1em;\n}\r\n.katex .sizing.reset-size10.size11,\n.katex .fontsize-ensurer.reset-size10.size11 {\n  font-size: 1.19961427em;\n}\r\n.katex .sizing.reset-size11.size1,\n.katex .fontsize-ensurer.reset-size11.size1 {\n  font-size: 0.20096463em;\n}\r\n.katex .sizing.reset-size11.size2,\n.katex .fontsize-ensurer.reset-size11.size2 {\n  font-size: 0.24115756em;\n}\r\n.katex .sizing.reset-size11.size3,\n.katex .fontsize-ensurer.reset-size11.size3 {\n  font-size: 0.28135048em;\n}\r\n.katex .sizing.reset-size11.size4,\n.katex .fontsize-ensurer.reset-size11.size4 {\n  font-size: 0.32154341em;\n}\r\n.katex .sizing.reset-size11.size5,\n.katex .fontsize-ensurer.reset-size11.size5 {\n  font-size: 0.36173633em;\n}\r\n.katex .sizing.reset-size11.size6,\n.katex .fontsize-ensurer.reset-size11.size6 {\n  font-size: 0.40192926em;\n}\r\n.katex .sizing.reset-size11.size7,\n.katex .fontsize-ensurer.reset-size11.size7 {\n  font-size: 0.48231511em;\n}\r\n.katex .sizing.reset-size11.size8,\n.katex .fontsize-ensurer.reset-size11.size8 {\n  font-size: 0.57877814em;\n}\r\n.katex .sizing.reset-size11.size9,\n.katex .fontsize-ensurer.reset-size11.size9 {\n  font-size: 0.69453376em;\n}\r\n.katex .sizing.reset-size11.size10,\n.katex .fontsize-ensurer.reset-size11.size10 {\n  font-size: 0.83360129em;\n}\r\n.katex .sizing.reset-size11.size11,\n.katex .fontsize-ensurer.reset-size11.size11 {\n  font-size: 1em;\n}\r\n.katex .delimsizing.size1 {\n  font-family: KaTeX_Size1;\n}\r\n.katex .delimsizing.size2 {\n  font-family: KaTeX_Size2;\n}\r\n.katex .delimsizing.size3 {\n  font-family: KaTeX_Size3;\n}\r\n.katex .delimsizing.size4 {\n  font-family: KaTeX_Size4;\n}\r\n.katex .delimsizing.mult .delim-size1 > span {\n  font-family: KaTeX_Size1;\n}\r\n.katex .delimsizing.mult .delim-size4 > span {\n  font-family: KaTeX_Size4;\n}\r\n.katex .nulldelimiter {\n  display: inline-block;\n  width: 0.12em;\n}\r\n.katex .delimcenter {\n  position: relative;\n}\r\n.katex .op-symbol {\n  position: relative;\n}\r\n.katex .op-symbol.small-op {\n  font-family: KaTeX_Size1;\n}\r\n.katex .op-symbol.large-op {\n  font-family: KaTeX_Size2;\n}\r\n.katex .op-limits > .vlist-t {\n  text-align: center;\n}\r\n.katex .accent > .vlist-t {\n  text-align: center;\n}\r\n.katex .accent .accent-body {\n  position: relative;\n}\r\n.katex .accent .accent-body:not(.accent-full) {\n  width: 0;\n}\r\n.katex .overlay {\n  display: block;\n}\r\n.katex .mtable .vertical-separator {\n  display: inline-block;\n  margin: 0 -0.025em;\n  border-right: 0.05em solid;\n  min-width: 1px;\n}\r\n.katex .mtable .vs-dashed {\n  border-right: 0.05em dashed;\n}\r\n.katex .mtable .arraycolsep {\n  display: inline-block;\n}\r\n.katex .mtable .col-align-c > .vlist-t {\n  text-align: center;\n}\r\n.katex .mtable .col-align-l > .vlist-t {\n  text-align: left;\n}\r\n.katex .mtable .col-align-r > .vlist-t {\n  text-align: right;\n}\r\n.katex .svg-align {\n  text-align: left;\n}\r\n.katex svg {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: inherit;\n  fill: currentColor;\n  stroke: currentColor;\n  fill-rule: nonzero;\n  fill-opacity: 1;\n  stroke-width: 1;\n  stroke-linecap: butt;\n  stroke-linejoin: miter;\n  stroke-miterlimit: 4;\n  stroke-dasharray: none;\n  stroke-dashoffset: 0;\n  stroke-opacity: 1;\n}\r\n.katex svg path {\n  stroke: none;\n}\r\n.katex img {\n  border-style: none;\n  min-width: 0;\n  min-height: 0;\n  max-width: none;\n  max-height: none;\n}\r\n.katex .stretchy {\n  width: 100%;\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\r\n.katex .stretchy::before,\n.katex .stretchy::after {\n  content: \"\";\n}\r\n.katex .hide-tail {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\r\n.katex .halfarrow-left {\n  position: absolute;\n  left: 0;\n  width: 50.2%;\n  overflow: hidden;\n}\r\n.katex .halfarrow-right {\n  position: absolute;\n  right: 0;\n  width: 50.2%;\n  overflow: hidden;\n}\r\n.katex .brace-left {\n  position: absolute;\n  left: 0;\n  width: 25.1%;\n  overflow: hidden;\n}\r\n.katex .brace-center {\n  position: absolute;\n  left: 25%;\n  width: 50%;\n  overflow: hidden;\n}\r\n.katex .brace-right {\n  position: absolute;\n  right: 0;\n  width: 25.1%;\n  overflow: hidden;\n}\r\n.katex .x-arrow-pad {\n  padding: 0 0.5em;\n}\r\n.katex .x-arrow,\n.katex .mover,\n.katex .munder {\n  text-align: center;\n}\r\n.katex .boxpad {\n  padding: 0 0.3em 0 0.3em;\n}\r\n.katex .fbox,\n.katex .fcolorbox {\n  box-sizing: border-box;\n  border: 0.04em solid;\n}\r\n.katex .cancel-pad {\n  padding: 0 0.2em 0 0.2em;\n}\r\n.katex .cancel-lap {\n  margin-left: -0.2em;\n  margin-right: -0.2em;\n}\r\n.katex .sout {\n  border-bottom-style: solid;\n  border-bottom-width: 0.08em;\n}\r\n.katex-display {\n  display: block;\n  margin: 1em 0;\n  text-align: center;\n}\r\n.katex-display > .katex {\n  display: block;\n  text-align: center;\n  white-space: nowrap;\n}\r\n.katex-display > .katex > .katex-html {\n  display: block;\n  position: relative;\n}\r\n.katex-display > .katex > .katex-html > .tag {\n  position: absolute;\n  right: 0;\n}\r\n.katex-display.leqno > .katex > .katex-html > .tag {\n  left: 0;\n  right: auto;\n}\r\n.katex-display.fleqn > .katex {\n  text-align: left;\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2thdGV4L2Rpc3Qva2F0ZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQ0E5RSxvRUFBb0U7QUFDcEU7RUFDRSx3QkFBd0I7RUFDeEIsa0pBQThKO0VBQzlKLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxpS0FBNks7RUFDN0ssaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBLQUFzTDtFQUN0TCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIscUpBQWlLO0VBQ2pLLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw4SkFBMEs7RUFDMUssbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRJQUF3SjtFQUN4SixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsOEpBQTBLO0VBQzFLLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrSkFBOEo7RUFDOUosbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFKQUFpSztFQUNqSyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsOEpBQTBLO0VBQzFLLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrSkFBOEo7RUFDOUosbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJKQUF1SztFQUN2SyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsaUtBQTZL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LGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCAnfmthdGV4L2Rpc3Qva2F0ZXguY3NzJztcclxuIiwiLyogc3R5bGVsaW50LWRpc2FibGUgZm9udC1mYW1pbHktbm8tbWlzc2luZy1nZW5lcmljLWZhbWlseS1rZXl3b3JkICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9BTVMnO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9BTVMtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoZm9udHMvS2FUZVhfQU1TLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9BTVMtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FUZVhfQ2FsaWdyYXBoaWMnO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9DYWxpZ3JhcGhpYy1Cb2xkLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksIHVybChmb250cy9LYVRlWF9DYWxpZ3JhcGhpYy1Cb2xkLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoZm9udHMvS2FUZVhfQ2FsaWdyYXBoaWMtQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0thVGVYX0NhbGlncmFwaGljJztcbiAgc3JjOiB1cmwoZm9udHMvS2FUZVhfQ2FsaWdyYXBoaWMtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoZm9udHMvS2FUZVhfQ2FsaWdyYXBoaWMtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKGZvbnRzL0thVGVYX0NhbGlncmFwaGljLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0thVGVYX0ZyYWt0dXInO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9GcmFrdHVyLUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX0ZyYWt0dXItQm9sZC53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKGZvbnRzL0thVGVYX0ZyYWt0dXItQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0thVGVYX0ZyYWt0dXInO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9GcmFrdHVyLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX0ZyYWt0dXItUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKGZvbnRzL0thVGVYX0ZyYWt0dXItUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FUZVhfTWFpbic7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX01haW4tQm9sZC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FUZVhfTWFpbic7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX01haW4tQm9sZEl0YWxpYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkSXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkSXRhbGljLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FUZVhfTWFpbic7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX01haW4tSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksIHVybChmb250cy9LYVRlWF9NYWluLUl0YWxpYy53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKGZvbnRzL0thVGVYX01haW4tSXRhbGljLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9NYWluJztcbiAgc3JjOiB1cmwoZm9udHMvS2FUZVhfTWFpbi1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksIHVybChmb250cy9LYVRlWF9NYWluLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9NYWluLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0thVGVYX01hdGgnO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9NYXRoLUJvbGRJdGFsaWMud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX01hdGgtQm9sZEl0YWxpYy53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKGZvbnRzL0thVGVYX01hdGgtQm9sZEl0YWxpYy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0thVGVYX01hdGgnO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9NYXRoLUl0YWxpYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoZm9udHMvS2FUZVhfTWF0aC1JdGFsaWMud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9NYXRoLUl0YWxpYy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FUZVhfU2Fuc1NlcmlmJztcbiAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1Cb2xkLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9TYW5zU2VyaWYnO1xuICBzcmM6IHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksIHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtSXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLUl0YWxpYy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FUZVhfU2Fuc1NlcmlmJztcbiAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0thVGVYX1NjcmlwdCc7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX1NjcmlwdC1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksIHVybChmb250cy9LYVRlWF9TY3JpcHQtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKGZvbnRzL0thVGVYX1NjcmlwdC1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9TaXplMSc7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX1NpemUxLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX1NpemUxLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9TaXplMS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9TaXplMic7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9TaXplMi1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9TaXplMyc7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX1NpemUzLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX1NpemUzLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9TaXplMy1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9TaXplNCc7XG4gIHNyYzogdXJsKGZvbnRzL0thVGVYX1NpemU0LVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKGZvbnRzL0thVGVYX1NpemU0LVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9TaXplNC1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdLYVRlWF9UeXBld3JpdGVyJztcbiAgc3JjOiB1cmwoZm9udHMvS2FUZVhfVHlwZXdyaXRlci1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksIHVybChmb250cy9LYVRlWF9UeXBld3JpdGVyLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybChmb250cy9LYVRlWF9UeXBld3JpdGVyLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5rYXRleCB7XG4gIGZvbnQ6IG5vcm1hbCAxLjIxZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xufVxuLmthdGV4ICoge1xuICAtbXMtaGlnaC1jb250cmFzdC1hZGp1c3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5rYXRleCAua2F0ZXgtdmVyc2lvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIjAuMTAuMlwiO1xufVxuLmthdGV4IC5rYXRleC1tYXRobWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5rYXRleCAua2F0ZXgtaHRtbCB7XG4gIC8qIFxcbmV3bGluZSBpcyBhbiBlbXB0eSBibG9jayBhdCB0b3AgbGV2ZWwsIGJldHdlZW4gLmJhc2UgZWxlbWVudHMgKi9cbn1cbi5rYXRleCAua2F0ZXgtaHRtbCA+IC5uZXdsaW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ua2F0ZXggLmJhc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuLmthdGV4IC5zdHJ1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5rYXRleCAudGV4dGJmIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ua2F0ZXggLnRleHRpdCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5rYXRleCAudGV4dHJtIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX01haW47XG59XG4ua2F0ZXggLnRleHRzZiB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9TYW5zU2VyaWY7XG59XG4ua2F0ZXggLnRleHR0dCB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9UeXBld3JpdGVyO1xufVxuLmthdGV4IC5tYXRoZGVmYXVsdCB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9NYXRoO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ua2F0ZXggLm1hdGhpdCB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9NYWluO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ua2F0ZXggLm1hdGhybSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5rYXRleCAubWF0aGJmIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX01haW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmthdGV4IC5ib2xkc3ltYm9sIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX01hdGg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ua2F0ZXggLmFtc3JtIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX0FNUztcbn1cbi5rYXRleCAubWF0aGJiLFxuLmthdGV4IC50ZXh0YmIge1xuICBmb250LWZhbWlseTogS2FUZVhfQU1TO1xufVxuLmthdGV4IC5tYXRoY2FsIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX0NhbGlncmFwaGljO1xufVxuLmthdGV4IC5tYXRoZnJhayxcbi5rYXRleCAudGV4dGZyYWsge1xuICBmb250LWZhbWlseTogS2FUZVhfRnJha3R1cjtcbn1cbi5rYXRleCAubWF0aHR0IHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX1R5cGV3cml0ZXI7XG59XG4ua2F0ZXggLm1hdGhzY3IsXG4ua2F0ZXggLnRleHRzY3Ige1xuICBmb250LWZhbWlseTogS2FUZVhfU2NyaXB0O1xufVxuLmthdGV4IC5tYXRoc2YsXG4ua2F0ZXggLnRleHRzZiB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9TYW5zU2VyaWY7XG59XG4ua2F0ZXggLm1hdGhib2xkc2YsXG4ua2F0ZXggLnRleHRib2xkc2Yge1xuICBmb250LWZhbWlseTogS2FUZVhfU2Fuc1NlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5rYXRleCAubWF0aGl0c2YsXG4ua2F0ZXggLnRleHRpdHNmIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX1NhbnNTZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmthdGV4IC5tYWlucm0ge1xuICBmb250LWZhbWlseTogS2FUZVhfTWFpbjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmthdGV4IC52bGlzdC10IHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLmthdGV4IC52bGlzdC1yIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuLmthdGV4IC52bGlzdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5rYXRleCAudmxpc3QgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmthdGV4IC52bGlzdCA+IHNwYW4gPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmthdGV4IC52bGlzdCA+IHNwYW4gPiAucHN0cnV0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG4ua2F0ZXggLnZsaXN0LXQyIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xufVxuLmthdGV4IC52bGlzdC1zIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAxcHg7XG4gIHdpZHRoOiAycHg7XG4gIG1pbi13aWR0aDogMnB4O1xufVxuLmthdGV4IC5tc3Vwc3ViIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5rYXRleCAubWZyYWMgPiBzcGFuID4gc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5rYXRleCAubWZyYWMgLmZyYWMtbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xufVxuLmthdGV4IC5tZnJhYyAuZnJhYy1saW5lLFxuLmthdGV4IC5vdmVybGluZSAub3ZlcmxpbmUtbGluZSxcbi5rYXRleCAudW5kZXJsaW5lIC51bmRlcmxpbmUtbGluZSxcbi5rYXRleCAuaGxpbmUsXG4ua2F0ZXggLmhkYXNobGluZSxcbi5rYXRleCAucnVsZSB7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cbi5rYXRleCAubXNwYWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmthdGV4IC5sbGFwLFxuLmthdGV4IC5ybGFwLFxuLmthdGV4IC5jbGFwIHtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5rYXRleCAubGxhcCA+IC5pbm5lcixcbi5rYXRleCAucmxhcCA+IC5pbm5lcixcbi5rYXRleCAuY2xhcCA+IC5pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5rYXRleCAubGxhcCA+IC5maXgsXG4ua2F0ZXggLnJsYXAgPiAuZml4LFxuLmthdGV4IC5jbGFwID4gLmZpeCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5rYXRleCAubGxhcCA+IC5pbm5lciB7XG4gIHJpZ2h0OiAwO1xufVxuLmthdGV4IC5ybGFwID4gLmlubmVyLFxuLmthdGV4IC5jbGFwID4gLmlubmVyIHtcbiAgbGVmdDogMDtcbn1cbi5rYXRleCAuY2xhcCA+IC5pbm5lciA+IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogLTUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1MCU7XG59XG4ua2F0ZXggLnJ1bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogc29saWQgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmthdGV4IC5vdmVybGluZSAub3ZlcmxpbmUtbGluZSxcbi5rYXRleCAudW5kZXJsaW5lIC51bmRlcmxpbmUtbGluZSxcbi5rYXRleCAuaGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbn1cbi5rYXRleCAuaGRhc2hsaW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xufVxuLmthdGV4IC5zcXJ0ID4gLnJvb3Qge1xuICBtYXJnaW4tbGVmdDogMC4yNzc3Nzc3OGVtO1xuICBtYXJnaW4tcmlnaHQ6IC0wLjU1NTU1NTU2ZW07XG59XG4ua2F0ZXggLnNpemluZyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxLnNpemUxLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxLnNpemUxIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplMixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplMyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplNCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplNCB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplNSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplNSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplNixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTcsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTcge1xuICBmb250LXNpemU6IDIuNGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTgsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTgge1xuICBmb250LXNpemU6IDIuODhlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxLnNpemU5LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxLnNpemU5IHtcbiAgZm9udC1zaXplOiAzLjQ1NmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxLnNpemUxMCB7XG4gIGZvbnQtc2l6ZTogNC4xNDhlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxLnNpemUxMSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMTEge1xuICBmb250LXNpemU6IDQuOTc2ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMi5zaXplMSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMi5zaXplMSB7XG4gIGZvbnQtc2l6ZTogMC44MzMzMzMzM2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTIsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTIge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUyLnNpemUzLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUyLnNpemUzIHtcbiAgZm9udC1zaXplOiAxLjE2NjY2NjY3ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMi5zaXplNCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMi5zaXplNCB7XG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzM2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTUsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTYsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTYge1xuICBmb250LXNpemU6IDEuNjY2NjY2NjdlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUyLnNpemU3LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUyLnNpemU3IHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMi5zaXplOCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMi5zaXplOCB7XG4gIGZvbnQtc2l6ZTogMi40ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMi5zaXplOSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMi5zaXplOSB7XG4gIGZvbnQtc2l6ZTogMi44OGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUyLnNpemUxMCB7XG4gIGZvbnQtc2l6ZTogMy40NTY2NjY2N2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTExLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUyLnNpemUxMSB7XG4gIGZvbnQtc2l6ZTogNC4xNDY2NjY2N2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTEge1xuICBmb250LXNpemU6IDAuNzE0Mjg1NzFlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUzLnNpemUyLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemUyIHtcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg2ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplMyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTQsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTQge1xuICBmb250LXNpemU6IDEuMTQyODU3MTRlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUzLnNpemU1LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemU1IHtcbiAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplNixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMS40Mjg1NzE0M2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTcsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTcge1xuICBmb250LXNpemU6IDEuNzE0Mjg1NzFlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUzLnNpemU4LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemU4IHtcbiAgZm9udC1zaXplOiAyLjA1NzE0Mjg2ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplOSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplOSB7XG4gIGZvbnQtc2l6ZTogMi40Njg1NzE0M2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemUxMCB7XG4gIGZvbnQtc2l6ZTogMi45NjI4NTcxNGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTExLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemUxMSB7XG4gIGZvbnQtc2l6ZTogMy41NTQyODU3MWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTEge1xuICBmb250LXNpemU6IDAuNjI1ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplMixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplMiB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTMsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTMge1xuICBmb250LXNpemU6IDAuODc1ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplNCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplNCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTUsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTUge1xuICBmb250LXNpemU6IDEuMTI1ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplNixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTcsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTcge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTgsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTgge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTksXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTkge1xuICBmb250LXNpemU6IDIuMTZlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU0LnNpemUxMCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplMTAge1xuICBmb250LXNpemU6IDIuNTkyNWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTExLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU0LnNpemUxMSB7XG4gIGZvbnQtc2l6ZTogMy4xMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTEge1xuICBmb250LXNpemU6IDAuNTU1NTU1NTZlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemUyLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemUyIHtcbiAgZm9udC1zaXplOiAwLjY2NjY2NjY3ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNS5zaXplMyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNS5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMC43Nzc3Nzc3OGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTQsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTQge1xuICBmb250LXNpemU6IDAuODg4ODg4ODllbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU1LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU1IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNS5zaXplNixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNS5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMS4xMTExMTExMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTcsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTcge1xuICBmb250LXNpemU6IDEuMzMzMzMzMzNlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU4LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU4IHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU5LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU5IHtcbiAgZm9udC1zaXplOiAxLjkyZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNS5zaXplMTAsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTEwIHtcbiAgZm9udC1zaXplOiAyLjMwNDQ0NDQ0ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNS5zaXplMTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTExIHtcbiAgZm9udC1zaXplOiAyLjc2NDQ0NDQ0ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplMSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplMSB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplMixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplMiB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplMyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplNCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplNCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplNSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplNSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplNixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTcsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTcge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTgsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTgge1xuICBmb250LXNpemU6IDEuNDRlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemU5LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU2LnNpemU5IHtcbiAgZm9udC1zaXplOiAxLjcyOGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU2LnNpemUxMCB7XG4gIGZvbnQtc2l6ZTogMi4wNzRlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemUxMSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplMTEge1xuICBmb250LXNpemU6IDIuNDg4ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplMSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplMSB7XG4gIGZvbnQtc2l6ZTogMC40MTY2NjY2N2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTIsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTIge1xuICBmb250LXNpemU6IDAuNWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTMsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTMge1xuICBmb250LXNpemU6IDAuNTgzMzMzMzNlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU0LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU0IHtcbiAgZm9udC1zaXplOiAwLjY2NjY2NjY3ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplNSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplNSB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTYsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTYge1xuICBmb250LXNpemU6IDAuODMzMzMzMzNlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU3LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU3IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplOCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplOCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplOSxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplOSB7XG4gIGZvbnQtc2l6ZTogMS40NGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemUxMCB7XG4gIGZvbnQtc2l6ZTogMS43MjgzMzMzM2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTExLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemUxMSB7XG4gIGZvbnQtc2l6ZTogMi4wNzMzMzMzM2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTEge1xuICBmb250LXNpemU6IDAuMzQ3MjIyMjJlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemUyLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUyIHtcbiAgZm9udC1zaXplOiAwLjQxNjY2NjY3ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplMyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMC40ODYxMTExMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTQsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTQge1xuICBmb250LXNpemU6IDAuNTU1NTU1NTZlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU1LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU1IHtcbiAgZm9udC1zaXplOiAwLjYyNWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTYsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTYge1xuICBmb250LXNpemU6IDAuNjk0NDQ0NDRlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU3LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU3IHtcbiAgZm9udC1zaXplOiAwLjgzMzMzMzMzZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplOCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplOCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTksXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTkge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUxMCB7XG4gIGZvbnQtc2l6ZTogMS40NDAyNzc3OGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTExLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUxMSB7XG4gIGZvbnQtc2l6ZTogMS43Mjc3Nzc3OGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTEge1xuICBmb250LXNpemU6IDAuMjg5MzUxODVlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemUyLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemUyIHtcbiAgZm9udC1zaXplOiAwLjM0NzIyMjIyZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMC40MDUwOTI1OWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTQsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTQge1xuICBmb250LXNpemU6IDAuNDYyOTYyOTZlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemU1LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemU1IHtcbiAgZm9udC1zaXplOiAwLjUyMDgzMzMzZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplNixcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMC41Nzg3MDM3ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplNyxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplNyB7XG4gIGZvbnQtc2l6ZTogMC42OTQ0NDQ0NGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTgsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTgge1xuICBmb250LXNpemU6IDAuODMzMzMzMzNlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemU5LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemU5IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMTAsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTEwIHtcbiAgZm9udC1zaXplOiAxLjIwMDIzMTQ4ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTExIHtcbiAgZm9udC1zaXplOiAxLjQzOTgxNDgxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemUxIHtcbiAgZm9udC1zaXplOiAwLjI0MTA4MDA0ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTIsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemUyIHtcbiAgZm9udC1zaXplOiAwLjI4OTI5NjA1ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTMsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemUzIHtcbiAgZm9udC1zaXplOiAwLjMzNzUxMjA1ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTQsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU0IHtcbiAgZm9udC1zaXplOiAwLjM4NTcyODA2ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTUsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU1IHtcbiAgZm9udC1zaXplOiAwLjQzMzk0NDA3ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTYsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU2IHtcbiAgZm9udC1zaXplOiAwLjQ4MjE2MDA4ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTcsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU3IHtcbiAgZm9udC1zaXplOiAwLjU3ODU5MjA5ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTgsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU4IHtcbiAgZm9udC1zaXplOiAwLjY5NDMxMDUxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTksXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU5IHtcbiAgZm9udC1zaXplOiAwLjgzMzE3MjYxZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTEwLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMTAge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplMTEsXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemUxMSB7XG4gIGZvbnQtc2l6ZTogMS4xOTk2MTQyN2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemUxLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplMSB7XG4gIGZvbnQtc2l6ZTogMC4yMDA5NjQ2M2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemUyLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplMiB7XG4gIGZvbnQtc2l6ZTogMC4yNDExNTc1NmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemUzLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplMyB7XG4gIGZvbnQtc2l6ZTogMC4yODEzNTA0OGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemU0LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplNCB7XG4gIGZvbnQtc2l6ZTogMC4zMjE1NDM0MWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemU1LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplNSB7XG4gIGZvbnQtc2l6ZTogMC4zNjE3MzYzM2VtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemU2LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplNiB7XG4gIGZvbnQtc2l6ZTogMC40MDE5MjkyNmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemU3LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplNyB7XG4gIGZvbnQtc2l6ZTogMC40ODIzMTUxMWVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemU4LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplOCB7XG4gIGZvbnQtc2l6ZTogMC41Nzg3NzgxNGVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemU5LFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplOSB7XG4gIGZvbnQtc2l6ZTogMC42OTQ1MzM3NmVtO1xufVxuLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTExLnNpemUxMCxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMTEuc2l6ZTEwIHtcbiAgZm9udC1zaXplOiAwLjgzMzYwMTI5ZW07XG59XG4ua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTEuc2l6ZTExLFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMS5zaXplMTEge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5rYXRleCAuZGVsaW1zaXppbmcuc2l6ZTEge1xuICBmb250LWZhbWlseTogS2FUZVhfU2l6ZTE7XG59XG4ua2F0ZXggLmRlbGltc2l6aW5nLnNpemUyIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX1NpemUyO1xufVxuLmthdGV4IC5kZWxpbXNpemluZy5zaXplMyB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMztcbn1cbi5rYXRleCAuZGVsaW1zaXppbmcuc2l6ZTQge1xuICBmb250LWZhbWlseTogS2FUZVhfU2l6ZTQ7XG59XG4ua2F0ZXggLmRlbGltc2l6aW5nLm11bHQgLmRlbGltLXNpemUxID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMTtcbn1cbi5rYXRleCAuZGVsaW1zaXppbmcubXVsdCAuZGVsaW0tc2l6ZTQgPiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IEthVGVYX1NpemU0O1xufVxuLmthdGV4IC5udWxsZGVsaW1pdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMC4xMmVtO1xufVxuLmthdGV4IC5kZWxpbWNlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5rYXRleCAub3Atc3ltYm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmthdGV4IC5vcC1zeW1ib2wuc21hbGwtb3Age1xuICBmb250LWZhbWlseTogS2FUZVhfU2l6ZTE7XG59XG4ua2F0ZXggLm9wLXN5bWJvbC5sYXJnZS1vcCB7XG4gIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMjtcbn1cbi5rYXRleCAub3AtbGltaXRzID4gLnZsaXN0LXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ua2F0ZXggLmFjY2VudCA+IC52bGlzdC10IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmthdGV4IC5hY2NlbnQgLmFjY2VudC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmthdGV4IC5hY2NlbnQgLmFjY2VudC1ib2R5Om5vdCguYWNjZW50LWZ1bGwpIHtcbiAgd2lkdGg6IDA7XG59XG4ua2F0ZXggLm92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5rYXRleCAubXRhYmxlIC52ZXJ0aWNhbC1zZXBhcmF0b3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAtMC4wMjVlbTtcbiAgYm9yZGVyLXJpZ2h0OiAwLjA1ZW0gc29saWQ7XG4gIG1pbi13aWR0aDogMXB4O1xufVxuLmthdGV4IC5tdGFibGUgLnZzLWRhc2hlZCB7XG4gIGJvcmRlci1yaWdodDogMC4wNWVtIGRhc2hlZDtcbn1cbi5rYXRleCAubXRhYmxlIC5hcnJheWNvbHNlcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5rYXRleCAubXRhYmxlIC5jb2wtYWxpZ24tYyA+IC52bGlzdC10IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmthdGV4IC5tdGFibGUgLmNvbC1hbGlnbi1sID4gLnZsaXN0LXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmthdGV4IC5tdGFibGUgLmNvbC1hbGlnbi1yID4gLnZsaXN0LXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5rYXRleCAuc3ZnLWFsaWduIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5rYXRleCBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xuICBmaWxsLXJ1bGU6IG5vbnplcm87XG4gIGZpbGwtb3BhY2l0eTogMTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBzdHJva2UtbGluZWNhcDogYnV0dDtcbiAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBzdHJva2Utb3BhY2l0eTogMTtcbn1cbi5rYXRleCBzdmcgcGF0aCB7XG4gIHN0cm9rZTogbm9uZTtcbn1cbi5rYXRleCBpbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBtYXgtaGVpZ2h0OiBub25lO1xufVxuLmthdGV4IC5zdHJldGNoeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmthdGV4IC5zdHJldGNoeTo6YmVmb3JlLFxuLmthdGV4IC5zdHJldGNoeTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuLmthdGV4IC5oaWRlLXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmthdGV4IC5oYWxmYXJyb3ctbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwLjIlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmthdGV4IC5oYWxmYXJyb3ctcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTAuMiU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ua2F0ZXggLmJyYWNlLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyNS4xJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5rYXRleCAuYnJhY2UtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ua2F0ZXggLmJyYWNlLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDI1LjElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmthdGV4IC54LWFycm93LXBhZCB7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG59XG4ua2F0ZXggLngtYXJyb3csXG4ua2F0ZXggLm1vdmVyLFxuLmthdGV4IC5tdW5kZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ua2F0ZXggLmJveHBhZCB7XG4gIHBhZGRpbmc6IDAgMC4zZW0gMCAwLjNlbTtcbn1cbi5rYXRleCAuZmJveCxcbi5rYXRleCAuZmNvbG9yYm94IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAwLjA0ZW0gc29saWQ7XG59XG4ua2F0ZXggLmNhbmNlbC1wYWQge1xuICBwYWRkaW5nOiAwIDAuMmVtIDAgMC4yZW07XG59XG4ua2F0ZXggLmNhbmNlbC1sYXAge1xuICBtYXJnaW4tbGVmdDogLTAuMmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0wLjJlbTtcbn1cbi5rYXRleCAuc291dCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjA4ZW07XG59XG4ua2F0ZXgtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ua2F0ZXgtZGlzcGxheSA+IC5rYXRleCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ua2F0ZXgtZGlzcGxheSA+IC5rYXRleCA+IC5rYXRleC1odG1sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5rYXRleC1kaXNwbGF5ID4gLmthdGV4ID4gLmthdGV4LWh0bWwgPiAudGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5rYXRleC1kaXNwbGF5LmxlcW5vID4gLmthdGV4ID4gLmthdGV4LWh0bWwgPiAudGFnIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG59XG4ua2F0ZXgtZGlzcGxheS5mbGVxbiA+IC5rYXRleCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leonardo.oliveira\Documents\Pessoal\projects\organize-github\Faculdade\T2-POII\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map