import React from "react";
import "./SaveMoneySection.css";

const plugins = [
  {
    icon: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/wpb-80x80.jpg",
    title: "WPBakery Page Builder",
    saveText: "Save $74",
    features: [
      "Full Version Included",
      "Unlimited design options",
      "Easy to use, no coding",
      "Fast & Easy",
    ],
  },
  {
    icon: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/sr-80x80.jpg",
    title: "Slider Revolution",
    saveText: "Save $109",
    features: [
      "Full Version Included",
      "Powerful visual editor",
      "Advanced Animations",
      "For Sliders, Headers and more",
    ],
  },
  {
    icon: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/new_avatar80_80.png",
    title: "Wolf Page Builder Extension",
    saveText: "Exclusive",
    features: [
      "Only Available with our Themes",
      "Extends WPBakery Page Builder",
      "Adds Tons of Elements and Options",
    ],
  },
];

function SaveMoneySection() {
  return (
    <section className="save-money-section">
      <div className="container">
        <h1 className="save-money-text">Save Money</h1>
        <h2 className="sub-title">$90 OF PREMIUM PLUGIN INCLUDED</h2>
        <p className="description">
          Includes WPBakery Page Builder and Slider Revolution premium plugins. Save money and start building your website using the best tools available on the market today.
        </p>
        <div className="plugin-cards">
          {plugins.map((plugin, index) => (
            <div
              key={index}
              className={`plugin-card ${index === 0 || index === 2 ? "side-card" : ""}`}
            >
              <img src={plugin.icon} alt={plugin.title} className="plugin-icon" />
              <h3 className="plugin-title">{plugin.title}</h3>
              <p className="plugin-save">{plugin.saveText}</p>
              <ul className="plugin-features">
                {plugin.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SaveMoneySection;
