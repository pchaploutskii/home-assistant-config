var e={abort:"",confirmation:""},a={advanced_camera_card:"",advanced_camera_card_description:"",live:"En directe",no_media:"No hi ha suport per mostrar",recordings:"Enregistraments",version:"Versió"},i={cameras:{always_error_if_entity_unavailable:"",camera_entity:"Entitat de càmera",capabilities:{capabilities:{clips:"","favorite-events":"","favorite-recordings":"",live:"",menu:"",ptz:"",recordings:"",seek:"",snapshots:"",substream:""},disable:"",disable_except:"",editor_label:""},cast:{dashboard:{dashboard_path:"Ruta del tauler de control",view_path:"Ruta de la visualització"},editor_label:"Opcions d'emissió",method:"Mètode d'emissió",methods:{dashboard:"Tauler de control",standard:"Estàndard"}},dependencies:{all_cameras:"Mostra els esdeveniments de totes les càmeres amb aquesta càmera",cameras:"Mostra esdeveniments per a càmeres específiques amb aquesta càmera",editor_label:"Opcions de dependències"},dimensions:{aspect_ratio:"Relació d'aspecte estàtica",editor_label:"Dimensions de la càmera",layout:{editor_label:"Maquetació de la càmera",fit:"Ajust de la maquetació",fits:{contain:"Els mitjans multimèdia estan continguts/en bústia",cover:"El suport s'expandeix proporcionalment per cobrir la targeta",fill:"El suport s'estira per omplir la targeta"},pan:{x:"",y:""},position:{editor_label:"",x:"Percentatge d'emplaçament horitzontal",y:"Percentatge d'emplaçament vertical"},view_box:{bottom:"",editor_label:"",left:"",right:"",top:""},zoom:""}},engines:{editor_label:"Opcions del motor de càmera"},frigate:{camera_name:"Nom de la càmera de Frigate (detecció automàtica de l'entitat)",client_id:"Identificador de client de Frigate (per a > 1 servidor de Frigate)",editor_label:"Opcions de Frigate",labels:"Etiquetes de Frigate/filtres d'objectes",url:"URL del servidor de Frigate",zones:"Zones de Frigate"},go2rtc:{editor_label:"Opcions de go2rtc",modes:{editor_label:"Modes de go2rtc",mjpeg:"",mp4:"",mse:"",webrtc:""},stream:"nom del flux de go2rtc",url:""},icon:"Icona d'aquesta càmera (detecció automàtica des de l'entitat)",id:"Identificador únic per a aquesta càmera en aquesta targeta",image:{editor_label:"Opcions d'imatge",refresh_seconds:"Nombre de segons després dels quals actualitzar la imatge en directe (0=mai)",url:"URL de la imatge que cal utilitzar en lloc de la instantània de l'entitat de la càmera"},live_provider:"Proveïdor de visualització en directe per a aquesta càmera",live_provider_options:{editor_label:"Opcions de proveïdor en directe"},live_providers:{auto:"Automàtic",go2rtc:"",ha:"Transmissió de vídeo de Home Assistant (és a dir, HLS, LL-HLS, WebRTC mitjançant HA)",image:"Imatges de Home Assistant",jsmpeg:"","webrtc-card":"Targeta WebRTC (és a dir, la targeta WebRTC d'AlexxIT)"},motioneye:{editor_label:"Opcions de MotionEye",images:{directory_pattern:"Patró del directori d'imatges",file_pattern:"Patró de fitxer d'imatges"},movies:{directory_pattern:"Patró del directori de pel·lícules",file_pattern:"Patró de fitxer de pel·lícules"},url:"URL de la interfície d'usuari de MotionEye"},proxy:{dynamic:"",editor_label:"",media:{auto:"",editor_label:"",false:"",true:""},ssl_ciphers:{auto:"",default:"",editor_label:"",insecure:"",intermediate:"",modern:""},ssl_verification:{auto:"",editor_label:"",false:"",true:""}},reolink:{editor_label:"",media_resolution:{editor_label:"",high:"",low:""},url:""},title:"Títol d'aquesta càmera (detecció automàtica de l'entitat)",triggers:{editor_label:"Opcions d'activació",entities:"Activador d'altres entitats",events:{clips:"Esdeveniments amb nous clips",editor_label:"Activar esdeveniments",events:"Tots els esdeveniments",snapshots:"Esdeveniments amb noves instantànies"},motion:"Activa la detecció automàtica del sensor de moviment",occupancy:"Activa la detecció automàtica del sensor d'ocupació"},webrtc_card:{editor_label:"Opcions de la targeta WebRTC",entity:"Entitat de càmera de targeta WebRTC (no una càmera de Frigate)",url:"URL de la càmera de la targeta WebRTC"}},common:{controls:{builtin:"Controls de vídeo integrats",filter:{editor_label:"Filtre multimèdia",mode:"Mode de filtre",modes:{left:"Filtre multimèdia en un calaix a l'esquerra",none:"Sense filtre multimèdia",right:"Filtre multimèdia en un calaix a la dreta"}},next_previous:{editor_label:"Següent i anterior",size:"Mida del control següent i anterior en píxels",style:"Estil de control següent i anterior",styles:{chevrons:"Xebrons",icons:"Icones",none:"Cap",thumbnails:"Miniatures"}},thumbnails:{editor_label:"Miniatures",events_media_type:"Si voleu mostrar miniatures d'esdeveniments de clips o instantànies",events_media_types:{clips:"Miniatures de clips",snapshots:"Miniatures d'instantànies"},media_type:"Si voleu mostrar miniatures d'esdeveniments o enregistraments",media_types:{events:"Esdeveniments",recordings:"Enregistraments"},mode:"Mode de miniatures",modes:{above:"Miniatures a dalt",below:"Miniatures a baix",left:"Miniatures en un calaix a l'esquerra",none:"Sense miniatures",right:"Miniatures en un calaix a la dreta"},show_details:"Mostra els detalls amb miniatures",show_download_control:"Mostra el control de descàrrega a les miniatures",show_favorite_control:"Mostra el control preferit a les miniatures",show_timeline_control:"Mostra el control de la línia de temps a les miniatures",size:"Mida de les miniatures en píxels"},timeline:{editor_label:"Mini cronologia",format:{"24h":"",editor_label:""},mode:"Mode",modes:{above:"A dalt",below:"Baix",none:"Cap"},pan_mode:"Mode d'escombratge predeterminat",pan_modes:{pan:"Escombratge",seek:"Cerca d'escombratge en tots els mitjans","seek-in-camera":"Cerca d'escombratge només a la càmera seleccionada","seek-in-media":"Cerca d'escombratge només dins de l'element multimèdia seleccionat"}}},display:{editor_label:"Visualització",grid_columns:"Nombre exacte de columnes de la graella",grid_max_columns:"Nombre màxim de columnes de la graella",grid_selected_position:"",grid_selected_positions:{default:"",first:"",last:""},grid_selected_width_factor:"Augmenta l'amplada del suport multimèdia seleccionat en aquest factor",mode:"Mode"},image:{entity:"",entity_parameters:"",mode:"Mode de visualització d'imatges",modes:{camera:"Instantània de l'entitat de la càmera de Home Assistant",entity:"",screensaver:"",url:"Imatge arbitrària especificada per URL"},refresh_seconds:"Nombre de segons després dels quals cal actualitzar (0=mai)",url:"URL d'imatge estàtica per a la visualització d'imatges"},media_action_conditions:{all:"Totes les oportunitats",hidden:"A l'amagat del navegador/pestanya",microphone_mute:"Si el micròfon està en silenci",microphone_unmute:"Si el micròfon no està en silenci",never:"Mai",selected:"A la selecció",unselected:"En desselecció",visible:"En la visualització del navegador/pestanya"},timeline:{clustering_threshold:"El recompte d'esdeveniments en què s'agrupen (0=sense agrupació)",events_media_type:"Els esdeveniments multimèdia que mostra la línia de temps",events_media_types:{all:"Tots els tipus de mitjans",clips:"Clips",snapshots:"Imatges instantànies"},show_recordings:"Mostra les gravacions",style:"Estil de cronologia",styles:{ribbon:"Esdeveniments en una sola cinta",stack:"Esdeveniments apilats i agrupats"},window_seconds:"La durada predeterminada de la visualització de la línia de temps en segons"}},dimensions:{aspect_ratio:"Relació d'aspecte predeterminada (p. ex., '16:9')",aspect_ratio_mode:"Mode de relació d'aspecte",aspect_ratio_modes:{dynamic:"La relació d'aspecte s'ajusta al suport multimèdia",static:"Relació d'aspecte estàtica",unconstrained:"Relació d'aspecte sense restriccions"},height:""},live:{auto_mute:"Silencia automàticament les càmeres en directe",auto_pause:"Posa en pausa automàticament les càmeres en directe",auto_play:"Reprodueix automàticament les càmeres en directe",auto_unmute:"Activa automàticament el so de les càmeres en directe",controls:{editor_label:"Controls del directe",ptz:{editor_label:"PTZ",hide_home:"Amaga el control de casa",hide_pan_tilt:"Amaga el control d'escombratge i inclinació",hide_zoom:"Amaga el control de zoom",mode:"Mode",modes:{off:"Desactivat",on:"Activat"},orientation:"Orientació",orientations:{horizontal:"Horitzontal",vertical:"Vertical"},position:"Posició",positions:{"bottom-left":"Inferior esquerra","bottom-right":"Inferior dreta","top-left":"Superior left","top-right":"Superior dreta"}}},draggable:"La vista de càmeres en directe es pot arrossegar/lliscar",lazy_load:"Les càmeres en directe es carreguen amb mandra",lazy_unload:"Les càmeres en directe es descarreguen amb mandra",microphone:{always_connected:"Mantingueu sempre el micròfon connectat",disconnect_seconds:"Segons després dels quals desconnectar el micròfon (0=mai)",editor_label:"Micròfon",enabled:"El micròfon està activat",mute_after_microphone_mute_seconds:"Segons després de silenciar el micròfon per silenciar l'àudio entrant"},preload:"Carregueu prèviament la visualització en directe en segon pla",show_image_during_load:"Mostra la imatge fixa mentre es carrega la reproducció en directe",transition_effect:"Efecte de transició de càmera en directe",zoomable:"Les càmeres en directe es poden ampliar/escombrar"},media_viewer:{auto_mute:"Silencia automàticament els continguts multimèdia",auto_pause:"Atura automàticament el contingut multimèdia",auto_play:"Reprodueix automàticament els continguts multimèdia",auto_unmute:"Activa automàticament el so del contingut multimèdia",controls:{editor_label:"Controls del visualitzador de contingut multimèdia"},draggable:"El visualitzador de mitjans es pot arrossegar/lliscar",lazy_load:"El contingut multimèdia del visualitzador multimèdia es carreguen amb mandra al carrusel",snapshot_click_plays_clip:"Si feu clic a una instantània, es reprodueix un clip relacionat",transition_effect:"Efecte de transició del visualitzador multimèdia",transition_effects:{none:"Sense transició",slide:"Transició de diapositives"},zoomable:"El visualitzador de mitjans es pot ampliar/escombrar"},menu:{alignment:"Alineació del menú",alignments:{bottom:"Alineat a la part inferior",left:"Alineat a l'esquerra",right:"Alineat a la dreta",top:"Alineat a la part superior"},button_size:"Mida del botó del menú en píxels",buttons:{alignment:"Alineació de botons",alignments:{matching:"Coincideix amb l'alineació del menú",opposing:"Oposat a l'alineació del menú"},camera_ui:"Interfície d'usuari de la càmera",cameras:"Càmeres",clips:"Clips",display_mode:"Mode de visualització",download:"Descarregar",enabled:"Botó habilitat",expand:"Expandir",fullscreen:"Pantalla completa",icon:"Icona",image:"Imatge",iris:"",live:"En directe",media_player:"Envia al reproductor multimèdia",microphone:"Micròfon",mute:"Silenciar / Activar el so",permanent:"",play:"Reproduir / Pausa",priority:"Prioritat",ptz_controls:"",ptz_home:"",recordings:"Enregistraments",screenshot:"Captura de pantalla",snapshots:"Imatges instantànies",substreams:"Subfluxos",timeline:"Cronologia",type:"Tipus de botó",types:{momentary:"Momentani",toggle:"Commuta"}},position:"Posició del menú",positions:{bottom:"Situat a la part inferior",left:"Situat a l'esquerra",right:"Situat a la dreta",top:"Situat a la part superior"},style:"Estil de menú",styles:{hidden:"Menú ocult",hover:"Menú passant el cursor","hover-card":"Menú passant el cursor (a tota la targeta)",none:"Sense menú",outside:"Menú exterior",overlay:"Menú superposat"}},overrides:{info:"Aquesta configuració de targeta ha especificat manualment substitucions configurades que poden anul·lar els valors que es mostren a l'editor visual; consulteu l'editor de codi per veure/modificar aquestes substitucions."},performance:{features:{animated_progress_indicator:"Indicador animat del progrés",card_loading_indicator:"",editor_label:"Opcions de característiques",max_simultaneous_engine_requests:"",media_chunk_size:"Mida del fragment multimèdia"},style:{border_radius:"Corbes",box_shadow:"Ombres",editor_label:"Opcions d'estil"},warning:"Aquesta targeta està en mode de perfil baix, de manera que els valors predeterminats han canviat per optimitzar el rendiment"},profiles:{casting:"",editor_label:"","low-performance":"",scrubbing:""},remote_control:{entities:{camera:"",editor_label:""}},status_bar:{height:"",items:{enabled:"",engine:"",live_provider:"",priority:"",resolution:"",technology:"",title:""},popup_seconds:"",position:"",positions:{bottom:"",top:""},style:"",styles:{hover:"","hover-card":"",none:"",outside:"",overlay:"",popup:""}},view:{camera_select:"Visualitza les càmeres seleccionades recentment",default:"Vista per defecte",default_cycle_camera:"Passeu per les càmeres quan s'actualitzi la vista predeterminada",default_reset:{after_interaction:"Restableix la vista predeterminada després de la interacció de l'usuari",editor_label:"",entities:"",every_seconds:"Actualitza la vista predeterminada cada X segons (0=mai)",interaction_mode:"",interaction_modes:{active:"",all:"",inactive:""}},dim:"",interaction_seconds:"Segons després de l'acció de l'usuari per continuar interactuant (0=mai)",keyboard_shortcuts:{editor_label:"",enabled:"",ptz_down:"",ptz_home:"",ptz_left:"",ptz_right:"",ptz_up:"",ptz_zoom_in:"",ptz_zoom_out:""},theme:{themes:{dark:"",editor_label:"",ha:"",light:"",traditional:""}},triggers:{actions:{editor_label:"Activar accions",interaction_mode:"Com gestionar les accions quan la targeta té interacció humana",interaction_modes:{active:"Activa només accions quan la targeta té interacció humana",all:"Activa accions independentment de la interacció humana",inactive:"Només activa accions quan la targeta no té interacció humana"},trigger:"Activar l'acció",triggers:{default:"Canvia o actualitza la vista predeterminada",live:"Canvia o actualitza la visualització en directe",media:"Canvieu a la visualització de mitjans rellevants per als nous mitjans",none:"Sense acció"},untrigger:"Desactiva l'acció",untriggers:{default:"Canvia a la vista/càmera predeterminada",none:"Sense acció"}},editor_label:"Comportament quan s'activa una càmera",filter_selected_camera:"Activa només a la càmera seleccionada",show_trigger_status:"Mostra la vora intermitent quan s'activa",untrigger_seconds:"Segons després del canvi d'estat inactiu a desactivat"},views:{clip:"Clip més recent",clips:"Galeria de clips",current:"Vista actual",image:"Imatge estàtica",live:"Visualització en directe",recording:"Enregistrament més recent",recordings:"Galeria d'enregistraments",snapshot:"Instantània més recent",snapshots:"Galeria d'instantànies",timeline:"Vista cronològica"}}},t={grid:"Mostra el visualitzador multimèdia per a cada càmera d'una quadrícula",single:"Mostra un visualitzador multimèdia únic"},r={add_new_camera:"Afegeix una càmera nova",button:"Botó",camera:"Càmera",cameras:"Càmeres",cameras_secondary:"Quines càmeres renderitzar en aquesta targeta",delete:"Suprimeix",dimensions:"Dimensions",dimensions_secondary:"Opcions de dimensions i forma",image:"Imatge",image_secondary:"Opcions de visualització d'imatges estàtiques",live:"En directe",live_secondary:"Opcions de visualització de la càmera en directe",media_gallery:"Galeria multimèdia",media_gallery_secondary:"Opcions de la galeria multimèdia",media_viewer:"Visor multimèdia",media_viewer_secondary:"Visor de suports estàtics (clips, instantànies o enregistraments)",menu:"Menú",menu_secondary:"Opcions d'aspecte del menú",move_down:"Moure cap avall",move_up:"Moure cap amunt",overrides:"Les substitucions estan actives",overrides_secondary:"S'han detectat substitucions de configuració dinàmica",performance:"Rendiment",performance_secondary:"Opcions de rendiment de la targeta",profiles:"",profiles_secondary:"",remote_control:"",remote_control_secondary:"",status_bar:"",status_bar_secondary:"",timeline:"Cronologia",timeline_secondary:"Opcions de la cronologia d'esdeveniments",upgrade:"Upgrade",upgrade_available:"Hi ha disponible una actualització automàtica de la configuració de la targeta",view:"Vista",view_secondary:"Què ha de mostrar la targeta i com mostrar-la"},s={ptz:{down:"Avall",home:"Casa",left:"Esquerra",presets:"",right:"Dreta",up:"Amunt",zoom_in:"Ampliar",zoom_out:"Reduir"}},n={awaiting_live:"S'està esperant que es carregui la transmissió en directe ...",awaiting_media:"",camera_initialization:"",camera_initialization_reolink:"",could_not_render_elements:"No s'han pogut representar els elements de la imatge",could_not_resolve:"No s'ha pogut resoldre l'URL multimèdia",diagnostics:"Diagnòstic de targetes. Reviseu la informació confidencial abans de compartir-la",download_no_media:"No hi ha contingut multimèdia per descarregar",download_sign_failed:"No s'ha pogut signar l'URL multimèdia per baixar-la",duplicate_camera_id:"Duplica l'identificador de la càmera Frigate per a la següent càmera, utilitza el paràmetre 'id' per identificar les càmeres de manera única",empty_response:"S'ha rebut una resposta buida de Home Assistant per a la sol·licitud",failed_response:"No s'ha pogut rebre la resposta de Home Assistant per a la sol·licitud",failed_retain:"No s'ha pogut retenir l'esdeveniment",failed_sign:"No s'ha pogut signar l'URL de Home Assistant",fetching_diagnostics:"",image_load_error:"No s'ha pogut carregar la imatge",invalid_configuration:"Configuració no vàlida",invalid_configuration_no_hint:"No hi ha cap indicació d'ubicació disponible (tipus dolent o faltant?)",invalid_configuration_override:"",invalid_elements_config:"La configuració dels elements de la imatge no és vàlida",invalid_response:"S'ha rebut una resposta no vàlida de Home Assistant per a la sol·licitud",jsmpeg_no_player:"No s'ha pogut iniciar el reproductor JSMPEG",live_camera_no_endpoint:"No s'ha pogut obtenir el punt final de la càmera per a aquest proveïdor en directe (configuració incompleta?)",live_camera_not_found:"No s'ha trobat la 'camera_entity' (entitat de la càmera) configurada",live_camera_unavailable:"Càmera no disponible",no_camera_engine:"No s'ha pogut determinar el motor adequat per a la càmera",no_camera_entity:"No s'ha pogut trobar l'entitat de la càmera",no_camera_entity_for_triggers:"Es requereix una entitat de càmera per detectar automàticament els activadors",no_camera_id:"No s'ha pogut determinar l'identificador de la càmera per a la següent càmera, és possible que hagis d'establir el paràmetre 'id' manualment",no_dashboard_or_view:"Tant els paràmetres 'dashboard_path' com 'view_path' són necessaris per al mètode d'emissió 'dashboard'",no_live_camera:"El paràmetre 'camera_entity' s'ha de configurar i validar per a aquest proveïdor en directe",no_supported_camera:"",no_supported_cameras:"",reconnecting:"Reconnectant",stream_not_loading:"",too_many_automations:"Hi ha massa trucades d'automatització imbricades, comproveu la vostra configuració per veure si hi ha bucles",troubleshooting:"Comproveu la resolució de problemes",unknown:"Error desconegut",upgrade_available:"Hi ha disponible una actualització automàtica de la configuració de la targeta; visiteu l'editor de targetes visuals",webrtc_card_reported_error:"La targeta WebRTC ha informat d'un error",webrtc_card_waiting:"S'està esperant que es carregui la targeta WebRTC ..."},o={camera:"Càmera",duration:"Durada",in_progress:"En procés",score:"Puntuació",seek:"Buscar",start:"Començar",tag:"Etiqueta",what:"Què",where:"On"},l={assign:"",modifiers:{alt:"",ctrl:"",meta:"",shift:""},unassign:""},d={all:"Tots",camera:"Càmera",favorite:"Preferit",media_type:"Tipus de suport multimèdia",media_types:{clips:"Clips",recordings:"Enregistraments",snapshots:"Imatges instantànies"},not_favorite:"No preferit",select_camera:"Selecciona la càmera...",select_favorite:"Selecciona el preferit...",select_media_type:"Selecciona el tipus de suport multimèdia...",select_tag:"Selecciona l'etiqueta...",select_what:"Selecciona el què...",select_when:"Selecciona quan...",select_where:"Selecciona on...",tag:"Etiqueta",what:"Què",when:"Quan",whens:{custom:"Personalitzat",past_month:"El mes passat",past_week:"La setmana passada",today:"Avui",yesterday:"Ahir"},where:"On"},c={unseekable:"Busqueu temps no trobat als mitjans multimèdia"},m={camera:"Càmera",duration:"Durada",events:"Esdeveniments",in_progress:"En procés",seek:"Buscar",start:"Començar"},u={download:"Descarregar mitjans multimèdia",no_thumbnail:"No hi ha cap miniatura disponible",retain_indefinitely:"Els mitjans multimèdia es conservaran indefinidament",timeline:"Veure els mitjans multimèdia a la línia de temps"},p={select_date:"Escolliu la data"},_={actions:e,common:a,config:i,display_modes:t,editor:r,elements:s,error:n,event:o,key_assigner:l,media_filter:d,media_viewer:c,recording:m,thumbnail:u,timeline:p};export{e as actions,a as common,i as config,_ as default,t as display_modes,r as editor,s as elements,n as error,o as event,l as key_assigner,d as media_filter,c as media_viewer,m as recording,u as thumbnail,p as timeline};
