import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import Card from "./Card";

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
import backGroundStar0 from "../assets/images/spacebk.jpg";
import backGroundStar1 from "../assets/images/spaceDN.jpg";
import backGroundStar2 from "../assets/images/spaceft.jpg";
import backGroundStar3 from "../assets/images/spacelf.jpg";
import backGroundStar4 from "../assets/images/spacert.jpg";
import backGroundStar5 from "../assets/images/spaceUP.jpg";

function Canva() {
  const canvasRef = useRef(null);
  const planets = useRef([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvasElement = canvasRef.current;
    canvasElement.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // scene cube
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      backGroundStar2,
      backGroundStar0,
      backGroundStar5,
      backGroundStar1,
      backGroundStar4,
      backGroundStar3,
    ]);
    scene.add(cubeTextureLoader);

    const camera = new THREE.PerspectiveCamera(
      750,
      window.innerWidth / window.innerHeight,
      0.1,
      500000
    );
    camera.position.set(0, 0, 50000);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.maxDistance = 200000;

    // add sun
    const textureLoad = new THREE.TextureLoader();
    const sunGeometry = new THREE.SphereGeometry(3000, 320, 160);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: textureLoad.load(planetTexture),
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.name = "soleil"; // Ajout du nom
    scene.add(sun);

    // Création des planètes
    const createPlanet = (
      size,
      textureT,
      position,
      orbitSpeed,
      rotationSpeed,
      planetName
    ) => {
      const geometry = new THREE.SphereGeometry(size, 320, 320);
      const material = new THREE.MeshStandardMaterial({
        map: textureLoad.load(textureT),
      });
      const planet = new THREE.Mesh(geometry, material);
      planet.name = planetName;
      planet.position.copy(position);
      scene.add(planet);
      planets.current.push(planet);

      // Ajout d'un identifiant pour détecter les planètes lors du survol
      planet.userData.isPlanet = true;

      // Position orbitale
      const updateOrbit = () => {
        const angle = Date.now() * orbitSpeed;
        const orbitRadius = position.length();
        planet.position.x = Math.cos(angle) * orbitRadius;
        planet.position.z = Math.sin(angle) * orbitRadius;
      };

      // Rotation sur elle-même
      const rotatePlanet = () => {
        planet.rotation.y += rotationSpeed;
      };

      const animateOrbit = () => {
        updateOrbit();
        rotatePlanet();
        requestAnimationFrame(animateOrbit);
      };
      animateOrbit();
    };

    // Dessiner l'orbite
    const drawOrbit = (radius) => {
      const segments = 360;
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });

      // Création des points de la ligne
      const points = [];
      for (let i = 0; i <= segments; i += 1) {
        const circle = (i / segments) * Math.PI * 2;
        const x = radius * Math.cos(circle);
        const z = radius * Math.sin(circle);
        points.push(new THREE.Vector3(x, 0, z));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      // Ajout des lignes à la scene
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    };

    // Ajout de nouvelle planètes
    createPlanet(
      800,
      mercuryT,
      new THREE.Vector3(8000, 0, 0),
      0.00002,
      0.01,
      "mercure"
    );
    drawOrbit(8000);
    createPlanet(
      900,
      venusT,
      new THREE.Vector3(12000, 0, 0),
      0.00006,
      0.008,
      "venus"
    );
    drawOrbit(12000);
    createPlanet(
      1500,
      earthT,
      new THREE.Vector3(18000, 0, 0),
      0.00004,
      0.006,
      "terre"
    );
    drawOrbit(18000);
    createPlanet(
      1000,
      marsT,
      new THREE.Vector3(24000, 0, 0),
      0.00016,
      0.005,
      "mars"
    );
    drawOrbit(24000);
    createPlanet(
      2100,
      jupiterT,
      new THREE.Vector3(30000, 0, 0),
      0.00002,
      0.002,
      "jupiter"
    );
    drawOrbit(30000);
    createPlanet(
      1800,
      saturnT,
      new THREE.Vector3(36000, 0, 0),
      0.00008,
      0.001,
      "saturn"
    );
    drawOrbit(36000);
    createPlanet(
      1000,
      uranusT,
      new THREE.Vector3(40000, 0, 0),
      0.00012,
      0.007,
      "uranus"
    );
    drawOrbit(40000);
    createPlanet(
      1050,
      neptuneT,
      new THREE.Vector3(44000, 0, 0),
      0.00014,
      0.003,
      "neptune"
    );
    drawOrbit(44000);

    const onMouseMove = (event) => {
      const canvasBounds = canvasRef.current.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1,
        -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const planet = intersects.find(
          (intersect) => intersect.object.userData.isPlanet
        );
        canvasElement.style.cursor = planet ? "pointer" : "auto";
      } else {
        canvasElement.style.cursor = "auto";
      }
    };

    const onMouseClick = (event) => {
      const canvasBounds = canvasRef.current.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1,
        -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      raycaster.params.Points.threshold = 2;

      const intersects = raycaster.intersectObjects([...planets.current, sun]); // Ajout du soleil

      if (intersects.length > 0) {
        console.info("Planète cliquée:", intersects[0].object.name);
        setSelectedPlanet(intersects[0].object.name);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onMouseClick);

    // Ajout du point de lumière
    const light = new THREE.PointLight(0xffffff, 390000000);
    scene.add(light);

    // Post-processing pour le soleil
    const sunComposer = new EffectComposer(renderer);
    const sunRenderPass = new RenderPass(scene, camera);
    sunComposer.addPass(sunRenderPass);

    // Post processing Sun
    const sunBloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      2, // Intensité de la lueur
      1, // Rayon de la lueur
      0.5 // Seuil de luminosité
    );
    sunComposer.addPass(sunBloomPass);

    // Animation de rotation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      sun.rotation.y += 0.01;
      sunComposer.render();
    };
    animate();

    return () => {
      renderer.dispose();
      canvasElement.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onMouseClick);
    };
  }, []);

  const handleCloseCard = () => {
    setSelectedPlanet(null);
  };

  return (
    <div className="canva-container" style={{ position: "relative" }}>
      <div className="canva" ref={canvasRef} />
      {selectedPlanet && (
        <div
          className="card"
          style={{ position: "absolute", top: 10, left: -120 }}
        >
          <Card planetName={selectedPlanet} onClose={handleCloseCard} />
        </div>
      )}
    </div>
  );
}

export default Canva;
