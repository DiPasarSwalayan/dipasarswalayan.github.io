import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 15, 150)

let mouseX = 0.5;
let mouseY = 0.5;

let object;
const loader = new GLTFLoader();
loader.load(
    `Data/Models/ModelF/scene.gltf`,
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
    },
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

const topLight = new THREE.DirectionalLight(0xffffff, 1.5); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);
const ambientLight = new THREE.AmbientLight(0x333333, 3);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);
    let factor = getComputedStyle(renderer.domElement).getPropertyValue("--factor");
    object.rotation.y = (mouseX - 0.5) * 2.5 * factor;
    object.rotation.x = (mouseY - 0.5) * 0.5 * factor;
    renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
}

document.getElementById("container3D").appendChild(renderer.domElement);
animate();