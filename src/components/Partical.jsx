
import htmlIcon from '../assets/android.svg'
import dart from "../assets/dart.svg";
// import dash from "../../assets/dash.svg";
import firebase from '../assets/firebase.svg'
import flutter from "../assets/flutter.svg";
import jsIcon from "../assets/ios.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim"; 
export const Partical = () => {
 const particlesInit = useCallback(async (engine)=>{
    console.log(engine);
    // await loadFull(engine)
    await loadSlim(engine);
 },[])
 const particlesLoaded = useCallback  (async (container)=>{
    await console.log(container)
 },[])
  return (
    <>
    <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}

        // options={{
        //     background: {
        //         color: {
        //             value: "#212121",
        //         },
        //     },
        //     fpsLimit: 120,
        //     interactivity: {
        //         events: {
        //             onClick: {
        //                 enable: true,
        //                 mode: "push",
        //             },
        //             onHover: {
        //                 enable: true,
        //                 mode: "repulse",
        //             },
        //             resize: true,
        //         },
        //         modes: {
        //             push: {
        //                 quantity: 4,
        //             },
        //             repulse: {
        //                 distance: 200,
        //                 duration: 0.4,
        //             },
        //         },
        //     },
        //     particles: {
        //         color: {
        //             value: "#ffffff",
        //         },
        //         links: {
        //             color: "#ffffff",
        //             distance: 150,
        //             enable: true,
        //             opacity: 0.5,
        //             width: 1,
        //         },
        //         move: {
        //             direction: "none",
        //             enable: true,
        //             outModes: {
        //                 default: "bounce",
        //             },
        //             random: false,
        //             speed: 6,
        //             straight: false,
        //         },
        //         number: {
        //             density: {
        //                 enable: true,
        //                 area: 800,
        //             },
        //             value: 80,
        //         },
        //         opacity: {
        //             value: 0.5,
        //         },
        //         shape: {
        //             type: "circle",
        //         },
        //         size: {
        //             value: { min: 1, max: 5 },
        //         },
        //     },
        //     detectRetina: true,
        // }}

        options={{
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
            "detectRetina": true,
            "fpsLimit": 60,
            "interactivity": {
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "push"
                },
                "onDiv": {
                  "elementId": "repulse-div",
                  "enable": false,
                  "mode": "repulse"
                },
                "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                  }
                },
                "resize": true
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 2,
                },
                "connect": {
                  "distance": 80,
                  "lineLinked": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 400,
                  "lineLinked": {
                    "opacity": 1
                  }
                },
                "push": {
                  "quantity": 2
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                }
              }
            },
            "particles": {
              "color": {
                "value": "#ffffff"
              },
              "lineLinked": {
                "blink": false,
                "color": "#000",
                "consent": false,
                "distance": 150,
                "enable": false,
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "attract": {
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "bounce": false,
                "direction": "none",
                "enable": true,
                "outMode": "out",
                "random": false,
                "speed": 2,
                "straight": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800
                },
                "limit": 20,
                "value": 15,
              },
              "opacity": {
                "animation": {
                  "enable": true,
                  "minimumValue": 0.2,
                  "speed": 1,
                  "sync": false
                },
                "random": true,
                "value": 1
              },
              "rotate": {
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                },
                "direction": "random",
                "random": true,
                "value": 0
              },
              "shape": {
                "character": {
                  "fill": false,
                  "font": "Verdana",
                  "style": "",
                  "value": "*",
                  "weight": "400"
                },
                "image": [
                  // {
                  //   "src": boostrapIcon,
                  //   "width": 20,
                  //   "height": 20
                  // },
                  {
                    "src": flutter,
                    "width": 20,
                    "height": 20
                  },
                  {
                    "src": dart,
                    "width": 20,
                    "height": 20
                  },
  
                  {
                    "src": htmlIcon,
                    "width": 20,
                    "height": 20
                  },
                  {
                    "src": jsIcon,
                    "width": 20,
                    "height": 20
                  },
                  // {
                  //   "src": mysqlIcon,
                  //   "width": 20,
                  //   "height": 20
                  // },
                  {
                    "src": nodeIcon,
                    "width": 20,
                    "height": 20
                  },
                  {
                    "src": reactIcon,
                    "width": 20,
                    "height": 20
                  },
  
                  {
                    "src": firebase,
                    "width": 20,
                    "height": 20
                  },
                  // {
                  //   "src": dash,
                  //   "width": 20,
                  //   "height": 20
                  // },
                  {
                    "src": flutter,
                    "width": 20,
                    "height": 20
                  },
  
                ],
                "polygon": {
                  "sides": 5
                },
                "stroke": {
                  "color": "#000000",
                  "width": 0
                },
                "type": "image"
              },
              "size": {
                "animation": {
                  "enable": false,
                  "minimumValue": 0.1,
                  "speed": 40,
                  "sync": false
                },
                "random": false,
                "value": 16
              }
            },
            "polygon": {
              "draw": {
                "enable": false,
                "lineColor": "#ffffff",
                "lineWidth": 0.5
              },
              "move": {
                "radius": 10
              },
              "scale": 1,
              "url": ""
            },
            "background": {
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            }
          }}
    />
    </>
  );
};
