import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

// Import des textures
import planetTexture from "../assets/images/sun8k.jpg";
import mercuryT from "../assets/images/mercury8k.jpg";
import venusT from "../assets/images/venus8k.jpg";
import earthT from "../assets/images/earth8k.jpg";
import marsT from "../assets/images/mars8k.jpg";
import jupiterT from "../assets/images/jupiter8k.jpg";
import saturnT from "../assets/images/saturn8k.jpg";
import uranusT from "../assets/images/uranus2k.jpg";
import neptuneT from "../assets/images/neptune2k.jpg";

// Import des background
import backGroundStar from "../assets/images/stars8k.jpg";
import backGround from "../assets/images/bgspace.jpg";

function Canva() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.TextureLoader().load(backGround);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    );
    camera.position.set(0, 0, 50);

    // scene sphere
    const renderer = new THREE.WebGLRenderer();
    const canvasElement = canvasRef.current;
    canvasElement.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const sphereScene = new THREE.SphereGeometry(1500, 1500, 1500).scale(
      -1,
      1,
      1
    );

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.maxDistance = 2000;

    // add sun
    const textureLoad = new THREE.TextureLoader();
    const sunGeometry = new THREE.SphereGeometry(15, 32, 16);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: textureLoad.load(planetTexture),
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);

    // Add Scene
    const texture = new THREE.TextureLoader().load(backGroundStar);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(sphereScene, material);
    scene.add(mesh);
    scene.add(sun);

    // Création des planètes
    const createPlanet = (size, textureT, position, orbitSpeed) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const materialP = new THREE.MeshBasicMaterial({
        map: textureLoad.load(textureT),
      });
      const planet = new THREE.Mesh(geometry, materialP);
      planet.position.copy(position);
      scene.add(planet);

      // Fonction de mise à jour de la position orbitale
      const updateOrbit = () => {
        const angle = Date.now() * orbitSpeed; // Calcul de l'angle de rotation en fonction de la vitesse orbitale
        const orbitRadius = position.length(); // Rayon de l'orbite
        planet.position.x = Math.cos(angle) * orbitRadius;
        planet.position.z = Math.sin(angle) * orbitRadius;
      };

      // Appel de la fonction de mise à jour à chaque frame
      const animateOrbit = () => {
        updateOrbit();
        requestAnimationFrame(animateOrbit);
      };
      animateOrbit();
    };

    // Ajout de nouvelle planètes
    createPlanet(3, mercuryT, new THREE.Vector3(100, 0, 0), 0.0001);
    createPlanet(3, venusT, new THREE.Vector3(220, 0, 0), 0.0008);
    createPlanet(3, earthT, new THREE.Vector3(300, 0, 0), 0.0006);
    createPlanet(3, marsT, new THREE.Vector3(420, 0, 0), 0.0004);
    createPlanet(3, jupiterT, new THREE.Vector3(500, 0, 0), 0.0002);
    createPlanet(3, saturnT, new THREE.Vector3(620, 0, 0), 0.0001);
    createPlanet(3, uranusT, new THREE.Vector3(730, 0, 0), 0.00008);
    createPlanet(3, neptuneT, new THREE.Vector3(850, 0, 0), 0.00006);

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Config post-processing
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      10, // Intensité de la lueur
      1, // Rayon de la lueur
      0.85 // Seuil de luminosité
    );
    composer.addPass(bloomPass);

    // Animation de rotation
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.00005;
      controls.update();
      composer.render();
    };
    animate();

    return () => {
      sphereScene.dispose();
      renderer.dispose();
      canvasElement.removeChild(renderer.domElement);
    };
  }, []); // Assurez-vous que le tableau de dépendances est vide ici

  return <div className="canva" ref={canvasRef} />;
}

export default Canva;
