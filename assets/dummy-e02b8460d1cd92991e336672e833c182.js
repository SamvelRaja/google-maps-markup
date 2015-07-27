define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/google-map/component",["exports","ember"],function(e,t){"use strict";var n=t["default"].on;e["default"]=t["default"].Component.extend({map:null,center:new google.maps.LatLng(42.43540000000001,-71.11295997924805),initMap:n("didInsertElement",function(){var e=this.get("center"),t=this.get("zoom"),n=this.$("#map").get(0);this.setup(n,e,t)}),setup:function(e,t,n){var a;google.maps.visualRefresh=!0;var r={zoom:n||10,maxZoom:19,center:t};return a=new google.maps.Map(e,r),window.gmap=a,this.setProperties({map:a}),a}})}),define("dummy/components/google-map/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:3,column:0},end:{line:7,column:0}},moduleName:"dummy/components/google-map/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"id","close-streetview");var a=e.createTextNode("\n    Back to Map\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(a,"class"),r[1]=e.createElementMorph(a),r},statements:[["attribute","class",["concat",["google-map-button ",["subexpr","if",[["get","panel",["loc",[null,[4,57],[4,62]]]],"offset"],[],["loc",[null,[4,52],[4,73]]]]]]],["element","action",["closeStreetView"],[],["loc",[null,[4,75],[4,103]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"dummy/components/google-map/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"id","map"),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["block","if",[["get","panoramaVisible",["loc",[null,[3,6],[3,21]]]]],[],0,null,["loc",[null,[3,0],[7,7]]]]],locals:[],templates:[e]}}())}),define("dummy/components/google-maps-markup/component",["exports","google-maps-markup/components/google-maps-markup/component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/markup-result-item/component",["exports","google-maps-markup/components/markup-result-item/component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/helpers/get",["exports","google-maps-markup/helpers/get"],function(e,t){"use strict";e["default"]=t["default"],e.get=t.get}),define("dummy/helpers/is-equal",["exports","google-maps-markup/helpers/is-equal"],function(e,t){"use strict";e["default"]=t["default"],e.isEqual=t.isEqual}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){if(n["default"].exportApplicationGlobal!==!1){var r,l=n["default"].exportApplicationGlobal;r="string"==typeof l?l:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=a,a.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var l=a(e.toString());n["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("google-maps-markup");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6 col-sm-12");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6 col-sm-12");var l=e.createTextNode("\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2,1]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(a,[1]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3]),1,1),r[2]=e.createMorphAt(t,4,4,n),r},statements:[["inline","google-maps-markup",[],["map",["subexpr","@mut",[["get","map",["loc",[null,[6,31],[6,34]]]]],[],[]]],["loc",[null,[6,6],[6,36]]]],["inline","google-map",[],["map",["subexpr","@mut",[["get","map",["loc",[null,[9,23],[9,26]]]]],[],[]]],["loc",[null,[9,6],[9,28]]]],["content","outlet",["loc",[null,[14,0],[14,10]]]]],locals:[],templates:[]}}())}),define("dummy/utils/create-circle",["exports","google-maps-markup/utils/create-circle"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/drawing-modes",["exports","google-maps-markup/utils/drawing-modes"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/get-measurement",["exports","google-maps-markup/utils/get-measurement"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/modes",["exports","google-maps-markup/utils/modes"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/number-commas",["exports","google-maps-markup/utils/number-commas"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/overlay-to-feature",["exports","google-maps-markup/utils/overlay-to-feature"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/shape-area",["exports","google-maps-markup/utils/shape-area"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"google-maps-markup",version:"1.1.1+ed5a877f"});