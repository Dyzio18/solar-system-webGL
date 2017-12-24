import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import {solarSystemCreate, solarSystemMove} from './SolarSystem';
import {helpers} from './Helpers';

const HELLO = "hello";
console.log(`${HELLO} world`);

let camera, scene, renderer, controls;
let planets = {mercury: {}, venus:{}, earth: {}};

init();
animate();
window.addEventListener("resize", resize);



function init(){
    // Create scene
    scene = new THREE.Scene();
    // Camera initialization
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.04, 1000);
    camera.position.z = 1;

    // Render container
    const container = document.getElementById( 'canvas' );
    document.body.appendChild( container );
    renderer =  new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth*0.9, window.innerHeight*0.9);
    container.appendChild( renderer.domElement );

    // Camera control
    controls = new OrbitControls( camera, container );

    // Some helpers (axis, grid)
    helpers(scene);
    // Create Solar System
    solarSystemCreate(scene, planets);

    // Camera
    camera.position.set( 0, 5, 5 );
    controls.update();


}

function resize() {
    const factor = 0.9; // percentage of the screen
    const w = window.innerWidth * factor;
    const h = window.innerHeight * factor;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    solarSystemMove(planets);

    renderer.render(scene, camera);
}




