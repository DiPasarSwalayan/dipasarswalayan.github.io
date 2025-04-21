import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 15, 150)

let objects = [];
const loader = new GLTFLoader();
loader.load(
    `../Models/ModelF/scene.gltf`,
    function (gltf) {
        gltf.scene.position.x = -80;
        objects[0] = gltf.scene;
        scene.add(objects[0]);
    },
);
loader.load(
    `../Models/ModelU/scene.gltf`,
    function (gltf) {
        gltf.scene.position.x = -80;
        gltf.scene.scale.set(30, 30, 30);
        gltf.scene.rotation.set(0, 1.62, 0)
        objects[1] = gltf.scene;
        scene.add(objects[1]);
    },
);
loader.load(
    `../Models/ModelC/scene.gltf`,
    function (gltf) {
        gltf.scene.position.x = -80;
        objects[2] = gltf.scene;
        scene.add(objects[2]);
    },
);
loader.load(
    `../Models/ModelK/scene.gltf`,
    function (gltf) {
        gltf.scene.position.x = -80;
        gltf.scene.scale.set(0.8, 0.8, 0.8);
        objects[3] = gltf.scene;
        scene.add(objects[3]);
    },
);
loader.load(
    `../Models/ComingSoon/scene.gltf`,
    function (gltf) {
        gltf.scene.position.x = -80;
        gltf.scene.scale.set(55, 55, -55);
        gltf.scene.rotation.set(0, 1.62, 0)
        objects[4] = gltf.scene;
        scene.add(objects[4]);
    },
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
topLight.position.set(500, 500, 500)
topLight.castShadow = true;
scene.add(topLight);
const ambientLight = new THREE.AmbientLight(0x333333, 3);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);
    for (let i = 0; i < objects.length; i++) {
        objects[i].position.y = (window.scrollY / 5) - (i * 200) - 600;
    } 
    renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById("container3D").appendChild(renderer.domElement);
animate();