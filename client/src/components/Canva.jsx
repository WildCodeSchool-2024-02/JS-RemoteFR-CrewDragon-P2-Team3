import * as THREE from "three";

function Canva() {
  // creation de la scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // creation de la forme spherique de la scene
  const geometry = new THREE.SphereGeometry(500, 500, 500);

  const wireframe = new THREE.WireframeGeometry(geometry);

  const line = new THREE.LineSegments(wireframe);
  line.material.depthTest = false;
  line.material.opacity = 0.25;
  line.material.transparent = true;

  scene.add(line);

  // affichage
  function animate() {
    requestAnimationFrame(animate);

    // rotation de la sphere(?) sur deux axes
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();

  camera.position.z = 5;
  return <h3>Coucou!</h3>;
}

export default Canva;
