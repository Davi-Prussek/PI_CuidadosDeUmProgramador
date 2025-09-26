.title {

font-size: 2.5rem;

margin-bottom: 8.5rem;

background: linear-gradient

(90deg, var primary),

var(--secondary));

-webkit-background-clip:

text;

background-clip: text;

color: transparent;

text-shadow: 0 0 15px

rgba(157, 0, 255, 0.5);

animation: pulse 3s

infinite alternate;

}

.carousel {

position: relative;

width: var(

--carousel-radius);

height: var(

--carousel-radius);

transform-style:

preserve-3d;

transition:

transform 0.5s ease;

}


let lastupdateTime -

Date.now();

let colorUpdateTimer = 0.0;

let config = {

SIM_RESOLUTION: 128,

DYE_RESOLUTION: 1440,

CAPTURE_RESOLUTION: 512,

DENSITY DISSIPATION: 3.5,

VELOCITY_DISSIPATION: 2,

PRESSURE: 0.1,

PRESSURE_ITERATIONS: 20,

CURL: 10,

SPLAT RADIUS: 0.5,

SPLAT FORCE: 6000,

SHADING: true,

COLOR_UPDATE_SPEED: 10,

PAUSED: false,

BACK COLOR: {r: 0, g: 0, b; 0),

TRANSPARENT: true,
}