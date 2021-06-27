

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true});

renderer.setClearColor(0x000022);
scene.fog = new THREE.FogExp2(0x000022, 0.00225);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const loader = new THREE.TextureLoader();

const geometry = new THREE.CylinderGeometry(100, 100, 5000, 24, 24, true);
const material = new THREE.MeshBasicMaterial({ map: loader.load("http://localhost:8000/images/space.jpeg"), side: THREE.BackSide })
const cube = new THREE.Mesh ( geometry, material);
cube.rotation.x = -Math.PI / 2;
scene.add(cube);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

const animate = () => {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.04;
  // cube.rotation.y += 0.04;
  renderer.render(scene, camera);
}

animate();