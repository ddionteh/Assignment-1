// Replace the existing import statement
// import * as THREE from "three.js-master";
import * as THREE from "three";

document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globe-container').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xcccccc);
    scene.add(ambientLight);

    const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('Assignment-1/NE1_HR_LC_SR_W_DR.jpg')
    });    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    camera.position.z = 15;

    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    function animate() {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.005; // Rotate the globe
        renderer.render(scene, camera);
    }
    animate();

    console.log("3D Globe Script Loaded");
});