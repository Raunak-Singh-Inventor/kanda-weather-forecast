(this["webpackJsonpkanda-weather-forecast"]=this["webpackJsonpkanda-weather-forecast"]||[]).push([[0],{1909:function(e,t,a){},1911:function(e,t,a){},1912:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(53),i=a.n(n),s=(a.p,a(324),a(77)),o=a.n(s),l=a(131),d=a(35),u=a.p+"static/media/forecasts.18de50e9.txt",h=a(31),j=a(7),b=function(e){var t=Object(r.useState)({}),a=Object(d.a)(t,2),c=a[0],n=a[1];return Object(j.jsx)("div",{children:Object(j.jsxs)(h.Picklist,{style:{width:250},placeholder:"Select A Location",formatStyle:"large",onChange:function(t){n(t),e.onLocationChange(String(t.label).replace(",",""))},value:c,children:[Object(j.jsx)(h.Option,{name:"header",label:"Locations",variant:"header"}),e.locations.map((function(e,t){return Object(j.jsx)(h.Option,{name:String(t),label:e})}))]})})},m=function(e){var t=Object(r.useState)(new Date),a=Object(d.a)(t,2),c=a[0],n=a[1];return Object(j.jsx)("div",{children:Object(j.jsx)(h.DatePicker,{style:{width:250},formatStyle:"large",placeholder:"Select A Date",value:c,onChange:function(t){n(t),e.changed(t)}})})};a(1909);function p(e){return Object(j.jsxs)(h.Card,{className:"card",style:{borderColor:"purple",borderWidth:5,width:400},children:["Partly Cloudy"===e.userForecast.Condition&&e.isForecastPresent?Object(j.jsx)("h1",{style:{fontSize:200},children:"\u26c5"}):console.log(),"Cloudy"===e.userForecast.Condition&&e.isForecastPresent?Object(j.jsx)("h1",{style:{fontSize:200},children:"\u2601\ufe0f"}):console.log(),"Sunny"===e.userForecast.Condition&&e.isForecastPresent?Object(j.jsx)("h1",{style:{fontSize:200},children:"\u2600\ufe0f"}):console.log(),e.isForecastPresent?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontFamily:"ExoMedium"},className:"temp-text",children:e.userForecast.Temperature}),Object(j.jsx)("h1",{style:{fontFamily:"ExoMedium"},className:"cond-text",children:e.userForecast.Condition}),Object(j.jsxs)("h1",{style:{fontFamily:"ExoMedium"},className:"humidity-text",children:["\ud83d\udca7Humidity: ",e.userForecast.Humidity]}),Object(j.jsxs)("h1",{style:{fontFamily:"ExoMedium"},className:"rain-text",children:["\ud83c\udf27\ufe0fChance of Rain: ",e.userForecast.chanceOfRain]})]}):Object(j.jsx)("h1",{style:{fontFamily:"ExoMedium",fontSize:50},children:"We don't have data for that date and/or location"})]})}var O=a.p+"static/media/Flood.d82da8e0.png";function f(e){return console.log("Uyo, NG Soil Moisture Data: ",e.uyoNGsmData),console.log("Accra, GH Soil Moisture Data: ",e.accraGHsmData),"Uyo NG"===e.location&&"[object Object]"!==e.uyoNGsmData&&"undefined"!==e.uyoNGsmData?Object(j.jsxs)(h.Card,{style:{width:600,margin:15,borderColor:"purple",borderWidth:5},children:[Object(j.jsxs)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:["Soil Moisture: ",e.uyoNGsmData]}),e.uyoNGsmData>10?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"High Flood Risk"}),Object(j.jsx)("img",{style:{width:100,height:100},src:O})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"Low Flood Risk"}),Object(j.jsx)("h1",{style:{fontSize:100},children:"\ud83d\udc4d"})]})]}):"Accra GH"===e.location&&"[object Object]"!==e.accraGHsmData&&"undefined"!==e.accraGHsmData?Object(j.jsxs)(h.Card,{style:{width:600,margin:15,borderColor:"purple",borderWidth:5},children:[Object(j.jsxs)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:["Soil Moisture: ",e.accraGHsmData]}),e.accraGHsmData>10?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"High Flood Risk"}),Object(j.jsx)("img",{style:{width:100,height:100},src:O})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"Low Flood Risk"}),Object(j.jsx)("h1",{style:{fontSize:100},children:"\ud83d\udc4d"})]})]}):Object(j.jsx)(h.Card,{style:{width:600,height:100,margin:15,borderColor:"purple",borderWidth:5},children:Object(j.jsx)(h.Spinner,{size:"large"})})}var x=a.p+"static/media/GoodAirQuality.2bc89c4e.png",y=a.p+"static/media/BadAirQuality.26d6a4f2.png";function g(e){return Object(j.jsx)(h.Card,{style:{margin:15,borderColor:"purple",borderWidth:5},children:e.isForecastPresent?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:["\ud83d\udca8Wind: ",e.userForecast.Wind]}),"Unknown"!==e.userForecast.Wind?e.userForecast.Wind.match(/\d+/)>5?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"Good Air Quality"}),Object(j.jsx)("img",{style:{width:100,height:100},src:x})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"Bad Air Quality"}),Object(j.jsx)("img",{style:{width:100,height:100},src:y})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{fontSize:50,fontFamily:"ExoMedium"},children:"Air Quality: Unknown"}),Object(j.jsx)("h1",{style:{fontSize:100,fontFamily:"ExoMedium"},children:"\ud83e\udd14"})]})]}):Object(j.jsx)("h1",{style:{fontFamily:"ExoMedium",fontSize:50},children:"We don't have data for that date and/or location"})})}var _=function(e){return Object(j.jsx)("div",{id:"google_translate_element"})},F=a.p+"static/media/dayBackground.8066f63e.jpg",S=a.p+"static/media/nightBackground.a0ef28dc.jpg",v=(a(1910),a(1911),{rainbow:{palette:{brand:"rgba(197, 21, 234, 1)"}}});var w=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(!1),i=Object(d.a)(n,2),s=i[0],O=i[1],x=Object(r.useState)([]),y=Object(d.a)(x,2),w=y[0],C=y[1],M=Object(r.useState)(new Date),N=Object(d.a)(M,2),k=N[0],D=N[1],E=Object(r.useState)("?"),z=Object(d.a)(E,2),G=z[0],A=z[1],H=Object(r.useState)({}),P=Object(d.a)(H,2),W=P[0],L=P[1],R=Object(r.useState)(!1),J=Object(d.a)(R,2),B=J[0],Q=J[1],T=Object(r.useState)({}),U=Object(d.a)(T,2),I=U[0],K=U[1],Y=Object(r.useState)({}),q=Object(d.a)(Y,2),V=q[0],X=q[1],Z=Object(r.useState)(!1),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ae=Object(r.useState)(""),re=Object(d.a)(ae,2),ce=re[0],ne=re[1];return Object(r.useEffect)((function(){fetch(u).then((function(e){return e.text()})).then((function(e){var t=e.split("\n");t.unshift("");for(var a=[],r={},n=0;n<t.length;n++)""===t[n]?(r.Location=t[n+1].substr(0,t[n+1].indexOf(":")),r.Date=t[n+1].substr(t[n+1].indexOf(":")+2),r.Pressure=t[n+2].substr(t[n+2].indexOf(":")+2),r.Temperature=t[n+3].substr(t[n+3].indexOf(":")+2),r.Humidity=t[n+4].substr(t[n+4].indexOf(":")+2),r.Condition=t[n+5].substr(t[n+5].indexOf(":")+2),r.Wind=t[n+6].substr(t[n+6].indexOf(":")+2),r.chanceOfRain=t[n+7].substr(t[n+7].indexOf(":")+2),a.push(r)):r={};c(a),O(!0)}))}),[]),Object(r.useEffect)((function(){for(var e=[],t=0;t<a.length;t++)e.push(a[t].Location);C(Array.from(new Set(e)))}),[a]),Object(r.useEffect)((function(){for(var e=0;e<a.length;e++){if(!0===String(k).includes(String(a[e].Date).replace(",","").replace("January","Jan").replace("February","Feb").replace("March","Mar").replace("April","Apr").replace("June","Jun").replace("July","Jul").replace("August","Aug").replace("September","Sep").replace("October","Oct").replace("November","Nov").replace("December","Dec").replace(" 1 "," 01 ").replace(" 2 "," 02 ").replace(" 3 "," 03 ").replace(" 4 "," 04 ").replace(" 5 "," 05 ").replace(" 6 "," 06 ").replace(" 7 "," 07 ").replace(" 8 "," 08 ").replace(" 9 "," 09 "))&&G===a[e].Location.replace(",",""))return L(a[e]),void Q(!0);Q(!1)}}),[k,G,a]),Object(r.useEffect)((function(){var e=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();function t(){return(t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return K({}),"https://cors-anywhere.herokuapp.com/","https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.6901705_-0.2099204?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true",t.next=5,fetch("https://cors-anywhere.herokuapp.com/https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.6901705_-0.2099204?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true");case 5:return a=t.sent,t.next=8,a.json();case 8:a=t.sent,K(a.data[e+" 00:00:00+00:00"]);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return X({}),"https://cors-anywhere.herokuapp.com/","https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.0405866_7.9194225?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true",t.next=5,fetch("https://cors-anywhere.herokuapp.com/https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.0405866_7.9194225?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true");case 5:return a=t.sent,t.next=8,a.json();case 8:a=t.sent,X(a.data[e+" 00:00:00+01:00"]);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e=e.replace("-1","-01").replace("-2","-02").replace("-3","-03").replace("-4","-04").replace("-5","-05").replace("-6","-06").replace("-7","-07").replace("-8","-08").replace("-9","-09"),function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[k]),Object(r.useEffect)((function(){ne(ee?S:F)}),[ee]),s?Object(j.jsx)("div",{style:{height:1e3,backgroundImage:"url(".concat(ce,")")},children:Object(j.jsxs)(h.Application,{style:{textAlign:"center"},theme:v,children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsx)(_,{})}),Object(j.jsx)("h1",{className:"title col-md-6",children:"Kanda Weather Forecast"}),Object(j.jsxs)("div",{className:"col-md-3",children:[Object(j.jsx)(h.CheckboxToggle,{value:ee,onChange:function(){te(!ee)}}),ee?Object(j.jsx)("h1",{style:{fontSize:40},children:"\ud83c\udf1b"}):Object(j.jsx)("h1",{style:{fontSize:40},children:"\ud83c\udf1e"})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4"}),Object(j.jsx)("div",{className:"col-md-2",style:{marginRight:5},children:Object(j.jsx)(m,{changed:D})}),Object(j.jsx)("div",{className:"col-md-2",style:{marginLeft:5},children:Object(j.jsx)(b,{onLocationChange:function(e){A(e)},locations:w})}),Object(j.jsx)("div",{className:"col-md-4"})]}),Object(j.jsxs)("div",{className:"rainbow-align-content_center rainbow-p-around_medium",children:[Object(j.jsx)(p,{isForecastPresent:B,userForecast:W}),Object(j.jsxs)("div",{className:"rainbow-p-around_medium",children:[Object(j.jsx)(f,{uyoNGsmData:String(I),accraGHsmData:String(V),location:G}),Object(j.jsx)(g,{isForecastPresent:B,userForecast:W})]})]}),ee?Object(j.jsx)("h4",{style:{color:"white"},children:"Made with \u2764\ufe0f in React by Raunak Singh"}):Object(j.jsx)("h4",{children:"Made with \u2764\ufe0f in React by Raunak Singh"})]})}):s?void 0:Object(j.jsx)(h.Spinner,{size:"x-large"})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,1913)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),C()},226:function(e,t){},324:function(e,t,a){},754:function(e,t){},755:function(e,t){}},[[1912,1,2]]]);
//# sourceMappingURL=main.00a6ca9e.chunk.js.map