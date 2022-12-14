/*global kakao */
import { useRef, useEffect } from "react";

function Kakaomap() {
  const container = useRef(null)
  const options =
    { center: new kakao.maps.LatLng(33.450701, 126.570667), level: 5 }

  useEffect(() => {
    var map = new kakao.maps.Map(container.current, options)
    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map)
    return () => { };

  }, []);

  return (
    <div id="map" ref={container} style={{ width: '70vw', height: '50vh', margin: 'auto' }}>
    </div>
  )
}

export default Kakaomap;
