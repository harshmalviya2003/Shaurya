// pages/index.tsx (or any page file in your Next.js project)
// This is a complete Next.js page component converted from the provided HTML.
// I've used React hooks for the interactive script part (drag scrolling).
// Styles are placed in <style jsx global> for simplicity to match the original.
// Font Awesome is linked via CDN in <Head>, but consider installing it via npm for production.

import Head from 'next/head';
import { useRef, useEffect } from 'react';

export default function CreativeDesignStudio() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    // Mouse drag control for gallery
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      isDown = false;
      track.style.cursor = 'grab';
      track.style.animationPlayState = 'running';
    };

    const handleMouseUp = () => {
      isDown = false;
      track.style.cursor = 'grab';
      track.style.animationPlayState = 'running';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    };

    // Touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.animationPlayState = 'paused';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('mouseup', handleMouseUp);
    track.addEventListener('mousemove', handleMouseMove);
    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchmove', handleTouchMove, { passive: true });
    track.addEventListener('touchend', handleTouchEnd);

    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      track.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('mouseup', handleMouseUp);
      track.removeEventListener('mousemove', handleMouseMove);
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      <Head>
        <title>AI & Full-Stack Development Services</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="services-btn">Services</div>
        </div>

        <h1 className="main-heading">AI Integration & Full-Stack Development</h1>
        <p className="sub-heading">From chatbots to enterprise applications: We build intelligent solutions!</p>

        <div className="tags-container">
          <div className="tag">AI Chatbots</div>
          <div className="tag">Machine Learning</div>
          <div className="tag">Natural Language Processing</div>
          <div className="tag">Computer Vision</div>
          <div className="tag">Predictive Analytics</div>
          <div className="tag">React Applications</div>
          <div className="tag">Node.js Backend</div>
          <div className="tag">Python APIs</div>
          <div className="tag">Database Design</div>
          <div className="tag">Cloud Deployment</div>
          <div className="tag">AI Model Training</div>
          <div className="tag">Data Pipeline</div>
          <div className="tag">API Integration</div>
          <div className="tag">DevOps & CI/CD</div>
        </div>

        <p className="note">And everything in between using cutting-edge AI frameworks, modern web technologies, and cloud platforms</p>

        <div className="gallery-container">
          <div className="gallery-track animate-scroll" ref={trackRef}>
            {/* First set of images */}
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Integration"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">AI-Powered Chatbot</div>
                <div className="gallery-desc">Customer Support Automation</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="Full-Stack App"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">E-commerce Platform</div>
                <div className="gallery-desc">React + Node.js + AI</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Dashboard"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Analytics Dashboard</div>
                <div className="gallery-desc">ML-Powered Insights</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Workflow"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Workflow Automation</div>
                <div className="gallery-desc">AI + Process Optimization</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="ML Model"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Custom ML Model</div>
                <div className="gallery-desc">TensorFlow + PyTorch</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI API"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">AI API Gateway</div>
                <div className="gallery-desc">OpenAI + LangChain</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1611532736597-8b8f8c62CDf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="Full-Stack Platform"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">SaaS Platform</div>
                <div className="gallery-desc">Full-Stack + AI</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1588200901342-b7a5d472af42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Integration"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Legacy System Integration</div>
                <div className="gallery-desc">AI + Existing Infrastructure</div>
              </div>
            </div>

            {/* Duplicate set for infinite scroll effect */}
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Integration"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">AI-Powered Chatbot</div>
                <div className="gallery-desc">Customer Support Automation</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="Full-Stack App"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">E-commerce Platform</div>
                <div className="gallery-desc">React + Node.js + AI</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Dashboard"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Analytics Dashboard</div>
                <div className="gallery-desc">ML-Powered Insights</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Workflow"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Workflow Automation</div>
                <div className="gallery-desc">AI + Process Optimization</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="ML Model"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Custom ML Model</div>
                <div className="gallery-desc">TensorFlow + PyTorch</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI API"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">AI API Gateway</div>
                <div className="gallery-desc">OpenAI + LangChain</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1611532736597-8b8f8c62CDf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="Full-Stack Platform"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">SaaS Platform</div>
                <div className="gallery-desc">Full-Stack + AI</div>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1588200901342-b7a5d472af42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="gallery-img"
                alt="AI Integration"
              />
              <div className="gallery-overlay">
                <div className="gallery-title">Legacy System Integration</div>
                <div className="gallery-desc">AI + Existing Infrastructure</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <i className="fas fa-arrows-alt-h"></i> Scroll horizontally to view more
        </div>

        <button className="see-more-btn">View Portfolio →</button>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .services-btn {
          display: inline-block;
          margin: 0 auto 2rem;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          background: #232323;
          color: white;
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          transition: all 0.3s ease;
        }

        .services-btn:hover {
          background: #2e2e2e;
          transform: translateY(-2px);
        }

        .main-heading {
          font-size: 3.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }

        .sub-heading {
          font-size: 1.2rem;
          text-align: center;
          opacity: 0.9;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .tag {
          background: #232323;
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: default;
        }

        .tag:hover {
          background: #313131;
          transform: translateY(-2px);
        }

        .note {
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.7;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        .gallery-container {
          position: relative;
          margin: 3rem 0;
          overflow: hidden;
        }

        .gallery-track {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 0;
          will-change: transform;
        }

        .gallery-item {
          flex: 0 0 auto;
          width: 300px;
          height: 375px;
          border-radius: 16px;
          overflow: hidden;
          background: #181818;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 2rem 1.5rem 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-title {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .gallery-desc {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .see-more-btn {
          display: block;
          margin: 4rem auto;
          padding: 1rem 2.5rem;
          border-radius: 100px;
          background: #ff3c3c;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 60, 60, 0.3);
        }

        .see-more-btn:hover {
          background: #ff5252;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 35px rgba(255, 60, 60, 0.4);
        }

        .nav-dots {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #333;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #fff;
          transform: scale(1.3);
        }

        .scroll-hint {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
          opacity: 0.7;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 0.4; }
          100% { opacity: 0.7; }
        }

        @media (max-width: 768px) {
          .main-heading {
            font-size: 2.5rem;
          }

          .sub-heading {
            font-size: 1rem;
          }

          .tag {
            font-size: 0.8rem;
            padding: 0.4rem 1rem;
          }

          .gallery-item {
            width: 250px;
            height: 325px;
          }
        }

        /* Animation for infinite scroll */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 8 - 1.5rem * 8)); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Pause animation on hover */
        .gallery-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
