(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"QtH+":function(e,t,n){"use strict";n.r(t),n.d(t,"CssInterpreter",function(){return p});var i=n("rE2o"),o=(n.n(i),n("ioFf")),r=(n.n(o),n("Z2Ku")),s=(n.n(r),n("L9s1")),a=(n.n(s),n("rGqo")),l=(n.n(a),n("yt8O")),c=(n.n(l),n("Btvt")),u=(n.n(c),n("RW0V")),f=(n.n(u),n("RsvN")),y=n("mKb9");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d,m,b,p=(d=E,(m=[{key:"getSetOfElements",value:function(){return this.elements}},{key:"addToElement",value:function(e,t){!0===this.checkIfElementExistsInSet(e)&&this.addPropertiesToElement(e,t),this.addElementToSetWithProperties(e,t)}},{key:"initializeSetOfElements",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=Object.create(t);Object.defineProperty(this,"elements",{value:n,writable:!0})}},{key:"initializeStyles",value:function(e){var t=0<arguments.length&&void 0!==e?e:[],n=Object.create(t);Object.defineProperty(this,"styles",{value:n,writable:!0})}},{key:"addElementToSetWithProperties",value:function(e,t){var n=Object.create(t);Object.defineProperty(this.elements,e,{value:n,writable:!0})}},{key:"addPropertiesToElement",value:function(e,t){var n=this.getSetOfElements();Object(f.safeForEach)(t,function(e,t){Object.defineProperty(n,e,{value:t,writable:!0})})}},{key:"addPropertyToElement",value:function(e,t,n){Object.defineProperty(this.elements[e],t,{value:n,writable:!0})}},{key:"add",value:function(i,e){var o=this;if(1!=(void 0===e)){var t=void 0!==document.querySelector(i),n=this.getSetOfElements()[i];0!=t&&(1==(void 0===n)&&this.addElementToSetWithProperties(i,{}),Object(f.safeForEach)(e,function(e,t){var n="set"+Object(y.fromCamelCaseToPascalCase)(e);1!=("function"===h(o[n]))?o.addPropertyToElement(i,e,t):o[n](i,t)}))}}},{key:"setRowsMargin",value:function(e,t){var n=e+" .row:not(:first-of-type)",i={marginTop:t};this.add(n,i)}},{key:"checkIfElementExistsInSet",value:function(e){return!0===Object.keys(this.elements).includes(e)}},{key:"getStyles",value:function(){var n=this;Object(f.safeForEach)(n.elements,function(e,t){n.stylesheet=[].concat(n.stylesheet,[e+"{"]),Object(f.safeForEach)(t,function(e,t){n.stylesheet=[].concat(n.stylesheet,[e+":"+t+";"])}),n.stylesheet=[].concat(n.stylesheet,["}"])})}}])&&v(d.prototype,m),void(b&&v(d,b)),E);function E(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),this.initializeSetOfElements(),this.initializeStyles(),this.stylesheet=[]}}}]);