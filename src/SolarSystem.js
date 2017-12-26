import * as THREE from 'three';

const AU = 2;
// To TEST
const API = {
    offsetX: 0,
    offsetY: 0,
    repeatX: 0.25,
    repeatY: 0.25,
    rotation: Math.PI / 4, // positive is counter-clockwise
    centerX: 0.5,
    centerY: 0.5
};

const solarSystemCreate = (scene, planets, render) => {

    let loader = new THREE.TextureLoader();
    let texture;

    // [3] Earth
    texture = loader.load('https://raw.githubusercontent.com/BrockBeldham/threejs-solar-system-experiment/master/static/img/earth.jpg', render);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.matrixAutoUpdate = false;
    let earthPlanet = new THREE.Mesh(new THREE.SphereBufferGeometry(earth.radius, 32, 32), new THREE.MeshBasicMaterial({map: texture}));
    //earthPlanet.overdraw = true;
    //earthPlanet.castShadow = true;
    scene.add(earthPlanet);
    planets.earth = earthPlanet;

    // [4] Mars
    texture = loader.load('https://raw.githubusercontent.com/BrockBeldham/threejs-solar-system-experiment/master/static/img/mars.jpg', render);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.matrixAutoUpdate = false;
    let marsPlanet = new THREE.Mesh(new THREE.SphereBufferGeometry(mars.radius, 32, 32), new THREE.MeshBasicMaterial({map: texture}));
    scene.add(marsPlanet);
    planets.mars = marsPlanet;

    //  [5] Jupiter
    texture = loader.load('https://raw.githubusercontent.com/BrockBeldham/threejs-solar-system-experiment/master/static/img/jupiter.jpg', render);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.matrixAutoUpdate = false;
    let jupiterPlanet = new THREE.Mesh(new THREE.SphereBufferGeometry(jupiter.radius, 32, 32), new THREE.MeshBasicMaterial({map: texture}));
    scene.add(jupiterPlanet);
    planets.jupiter = jupiterPlanet;

};

const solarSystemMove = (planets) => {

    // [3] Earth
    earth.orbit += earth.lineSpeed;
    planets.earth.position.x = Math.cos(earth.orbit) * earth.distance;
    planets.earth.position.z = Math.sin(earth.orbit) * earth.distance;

    // [4] Mars
    mars.orbit += mars.lineSpeed;
    planets.mars.position.x = Math.cos(mars.orbit) * mars.distance;
    planets.mars.position.z = Math.sin(mars.orbit) * mars.distance;

    //  [5] Jupiter
    jupiter.orbit += jupiter.lineSpeed;
    planets.jupiter.position.x = Math.cos(jupiter.orbit) * jupiter.distance;
    planets.jupiter.position.z = Math.sin(jupiter.orbit) * jupiter.distance;

};

const mars = {
    radius: 1,
    distance: AU + 6,
    circulationTime: 365,
    lineSpeed: (2 * Math.PI / 2000) * AU,
    orbit: 2 * Math.PI * AU * AU
};

const earth = {
    radius: 1,
    distance: AU + 2,
    circulationTime: 365,
    lineSpeed: (2 * Math.PI / 1000) * AU,
    orbit: 2 * Math.PI * AU * AU
};

const jupiter = {
    radius: 3,
    distance: 15.6 * AU,
    circulationTime: 365,
    lineSpeed: (2 * Math.PI / 11000) * AU,
    orbit: 2 * Math.PI * AU * AU
};


export {solarSystemCreate, solarSystemMove}