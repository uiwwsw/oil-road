// https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID

import { HTMLAttributes, useEffect } from "react";

interface NaverMapProps extends HTMLAttributes<HTMLElement>{

}
const NaverMap = ({...props}: NaverMapProps) => {
  const url = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_NGC}`
    function loadMap() {

        new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        });
    }
    useEffect(() => {
        if (
            document.querySelector(
              `script[src="${url}"]`
            )
          )
            return;
        const script = document.createElement('script');
      
        script.src = url;
        script.type = "text/javascript";
        script.async = true;

        
      
        document.body.appendChild(script);
        script.addEventListener("load", loadMap);

        return () => {
          document.body.removeChild(script);
        }
      }, []);
      return (
        <div id="map" {...props}></div>
      )
}

export default NaverMap