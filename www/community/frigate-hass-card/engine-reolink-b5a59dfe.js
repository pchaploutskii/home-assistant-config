import{l as e,e5 as t,ed as a,e8 as n,ei as s,ee as i,dR as r,d5 as o,e7 as c,e6 as l,ej as u,ea as h,eb as d,ef as g,ek as m,dd as _,df as p}from"./card-4e88bdfb.js";import{B as y,a as f,i as w,g as C}from"./within-dates-545c5d93.js";import{C as M}from"./engine-86b0096c.js";import{p as k}from"./parse-e098fe54.js";import{e as D}from"./endOfDay-a3114e3f.js";import"./engine-generic-16943492.js";import"./media-c9012082.js";class b extends t{}class x extends y{constructor(){super(...arguments),this._channel=null}async initialize(e){return await super.initialize(e),this._initializeChannel(),this}_initializeChannel(){const t=this._entity?.unique_id,a=t?String(t).match(/(.*)_(?<channel>\d+)/):null,n=a&&a.groups?.channel?Number(a.groups.channel):null;if(null===n)throw new b(e("error.camera_initialization_reolink"),this.getConfig());this._channel=n}getChannel(){return this._channel}getProxyConfig(){return{...super.getProxyConfig(),media:"auto"===this._config.proxy.media||this._config.proxy.media,ssl_verification:"auto"!==this._config.proxy.ssl_verification&&this._config.proxy.ssl_verification,ssl_ciphers:"auto"===this._config.proxy.ssl_ciphers?"intermediate":this._config.proxy.ssl_ciphers}}}class v{static isReolinkEventQueryResults(e){return e.engine===n.Reolink&&e.type===d.Event}}class E extends f{constructor(){super(...arguments),this._cache=new a}getEngineType(){return n.Reolink}_reolinkFileMetadataGenerator(e,t,a){
/* istanbul ignore next: This situation cannot happen as the directory would
        be rejected by _reolinkDirectoryMetadataGenerator if there was no start date
        -- @preserve */
if(!a?._metadata?.startDate||t.media_class!==s)return null;const n=t.title.split(/ +/);if(2!==n.length)return null;const o=k(n[0],"HH:mm:ss",a._metadata.startDate);if(!i(o))return null;const c=n[1].match(/(?<hours>\d+):(?<minutes>\d+):(?<seconds>\d+)/),l=c?.groups?{hours:Number(c.groups.hours),minutes:Number(c.groups.minutes),seconds:Number(c.groups.seconds)}:null;return{cameraID:e,startDate:o,endDate:l?r(o,l):o}}_reolinkDirectoryMetadataGenerator(e,t){const a=k(t.title,"yyyy/M/d",new Date);return i(a)?{cameraID:e,startDate:o(a),endDate:D(a)}:null}_reolinkCameraMetadataGenerator(e){const t=e.media_content_id.match(/^media-source:\/\/reolink\/CAM\|(?<configEntryID>.+)\|(?<channel>\d+)$/);return t?.groups?{configEntryID:t.groups.configEntryID,channel:Number(t.groups.channel)}:null}async createCamera(e,t){const a=new x(t,this,{capabilities:new c({"favorite-events":!1,"favorite-recordings":!1,clips:!0,live:!0,menu:!0,recordings:!1,seek:!1,snapshots:!1,substream:!0,ptz:l(t)??void 0},{disable:t.capabilities?.disable,disableExcept:t.capabilities?.disable_except}),eventCallback:this._eventCallback});return await a.initialize({entityRegistryManager:this._entityRegistryManager,hass:e,stateWatcher:this._stateWatcher})}async _getMatchingDirectories(e,t,a,n){const s=t.getConfig(),i=t.getEntity(),r=i?.config_entry_id;if(null===t.getChannel()||!r)return null;const o=await this._browseMediaManager.walkBrowseMedias(e,[{targets:["media-source://reolink"],metadataGenerator:(e,t)=>this._reolinkCameraMetadataGenerator(e),matcher:e=>e._metadata?.channel===t.getChannel()&&e._metadata?.configEntryID===r}],{...!1!==n?.useCache&&{cache:this._cache}});return o?.length?await this._browseMediaManager.walkBrowseMedias(e,[{targets:[`media-source://reolink/RES|${r}|${t.getChannel()}|`+("low"===s.reolink?.media_resolution?"sub":"main")],metadataGenerator:(e,a)=>this._reolinkDirectoryMetadataGenerator(t.getID(),e),matcher:e=>e.can_expand&&w(e,a?.start,a?.end),sorter:e=>u(e)}],{...!1!==n?.useCache&&{cache:this._cache}}):null}async getEvents(e,t,a,s){if(a.favorite||a.tags?.size||a.what?.size||a.where?.size||a.hasSnapshot)return null;const i=new Map,r=async r=>{const o={...a,cameraIDs:new Set([r])},c=s?.useCache??1?this._requestCache.get(o):null;if(c)return void i.set(o,c);const l=t.getCamera(r),h=l&&l instanceof x?await this._getMatchingDirectories(e,l,o,s):null,g=o.limit??M;let m=[];h?.length&&(m=await this._browseMediaManager.walkBrowseMedias(e,[{targets:h,concurrency:1,metadataGenerator:(e,t)=>this._reolinkFileMetadataGenerator(r,e,t),earlyExit:e=>e.length>=g,matcher:e=>!e.can_expand&&w(e,o.start,o.end),sorter:e=>u(e)}],{...!1!==s?.useCache&&{cache:this._cache}}));const p=_(m,(e=>e._metadata?.startDate),"desc").slice(0,g),y={type:d.Event,engine:n.Reolink,browseMedia:p};(s?.useCache??1)&&this._requestCache.set(o,{...y,cached:!0},y.expiry),i.set(o,y)};return await h(a.cameraIDs,(e=>r(e))),i}generateMediaFromEvents(e,t,a,n){return v.isReolinkEventQueryResults(n)?C(n.browseMedia):null}async getMediaMetadata(e,t,a,s){const i=new Map,o=s?.useCache??1?this._requestCache.get(a):null;if(o)return i.set(a,o),i;const c=new Set,l=async a=>{const n=t.getCamera(a);if(!(n&&n instanceof x))return;const i=await this._getMatchingDirectories(e,n,null,s);for(const e of i??[])
/* istanbul ignore next: This situation cannot happen as the directory
                will not match without metadata -- @preserve */
e._metadata&&c.add(p(e._metadata?.startDate))};await h(a.cameraIDs,(e=>l(e)));const u={type:d.MediaMetadata,engine:n.Reolink,metadata:{...c.size&&{days:c}},expiry:r(new Date,{seconds:g}),cached:!1};return(s?.useCache??1)&&this._requestCache.set(a,{...u,cached:!0},u.expiry),i.set(a,u),i}getCameraMetadata(e,t){return{...super.getCameraMetadata(e,t),engineLogo:m}}getCameraEndpoints(e,t){const a=e.reolink?.url?{endpoint:e.reolink.url}:null;return{...super.getCameraEndpoints(e,t),...a&&{ui:a}}}}export{E as ReolinkCameraManagerEngine,v as ReolinkQueryResultsClassifier};
