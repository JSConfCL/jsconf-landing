import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine";
import { transparentize } from "polished"

import jsconfTheme from "../styles/theme";

const config = {
  background: {
    color: {
      value: jsconfTheme.colors.jsconfYellow,
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: transparentize(0.5, '#999'),
    },
    links: {
      color: '#999',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      "type": "polygon", "stroke": { "width": 4, "color": transparentize(0.5, '#999') }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 400, "height": 100 }
    },
    size: {
      value: { min: 2, max: 3 },
    },
  },
  detectRetina: true,
  fullScreen: true
}

interface ParticleProps {
  id?: string;
  backgroundColor?: string;
  color?: string | string[];
  shape?: string;
  configuration?: string;
  fullScreen?: boolean;
}

const ParticleComponent = ({
  id = "tsparticles-container",
}: ParticleProps) => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const configs = { ...config }

  console.log('HERE!')
  return (
    <>
      <Particles
        id={id}
        loaded={async (_) => {}}
        init={particlesInit}
        options={configs as unknown as RecursivePartial<IOptions>}
      />
    </>
  );
};

export default ParticleComponent;
