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
import earthCloudTexture from "../assets/images/earthCould8k.jpg";

// Import Anneau Saturne
import saturnRingTexture from "../assets/images/anneau-saturn.png";

// Import Lunes
import moonTexture from "../assets/images/moon8k.jpg";

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
  const clouds = useRef([]); // Ajout d'une référence pour les nuages
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

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      50000
    );
    camera.position.set(0, 0, 5000);

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
    sun.name = "soleil"; // Ajout du nom
    scene.add(sun);

    // Création des planètes
    const createPlanet = (
      size,
      textureT,
      position,
      orbitSpeed,
      rotationSpeed,
      planetName,
      cloud,
      ring,
      moon
    ) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshStandardMaterial({
        map: textureLoad.load(textureT),
        depthWrite: true,
      });
      const planet = new THREE.Mesh(geometry, material);
      const planetObj = new THREE.Object3D();
      const planetObjMoon = new THREE.Object3D();
      planet.add(planetObj);
      planetObj.add(planet);
      planetObjMoon.add(planet);
      planet.name = planetName;
      planet.position.copy(position);
      scene.add(planet);
      planets.current.push(planet);

      if (cloud) {
        const geometryCloud = new THREE.SphereGeometry(size + 3, 25, 20);
        const materialCloud = new THREE.MeshStandardMaterial({
          map: textureLoad.load(cloud.texture),
          transparent: true,
          opacity: 0.5,
          depthWrite: true,
        });
        const planetCloud = new THREE.Mesh(geometryCloud, materialCloud);
        planetCloud.rotation.z = 0.4;
        planetCloud.name = "terre";
        planet.add(planetCloud);
        planetObj.add(planetCloud);
        clouds.current.push(planetCloud);
      }
      if (ring) {
        const RingGeo = new THREE.TorusGeometry(290, 80, 2, 50);

        const textureRing = textureLoad.load(ring.texture);
        textureRing.rotation = Math.PI / 2;

        const RingMat = new THREE.MeshBasicMaterial({
          map: textureRing,
          transparent: true,
          opacity: 0.2,
          depthWrite: true,
        });
        const Ring = new THREE.Mesh(RingGeo, RingMat);

        planetObj.add(Ring);
        planetObj.rotation.x = Math.PI / 2;
      }
      if (moon) {
        const geometryMoon = new THREE.SphereGeometry(50, 25, 20);
        const materialMoon = new THREE.MeshStandardMaterial({
          map: textureLoad.load(moonTexture),
        });
        const planetMoon = new THREE.Mesh(geometryMoon, materialMoon);
        planetMoon.position.x = 300;

        planetObjMoon.add(planetMoon);
        planet.add(planetObjMoon);
      }

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
        if (moon) {
          // Rotation de moon
          planetObjMoon.rotation.y += -0.0001;
        }
        if (cloud) {
          // Rotation des nuages
          planetObj.rotation.y += -0.0009;
        }
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
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        depthWrite: false,
      });

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

    // Stars random
    const starsGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const verticesSpeed = [];

    for (let i = 0; i < 10000; i += 3) {
      const x = THREE.MathUtils.randFloatSpread(100000);
      const y = THREE.MathUtils.randFloatSpread(100000);
      const z = THREE.MathUtils.randFloatSpread(100000);
      vertices.push(x, y, z);
      verticesSpeed.push(
        THREE.MathUtils.randFloatSpread(0.5),
        THREE.MathUtils.randFloatSpread(0.5),
        THREE.MathUtils.randFloatSpread(0.5)
      );
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 1,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const animateStars = () => {
      const positions = starsGeometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += verticesSpeed[i];
        positions[i + 1] += verticesSpeed[i + 1];
        positions[i + 2] += verticesSpeed[i + 2];

        if (
          positions[i] > 50000 ||
          positions[i] < -50000 ||
          positions[i + 1] > 50000 ||
          positions[i + 1] < -50000 ||
          positions[i + 2] > 50000 ||
          positions[i + 2] < -50000
        ) {
          positions[i] = THREE.MathUtils.randFloatSpread(100000);
          positions[i + 1] = THREE.MathUtils.randFloatSpread(100000);
          positions[i + 2] = THREE.MathUtils.randFloatSpread(100000);
        }
      }

      starsGeometry.attributes.position.needsUpdate = true;

      requestAnimationFrame(animateStars);
    };

    animateStars();

    // Ajout de nouvelle planètes
    createPlanet(
      80,
      mercuryT,
      new THREE.Vector3(800, 0, 0),
      0.00001,
      0.01,
      "mercure"
    );
    drawOrbit(800);
    createPlanet(
      90,
      venusT,
      new THREE.Vector3(1200, 0, 0),
      0.00003,
      0.008,
      "venus"
    );
    drawOrbit(1200);
    createPlanet(
      150,
      earthT,
      new THREE.Vector3(1800, 0, 0),
      0.00002,
      0.0006,
      "terre",
      {
        texture: earthCloudTexture,
      },
      false,
      { texture: moonTexture }
    );
    drawOrbit(1800);
    createPlanet(
      100,
      marsT,
      new THREE.Vector3(2400, 0, 0),
      0.00008,
      0.005,
      "mars"
    );
    drawOrbit(2400);
    createPlanet(
      210,
      jupiterT,
      new THREE.Vector3(3000, 0, 0),
      0.00001,
      0.002,
      "jupiter"
    );
    drawOrbit(3000);
    createPlanet(
      180,
      saturnT,
      new THREE.Vector3(3800, 0, 0),
      0.00004,
      0.001,
      "saturn",
      false,
      {
        texture: saturnRingTexture,
      }
    );
    drawOrbit(3800);
    createPlanet(
      100,
      uranusT,
      new THREE.Vector3(4400, 0, 0),
      0.00006,
      0.007,
      "uranus"
    );
    drawOrbit(4400);
    createPlanet(
      105,
      neptuneT,
      new THREE.Vector3(5000, 0, 0),
      0.00007,
      0.003,
      "neptune"
    );
    drawOrbit(5000);

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

      const intersects = raycaster.intersectObjects([
        ...planets.current,
        sun,
        ...clouds.current,
      ]);

      if (intersects.length > 0) {
        setSelectedPlanet(intersects[0].object.name);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onMouseClick);

    // Ajout du point de lumière
    const light = new THREE.PointLight(0xffffff, 3800000);
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
      sun.rotation.y += 0.001;
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
