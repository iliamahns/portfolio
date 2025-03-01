'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Butterflies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create butterfly wing geometries with custom UV mapping
    const leftWingGeometry = new THREE.PlaneGeometry(1, 1);
    const rightWingGeometry = new THREE.PlaneGeometry(1, 1);

    // Modify UVs to use half of the texture each
    const leftUVs = leftWingGeometry.attributes.uv;
    const rightUVs = rightWingGeometry.attributes.uv;

    // Adjust vertices to move pivot point to the right edge for left wing
    // and left edge for right wing
    const leftVertices = leftWingGeometry.attributes.position;
    const rightVertices = rightWingGeometry.attributes.position;
    
    for (let i = 0; i < leftVertices.count; i++) {
      // Move left wing vertices so left edge is at origin (reversed from before)
      leftVertices.setX(i, leftVertices.getX(i) - 0.5);
      // Move right wing vertices so right edge is at origin (reversed from before)
      rightVertices.setX(i, rightVertices.getX(i) + 0.5);
    }

    for (let i = 0; i < leftUVs.count; i++) {
      // Left wing uses left half of texture (reversed from before)
      leftUVs.setXY(i, leftUVs.getX(i) * 0.5, leftUVs.getY(i));
      // Right wing uses right half of texture
      rightUVs.setXY(i, 0.5 + rightUVs.getX(i) * 0.5, rightUVs.getY(i));
    }

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/images/logo.png');
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: 0.5
    });

    // Create butterflies
    const butterflies: { body: THREE.Group; leftWing: THREE.Mesh; rightWing: THREE.Mesh }[] = [];
    const butterflyData: { velocity: THREE.Vector3; wingSpeed: number }[] = [];
    
    for (let i = 0; i < 10; i++) {
      const butterflyGroup = new THREE.Group();
      
      // Create wings with different geometries
      const leftWing = new THREE.Mesh(leftWingGeometry, material);
      const rightWing = new THREE.Mesh(rightWingGeometry, material);
      
      // Position wings at the center
      leftWing.position.set(0, 0, 0);
      rightWing.position.set(0, 0, 0);
      
      leftWing.scale.set(0.75, 0.75, 0.75);
      rightWing.scale.set(0.75, 0.75, 0.75);
      
      butterflyGroup.add(leftWing);
      butterflyGroup.add(rightWing);
      
      butterflyGroup.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      
      butterflies.push({
        body: butterflyGroup,
        leftWing: leftWing,
        rightWing: rightWing
      });
      
      butterflyData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        ),
        wingSpeed: 0.2 + Math.random() * 0.3
      });
      
      scene.add(butterflyGroup);
    }

    camera.position.z = 15;

    // Animation
    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.016;

      butterflies.forEach((butterfly, index) => {
        const data = butterflyData[index];
        
        // Wing flapping
        const wingAngle = Math.sin(time * data.wingSpeed * 20) * Math.PI / 4;
        butterfly.leftWing.rotation.y = wingAngle;
        butterfly.rightWing.rotation.y = -wingAngle;
        
        // Movement
        butterfly.body.position.add(data.velocity);
        
        // Add gentle hovering rotation instead of movement-based rotation
        butterfly.body.rotation.y = Math.sin(time * 0.5) * 0.1;
        butterfly.body.rotation.x = Math.cos(time * 0.3) * 0.05;
        
        // Bounds checking with smoother turns and velocity capping
        const MAX_VELOCITY = 0.05;
        const BOUNDARY_MARGIN = 9.5;  // Slightly inside the boundary for smoother turns
        
        if (Math.abs(butterfly.body.position.x) > BOUNDARY_MARGIN) {
          data.velocity.x *= -0.8;  // Gentler bounce
          data.velocity.y += (Math.random() - 0.5) * 0.01;  // Smaller random adjustment
          butterfly.body.position.x = Math.sign(butterfly.body.position.x) * BOUNDARY_MARGIN;
        }
        if (Math.abs(butterfly.body.position.y) > BOUNDARY_MARGIN) {
          data.velocity.y *= -0.8;
          data.velocity.x += (Math.random() - 0.5) * 0.01;
          butterfly.body.position.y = Math.sign(butterfly.body.position.y) * BOUNDARY_MARGIN;
        }
        if (Math.abs(butterfly.body.position.z) > BOUNDARY_MARGIN) {
          data.velocity.z *= -0.8;
          butterfly.body.position.z = Math.sign(butterfly.body.position.z) * BOUNDARY_MARGIN;
        }
        
        // Cap maximum velocity
        const speed = data.velocity.length();
        if (speed > MAX_VELOCITY) {
          data.velocity.multiplyScalar(MAX_VELOCITY / speed);
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      leftWingGeometry.dispose();
      rightWingGeometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
} 