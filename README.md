# [![Build Status](https://travis-ci.org/aneisch/home-assistant-config.svg?branch=master)](https://travis-ci.org/aneisch/home-assistant-config) My Home Assistant Config

Using [Tasker Plugin](https://github.com/MarkAdamson/home-assistant-plugin-for-tasker) from [MarkAdamsom](https://github.com/MarkAdamson)

Also heavily utilizing [AppDaemon](http://appdaemon.readthedocs.io/en/latest/) for advanced automations/dashboard. See [Appdaemon config](https://github.com/aneisch/home-assistant-config/tree/master/extras/appdaemon) for more. 

My Home Assistant installtion contains many different components and runs on a Gen7 i3 NUC running Centos 7:

- Sonoff Switches (https://www.itead.cc/sonoff-wifi-wireless-switch.html)
  - With custom firmware (https://github.com/arendst/Sonoff-Tasmota) controlled via MQTT
- Orvibo Switches
- Radio Thermostat CT-50 (monitoring done through bash script calling API and publishing to MQTT)
- Raspberry Pi hosted USB Camera (M-JPEG streamer)
- Milights with wifi bridge (bulbs and 5050 LED controller)
  - Testing homebrew MiLight controller using D1 Mini and NRF24L01. (http://blog.christophermullins.com/2017/02/11/milight-wifi-gateway-emulator-on-an-esp8266/)
- D1 Mini boards with DHT Sensors and other shields publishing to MQTT
- Wemo wall plug(s)
- Aeon Labs ZW090 Z Stick
- Aeon Labs DSA03202 v1 - z-Wave Minimote
- GE Z-wave in-wall switch/fan controllers
- "[Lustreon E27](https://www.banggood.com/LUSTREON-E27-Smart-WiFi-Bulb-Adapter-Socket-Lamp-Holder-Work-With-Alexa-Google-Home-IFTTT-AC85-265V-p-1285550.html)" bulb holders for clean, W.A.F lamp control using Tasmota/MQTT
  - Check out http://blog.aneis.ch/2019/01/tuya-convert-for-lustreon.html for Tasmota flashing instructions
- Various z-wave sensors
- Various MQTT Sensors (eg: moon status, determined using bash and published to MQTT))
- Arlo Cameras (controlled through IFTTT)
- AppDaemon controlling a majority of automations.
- Amazon Echo Dot/Echo
  - Home Assistant Emulated Huei (devices are explicitly exposed via customize.yaml.
  - Custom skills via Alexa API.
  - Custom "Routines" configured in the Alexa App.
- MQTT Remote and local server (via Docker). Using remote with SSL for owntracks (on a box through Digital Ocean with static public IP), and local MQTT to communicate with various sensors/switches around the house. The remote MQTT shares messages with the local via a MQTT bridge.
- Custom weather card from https://www.reddit.com/r/homeassistant/comments/8dnxf0/easy_instructions_for_a_custom_weather_card/

Also using Grafana/Influx for graphing, both running in Docker containers on my NUC. 

 
Thanks to Deviant Engineer (https://deviantengineer.com/) for the guide(s) that helped me stay sane during installation!!


# Interface
![UI](images/screenshot1.png)  
![UI](images/screenshot2.png)  
![UI](images/screenshot3.png)
![UI](images/screenshot4.png)
![UI](images/grafana.png)
