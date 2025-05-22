import React from "react";
import "./SocialIntegration.css";

const socialLinks = [
  { href: "https://spotify.com", icon: "spotify", label: "Spotify" },
  { href: "https://youtube.com", icon: "youtube", label: "YouTube" },
  { href: "https://instagram.com", icon: "instagram", label: "Instagram" },
  { href: "https://bandsintown.com", icon: "bandsintown", label: "Bandsintown" },
  { href: "https://twitter.com", icon: "twitter", label: "Twitter" },
  { href: "https://facebook.com", icon: "facebook", label: "Facebook" },
];

// Simple SVG icons for demonstration
const icons = {
  spotify: (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm5.4 17.4a.9.9 0 01-1.24.3c-3.38-2.06-7.64-2.52-10.04-1.44a.9.9 0 11-.6-1.68c3.12-1.12 8.28-.56 11.48 1.68a.9.9 0 01.4 1.14zm1.56-3a1.08 1.08 0 01-1.48.36c-3.88-2.36-9.8-3.04-13.6-1.72a1.08 1.08 0 11-.72-2.04c4.36-1.56 11.72-1.72 16.4 1.96a1.08 1.08 0 01.4 1.44zm.12-3.6c-4.56-2.72-12.16-2.96-16.88-1.68a1.35 1.35 0 11-1-2.52c5.28-2.12 14.72-1.8 20.24 2.04a1.35 1.35 0 11-2.36 2.16z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
      <path d="M19.8 7.2a2.4 2.4 0 00-1.68-1.68C16.8 5 12 5 12 5s-4.8 0-6.12.48a2.4 2.4 0 00-1.68 1.68A25.2 25.2 0 004 12a25.2 25.2 0 00.48 4.8 2.4 2.4 0 001.68 1.68C7.2 19 12 19 12 19s4.8 0 6.12-.48a2.4 2.4 0 001.68-1.68A25.2 25.2 0 0020 12a25.2 25.2 0 00-.48-4.8zM10 15.6V8.4l6 3.6-6 3.6z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  ),
  bandsintown: (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18l7.5 3.75v6.14l-7.5 3.75-7.5-3.75V7.93L12 4.18zM11 9v6h2V9h-2zm-3 3v2h2v-2H8zm6 0v2h2v-2h-2z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12A12.8 12.8 0 013 4.89a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.5v-2.88h2.5v-2.2c0-2.48 1.5-3.85 3.8-3.85 1.1 0 2.25.2 2.25.2v2.5h-1.27c-1.25 0-1.64.78-1.64 1.57v1.83h2.8l-.45 2.88h-2.35v6.99A10 10 0 0022 12z" />
    </svg>
  ),
};

function SocialIntegration() {
  return (
    <section className="social-integration-section">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4"
        type="video/mp4"
      />
      <div className="overlay" />
      <div className="content">
        <h2 className="subtitle">Social Integration</h2>
        <h1 className="title">SOCIAL NETWORK & MUSIC PLATFORM ORIENTED</h1>
        <p className="description">
          Embed your music and social feeds seamlessly with Herion. Display your media and content directly from Spotify, YouTube, Instagram, Bandsintown, Twitter and more...
        </p>
        <div className="social-icons">
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="social-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm5.4 17.4a.9.9 0 01-1.24.3c-3.38-2.06-7.64-2.52-10.04-1.44a.9.9 0 11-.6-1.68c3.12-1.12 8.28-.56 11.48 1.68a.9.9 0 01.4 1.14zm1.56-3a1.08 1.08 0 01-1.48.36c-3.88-2.36-9.8-3.04-13.6-1.72a1.08 1.08 0 11-.72-2.04c4.36-1.56 11.72-1.72 16.4 1.96a1.08 1.08 0 01.4 1.44zm.12-3.6c-4.56-2.72-12.16-2.96-16.88-1.68a1.35 1.35 0 11-1-2.52c5.28-2.12 14.72-1.8 20.24 2.04a1.35 1.35 0 11-2.36 2.16z" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
              <path d="M19.8 7.2a2.4 2.4 0 00-1.68-1.68C16.8 5 12 5 12 5s-4.8 0-6.12.48a2.4 2.4 0 00-1.68 1.68A25.2 25.2 0 004 12a25.2 25.2 0 00.48 4.8 2.4 2.4 0 001.68 1.68C7.2 19 12 19 12 19s4.8 0 6.12-.48a2.4 2.4 0 001.68-1.68A25.2 25.2 0 0020 12a25.2 25.2 0 00-.48-4.8zM10 15.6V8.4l6 3.6-6 3.6z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
          <a href="https://bandsintown.com" target="_blank" rel="noopener noreferrer" aria-label="Bandsintown" className="social-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
              <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18l7.5 3.75v6.14l-7.5 3.75-7.5-3.75V7.93L12 4.18zM11 9v6h2V9h-2zm-3 3v2h2v-2H8zm6 0v2h2v-2h-2z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12A12.8 12.8 0 013 4.89a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.5v-2.88h2.5v-2.2c0-2.48 1.5-3.85 3.8-3.85 1.1 0 2.25.2 2.25.2v2.5h-1.27c-1.25 0-1.64.78-1.64 1.57v1.83h2.8l-.45 2.88h-2.35v6.99A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>
        <div className="mailchimp-logo" aria-label="Mailchimp Logo" role="img" style={{marginTop: '2rem'}}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm0 58.667c-14.66 0-26.667-12.007-26.667-26.667S17.34 5.333 32 5.333 58.667 17.34 58.667 32 46.66 58.667 32 58.667z"/>
            <path d="M44.267 20.267c-1.067-1.067-2.987-1.067-4.053 0l-3.2 3.2-3.2-3.2c-1.067-1.067-2.987-1.067-4.053 0-1.067 1.067-1.067 2.987 0 4.053l3.2 3.2-3.2 3.2c-1.067 1.067-1.067 2.987 0 4.053 1.067 1.067 2.987 1.067 4.053 0l3.2-3.2 3.2 3.2c1.067 1.067 2.987 1.067 4.053 0 1.067-1.067 1.067-2.987 0-4.053l-3.2-3.2 3.2-3.2c1.067-1.067 1.067-2.987 0-4.053z"/>
+          </svg>
+        </div>
+        <div className="extra-icon" aria-label="Extra Icon" role="img" style={{marginTop: '1rem'}}>
+          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
+            <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2"/>
+            <line x1="15" y1="15" x2="33" y2="33" stroke="white" strokeWidth="3" strokeLinecap="round"/>
+            <line x1="33" y1="15" x2="15" y2="33" stroke="white" strokeWidth="3" strokeLinecap="round"/>
+          </svg>
+        </div>
+        <p className="and-more" style={{marginTop: '1rem', fontSize: '1.2rem', opacity: 0.8}}>and more...</p>
       </div>
    </section>
  );
}

export default SocialIntegration;
