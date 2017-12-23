//const THREE = require('three');
//const OrbitControls = require('three-orbit-controls')(THREE);

import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';


const HELLO = "hello";
console.log(`${HELLO} world`);

let camera, scene, renderer, controls;
let geometry, material, mesh;

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
    //controls = new THREE.OrbitControls();
    controls = new OrbitControls( camera, container );
    /*
     const controls = new OrbitControls(camera, renderer.domElement);
     controls.enabled = true;
     controls.maxDistance = 1500;
     controls.minDistance = 0;
     */

    // Some helpers (axis, grid)
    const axis = new THREE.AxisHelper(20);
    scene.add(axis);

    let size = 10;
    let divisions = 10;
    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add(gridHelper);


    geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


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

    //controls.update();
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
}



