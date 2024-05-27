import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface YandexMapProps {
  x: number;
  y: number;
}

const YandexMap = ({x,y}:YandexMapProps) => {
  const [ymaps3, setYmaps3] = useState<any>(null);
  const [ymaps3Reactify, setYmaps3Reactify] = useState<any>(null);
  const [controls, setControls] = useState<any>(null);

  useEffect(() => {
    const loadYmaps3 = async () => {
      if ((window as any).ymaps3) {
        const ymaps3ReactifyModule = await (window as any).ymaps3.import('@yandex/ymaps3-reactify');
        const reactify = ymaps3ReactifyModule.reactify.bindTo(React, ReactDOM);
        setYmaps3((window as any).ymaps3);
        setYmaps3Reactify(reactify);

        const controlsModule = await (window as any).ymaps3.import('@yandex/ymaps3-controls@0.0.1');
        setControls(reactify.module(controlsModule));
      }
    };

    loadYmaps3();
  }, []);

  if (!ymaps3 || !ymaps3Reactify || !controls) {
    return <div>Loading...</div>;
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapMarker } = ymaps3Reactify.module(ymaps3);
  const { YMapZoomControl } = controls;

  
  
  return (
      <YMap 
          className="yandex-map" 
          location={{ 
              center: [x, y], 
              zoom: 15 
          }}
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapControls position="right">
          <YMapZoomControl />
        </YMapControls>
        <YMapMarker 
          coordinates={[x, y]}
          mapFollowsOnDrag={true}
          
        >
          <section style={{translate: "-50% -100%"}}>
            <img src="./assets/icons/location.svg" alt="" />
          </section>
        </YMapMarker>
      </YMap>
    
  );
};

export default YandexMap;
