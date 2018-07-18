export default {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#FF9E41", "#C9283E", "#a5ed95", "#92e8e2"]
    },
    shape: {
      type: "circle",
      
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
        opacity_min: 0.1,
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
