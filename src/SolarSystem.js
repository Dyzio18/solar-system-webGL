import * as THREE from 'three';

const AU = 1;

const solarSystemCreate = (scene, planets) => {
    let geometry = new THREE.SphereBufferGeometry(earth.radius, 32, 32);
    let material = new THREE.MeshNormalMaterial();
    let earthPlanet = new THREE.Mesh( geometry, material );
    scene.add(earthPlanet);
    planets.earth = earthPlanet;
};

const solarSystemMove = (planets) => {

    /*venus.position.x = Math.cos(radians) * venusOrbitRadius;
    venus.position.z = Math.sin(radians) * venusOrbitRadius;*/
    earth.orbit -= Math.PI/180;
    planets.earth.position.x +=  Math.cos(earth.orbit) * earth.distance;
    planets.earth.position.z +=  Math.sin(earth.orbit) * earth.distance;

    // planets.earthPlanet.position.x += 0.01;
};



const earth = {
    radius: 1,
    distance: AU,
    circulationTime: 365,
    orbit: 365 *  Math.PI / 180
};

export {solarSystemCreate, solarSystemMove}