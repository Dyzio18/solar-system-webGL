import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import {solarSystemCreate, solarSystemMove} from './SolarSystem';
import {dataArray} from './Helpers';
import {Stats} from './Stats';

let camera, scene, renderer, controls, descPanel;
let planets = {sun: {}, mercury: {}, venus: {}, earth: {}, mars: {}, jupiter: {}, saturn: {}, uranus: {}, neptune: {}};

// Mouse interactive
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Stats frame initialization
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

init();
animate();
window.addEventListener("resize", resize);
window.addEventListener("click", onMouseMove, false);

/**
 * Data and scene initialization
 */
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    // Camera initialization
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 1;

    // Render container
    const container = document.getElementById('canvas');
    document.body.appendChild(container);
    renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
    renderer.setSize(window.innerWidth * 0.99, window.innerHeight * 0.99);
    container.appendChild(renderer.domElement);

    // Description panel
    descPanel = document.getElementById('description');

    // Camera control
    controls = new OrbitControls(camera, container);

    // Light - Sun
    const light = new THREE.SpotLight(0xff0000);
    light.position.set(0, 1, 0);
    const pointLight = new THREE.PointLight(0xffffff, 1, Infinity);
    pointLight.position.set(0, 1, 0);
    scene.add(light);
    scene.add(pointLight);

    // Some helpers (axis, grid)
    // helpers(scene);
    // Create Solar System
    solarSystemCreate(scene, planets, render());

    // Camera
    camera.position.set(10, 25, 15);
    controls.update();
}

/**
 * Resize window 
 */
function resize() {
    const factor = 0.95; // percentage of the screen
    const w = window.innerWidth * factor;
    const h = window.innerHeight * factor;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

/**
 * Animate object on scene
 */
function animate() {
    stats.begin(); // Stats
    setTimeout(() => {
        controls.update();
        solarSystemMove(planets);
        render();
        stats.end(); // Stats
    }, 10);

    requestAnimationFrame(animate);
}

/**
 * Render scene
 */
function render() {
    renderer.render(scene, camera);
}

/**
 * Mouse control
 * @param {*} event 
 */
function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    event.preventDefault();
    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        //descPanel.innerHTML = intersects[0].object.name;
        displayData(intersects[0].object);
    }
    else {
        descPanel.style.display = "none";
        }
}

/**
 * Display information about sphere
 * @param {object} object 
 */
function displayData (object) {
    if(object.name !== ''){
        const data = dataArray[object.name];

        descPanel.innerHTML = data;
        descPanel.style.display = "block";
    }
    else {
        descPanel.style.display = "none";
    }
}
