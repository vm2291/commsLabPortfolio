// ================== Particles.js configuration ==================
// This initializes the particles animation inside the element with ID "particles-js"
particlesJS('particles-js',
  
  {
    "particles": {

      // How many particles to display and how they are spaced
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800   // higher = more spread out
        }
      },

      // Color of the particles
      "color": {
        "value": "#000000"
      },

      // Shape settings for each particle
      "shape": {
        "type": "circle",      // particles are circles
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5        // used if type = polygon
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },

      // Particle transparency settings
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,     // no opacity animation
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },

      // Particle size settings
      "size": {
        "value": 5,            // base particle size
        "random": true,        // varied sizes
        "anim": {
          "enable": false,     // no size animation
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },

      // Lines connecting particles
      "line_linked": {
        "enable": true,
        "distance": 150,       // max distance before lines disappear
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },

      // How particles move across the screen
      "move": {
        "enable": true,
        "speed": 6,            // movement speed
        "direction": "none",
        "random": false,
        "straight": false,     // particles do not move in straight lines
        "out_mode": "out",     // move off-screen and respawn
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },

    // How particles react to user interaction (hover/click)
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"     // particles move away from the mouse
        },
        "onclick": {
          "enable": true,
          "mode": "push"        // clicking adds new particles
        },
        "resize": true          // keeps layout responsive
      },

      // Settings for each interaction mode
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200        // how far particles move away from cursor
        },
        "push": {
          "particles_nb": 4      // # of particles added on click
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },

    // Makes particles sharper on high-resolution screens
    "retina_detect": true,

    // Demo settings (not used in your layout but required by library)
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// ================== Page interactions  ==================

/* Toggle the mobile navigation menu */
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

/* Close the mobile menu when the user scrolls */
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

/* Typed.js configuration for the changing role text */
var typed = new Typed('.typing-text', {
    strings : ['Web', 'Web Developer', 'Web Designer', 'UI/UX designer'],
    loop : true,
    typeSpeed : 200
});

/* Apply tilt effect to all elements with the .tilt class
   (run after the page finishes loading so VanillaTilt is available) */
window.addEventListener('load', function () {
    VanillaTilt.init(document.querySelectorAll('.tilt'),{
        max:25
    });
});
