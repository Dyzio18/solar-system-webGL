import * as THREE from 'three';

const AU = 5;
const ER = 0.5; // Earth Radius
const sunSize = 1; // Realistic 109 - number of earth radius

/**
 * Create planets and sun then save to global object
 * @param {object} scene
 * @param {object} planets
 * @param {function} render
 */
const solarSystemCreate = (scene, planets, render) => {
    let loader = new THREE.TextureLoader();
    let texture, orbitCircle, orbit;

    scene.background  = loader.load(`https://raw.githubusercontent.com/BrockBeldham/threejs-solar-system-experiment/master/static/img/milky-way.jpg`, render);

    solarSystemData.map(sphere => {
        texture = loader.load(`https://raw.githubusercontent.com/BrockBeldham/threejs-solar-system-experiment/master/static/img/${sphere.name}.jpg`, render);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.matrixAutoUpdate = false;

        if (sphere.name === 'sun') {
            planets[sphere.name] = new THREE.Mesh(new THREE.SphereBufferGeometry(sphere.radius, 32, 32), new THREE.MeshBasicMaterial({map: texture}));
        }
        else {
            planets[sphere.name] = new THREE.Mesh(new THREE.SphereBufferGeometry(sphere.radius, 32, 32), new THREE.MeshPhongMaterial({
                color: 0xffffff,
                specular: 0x050505,
                shininess: 100,
                map: texture
            }));

            // Create orbit
            orbitCircle = new THREE.EllipseCurve(0, 0, sphere.distance, sphere.distance, 0, 2 * Math.PI, false, 0);
            orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbitCircle.getPoints(64)), new THREE.LineBasicMaterial({color: 0x056d64}));
            orbit.rotateX(0.5 * Math.PI);
            scene.add(orbit);
        }
        planets[sphere.name].name = sphere.name;
        scene.add(planets[sphere.name]);
    });
};

/**
 * Map all planets and  change it position, rotation etc.
 * @param {object} planets
 */
const solarSystemMove = (planets) => {
    solarSystemData.map(sphere => {
        sphere.orbit += sphere.lineSpeed * 0.01;

        planets[sphere.name].rotateY(sphere.rotate);
        planets[sphere.name].position.x = Math.cos(sphere.orbit) * sphere.distance;
        planets[sphere.name].position.z = Math.sin(sphere.orbit) * sphere.distance;
    });
};

/**
 * Main object with data about all sphere in our solar system
 * @type {[object]}
 */
const solarSystemData = [
    {
        name: 'sun',
        radius: sunSize,
        distance: 0,
        rotate: 0.01,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: 0
    },
    {
        name: 'mercury',
        radius: 0.38 * ER,
        distance: sunSize + (0.387 * AU),
        rotate: 0.01,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 240) * AU,
    },
    {
        name: 'venus',
        radius: 0.94 * ER,
        distance: sunSize + (0.72 * AU),
        rotate: 0.005,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 610) * AU,
    },
    {
        name: 'earth',
        radius: ER,
        distance: sunSize + AU,
        rotate: 0.02,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 1000) * AU,
    },
    {
        name: 'mars',
        radius: 0.53 * ER,
        distance: sunSize + (1.523 * AU),
        rotate: 0.01,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 1880) * AU,
    },
    {
        name: 'jupiter',
        radius: 11.2 * ER,
        distance: sunSize + (5.2 * AU),
        rotate: 0.09,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 11000) * AU,
    },
    {
        name: 'saturn',
        radius: 9.45 * ER,
        distance: sunSize + (9.53 * AU),
        rotate: 0.01,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 29440) * AU,
    },
    {
        name: 'uranus',
        radius: 4 * ER,
        distance: sunSize + (19.19 * AU),
        rotate: 0.01,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 84070) * AU,
    },
    {
        name: 'neptune',
        radius: 3.88 * ER,
        distance: sunSize + (30.06 * AU),
        rotate: 0.01,
        orbit: 2 * Math.PI * AU * AU,
        lineSpeed: (2 * Math.PI / 164870) * AU,
    }
];


export {solarSystemCreate, solarSystemMove}