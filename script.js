/* ParticlesJS Config */
particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: ["#7a00ff", "#00d4ff", "#ff00ff"] },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
