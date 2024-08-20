import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => (
          <div className="experience-section" key={section["title"]}>
            <h2 className="experience-section-title">{section["title"]}</h2>
            {section["experiences"].map((experience, index) => (
              <ExperienceCard
                key={index}
                index={index}
                totalCards={section["experiences"].length}
                experience={experience}
                theme={theme}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
