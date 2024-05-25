import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const YandexMap: React.FC = () => {
  const [ymaps3, setYmaps3] = useState<any>(null);
  const [ymaps3Reactify, setYmaps3Reactify] = useState<any>(null);

  useEffect(() => {
    const loadYmaps3 = async () => {
      if ((window as any).ymaps3) {
        const ymaps3ReactifyModule = await (window as any).ymaps3.import('@yandex/ymaps3-reactify');
        const reactify = ymaps3ReactifyModule.reactify.bindTo(React, ReactDOM);
        setYmaps3((window as any).ymaps3);
        setYmaps3Reactify(reactify);
      }
    };

    loadYmaps3();
  }, []);

  if (!ymaps3 || !ymaps3Reactify) {
    return <div>Loading...</div>;
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3Reactify.module(ymaps3);

  return (
      <YMap 
          className="yandex-map" 
          location={{ 
              center: [37.623082, 55.75254], 
              zoom: 10 
          }}
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapMarker coordinates={[37.623082, 55.75254]} />
      </YMap>
   
  );
};

export default YandexMap;
