import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { ChevronRight, ArrowRight, ArrowUpRight, Rocket } from 'lucide-react';
import '../../styles/shard-assembly.css';

/**
 * ROVAWARE — 3D Shard Assembly & Brand Reveal Hero
 * 
 * Target Page: /about/company
 * Brand: ROVAWARE
 * Tagline: ENGINEERING THE DIGITAL FUTURE
 * 
 * Timeline:
 * - 0–2s: Small refined orange 3D fragments appear concentrated around the center.
 * - 2–6s: Fragments rapidly move and assemble into the actual ROVAWARE letters.
 * - 6–8s: Complete orange gradient wordmark becomes crisp and clearly visible.
 * - 8–10s: Orange light sweep, thin underline, tagline and CTA buttons reveal.
 * - At 10s: Final composition is complete, locked, and remains visible.
 */

const TOTAL_DURATION_SEC = 10.0;

export default function ShardAssemblyHero({
  onNavigateHome,
  onNavigateBookProject,
  onNavigateContact
}) {
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);

  // Direct DOM element refs
  const badgeRef = useRef(null);
  const wordmarkRef = useRef(null);
  const lightSweepRef = useRef(null);
  const laserLineRef = useRef(null);
  const taglineRef = useRef(null);
  const actionRowRef = useRef(null);

  // Animation & Three.js refs
  const animFrameIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const currentStageRef = useRef(-1);
  const threeSceneRef = useRef(null);

  // Smooth cubic easing
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Direct DOM updates for milestone stages
  const applyStage = useCallback((stage) => {
    currentStageRef.current = stage;

    const badge = badgeRef.current;
    const wordmark = wordmarkRef.current;
    const lightSweep = lightSweepRef.current;
    const laserLine = laserLineRef.current;
    const tagline = taglineRef.current;
    const actionRow = actionRowRef.current;

    switch (stage) {
      case 0: // 0–2s: Small orange fragments around center
        if (badge) badge.textContent = '0–2s: REFINED ORANGE 3D FRAGMENTS';
        if (wordmark) wordmark.classList.remove('visible');
        if (lightSweep) lightSweep.classList.remove('active');
        if (laserLine) laserLine.classList.remove('illuminated');
        if (tagline) tagline.classList.remove('revealed');
        if (actionRow) actionRow.classList.remove('revealed');
        break;

      case 1: // 2–6s: Fragments assemble into ROVAWARE letters
        if (badge) badge.textContent = '2–6s: FRAGMENTS ASSEMBLING ROVAWARE';
        if (wordmark) wordmark.classList.remove('visible');
        if (lightSweep) lightSweep.classList.remove('active');
        if (laserLine) laserLine.classList.remove('illuminated');
        if (tagline) tagline.classList.remove('revealed');
        if (actionRow) actionRow.classList.remove('revealed');
        break;

      case 2: // 6–8s: Complete orange wordmark clearly visible
        if (badge) badge.textContent = '6–8s: ROVAWARE WORDMARK ILLUMINATION';
        if (wordmark) wordmark.classList.add('visible');
        if (lightSweep) lightSweep.classList.remove('active');
        if (laserLine) laserLine.classList.remove('illuminated');
        if (tagline) tagline.classList.remove('revealed');
        if (actionRow) actionRow.classList.remove('revealed');
        break;

      case 3: // 8–10s: Light sweep, underline, tagline and CTA reveal
        if (badge) badge.textContent = '8–10s: LIGHT SWEEP, UNDERLINE & TAGLINE REVEAL';
        if (wordmark) wordmark.classList.add('visible');
        if (lightSweep) lightSweep.classList.add('active');
        if (laserLine) laserLine.classList.add('illuminated');
        if (tagline) tagline.classList.add('revealed');
        if (actionRow) actionRow.classList.add('revealed');
        break;

      case 4: // At 10s & thereafter: Complete and locked
      default:
        if (badge) badge.textContent = 'ROVAWARE ADVANCED ENGINEERING STUDIO';
        if (wordmark) wordmark.classList.add('visible');
        if (lightSweep) lightSweep.classList.remove('active');
        if (laserLine) laserLine.classList.add('illuminated');
        if (tagline) tagline.classList.add('revealed');
        if (actionRow) actionRow.classList.add('revealed');
        break;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const viewport = viewportRef.current;
    if (!canvas || !viewport) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer Setup (Pure Black #050505)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    const width = viewport.clientWidth || window.innerWidth;
    const height = viewport.clientHeight || window.innerHeight;

    const aspect = width / height;
    const fov = 45;
    const cameraZ = Math.max(50, Math.min(135, 68 / (2 * Math.tan((fov / 2) * (Math.PI / 180)) * Math.min(aspect, 1.8))));

    const camera = new THREE.PerspectiveCamera(fov, aspect, 1, 2000);
    camera.position.set(0, 0, cameraZ);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 2. Focused Cinematic Studio Lighting (Pure Black with Subtle Orange Illumination)
    const ambientLight = new THREE.AmbientLight(0x221105, 2.5);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0xFF6A00, 5.0, 120);
    centerPointLight.position.set(0, 0, 25);
    scene.add(centerPointLight);

    const keyLight = new THREE.DirectionalLight(0xFF8C32, 2.5);
    keyLight.position.set(-25, 30, 50);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xFF6A00, 2.0);
    rimLight.position.set(25, -25, -20);
    scene.add(rimLight);

    // 3. Tiny Decorative Orange Particles (Only 12 subtle micro-sparks)
    const decorativeParticles = [];
    const particleGeom = new THREE.TetrahedronGeometry(0.18);
    const particleMat = new THREE.MeshBasicMaterial({
      color: 0xFF8C32,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });

    for (let i = 0; i < 12; i++) {
      const pMesh = new THREE.Mesh(particleGeom, particleMat);
      const px = (Math.random() - 0.5) * 80;
      const py = (Math.random() - 0.5) * 45;
      const pz = (Math.random() - 0.5) * 40 - 5;
      pMesh.position.set(px, py, pz);
      scene.add(pMesh);

      decorativeParticles.push({
        mesh: pMesh,
        baseY: py,
        driftSpeed: 0.0008 + Math.random() * 0.0012,
        phase: i * 0.8
      });
    }

    // 4. Rasterize "ROVAWARE" onto Offscreen Canvas to Generate Exact Letter Target Coordinates
    const offCanvas = document.createElement('canvas');
    offCanvas.width = 1200;
    offCanvas.height = 240;
    const offCtx = offCanvas.getContext('2d');

    offCtx.fillStyle = '#FFFFFF';
    offCtx.font = "900 132px 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText('ROVAWARE', 600, 120);

    const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
    const data = imgData.data;

    const shards = [];
    const shardGroup = new THREE.Group();
    scene.add(shardGroup);

    // Base materials for small refined geometric 3D fragments
    const shardFaceMaterial = new THREE.MeshStandardMaterial({
      color: 0xEE5F00,
      roughness: 0.22,
      metalness: 0.85,
      emissive: 0xFF6A00,
      emissiveIntensity: 0.45
    });

    const shardEdgeMaterial = new THREE.LineBasicMaterial({
      color: 0xFFA040,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.95
    });

    // Small refined geometric shard geometry (Delicate 3D tetrahedrons)
    const baseShardGeom = new THREE.TetrahedronGeometry(0.36);
    const edgesGeom = new THREE.EdgesGeometry(baseShardGeom);

    const step = 14;
    const scaleFactor = 0.076;

    for (let y = 8; y < offCanvas.height; y += step) {
      for (let x = 8; x < offCanvas.width; x += step) {
        const idx = (y * offCanvas.width + x) * 4;
        if (data[idx + 3] > 130) {
          // Exact target coordinate strictly on the letter stroke
          const tx = (x - 600) * scaleFactor;
          const ty = (120 - y) * scaleFactor;
          const tz = 0;

          // Initial scattered position: CONCENTRATED AROUND THE CENTER WORDMARK
          // (No oversized scatter, no fragments crossing the entire screen)
          const ox = tx + (Math.random() - 0.5) * 8.5;
          const oy = ty + (Math.random() - 0.5) * 5.5;
          const oz = (Math.random() - 0.5) * 7.0 + 1.2;

          // Tumbling 3D rotations
          const originRotX = (Math.random() - 0.5) * Math.PI * 2.2;
          const originRotY = (Math.random() - 0.5) * Math.PI * 2.2;
          const originRotZ = (Math.random() - 0.5) * Math.PI * 2.2;

          const mesh = new THREE.Mesh(baseShardGeom, shardFaceMaterial.clone());
          const line = new THREE.LineSegments(edgesGeom, shardEdgeMaterial);
          mesh.add(line);

          mesh.position.set(ox, oy, oz);
          mesh.rotation.set(originRotX, originRotY, originRotZ);
          shardGroup.add(mesh);

          shards.push({
            mesh,
            ox, oy, oz,
            tx, ty, tz,
            originRotX, originRotY, originRotZ
          });
        }
      }
    }

    threeSceneRef.current = {
      scene,
      camera,
      renderer,
      shards,
      decorativeParticles,
      shardGroup
    };

    // 5. Mouse Parallax (subtle 3D depth reaction)
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX - window.innerWidth / 2) * 0.002;
      mouse.y = -(e.clientY - window.innerHeight / 2) * 0.002;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 6. Window Resize Handler
    const handleResize = () => {
      if (!viewport) return;
      const w = viewport.clientWidth || window.innerWidth;
      const h = viewport.clientHeight || window.innerHeight;
      const curAspect = w / h;
      camera.aspect = curAspect;
      camera.position.z = Math.max(50, Math.min(135, 68 / (2 * Math.tan((fov / 2) * (Math.PI / 180)) * Math.min(curAspect, 1.8))));
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Start 10-Second Master Clock
    startTimeRef.current = performance.now();

    if (prefersReducedMotion) {
      applyStage(4);
      shards.forEach((s) => {
        s.mesh.position.set(s.tx, s.ty, s.tz);
        s.mesh.visible = false;
      });
    } else {
      applyStage(0);
    }

    // 8. Main Render Loop strictly tied to the 10-second milestones
    const animate = (now) => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const elapsedSec = Math.min(TOTAL_DURATION_SEC, Math.max(0, (now - startTimeRef.current) / 1000));

      // Camera parallax tilt
      camera.position.x += (mouse.x * 6 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 6 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Subtle decorative particle drift (12 micro-sparks)
      for (let i = 0; i < decorativeParticles.length; i++) {
        const p = decorativeParticles[i];
        p.mesh.rotation.x += 0.006;
        p.mesh.rotation.y += 0.008;
        p.mesh.position.y = p.baseY + Math.sin(now * p.driftSpeed + p.phase) * 1.2;
      }

      // ======================================================================
      // EXACT 10-SECOND CINEMATIC SEQUENCE:
      // ======================================================================

      if (elapsedSec < 2.0) {
        // [0–2s]: Small orange fragments appear around center
        if (currentStageRef.current !== 0) applyStage(0);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          const wobble = Math.sin(now * 0.002 + i * 0.1) * 0.3;
          s.mesh.position.x = s.ox + wobble;
          s.mesh.position.y = s.oy + wobble;
          s.mesh.position.z = s.oz;
          s.mesh.rotation.x = s.originRotX + Math.sin(now * 0.001) * 0.1;
          s.mesh.rotation.y = s.originRotY + Math.cos(now * 0.001) * 0.1;
          s.mesh.scale.set(1, 1, 1);
          s.mesh.visible = true;
        }
      } else if (elapsedSec < 6.0) {
        // [2–6s]: Fragments rapidly assemble into actual ROVAWARE letters
        if (currentStageRef.current !== 1) applyStage(1);

        const moveT = (elapsedSec - 2.0) / 4.0; // 0.0 -> 1.0 over 4 full seconds
        const ease = easeInOutCubic(moveT);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          s.mesh.position.x = s.ox + (s.tx - s.ox) * ease;
          s.mesh.position.y = s.oy + (s.ty - s.oy) * ease;
          s.mesh.position.z = s.oz + (s.tz - s.oz) * ease;
          s.mesh.rotation.x = s.originRotX * (1 - ease);
          s.mesh.rotation.y = s.originRotY * (1 - ease);
          s.mesh.rotation.z = s.originRotZ * (1 - ease);
          s.mesh.scale.set(1, 1, 1);
          s.mesh.visible = true;

          // Subtle illumination increase as fragments lock together
          s.mesh.material.emissiveIntensity = 0.45 + ease * 0.45;
        }
      } else if (elapsedSec < 8.0) {
        // [6–8s]: Complete orange wordmark becomes clearly visible
        if (currentStageRef.current !== 2) applyStage(2);

        // Seamless handoff: As the clean orange wordmark displays,
        // fragments gently scale down so they NEVER overlap the completed typography
        const fadeT = Math.min(1.0, (elapsedSec - 6.0) / 1.0);
        const shardScale = Math.max(0.001, 1.0 - fadeT);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          s.mesh.position.set(s.tx, s.ty, s.tz);
          s.mesh.rotation.set(0, 0, 0);
          s.mesh.scale.set(shardScale, shardScale, shardScale);
          if (fadeT >= 1.0) {
            s.mesh.visible = false;
          }
        }
      } else if (elapsedSec < 10.0) {
        // [8–10s]: Orange light sweep, underline, tagline and CTA reveal
        if (currentStageRef.current !== 3) applyStage(3);

        for (let i = 0; i < shards.length; i++) {
          shards[i].mesh.visible = false;
        }

        const sweepT = (elapsedSec - 8.0) / 2.0; // 0.0 -> 1.0
        if (lightSweepRef.current) {
          lightSweepRef.current.style.left = `${sweepT * 115}%`;
        }
      } else {
        // [At 10 seconds & thereafter]: Complete final design remains displayed
        if (currentStageRef.current !== 4) applyStage(4);

        for (let i = 0; i < shards.length; i++) {
          shards[i].mesh.visible = false;
        }
      }

      renderer.render(scene, camera);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    // Cleanup resources
    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      shardFaceMaterial.dispose();
      shardEdgeMaterial.dispose();
      baseShardGeom.dispose();
      edgesGeom.dispose();
      particleGeom.dispose();
      particleMat.dispose();
    };
  }, [applyStage, easeInOutCubic]);

  return (
    <section className="shard-assembly-runway">
      <div className="shard-assembly-sticky-viewport" ref={viewportRef}>
        {/* Three.js 3D WebGL Canvas Layer */}
        <div className="shard-three-canvas-container">
          <canvas ref={canvasRef} className="shard-three-canvas" />
        </div>

        {/* Subtle, Controlled Central Radial Warmth */}
        <div className="shard-cosmic-glow" />

        {/* Soft Vignette (Pure Black #050505) */}
        <div className="shard-vignette" />

        {/* Interactive UI Content Overlay */}
        <div className="shard-ui-overlay">
          {/* Top Telemetry & Breadcrumb Row */}
          <div className="shard-top-bar">
            <nav className="shard-breadcrumb" aria-label="Breadcrumb">
              <button
                type="button"
                className="shard-breadcrumb-btn"
                onClick={onNavigateHome}
              >
                Home
              </button>
              <ChevronRight size={13} />
              <span>About</span>
              <ChevronRight size={13} />
              <span className="shard-breadcrumb-active">Company</span>
            </nav>

            <div className="shard-assembly-badge">
              <span className="shard-badge-dot" />
              <span ref={badgeRef}>0–2s: REFINED ORANGE 3D FRAGMENTS</span>
            </div>
          </div>

          {/* Center Brand Reveal: ROVAWARE directly on black background, NO rectangular panel */}
          <div className="shard-center-reveal-layer">
            <div className="shard-wordmark-container">
              {/* Premium Orange Gradient Typography */}
              <h1 ref={wordmarkRef} className="shard-wordmark-title">
                ROVAWARE
              </h1>

              {/* Controlled Metallic Light Sweep Beam (8s - 10s) */}
              <div className="shard-light-sweep-container">
                <div ref={lightSweepRef} className="shard-light-sweep" />
              </div>
            </div>

            {/* Thin Orange Underline below Wordmark */}
            <div className="shard-laser-line-wrapper">
              <div ref={laserLineRef} className="shard-laser-line" />
            </div>

            {/* Tagline: Small uppercase white typography with elegant letter spacing */}
            <div ref={taglineRef} className="shard-tagline-box">
              <h2 className="shard-tagline">ENGINEERING THE DIGITAL FUTURE</h2>
            </div>

            {/* Action Buttons (Generous spacing below tagline) */}
            <div ref={actionRowRef} className="shard-action-row">
              <button
                type="button"
                className="shard-action-btn primary"
                onClick={onNavigateBookProject}
              >
                <Rocket size={15} />
                <span>Book a Project</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                className="shard-action-btn ghost"
                onClick={onNavigateContact}
              >
                <span>Contact Engineering Leads</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
