// https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID

import { useEffect } from "react";


const NaverMap = () => {
    function loadMap() {

        // new naver.maps.Map('map', {
        //     center: new naver.maps.LatLng(37.3595704, 127.105399),
        //     zoom: 10
        // });
    }
    useEffect(() => {
        if (
            document.querySelector(
              `script[src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=d6n0qgp3um"]`
            )
          )
            return;
        const script = document.createElement('script');
      
        script.src = "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=d6n0qgp3um";
        script.type = "text/javascript";
        script.async = true;

        
      
        document.body.appendChild(script);
        script.addEventListener("load", loadMap);

        return () => {
          document.body.removeChild(script);
        }
      }, []);
      return <div id="map" className="h-6"></div>
}

export default NaverMap