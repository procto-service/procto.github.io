(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"29IL":function(e,t,n){e.exports=n.p+"static/revo-ed5392634dda18ae009d93b0d4369d17.png"},"3qTx":function(e,t,n){e.exports=n.p+"static/exhaust-b1b8f8dca6938aa88c6df58df5f9755d.jpg"},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,i=n("q1tI"),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),g.canUseDOM?t(l):n&&(l=n(l))}var g=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(g,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(g,"canUseDOM",c),g}}},"9QgT":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzYiCiAgIHZlcnNpb249IjEuMSIKICAgaGVpZ2h0PSIzNnB4IgogICB3aWR0aD0iMzZweCIKICAgZmlsbD0iYmxhY2siCiAgIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMCIgLz4KICA8cGF0aAogICAgIGlkPSJwYXRoMiIKICAgICBmaWxsPSJub25lIgogICAgIGQ9Ik0wIDBoMjR2MjRIMFYweiIgLz4KICA8cGF0aAogICAgIGlkPSJwYXRoNCIKICAgICBkPSJNIDIyLDEyIEMgMjIsNi40OCAxNy41MiwyIDEyLDIgNi40OCwyIDIsNi40OCAyLDEyIGMgMCw1LjUyIDQuNDgsMTAgMTAsMTAgNS41MiwwIDEwLC00LjQ4IDEwLC0xMCB6IiAvPgogIDxwYXRoCiAgICAgaWQ9InBhdGgyLTciCiAgICAgZD0ibSAzNS4wODQ3NDYsLTE5LjMyMjAzNCBoIDI0IFYgNC42Nzc5NjYzIGggLTI0IHoiCiAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MSIgLz4KICA8ZwogICAgIGlkPSJnODcxIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojZmFmYWZhO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjQ1OTYzMjE2O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icmVjdDg0NiIKICAgICAgIHdpZHRoPSI0IgogICAgICAgaGVpZ2h0PSIzLjMzMzMzMzMiCiAgICAgICB4PSI4LjA4OTE5NjIiCiAgICAgICB5PSIxMC4zMzMzMzMiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZhZmFmYTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS42MjU1MDc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJwYXRoODY3IgogICAgICAgZD0ibSA1My42NDQ3MDUsMTcuMjE1NzA5IDAsLTguMTM5MTIwNSA3LjA0ODY4NSw0LjA2OTU2MDUgeiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNTY3NDgxNzMsMCwwLDAuOTgyOTA3MTksLTE4LjQwMjIwNywtMC45MjE0NDQwNykiIC8+CiAgPC9nPgo8L3N2Zz4K"},Bl7J:function(e,t,n){"use strict";var r=n("f98A"),i=n("q1tI"),a=n.n(i),o=n("N5D6"),c=n("3Pch"),l=n("k5ss"),u=n("W/9C");var s=["502.jpg","504.jpg","506.jpg","521.jpg","522.jpg","532.jpg","536.jpg","537.jpg","538.jpg","539.jpg","540.jpg"].map((function(e){return"/static/images/gallery/procto_main_slider/"+e})),g=function(e){var t=e.direction,n=e.clickFunction;e.glyph;return a.a.createElement("div",{className:"slide-arrow-"+t,onClick:n})},I=function(e){var t,r;function i(t){var n;(n=e.call(this)||this).maxThumbs=4,n.thumbsCount=n.maxThumbs,n.nextThumbs=function(){var e=n.state.startThumbIndex,t=n.state.thumbsCount;0===e&&t>s.length||(e+t>s.length-1?e=0:e+=t,t=e+t>s.length-1?s.length-e:n.maxThumbs,n.setState({thumbsCount:t,startThumbIndex:e}))},n.previousThumbs=function(){var e=n.state.startThumbIndex,t=n.state.thumbsCount;0===e&&t>s.length||(e-t>=0?e-=t=n.maxThumbs:s.length%n.maxThumbs!=0&&(e=s.length-1-Math.floor(s.length/n.maxThumbs),t=s.length-e),n.setState({thumbsCount:t,startThumbIndex:e}))},n.nextSlide=function(){var e=s.length-1,t=n.state.currentImageIndex,r=t===e?0:t+1;n.setState({currentImageIndex:r})},n.previousSlide=function(){var e=s.length-1,t=n.state.currentImageIndex,r=0===t?e:t-1;n.setState({currentImageIndex:r})},n.handleThumbClick=function(e){var t=parseInt(e.target.getAttribute("data-key"));n.setState({activeThumbIndex:t,currentImageIndex:t})},n.handleThumbKeyDown=function(e){};var r=t.showThumbs,i=void 0===r||r;return n.state={currentImageIndex:0,activeThumbIndex:0,startThumbIndex:0,thumbsCount:4,showThumbs:i,clickedThumb:!1},n}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=i.prototype;return o.componentDidMount=function(){},o.nextSliderImg=function(){},o.previousSliderImg=function(){},o.render=function(){var e=this,t=(this.state.showThumbs,function(e){var t=""+e.url;return a.a.createElement("img",{className:"image-slide",style:{height:"100%",width:"auto"},src:t})});return a.a.createElement("div",null,a.a.createElement("div",{className:"carousel"},a.a.createElement(g,{direction:"left",clickFunction:this.previousSlide,glyph:"◀"}),a.a.createElement("div",{className:"slider-img"},a.a.createElement(t,{url:s[this.state.currentImageIndex]})),a.a.createElement(g,{direction:"right",clickFunction:this.nextSlide,glyph:"▶"})),function(){for(var t=e.state.startThumbIndex,r=e.state.thumbsCount,i=s.slice(t,t+r),o=e.state.activeThumbIndex,c=[],l=0;l<=s.length;l++)c[l]=l==o?"active":"";if(e.state.showThumbs)return a.a.createElement("div",{className:"thumbs",style:{display:"flex",justifyContent:"space-between",width:"75%",margin:"0 auto"}},a.a.createElement("img",{src:n("ZIcu"),alt:"logo",className:"",onClick:e.previousThumbs}),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"8px 0",margin:"0 auto"}},i.map((function(n,r){return a.a.createElement("img",{src:n,className:c[t+r],"data-key":e.state.startThumbIndex+r,style:{maxWidth:"100%",maxHeight:"100%",margin:"0 4px"},onClick:function(t){return e.handleThumbClick(t)}})}))),a.a.createElement("img",{src:n("9QgT"),alt:"logo",onClick:e.nextThumbs}))}())},o.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},i}(a.a.Component);t.a=function(e){e.children,r.data;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"wrapper"},a.a.createElement(o.a,null),a.a.createElement(c.a,null),a.a.createElement(l.a,null),a.a.createElement("div",{className:"margin-bg3"}),a.a.createElement("div",{className:"main-home"},a.a.createElement(I,{showThumbs:!0}),a.a.createElement("div",{className:"services-container"},a.a.createElement("div",{className:"services-item"},a.a.createElement("img",{src:n("3qTx"),style:{width:"100%"},alt:"logo"}),a.a.createElement("div",null,"Изготовление выхлопных систем")),a.a.createElement("div",{className:"services-item"},a.a.createElement("img",{src:n("29IL"),style:{width:"100%"},alt:"logo"}),a.a.createElement("div",null,"CHIP TUNING REVO")),a.a.createElement("div",{className:"services-item"},a.a.createElement("img",{src:n("F1q8"),style:{width:"100%"},alt:"logo"}),a.a.createElement("div",null,"Ремонт Обслуживание, диагностика, экспресс замена масел, фильтров, колодок")),a.a.createElement("div",{className:"services-item"},a.a.createElement("img",{src:n("CqC1"),style:{width:"100%"},alt:"logo"}),a.a.createElement("div",null,"Покраска авто"))),a.a.createElement("div",{className:"main-article",style:{padding:"10px",backgroundColor:"white",color:"black",margin:"20px"}},"Главная ",a.a.createElement("br",null)," ",a.a.createElement("h3",null,"Добро пожаловать на сайт PROCTO Service.")," ",a.a.createElement("h4",null,"О нас"),"Мы одно из лучших тьюнинг СТО в Одессе.Работаем с 2014 г. Специалиируемся на чип тьюнинге, выхлопных системах, авто из США, покраске, карбоне, подушках безопасности и сервисном обслуживаниии. Имеем большой опыт работы с VAG. Мы официальные представители компании REVO, которая являеться лучшим разработчиком чип тьюнинг прошивок в мире.",a.a.createElement("h4",null,"Наши достижения")," Мы прошили более 150 авто, изготовили более 100 выхлопных систем, привезли более 150 авто из США. Также мы являемся призерами по DRAG RACING в классах PRO AWD и STREET."),a.a.createElement("div",{className:"services-container"},a.a.createElement("div",{className:"services-item"},a.a.createElement("div",null,a.a.createElement("img",{src:n("Jw4i"),style:{width:"100%"},alt:"logo"})),"Авто из США"),a.a.createElement("div",{className:"services-item"},a.a.createElement("div",null,a.a.createElement("img",{src:n("zLC9"),style:{width:"100%"},alt:"logo"})),a.a.createElement("div",null,"Карбон")),a.a.createElement("div",{className:"services-item"},a.a.createElement("div",null,a.a.createElement("img",{src:n("RQqt"),style:{width:"100%"},alt:"logo"})),a.a.createElement("div",null,"Безопасность")))),a.a.createElement("div",{className:"margin-bg5"}),a.a.createElement(u.a,null)))}},CqC1:function(e,t,n){e.exports=n.p+"static/painting_640x640-c15018797b75d1882138593d63647df9.png"},F1q8:function(e,t,n){e.exports=n.p+"static/service-df5dc53a69907b715c903ef584e9add1.jpg"},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Jw4i:function(e,t,n){e.exports=n.p+"static/usa_car-3408eb896209ab567033df33f12f39b7.jpg"},RQqt:function(e,t,n){e.exports=n.p+"static/airbag-c002fdd04a947d8b31a516734269d53a.jpg"},ZIcu:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDI0IDI0IgogICBmaWxsPSJibGFjayIKICAgd2lkdGg9IjM2cHgiCiAgIGhlaWdodD0iMzZweCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNiIKICAgc29kaXBvZGk6ZG9jbmFtZT0iYXJyb3dfbGVmdC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTEyIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTAiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjExMzciCiAgICAgaWQ9Im5hbWVkdmlldzgiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHNob3dndWlkZXM9InRydWUiCiAgICAgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTp6b29tPSI5LjI3MDk1NTYiCiAgICAgaW5rc2NhcGU6Y3g9IjE5LjQ1NzgzNSIKICAgICBpbmtzY2FwZTpjeT0iMzguNDEyMzI2IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc2Ij4KICAgIDxzb2RpcG9kaTpndWlkZQogICAgICAgcG9zaXRpb249Ii04LjIzNzI4ODEsLTEzLjYyNzExOSIKICAgICAgIG9yaWVudGF0aW9uPSIxLDAiCiAgICAgICBpZD0iZ3VpZGU4NjMiCiAgICAgICBpbmtzY2FwZTpsb2NrZWQ9ImZhbHNlIiAvPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iLTMuNTg0NzQ1OCwtMC43MTE4NjQ0MSIKICAgICAgIG9yaWVudGF0aW9uPSIwLDEiCiAgICAgICBpZD0iZ3VpZGU4NjUiCiAgICAgICBpbmtzY2FwZTpsb2NrZWQ9ImZhbHNlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxwYXRoCiAgICAgZD0iTTAgMGgyNHYyNEgwVjB6IgogICAgIGZpbGw9Im5vbmUiCiAgICAgaWQ9InBhdGgyIiAvPgogIDxwYXRoCiAgICAgZD0iTSAyMiwxMiBDIDIyLDYuNDggMTcuNTIsMiAxMiwyIDYuNDgsMiAyLDYuNDggMiwxMiBjIDAsNS41MiA0LjQ4LDEwIDEwLDEwIDUuNTIsMCAxMCwtNC40OCAxMCwtMTAgeiIKICAgICBpZD0icGF0aDQiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzb2RpcG9kaTpub2RldHlwZXM9InNzc3NzIiAvPgogIDxwYXRoCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoxIgogICAgIGQ9Im0gMzUuMDg0NzQ2LC0xOS4zMjIwMzQgaCAyNCBWIDQuNjc3OTY2MyBoIC0yNCB6IgogICAgIGlkPSJwYXRoMi03IiAvPgogIDxnCiAgICAgaWQ9Imc4NzEiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsMjQuMTI5Mzc5LDApIj4KICAgIDxyZWN0CiAgICAgICB5PSIxMC4zMzMzMzMiCiAgICAgICB4PSI4LjA4OTE5NjIiCiAgICAgICBoZWlnaHQ9IjMuMzMzMzMzMyIKICAgICAgIHdpZHRoPSI0IgogICAgICAgaWQ9InJlY3Q4NDYiCiAgICAgICBzdHlsZT0iZmlsbDojZmFmYWZhO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjQ1OTYzMjE2O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8cGF0aAogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC41Njc0ODE3MywwLDAsMC45ODI5MDcxOSwtMTguNDAyMjA3LC0wLjkyMTQ0NDA3KSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTAuNjY2NjY2NDIiCiAgICAgICBkPSJtIDUzLjY0NDcwNSwxNy4yMTU3MDkgMCwtOC4xMzkxMjA1IDcuMDQ4Njg1LDQuMDY5NTYwNSB6IgogICAgICAgaW5rc2NhcGU6cmFuZG9taXplZD0iMCIKICAgICAgIGlua3NjYXBlOnJvdW5kZWQ9IjAiCiAgICAgICBpbmtzY2FwZTpmbGF0c2lkZWQ9InRydWUiCiAgICAgICBzb2RpcG9kaTphcmcyPSIzLjE0MTU5MjciCiAgICAgICBzb2RpcG9kaTphcmcxPSIyLjA5NDM5NTEiCiAgICAgICBzb2RpcG9kaTpyMj0iMi4zNDk1NjE3IgogICAgICAgc29kaXBvZGk6cjE9IjQuNjk5MTIzNCIKICAgICAgIHNvZGlwb2RpOmN5PSIxMy4xNDYxNDkiCiAgICAgICBzb2RpcG9kaTpjeD0iNTUuOTk0MjY3IgogICAgICAgc29kaXBvZGk6c2lkZXM9IjMiCiAgICAgICBpZD0icGF0aDg2NyIKICAgICAgIHN0eWxlPSJmaWxsOiNmYWZhZmE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNjI1NTA3O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJzdGFyIiAvPgogIDwvZz4KPC9zdmc+Cg=="},ZhWT:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(i&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],n[u[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),i=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return i(this,e,arguments[1])}})},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return pe}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,i,a,o,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),g=n("ZhWT"),I=n.n(g),m=n("q1tI"),d=n.n(m),p=n("MgzW"),C=n.n(p),A="bodyAttributes",f="htmlAttributes",b="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(h).map((function(e){return h[e]})),"charset"),v="cssText",T="href",w="http-equiv",j="innerHTML",N="itemprop",M="name",Z="property",E="rel",S="src",x="target",O={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},G="defaultTitle",D="defer",L="encodeSpecialCharacters",z="onChangeClientState",R="titleTemplate",k=Object.keys(O).reduce((function(e,t){return e[O[t]]=t,e}),{}),Y=[h.NOSCRIPT,h.SCRIPT,h.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=_(e,h.TITLE),n=_(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,G);return t||r||void 0},U=function(e){return _(e,z)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],l=c.toLowerCase();-1===t.indexOf(l)||n===E&&"canonical"===e[n].toLowerCase()||l===E&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==j&&c!==v&&c!==N||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],l=C()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,g=e.title,I=e.titleAttributes;le(h.BODY,r),le(h.HTML,i),ce(g,I);var m={baseTag:ue(h.BASE,n),linkTags:ue(h.LINK,a),metaTags:ue(h.META,o),noscriptTags:ue(h.NOSCRIPT,c),scriptTags:ue(h.SCRIPT,u),styleTags:ue(h.STYLE,s)},d={},p={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(p[e]=m[e].oldTags)})),t&&t(),l(e,d,p)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(h.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var g=a.length-1;g>=0;g--)n.removeAttribute(a[g]);i.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[O[n]||n]=e[n],t}),t)},Ie=function(e,t,n){switch(e){case h.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,i=ge(n,r),[d.a.createElement(h.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+J(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case f:return{toComponent:function(){return ge(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=O[e]||e;if(n===j||n===v){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),d.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===j||e===v)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,g=void 0===s?"":s,I=e.titleAttributes;return{base:Ie(h.BASE,t,r),bodyAttributes:Ie(A,n,r),htmlAttributes:Ie(f,i,r),link:Ie(h.LINK,a,r),meta:Ie(h.META,o,r),noscript:Ie(h.NOSCRIPT,c,r),script:Ie(h.SCRIPT,l,r),style:Ie(h.STYLE,u,r),title:Ie(h.TITLE,{title:g,titleAttributes:I},r)}},de=s()((function(e){return{baseTag:Q([T,x],e),bodyAttributes:V(A,e),defer:_(e,D),encode:_(e,L),htmlAttributes:V(f,e),linkTags:q(h.LINK,[E,T],e),metaTags:q(h.META,[M,y,w,Z,N],e),noscriptTags:q(h.NOSCRIPT,[j],e),onChangeClientState:U(e),scriptTags:q(h.SCRIPT,[S,j],e),styleTags:q(h.STYLE,[v],e),title:K(e),titleAttributes:V(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),pe=(i=de,o=a=function(e){function t(){return P(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!I()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case h.TITLE:return H({},i,((t={})[r.type]=o,t.titleAttributes=H({},a),t));case h.BODY:return H({},i,{bodyAttributes:H({},a)});case h.HTML:return H({},i,{htmlAttributes:H({},a)})}return H({},i,((n={})[r.type]=H({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)}(F(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(i,r)},B(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(d.a.Component),a.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);pe.renderStatic=pe.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("51K9"),i=n("q1tI"),a=n.n(i),o=n("qhky");function c(e){var t=e.description,n=e.lang,i=e.meta,c=e.title,l=r.data.site,u=t||l.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLC9:function(e,t,n){e.exports=n.p+"static/carbon_640x640-85875906bc8a200daaf7f1ed658a6490.png"}}]);
//# sourceMappingURL=11a94a3e73140724a8de4b52d94986fe0f3aacd5-2437f93f4ba4192e45d2.js.map