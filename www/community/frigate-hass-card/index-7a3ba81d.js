import{cO as e,_ as i,n as a,b as t,t as r,a as o,cP as s,cL as n,cQ as d,cR as g,x as c,cS as h,l,cT as m,e as v,r as p,cU as u,cV as C,cW as f,cX as M,cY as I,cZ as _,c_ as w,c$ as b,d0 as y,d1 as L}from"./card-f9848764.js";import{u as A,i as j}from"./media-layout-a13b0a54.js";import{p as D,d as $,M as E,A as S,a as N,b as z}from"./media-99567527.js";class k{constructor(e){this._inBackground=!1,this._lastMediaLoadedInfo=null,this._handleMediaLoaded=e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()},this._host=e,e.addController(this),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}hostConnected(){this._intersectionObserver.observe(this._host),this._host.addEventListener("frigate-card:media:loaded",this._handleMediaLoaded)}hostDisconnected(){this._intersectionObserver.disconnect(),this._host.removeEventListener("frigate-card:media:loaded",this._handleMediaLoaded)}isInBackground(){return this._inBackground}_intersectionHandler(i){const a=this._inBackground;this._inBackground=!i.some((e=>e.isIntersecting)),!this._inBackground&&this._lastMediaLoadedInfo&&e(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),a!==this._inBackground&&this._host.requestUpdate()}}let T=class extends o{constructor(){super(...arguments),this.load=!1,this.label="",this._isVideoMediaLoaded=!1,this._hasProviderError=!1,this._refProvider=s(),this._importPromises=[]}async play(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await D(this,this._refProvider.value)}async pause(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.pause())}async mute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.mute())}async unmute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.unmute())}isMuted(){return this._refProvider.value?.isMuted()??!0}async seek(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.seek(e))}async setControls(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.setControls(e))}isPaused(){return this._refProvider.value?.isPaused()??!0}async getScreenshotURL(){return await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.getScreenshotURL())??null}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":n.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!(!this.cameraConfig?.camera_entity||!this.hass||!this.liveConfig?.show_image_during_load||this._hasProviderError)}disconnectedCallback(){this._isVideoMediaLoaded=!1}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0}_providerErrorHandler(){this._hasProviderError=!0}willUpdate(e){if(e.has("load")&&(this.load||(this._isVideoMediaLoaded=!1,d(this))),e.has("liveConfig")&&(this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./image-23452f55.js")),this.liveConfig?.zoomable&&this._importPromises.push(import("./zoomer-5fb6e6aa.js"))),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?this._importPromises.push(import("./jsmpeg-f5d9641e.js")):"ha"===e?this._importPromises.push(import("./ha-0d7ddc07.js")):"webrtc-card"===e?this._importPromises.push(import("./webrtc-card-9a708813.js")):"image"===e?this._importPromises.push(import("./image-23452f55.js")):"go2rtc"===e&&this._importPromises.push(import("./index-2c7636cf.js")),A(this,this.cameraConfig?.dimensions?.layout),this.style.aspectRatio=g({ratio:this.cameraConfig?.dimensions?.aspect_ratio})}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}_useZoomIfRequired(e){return this.liveConfig?.zoomable?c` <frigate-card-zoomer
          .defaultSettings=${j([this.cameraConfig?.dimensions?.layout],(()=>this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${this.zoomSettings}
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(!(this.load&&this.hass&&this.liveConfig&&this.cameraConfig))return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider(),i=!this._isVideoMediaLoaded&&this._shouldShowImageDuringLoading(),a={hidden:i};if("ha"===e||"image"===e||this.cameraConfig?.camera_entity&&this.cameraConfig.always_error_if_entity_unavailable){if(!this.cameraConfig?.camera_entity)return $(this),h({message:l("error.no_live_camera"),type:"error",icon:"mdi:camera",context:this.cameraConfig});const e=this.hass.states[this.cameraConfig.camera_entity];if(!e)return $(this),h({message:l("error.live_camera_not_found"),type:"error",icon:"mdi:camera",context:this.cameraConfig});if("unavailable"===e.state)return $(this),d(this),h({message:`${l("error.live_camera_unavailable")}${this.label?`: ${this.label}`:""}`,type:"info",icon:"mdi:cctv-off",dotdotdot:!0})}return c`${this._useZoomIfRequired(c`
      ${i||"image"===e?c` <frigate-card-live-image
            ${m(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @frigate-card:live:error=${()=>this._providerErrorHandler()}
            @frigate-card:media:loaded=${i=>{"image"===e?this._videoMediaShowHandler():i.stopPropagation()}}
          >
          </frigate-card-live-image>`:c``}
      ${"ha"===e?c` <frigate-card-live-ha
            ${m(this._refProvider)}
            class=${v(a)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            ?controls=${this.liveConfig.controls.builtin}
            @frigate-card:live:error=${()=>this._providerErrorHandler()}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-ha>`:"go2rtc"===e?c`<frigate-card-live-go2rtc
              ${m(this._refProvider)}
              class=${v(a)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              .microphoneStream=${this.microphoneStream}
              .microphoneConfig=${this.liveConfig.microphone}
              ?controls=${this.liveConfig.controls.builtin}
              @frigate-card:live:error=${()=>this._providerErrorHandler()}
              @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
            >
            </frigate-card-live-go2rtc>`:"webrtc-card"===e?c`<frigate-card-live-webrtc-card
                ${m(this._refProvider)}
                class=${v(a)}
                .hass=${this.hass}
                .cameraConfig=${this.cameraConfig}
                .cameraEndpoints=${this.cameraEndpoints}
                .cardWideConfig=${this.cardWideConfig}
                ?controls=${this.liveConfig.controls.builtin}
                @frigate-card:live:error=${()=>this._providerErrorHandler()}
                @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
              >
              </frigate-card-live-webrtc-card>`:"jsmpeg"===e?c` <frigate-card-live-jsmpeg
                  ${m(this._refProvider)}
                  class=${v(a)}
                  .hass=${this.hass}
                  .cameraConfig=${this.cameraConfig}
                  .cameraEndpoints=${this.cameraEndpoints}
                  .cardWideConfig=${this.cardWideConfig}
                  @frigate-card:live:error=${()=>this._providerErrorHandler()}
                  @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
                >
                </frigate-card-live-jsmpeg>`:c``}
    `)}
    ${i&&!this._isVideoMediaLoaded?c`<frigate-card-icon
          title=${l("error.awaiting_live")}
          .icon=${{icon:"mdi:progress-helper"}}
        ></frigate-card-icon>`:""} `}static get styles(){return p(':host {\n  background-color: var(--primary-background-color);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1NDEsIDIwMjItMTItMDEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpcmlzLW91dGxpbmUuc3ZnIgogICBpZD0ic3ZnNCIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2I5M2UzZSIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjYwNzg0MzE0IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTkuMzc4NTc4IgogICAgIGlua3NjYXBlOmN4PSI4LjI4MjM0MTUiCiAgICAgaW5rc2NhcGU6Y3k9IjEyLjM1OTAwOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTUyNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTA4MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjI3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8ZwogICAgIGlkPSJnMTExOSIKICAgICBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuMDU7ZmlsbDojZmZmZmZmIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNDk3ODI4MjU7c3Ryb2tlLXdpZHRoOjEuMzk3Mjk7b3BhY2l0eTowLjUiCiAgICAgICBpZD0icGF0aDE3MCIKICAgICAgIGN4PSIxMiIKICAgICAgIGN5PSIxMiIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJCYWNrZ3JvdW5kIgogICAgICAgcj0iMTEuMjUiIC8+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMy43MzAwMDEsMTUgOS44MzAwMDAzLDIxLjc2IEMgMTAuNTMsMjEuOTEgMTEuMjUsMjIgMTIsMjIgYyAyLjQwMDAwMSwwIDQuNiwtMC44NSA2LjMyLC0yLjI1IEwgMTQuNjYwMDAxLDEzLjQgTSAyLjQ2MDAwMDMsMTUgYyAwLjkyLDIuOTIgMy4xNSw1LjI2IDUuOTksNi4zNCBMIDEyLjEyLDE1IG0gLTMuNTc5OTk5NywtMyAtMy45LC02Ljc0OTk5OTYgYyAtMS42NCwxLjc0OTk5OSAtMi42NCw0LjEzOTk5OTMgLTIuNjQsNi43NDk5OTk2IDAsMC42OCAwLjA3LDEuMzUgMC4yLDIgaCA3LjQ5IE0gMjEuOCw5Ljk5OTk5OTcgSCAxNC4zMTAwMDEgTCAxNC42MDAwMDEsMTAuNSAxOS4zNiwxOC43NSBDIDIxLDE2Ljk3IDIyLDE0LjYgMjIsMTIgMjIsMTEuMzEgMjEuOTMsMTAuNjQgMjEuOCw5Ljk5OTk5OTcgbSAtMC4yNiwtMSBDIDIwLjYyLDYuMDcwMDAwNSAxOC4zOSwzLjc0MDAwMDIgMTUuNTUwMDAxLDIuNjYwMDAwMiBMIDExLjg4LDguOTk5OTk5NyBNIDkuNDAwMDAwMywxMC41IDE0LjE3MDAwMSwyLjI0MDAwMDIgYyAtMC43LC0wLjE1IC0xLjQyMDAwMSwtMC4yNCAtMi4xNzAwMDEsLTAuMjQgLTIuMzk5OTk5NywwIC00LjU5OTk5OTcsMC44NCAtNi4zMTk5OTk3LDIuMjUwMDAwMyBsIDMuNjYsNi4zNDk5OTk1IHoiCiAgICAgICBpZD0icGF0aDIiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iSXJpcyIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MC41MDIyMTAwMjtmaWxsOiNmZmZmZmY7b3BhY2l0eTowLjc1IiAvPgogIDwvZz4KPC9zdmc+Cg==");\n  background-size: 10%;\n  background-position: center;\n}\n\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.hidden {\n  display: none;\n}\n\nfrigate-card-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: var(--primary-color);\n}')}};i([a({attribute:!1})],T.prototype,"hass",void 0),i([a({attribute:!1})],T.prototype,"cameraConfig",void 0),i([a({attribute:!1})],T.prototype,"cameraEndpoints",void 0),i([a({attribute:!1})],T.prototype,"liveConfig",void 0),i([a({attribute:!0,type:Boolean})],T.prototype,"load",void 0),i([a({attribute:!1})],T.prototype,"label",void 0),i([a({attribute:!1})],T.prototype,"cardWideConfig",void 0),i([a({attribute:!1})],T.prototype,"microphoneStream",void 0),i([a({attribute:!1})],T.prototype,"zoomSettings",void 0),i([t()],T.prototype,"_isVideoMediaLoaded",void 0),i([t()],T.prototype,"_hasProviderError",void 0),T=i([r("frigate-card-live-provider")],T);const O="frigate-card-live-provider";let P=class extends o{constructor(){super(...arguments),this._cameraToSlide={},this._refPTZControl=s(),this._refCarousel=s(),this._mediaActionsController=new E,this._mediaHasLoaded=!1}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.overriddenLiveConfig?.transition_effect??n.live.transition_effect}_getSelectedCameraIndex(){if(this.viewFilterCameraID)return 0;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=this.viewManagerEpoch?.manager.getView();return e?.size&&i?Math.max(0,Array.from(e).indexOf(i.camera)):0}willUpdate(e){(e.has("microphoneManager")||e.has("overriddenLiveConfig"))&&this._mediaActionsController.setOptions({playerSelector:O,...this.overriddenLiveConfig?.auto_play&&{autoPlayConditions:this.overriddenLiveConfig.auto_play},...this.overriddenLiveConfig?.auto_pause&&{autoPauseConditions:this.overriddenLiveConfig.auto_pause},...this.overriddenLiveConfig?.auto_mute&&{autoMuteConditions:this.overriddenLiveConfig.auto_mute},...this.overriddenLiveConfig?.auto_unmute&&{autoUnmuteConditions:this.overriddenLiveConfig.auto_unmute},...(this.overriddenLiveConfig?.auto_unmute||this.overriddenLiveConfig?.auto_mute)&&{microphoneManager:this.microphoneManager,microphoneMuteSeconds:this.overriddenLiveConfig.microphone.mute_after_microphone_mute_seconds}})}_getPlugins(){return[S({...this.overriddenLiveConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadOrUnloadSlide("load",e,i)},lazyUnloadConditions:this.overriddenLiveConfig?.lazy_unload,lazyUnloadCallback:(e,i)=>this._lazyloadOrUnloadSlide("unload",e,i)}),N(),z()]}_getLazyLoadCount(){return!1===this.overriddenLiveConfig?.lazy_load?null:0}_getSlides(){if(!this.cameraManager)return[[],{}];const e=this.viewManagerEpoch?.manager.getView(),i=this.viewFilterCameraID?new Set([this.viewFilterCameraID]):this.cameraManager?.getStore().getCameraIDsWithCapability("live"),a=[],t={};for(const[r,o]of this.cameraManager.getStore().getCameraConfigEntries(i)){const i=this._getSubstreamCameraID(r,e),s=r===i?o:this.cameraManager?.getStore().getCameraConfig(i),n=s?this._renderLive(i,s):null;n&&(t[r]=a.length,a.push(n))}return[a,t]}_setViewHandler(e){const i=this.cameraManager?.getStore().getCameraIDsWithCapability("live");i?.size&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID([...i][e.detail.index])}_setViewCameraID(e){e&&this.viewManagerEpoch?.manager.setViewByParametersWithNewQuery({params:{camera:e}})}_lazyloadOrUnloadSlide(e,i,a){a instanceof HTMLSlotElement&&(a=a.assignedElements({flatten:!0})[0]);const t=a?.querySelector(O);t&&(t.load="load"===e)}_renderLive(e,i){if(!(this.overriddenLiveConfig&&this.nonOverriddenLiveConfig&&this.hass&&this.cameraManager&&this.conditionsManagerEpoch))return;let a=null;try{a=C(this.conditionsManagerEpoch.manager,{live:this.nonOverriddenLiveConfig},{configOverrides:this.overrides,stateOverrides:{camera:e},schema:f}).live}catch(e){return M(this,e)}const t=this.cameraManager.getCameraMetadata(e),r=this.viewManagerEpoch?.manager.getView();return c`
      <div class="embla__slide">
        <frigate-card-live-provider
          ?load=${!a.lazy_load}
          .microphoneStream=${r?.camera===e?this.microphoneManager?.getStream():void 0}
          .cameraConfig=${i}
          .cameraEndpoints=${j([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${t?.title??""}
          .liveConfig=${a}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
          .zoomSettings=${r?.context?.zoom?.[e]?.requested}
          @frigate-card:zoom:change=${i=>I(i,this.viewManagerEpoch?.manager,e)}
        >
        </frigate-card-live-provider>
      </div>
    `}_getSubstreamCameraID(e,i){return i?.context?.live?.overrides?.get(e)??e}_getCameraNeighbors(){const e=this.cameraManager?[...this.cameraManager?.getStore().getCameraIDsWithCapability("live")]:[],i=this.viewManagerEpoch?.manager.getView();if(this.viewFilterCameraID||e.length<=1||!i||!this.hass)return{};const a=this.viewFilterCameraID??i.camera,t=e.indexOf(a);if(t<0)return{};const r=e[t>0?t-1:e.length-1],o=e[t+1<e.length?t+1:0];return{previous:{id:r,metadata:r?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(r,i)):null},next:{id:o,metadata:o?this.cameraManager?.getCameraMetadata(this._getSubstreamCameraID(o,i)):null}}}_renderNextPrevious(e,i){const a=_(this),t="ltr"===a&&"left"===e||"rtl"===a&&"right"===e?i?.previous:i?.next;return c`<frigate-card-next-previous-control
      slot=${e}
      .hass=${this.hass}
      .side=${e}
      .controlConfig=${this.overriddenLiveConfig?.controls.next_previous}
      .label=${t?.metadata?.title??""}
      .icon=${t?.metadata?.icon}
      ?disabled=${!t}
      @click=${e=>{this._setViewCameraID(t?.id),w(e)}}
    >
    </frigate-card-next-previous-control>`}render(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.overriddenLiveConfig&&this.hass&&e&&this.cameraManager))return;const[i,a]=this._getSlides();if(this._cameraToSlide=a,!i.length)return;const t=i.length>1,r=this._getCameraNeighbors(),o=!(!this._mediaHasLoaded||this.viewFilterCameraID&&this.viewFilterCameraID!==e.camera||!1===e.context?.ptzControls?.enabled)&&e.context?.ptzControls?.enabled;return c`
      <frigate-card-carousel
        ${m(this._refCarousel)}
        .loop=${t}
        .dragEnabled=${t&&this.overriddenLiveConfig?.draggable}
        .plugins=${j([this.cameraManager,this.overriddenLiveConfig,this.microphoneManager],this._getPlugins.bind(this))}
        .selected=${this._getSelectedCameraIndex()}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:carousel:select=${this._setViewHandler.bind(this)}
        @frigate-card:media:loaded=${()=>{this._mediaHasLoaded=!0}}
        @frigate-card:media:unloaded=${()=>{this._mediaHasLoaded=!1}}
      >
        ${this._renderNextPrevious("left",r)}
        <!-- -->
        ${i}
        <!-- -->
        ${this._renderNextPrevious("right",r)}
      </frigate-card-carousel>
      <frigate-card-ptz
        .config=${this.overriddenLiveConfig.controls.ptz}
        .cameraManager=${this.cameraManager}
        .cameraID=${b(e,this.viewFilterCameraID)}
        .forceVisibility=${o}
      >
      </frigate-card-ptz>
    `}_setMediaTarget(){const e=this.viewManagerEpoch?.manager.getView(),i=this._getSelectedCameraIndex();this.viewFilterCameraID?this._mediaActionsController.setTarget(i,e?.camera===this.viewFilterCameraID):this._mediaActionsController.setTarget(i,!0)}updated(e){super.updated(e);let i=!1;!this._mediaActionsController.hasRoot()&&this._refCarousel.value&&(this._mediaActionsController.initialize(this._refCarousel.value),i=!0),(i||e.has("viewManagerEpoch"))&&this._setMediaTarget()}static get styles(){return p(":host {\n  display: block;\n  --video-max-height: none;\n}\n\n:host(:not([grid-id])) {\n  height: 100%;\n}\n\n:host([unselected]) frigate-card-carousel {\n  pointer-events: none;\n}\n\n.embla__slide {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  flex: 0 0 100%;\n}")}};i([a({attribute:!1})],P.prototype,"hass",void 0),i([a({attribute:!1})],P.prototype,"viewManagerEpoch",void 0),i([a({attribute:!1})],P.prototype,"nonOverriddenLiveConfig",void 0),i([a({attribute:!1})],P.prototype,"overriddenLiveConfig",void 0),i([a({attribute:!1,hasChanged:u})],P.prototype,"overrides",void 0),i([a({attribute:!1})],P.prototype,"conditionsManagerEpoch",void 0),i([a({attribute:!1})],P.prototype,"cardWideConfig",void 0),i([a({attribute:!1})],P.prototype,"cameraManager",void 0),i([a({attribute:!1})],P.prototype,"microphoneManager",void 0),i([a({attribute:!1})],P.prototype,"viewFilterCameraID",void 0),i([t()],P.prototype,"_mediaHasLoaded",void 0),P=i([r("frigate-card-live-carousel")],P);let x=class extends o{_renderCarousel(e){const i=this.viewManagerEpoch?.manager.getView(),a=e??i?.camera;return c`
      <frigate-card-live-carousel
        grid-id=${y(e)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
        .overriddenLiveConfig=${this.overriddenLiveConfig}
        .conditionsManagerEpoch=${this.conditionsManagerEpoch}
        .overrides=${this.overrides}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneManager=${this.microphoneManager}
        ?triggered=${a&&!!this.triggeredCameraIDs?.has(a)}
      >
      </frigate-card-live-carousel>
    `}_gridSelectCamera(e){this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e}})}_needsGrid(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=this.viewManagerEpoch?.manager.getView();return!!i?.isGrid()&&!!i?.supportsMultipleDisplayModes()&&!!e&&e.size>1}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-606174b6.js")}render(){if(!this.conditionsManagerEpoch||!this.nonOverriddenLiveConfig)return;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live");return e?.size&&this._needsGrid()?c`
      <frigate-card-media-grid
        .selected=${this.viewManagerEpoch?.manager.getView()?.camera}
        .displayConfig=${this.overriddenLiveConfig?.display}
        @frigate-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </frigate-card-media-grid>
    `:this._renderCarousel()}static get styles(){return p(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@keyframes warning-pulse {\n  0% {\n    border: solid 2px var(--frigate-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n  50% {\n    border: solid 2px var(--frigate-card-triggered-color-2, var(--warning-color));\n  }\n  100% {\n    border: solid 2px var(--frigate-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n}\nfrigate-card-live-carousel[triggered] {\n  animation: warning-pulse 5s infinite;\n}\n\nfrigate-card-live-carousel[selected] {\n  --frigate-card-triggered-color-1: var(--primary-color);\n}")}};i([a({attribute:!1})],x.prototype,"hass",void 0),i([a({attribute:!1})],x.prototype,"viewManagerEpoch",void 0),i([a({attribute:!1})],x.prototype,"nonOverriddenLiveConfig",void 0),i([a({attribute:!1})],x.prototype,"overriddenLiveConfig",void 0),i([a({attribute:!1,hasChanged:u})],x.prototype,"overrides",void 0),i([a({attribute:!1})],x.prototype,"conditionsManagerEpoch",void 0),i([a({attribute:!1})],x.prototype,"cardWideConfig",void 0),i([a({attribute:!1})],x.prototype,"cameraManager",void 0),i([a({attribute:!1})],x.prototype,"microphoneManager",void 0),i([a({attribute:!1})],x.prototype,"triggeredCameraIDs",void 0),x=i([r("frigate-card-live-grid")],x);let Z=class extends o{constructor(){super(...arguments),this._controller=new k(this)}render(){if(this.hass&&this.nonOverriddenLiveConfig&&this.cameraManager)return c`
      <frigate-card-live-grid
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
        .overriddenLiveConfig=${this.overriddenLiveConfig}
        .inBackground=${this._controller.isInBackground()}
        .conditionsManagerEpoch=${this.conditionsManagerEpoch}
        .overrides=${this.overrides}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneManager=${this.microphoneManager}
        .triggeredCameraIDs=${this.triggeredCameraIDs}
      >
      </frigate-card-live-grid>
    `}static get styles(){return p(L)}};i([a({attribute:!1})],Z.prototype,"conditionsManagerEpoch",void 0),i([a({attribute:!1})],Z.prototype,"hass",void 0),i([a({attribute:!1})],Z.prototype,"viewManagerEpoch",void 0),i([a({attribute:!1})],Z.prototype,"nonOverriddenLiveConfig",void 0),i([a({attribute:!1})],Z.prototype,"overriddenLiveConfig",void 0),i([a({attribute:!1,hasChanged:u})],Z.prototype,"overrides",void 0),i([a({attribute:!1})],Z.prototype,"cameraManager",void 0),i([a({attribute:!1})],Z.prototype,"cardWideConfig",void 0),i([a({attribute:!1})],Z.prototype,"microphoneManager",void 0),i([a({attribute:!1})],Z.prototype,"triggeredCameraIDs",void 0),Z=i([r("frigate-card-live")],Z);export{Z as FrigateCardLive};
