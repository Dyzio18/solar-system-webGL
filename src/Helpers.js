import * as THREE from 'three';

export const helpers = (scene) => {
    const axis = new THREE.AxisHelper(20);
    scene.add(axis);
    const radius = 20;    const radials = 20;    const circles = 20;    const divisions = 64;
    const gridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );
    scene.add(gridHelper);
};

