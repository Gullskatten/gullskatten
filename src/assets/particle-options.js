export default {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#FFF"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 0.1,
        opacity_min: 0.4,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true
    },
    line_linked: {
      enable: false
    }
  },
  retina_detect: true
};
