const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true});


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const loader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: loader.load("http://localhost:8000/images/space.jpeg")})
const cube = new THREE.Mesh ( geometry, material);
scene.add(cube);

const geometry2 = new THREE.BoxGeometry(3, 3, 3);
const material2 = new THREE.MeshBasicMaterial({
  color: "#dadada", wireframe: true, transparent: true
});
const wireFrameCube = new THREE.Mesh(geometry2, material2);
scene.add(wireFrameCube);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.04;
  cube.rotation.y += 0.04;
  wireFrameCube.rotation.x -= 0.01;
  wireFrameCube.rotation.y -= 0.01;
  renderer.render(scene, camera);
}

animate();