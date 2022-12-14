/* global kakao */

import React, { useEffect, useState, useRef } from "react";

export default function KakaoMap(props) {
  const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9cb4757d899a23ff3968c5cc262d323c&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(35.1585019, 129.0620362);
        const options = {
          center,
          level: 3
        };
        const map = new kakao.maps.Map(container.current, options);

        var markerPosition = new kakao.maps.LatLng(35.1585019, 129.0620362);
 
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        //setMapCenter(center);
        setKakaoMap(map);
      });
    };
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // change viewport size
    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(
      (pos) => new kakao.maps.LatLng(...pos)
    );

    setMarkers((markers) => {
      // clear prev markers
      markers.forEach((marker) => marker.setMap(null));

      // assign new markers
      return positions.map(
        (position) => new kakao.maps.Marker({ map: kakaoMap, position })
      );
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);

  return <div id="container" ref={container} />;
}
