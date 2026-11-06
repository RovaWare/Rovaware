import React, { useRef, useEffect, useState } from 'react';
import '../../styles/VideoHero.css';

/**
 * Plain Video Hero Section
 * 
 * Clean, full-bleed presentation of rovavideo.mp4 with no controls,
 * no pause options, and continuous muted autoplay loop.
 */
export default function VideoHeroSection({ videoSrc = '/rovavideo.mp4' }) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <section id="hero" className="video-hero-root">
      <div className="video-hero-stage">
        <video
          ref={videoRef}
          src={videoSrc}
          className={`video-hero-media ${isLoaded ? 'is-loaded' : ''}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          aria-hidden="true"
          onLoadedData={() => setIsLoaded(true)}
        />
      </div>
    </section>
  );
}
