import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesComp() {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };

    const options = useMemo(
        () => ({
          background: {
            color: {
              value: "#ffffff",
            },
          },

          fullScreen: {
            enable: false,
          },

          fpsLimit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              }
            },
            modes: {
              grap: {
                distance: 100,
                links: {
                    color: "#000000",
                    distance: 100,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
              },
            },
          },
          particles: {
            // color: {
            //   value: "#000000",
            //   animation: {
            //     enable: true,
            //     speed: 20,
            //     sync: true,
            //   },
            // },
            color: '#000000',
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

    if (init) {
        return (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
        );
      }
    
      return <></>;
}