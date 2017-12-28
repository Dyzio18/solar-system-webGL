import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import {solarSystemCreate, solarSystemMove} from './SolarSystem';
import {helpers} from './Helpers';
import {Stats} from './Stats';

// Stats frame initialization
const stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );


let camera, scene, renderer, controls, light;
let planets = {sun: {}, mercury: {}, venus: {}, earth: {}, mars: {}, jupiter: {}, saturn:{}, uranus:{}, neptune:{}};

init();
animate();
window.addEventListener("resize", resize);

function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    // Camera initialization
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.04, 1000);
    camera.position.z = 1;

    // Render container
    const container = document.getElementById('canvas');
    document.body.appendChild(container);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
    container.appendChild(renderer.domElement);

    // Camera control
    controls = new OrbitControls(camera, container);

    // Light - Sun
    light = new THREE.SpotLight();
    light.castShadow = true;
    light.position.set(0, 0, 0);
    light.target = scene;
    scene.add(light);


    // Some helpers (axis, grid)
    helpers(scene);
    // Create Solar System
    solarSystemCreate(scene, planets, render());

    // Camera
    camera.position.set(10, 15, 15);
    controls.update();
}

function resize() {
    const factor = 0.95; // percentage of the screen
    const w = window.innerWidth * factor;
    const h = window.innerHeight * factor;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

function animate() {

    stats.begin(); // Stats
        setTimeout(() => {
            controls.update();
            solarSystemMove(planets);
            render();
            requestAnimationFrame(animate);
        }, 10);
    stats.end(); // Stats
}

function render() {
    renderer.render(scene, camera);
}








