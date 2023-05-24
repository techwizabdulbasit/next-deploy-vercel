// import React, { useEffect, useState } from 'react'
// import { Loader } from '@googlemaps/js-api-loader';
// import userPlaces from '../../userPlaces.json';
// // import { svgMarker } from './marker-blue';

// const baseUrl = process.env.BASE_URL;

// async function map() {
//   // const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  
//   const [data, setData] = useState([] as any[]); 
//   const [isLoading, setLoading] = useState(false);
  
//   useEffect(() => {
//     setLoading(true);
//    fetch(baseUrl+'/properties')
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//         console.log('data', data)
//       });
//   }, []);
 
//   useEffect(() => {
//   const loader = new Loader({
//     apiKey: "AIzaSyBkGSTnzMogEKsCyKnaknkA2znG9EgWw8E", // process.env.GOOGLE_MAPS_API_KEY || "AIzaSyBkGSTnzMogEKsCyKnaknkA2znG9EgWw8E",
//     version: "beta",
//     libraries: ["places", "marker"]
//   });


//   const mapOptions = {
//     center: { lat: 34.99365616, lng: 44.76098633 },
//     zoom: 3,
//     mapId: 'b853c54afa425f84',
//     draggable: true,
//     // fullscreenControl: false, // remove the top-right button
//     // mapTypeControl: false, // remove the top-left buttons
//     // streetViewControl: false, // remove the pegman
//     // zoomControl: false, // remove the bottom-right buttons
//     // sensor:false,
//     // disableDefaultUI: true,
//     // icon: image,
//   };



//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//     //@ts-ignore
//     const { AdvancedMarkerView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
  
//     const newMap = new Map(document.getElementById("map") as HTMLElement, mapOptions);

//     // for (let i = 0; i < userPlaces.places.length; i++) {
//     //   const userPlace = userPlaces.places[i];
//     //   const marker = new AdvancedMarkerView({
//     //     position: {
//     //       lat: userPlace.latitude,
//     //       lng: userPlace.longitude,
//     //     },
//     //     title: userPlace.name,
//     //     map: newMap,
//     //   });
//     // }

//   //  useEffect(() => {
//       if(data != null){
//         data.forEach((p) => {
//           console.log('p', p);
//           const marker = new AdvancedMarkerView({
//                 position: {
//                   lat: p.latitude,
//                   lng: p.longitude,
//                 },
//                 title: p.name,
//                 map: newMap,
//               });
//         })
//       }
//   //  }, [newMap])
//   //  }, [])
    


//   });


//    }, [data])

//   if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>No property found</p>;

//   return (
//     <>
//       <div id='map' style={{ width: '100%', height: '100%' }}></div>
//     </>
//   )
// }
// export default map


// const map = () => {
//   const loader = new Loader({
//       apiKey: "AIzaSyBkGSTnzMogEKsCyKnaknkA2znG9EgWw8E",
//       version: "beta",
//       libraries: ["places", "marker"]
//     });
//   const [map, setMap] = useState(null);
//   const address = '1600 Amphitheatre Parkway, Mountain View, CA';
//   useEffect(() => {
//     loader.load().then(() => {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({ address }, (results, status) => {
//         if (status === 'OK') {
//           const mapOptions = {
//             center: results[0].geometry.location,
//             zoom: 16,
//           };
//           // const newMap = new window.google.maps.Map(
//           //   document.getElementById('map'),
//           //   mapOptions
//           // );
//           const newMap = new Map(document.getElementById("map") as HTMLElement, mapOptions);
//           const marker = new window.google.maps.Marker({
//             position: results[0].geometry.location,
//             map: newMap,
//           });
//           setMap(newMap);
//         }
//       });
//     });
//   }, [address]);
//   return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
// };
// export default map;




import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
// import userPlaces from '../../userPlaces.json';

const baseUrl = process.env.BASE_URL;

const MapComponent = () => {
  const [data, setData] = useState([] as any[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(baseUrl + '/properties')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log('data', data);
      });
  }, []);

  useEffect(() => {
    const loadMap = async () => {
      const loader = new Loader({
        apiKey: process.env.GOOGLE_MAPS_API_KEY || '',
        version: 'beta',
        libraries: ['places', 'marker']
      });

      await loader.load();
      
      const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
      //@ts-ignore
      const { AdvancedMarkerView } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;

      const mapOptions = {
        center: { lat: 37.99365616, lng: -95.76098633 },
        zoom: 5,
        mapId: 'b853c54afa425f84',
        draggable: true,
      };

      const newMap = new Map(document.getElementById('map') as HTMLElement, mapOptions);

      if (data != null) {
        data.forEach((p) => {
          // console.log('MAPComponent p', p);
          const marker = new AdvancedMarkerView({
            position: {
              lat: p.latitude,
              lng: p.longitude,
            },
            title: p.name,
            map: newMap,
          });
        });
      }
    };

    loadMap();
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No property found</p>;

  return (
    <>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default MapComponent;
