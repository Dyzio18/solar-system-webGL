import * as THREE from 'three';

export const helpers = (scene) => {
    const axis = new THREE.AxisHelper(20);
    scene.add(axis);
    const radius = 10;    const radials = 16;    const circles = 8;    const divisions = 64;
    const gridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );
    scene.add(gridHelper);
};

