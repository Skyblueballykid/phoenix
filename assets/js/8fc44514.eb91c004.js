"use strict";(self.webpackChunk_phoenix_docs=self.webpackChunk_phoenix_docs||[]).push([[683],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},d="Modal",p={unversionedId:"api/modal",id:"api/modal",title:"Modal",description:"Use Modal to display content as modal windows (in front of all other windows). Modals can be used to display icons and/or text for visual cues. An input modal can be used to input text for example to give commands. Properties defined as dynamic can be altered while the modal is displayed.",source:"@site/docs/api/17-modal.md",sourceDirName:"api",slug:"/api/modal",permalink:"/phoenix/api/modal",editUrl:"https://github.com/kasper/phoenix/tree/master/docs/docs/api/17-modal.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"sidebar",previous:{title:"Image",permalink:"/phoenix/api/image"},next:{title:"Screen",permalink:"/phoenix/api/screen"}},s={},m=[{value:"Interface",id:"interface",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"Instance Properties",id:"instance-properties",level:2},{value:"3.0.0+",id:"300",level:3},{value:"Constructor",id:"constructor",level:2},{value:"Instance Methods",id:"instance-methods",level:2},{value:"3.0.0+",id:"300-1",level:3},{value:"Example",id:"example",level:2}],u={toc:m};function c(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modal"},"Modal"),(0,o.kt)("p",null,"Use Modal to display content as modal windows (in front of all other windows). Modals can be used to display icons and/or text for visual cues. An input modal can be used to input text for example to give commands. Properties defined as dynamic can be altered while the modal is displayed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example icon modal",src:n(4185).Z+"#example",width:"256",height:"210"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Above:")," Light modal with icon"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example text modal",src:n(2317).Z+"#example",width:"442",height:"210"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Above:")," Dark modal with icon and text"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example input modal",src:n(2807).Z+"#example",width:"1476",height:"210"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Above:")," Light input modal with icon"),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Modal implements Identifiable\n\n  static Modal build(Map<String, AnyObject> properties)\n\n  property Point origin\n  property double duration\n  property double animationDuration\n  property double weight\n  property String appearance\n  property boolean hasShadow\n  property Image icon\n  property String text\n  property String textAlignment\n  property String font\n  property boolean isInput\n  property String inputPlaceholder\n  property Function textDidChange\n\n  constructor Modal Modal()\n  void setTextColour(double red, double green, double blue, double alpha) // or setTextColor(...)\n  Rectangle frame()\n  void show()\n  void close()\n\nend\n")),(0,o.kt)("h2",{id:"static-methods"},"Static Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build(Map<String, AnyObject> properties)")," builds a modal with the specified properties and returns it, ",(0,o.kt)("inlineCode",{parentName:"li"},"origin")," should be a function that receives the frame for the modal as the only argument and returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"Point")," object which will be set as the origin for the modal")),(0,o.kt)("h2",{id:"instance-properties"},"Instance Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"origin")," dynamic property for the origin of the modal, the enclosed properties are read-only so you must pass an object for this property, bottom left based origin, by default ",(0,o.kt)("inlineCode",{parentName:"li"},"(0, 0)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"duration")," property for the duration (in seconds) before automatically closing the modal, if the duration is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," the modal will remain open until closed, by default ",(0,o.kt)("inlineCode",{parentName:"li"},"0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animationDuration")," property for the animation duration (in seconds) for showing and closing the modal, if the duration is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," the animation will be disabled, by default ",(0,o.kt)("inlineCode",{parentName:"li"},"0.2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"weight")," dynamic property for the weight of the modal (in points), by default ",(0,o.kt)("inlineCode",{parentName:"li"},"24")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appearance")," property for the appearance of the modal (",(0,o.kt)("inlineCode",{parentName:"li"},"dark|light|transparent"),"), by default ",(0,o.kt)("inlineCode",{parentName:"li"},"dark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"icon")," dynamic property for the icon displayed in the modal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," dynamic property for the text displayed in the modal")),(0,o.kt)("h3",{id:"300"},"3.0.0+"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hasShadow")," property for whether the modal has a shadow, by default ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"textAlignment")," property for the alignment of the text (",(0,o.kt)("inlineCode",{parentName:"li"},"left|right|centre|center"),"), by default ",(0,o.kt)("inlineCode",{parentName:"li"},"left")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"font")," dynamic property for the font name used for the text, by default ",(0,o.kt)("inlineCode",{parentName:"li"},"System")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isInput")," property for whether the modal behaves as an input modal, by default ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inputPlaceholder")," property for the placeholder string that will be displayed when the input is empty, by default empty"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"textDidChange")," callback function to call when the input modal\u2019s text field value changes, receives the value as the first argument for the callback")),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new Modal()")," constructs and returns a new modal")),(0,o.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"frame()")," returns the frame for the modal, the frame is adjusted for the current content, therefore you must first set the weight, icon and text to get an accurate frame, an input modal has a fixed width of 600, bottom left based origin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"show()")," shows the modal, you must set at least an icon or text for the modal to be displayed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"close()")," closes the modal")),(0,o.kt)("h3",{id:"300-1"},"3.0.0+"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTextColour(double red, double green, double blue, double alpha)")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"setTextColor(...)")," sets a custom text colour with the given RGBA values, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"setTextColor(34, 139, 34, 1)"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Build and show a modal for half a second\nModal.build({\n  duration: 0.5,\n  weight: 48,\n  appearance: 'dark',\n  icon: App.get('Phoenix').icon(),\n  text: 'Hello World!',\n}).show();\n\n// Show an input modal in the middle of the main screen\nconst screenFrame = Screen.main().flippedVisibleFrame();\nconst modal = new Modal();\nmodal.isInput = true;\nmodal.appearance = 'light';\nmodal.origin = {\n  x: screenFrame.width / 2 - modal.frame().width / 2,\n  y: screenFrame.height / 2 - modal.frame().height / 2,\n};\nmodal.textDidChange = (value) => {\n  console.log('Text did change:', value);\n};\nmodal.show();\n")))}c.isMDXComponent=!0},4185:function(e,t,n){t.Z=n.p+"assets/images/icon-modal-d070606dba73679e8d48ab2b78da5bf9.png"},2807:function(e,t,n){t.Z=n.p+"assets/images/input-modal-31bb9e80c88cd6fa3e30be2a8d3c18c2.png"},2317:function(e,t,n){t.Z=n.p+"assets/images/text-modal-c9cf695930c458d2975eafa44a174f3b.png"}}]);