import{dn as e,cT as t,dc as i,x as s,dy as a,dz as o,dA as r,dx as d,r as n,eR as h,_ as l,t as u}from"./card-5c354d47.js";import{h as c,s as v,d as y,c as p}from"./media-ccb0cb67.js";import{m}from"./audio-cf3a75aa.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function f(e,t){return(i,s,a)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?i:a??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _(i,s,{get(){let i=e.call(this);return void 0===i&&(i=o(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return _(i,s,{get(){return o(this)}})}}var g="img,\nvideo {\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--frigate-card-media-layout-view-box-top, 0%) var(--frigate-card-media-layout-view-box-right, 0%) var(--frigate-card-media-layout-view-box-bottom, 0%) var(--frigate-card-media-layout-view-box-left, 0%));\n}";customElements.whenDefined("ha-hls-player").then((()=>{let _=class extends(customElements.get("ha-hls-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(c(this._video),this._video.currentTime=e)}async setControls(e){this._video&&v(this._video,e??this.controls)}isPaused(){return this._video?.paused??!0}async getScreenshotURL(){return this._video?e(this._video):null}render(){if(this._error){if(this._errorIsFatal)return y(this),t({type:"error",message:this._error,context:{entity_id:this.entityid}});i(this._error,console.error)}return s`
        <video
          id="video"
          .poster=${this.posterUrl}
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&c(this._video,p)}}
          @loadeddata=${e=>this._loadedDataHandler(e)}
          @volumechange=${()=>a(this)}
          @play=${()=>o(this)}
          @pause=${()=>r(this)}
        ></video>
      `}_loadedDataHandler(e){super._loadedData(),d(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:m(this._video)},technology:["hls"]})}static get styles(){return[super.styles,n(g),h`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};l([f("#video")],_.prototype,"_video",void 0),_=l([u("frigate-card-ha-hls-player")],_)}));export{g as c,f as e};
