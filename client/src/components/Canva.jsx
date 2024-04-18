import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import Card from "./Card"; // Importez le composant Card

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

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
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
      renderer.setSize(window.innerWidth, window.innerHeight),
    ]);
    scene.add(cubeTextureLoader);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      50000
    );
    camera.position.set(0, 0, 1000);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.maxDistance = 20000;

    // add sun
    const textureLoad = new THREE.TextureLoader();
    const sunGeometry = new THREE.SphereGeometry(300, 32, 16);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: textureLoad.load(planetTexture),
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Création des planètes
    const createPlanet = (size, textureT, position, orbitSpeed, planetName) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        map: textureLoad.load(textureT),
      });
      const planet = new THREE.Mesh(geometry, material);
      planet.name = planetName;
      planet.position.copy(position);
      scene.add(planet);
      planets.current.push(planet);

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
    createPlanet(
      12,
      mercuryT,
      new THREE.Vector3(800, 0, 0),
      0.00001,
      "mercure"
    );
    createPlanet(28, venusT, new THREE.Vector3(1200, 0, 0), 0.00003, "venus");
    createPlanet(36, earthT, new THREE.Vector3(1800, 0, 0), 0.00002, "terre");
    createPlanet(28, marsT, new THREE.Vector3(2400, 0, 0), 0.00008, "mars");
    createPlanet(
      60,
      jupiterT,
      new THREE.Vector3(3000, 0, 0),
      0.00001,
      "jupiter"
    );
    createPlanet(48, saturnT, new THREE.Vector3(3600, 0, 0), 0.00004, "saturn");
    createPlanet(32, uranusT, new THREE.Vector3(4000, 0, 0), 0.00006, "uranus");
    createPlanet(
      28,
      neptuneT,
      new THREE.Vector3(4400, 0, 0),
      0.00007,
      "neptune"
    );

    const onMouseClick = (event) => {
      const canvasBounds = canvasRef.current.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1,
        -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      raycaster.params.Points.threshold = 2;

      const intersects = raycaster.intersectObjects(planets.current);

      if (intersects.length > 0) {
        console.info("Planète cliquée:", intersects[0].object.name);
        // Actions supplémentaires peuvent être définies ici
      }
    };

    window.addEventListener("click", onMouseClick);

    // Ajout du point de lumière
    const light = new THREE.PointLight(0xffffff, 3500000);
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
      sunComposer.render();
    };
    animate();

    return () => {
      renderer.dispose();
      canvasElement.removeChild(renderer.domElement);
      window.removeEventListener("click", onMouseClick);
    };
  }, []);

  return (
    <div className="canva-container">
      <div className="canva" ref={canvasRef} />

      <div
        className="card"
        style={{ position: "absolute", top: 250, left: -120 }}
      >
        <Card
          planet={{
            name: "Earth",
            englishName: "Earth",
            density: 5.52,
            gravity: 9.8,
            dimension: "12756 km",
            bodyType: "planet",
          }}
        />
      </div>
    </div>
  );
}

export default Canva;
