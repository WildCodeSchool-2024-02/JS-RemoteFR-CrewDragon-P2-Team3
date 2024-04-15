
import { useEffect, useRef } from "react";
import * as THREE from "three";
import backGround from "../assets/images/bgspace.jpg";

function Canva() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 110);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new THREE.SphereGeometry(500, 500, 500).scale(-1, 1, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);

    line.material.depthTest = false;
    line.material.opacity = 0.05;
    line.material.transparent = true;
    scene.add(line);
    const texture = new THREE.TextureLoader().load(backGround);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const canvasElement = canvasRef.current;
    canvasElement.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      line.rotation.x += 0.0005;
      line.rotation.y += 0.0005;
      line.rotation.z += 0.0005;
      mesh.rotation.x += 0.0005;
      mesh.rotation.y += 0.0005;
      mesh.rotation.z += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      geometry.dispose();
      wireframe.dispose();
      renderer.dispose();
      canvasElement.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="canva" ref={canvasRef} />;
}

export default Canva;
