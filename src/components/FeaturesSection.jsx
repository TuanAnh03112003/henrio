import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-hammer"
        viewBox="0 0 24 24"
      >
        <path d="M2 12l7-7 7 7-7 7-7-7z" />
        <path d="M9 15l6-6" />
      </svg>
    ),
    title: "ENHANCED PAGE BUILDER",
    description:
      "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-rotate-ccw"
        viewBox="0 0 24 24"
      >
        <path d="M1 4v6h6" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
    title: "SLIDER REVOLUTION",
    description:
      "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-edit-3"
        viewBox="0 0 24 24"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
    title: "LIVE CUSTOMIZER",
    description:
      "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-cloud-download"
        viewBox="0 0 24 24"
      >
        <path d="M8 17l4 4 4-4" />
        <path d="M12 12v9" />
        <path d="M20 16a5 5 0 0 0-10 0" />
        <path d="M4 16a5 5 0 0 1 10 0" />
      </svg>
    ),
    title: "ONE-CLICK DEMO INSTALL",
    description:
      "Import the demo data in one click and edit the content to suits your need. The easiest way to create an awesome website quickly.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-headphones"
        viewBox="0 0 24 24"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <rect x="3" y="13" width="4" height="7" rx="1" ry="1" />
        <rect x="17" y="13" width="4" height="7" rx="1" ry="1" />
      </svg>
    ),
    title: "POWER ELITE SUPPORT",
    description:
      "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-life-ring"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M16 12h-4" />
      </svg>
    ),
    title: "LIFETIME FREE UPDATES",
    description:
      "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-map-pin"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    title: "TRANSLATABLE READY",
    description:
      "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-credit-card"
        viewBox="0 0 24 24"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "CHILD THEME INCLUDED",
    description:
      "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-list"
        viewBox="0 0 24 24"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    title: "CONTENT BLOCKS",
    description:
      "Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-megaphone"
        viewBox="0 0 24 24"
      >
        <path d="M3 11v2a9 9 0 0 0 18 0v-2" />
        <path d="M3 11v-2a9 9 0 0 1 18 0v2" />
        <path d="M3 11h18" />
      </svg>
    ),
    title: "SOCIAL MEDIA INTEGRATION",
    description:
      "Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-camera"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="13" r="4" />
        <path d="M5 7h14l-1 9H6l-1-9z" />
      </svg>
    ),
    title: "PHOTOS INCLUDED",
    description:
      "Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        stroke="#e91e63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mail"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "CONTACT FORM 7",
    description:
      "Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
