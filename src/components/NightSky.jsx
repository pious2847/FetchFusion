import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../App.css';

const NightSky = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create night sky with stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });

    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create shooting stars
    const shootingStarsGeometry = new THREE.BufferGeometry();
    const shootingStarsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,      // Base color
      emissive: 0x00FFFF,   // Emissive color for glowing effect
      size: 0.2,
      opacity: 0.8,
      transparent: true,
    });

    const shootingStarsVertices = [];
    for (let i = 0; i < 50; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      shootingStarsVertices.push(x, y, z);
    }

    shootingStarsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(shootingStarsVertices, 3));
    const shootingStars = new THREE.Points(shootingStarsGeometry, shootingStarsMaterial);
    scene.add(shootingStars);

    // Append Three.js renderer to the container
    containerRef.current.appendChild(renderer.domElement);

    // Handle window resize
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      // Move shooting stars
      shootingStars.position.z += 1;

      // Reset position of shooting stars
      if (shootingStars.position.z > 1000) {
        shootingStars.position.z = -1000;
      }

      // Render scene
      renderer.render(scene, camera);
    };

    // Start animation loop
    animate();

    return () => {
      // Clean up Three.js scene on component unmount
      window.removeEventListener('resize', () => {});
      scene.remove(stars);
      scene.remove(shootingStars);
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className='night-sky-container' />;
};

export default NightSky;
