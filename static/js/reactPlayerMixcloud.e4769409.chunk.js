(self.webpackChunkananya_portfolio=self.webpackChunkananya_portfolio||[]).push([[667],{2732:function(e,n,t){var r,o=t(1109).default,a=t(4575).default,u=t(3913).default,l=t(1506).default,i=t(2205).default,c=t(9842).default,f=t(3269).default,s=Object.create,p=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,v=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var o,a=f(d(n));try{var u=function(){var a=o.value;m.call(e,a)||a===t||p(e,a,{get:function(){return n[a]},enumerable:!(r=y(n,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)u()}catch(l){a.e(l)}finally{a.f()}}return e},g=function(e,n,t){return function(e,n,t){n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},k={};!function(e,n){for(var t in n)p(e,t,{get:n[t],enumerable:!0})}(k,{default:function(){return O}}),e.exports=(r=k,h(p({},"__esModule",{value:!0}),r));var b=function(e,n,t){return t=null!=e?s(v(e)):{},h(!n&&e&&e.__esModule?t:p(t,"default",{value:e,enumerable:!0}),e)}(t(2791)),P=t(135),w=t(365),O=function(e){"use strict";i(t,e);var n=c(t);function t(){var e;return a(this,t),e=n.apply(this,arguments),g(l(e),"callPlayer",P.callPlayer),g(l(e),"duration",null),g(l(e),"currentTime",null),g(l(e),"secondsLoaded",null),g(l(e),"mute",(function(){})),g(l(e),"unmute",(function(){})),g(l(e),"ref",(function(n){e.iframe=n})),e}return u(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;(0,P.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((function(e){n.player=e.PlayerWidget(n.iframe),n.player.ready.then((function(){n.player.events.play.on(n.props.onPlay),n.player.events.pause.on(n.props.onPause),n.player.events.ended.on(n.props.onEnded),n.player.events.error.on(n.props.error),n.player.events.progress.on((function(e,t){n.currentTime=e,n.duration=t})),n.props.onReady()}))}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),n||this.pause()}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,n=e.url,t=e.config,r=n.match(w.MATCH_URL_MIXCLOUD)[1],a=(0,P.queryString)(o(o({},t.options),{},{feed:"/".concat(r,"/")}));return b.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(a),frameBorder:"0",allow:"autoplay"})}}]),t}(b.Component);g(O,"displayName","Mixcloud"),g(O,"canPlay",w.canPlay.mixcloud),g(O,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerMixcloud.e4769409.chunk.js.map