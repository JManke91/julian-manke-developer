import React, { Component } from 'react';
import './ExperienceCard.css';
import jambitImage from '../../assets/icons/svgs/brands/jambit.svg';

class ExperienceCard extends Component {
  render() {
    const { experience, index, totalCards, theme } = this.props;
    return (
      <div className="experience-list-item" style={{ marginTop: (index === 0 ? 30 : 50) }}>
        <div className="experience-card-logo-div">
        <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
        </div>
        <div className="experience-card-stepper">
          <div style={{ width: 20, height: 20, backgroundColor: `${theme.headerColor}`, borderRadius: 50, zIndex: 100 }} />
          {
            index !== (totalCards - 1) &&
            <div style={{ height: 190, width: 2, backgroundColor: `${theme.headerColor}`, position: 'absolute', marginTop: 20 }} />
          }
        </div>
        <div className="experience-card" style={{ background: `${theme.body}` }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <h3 className="experience-card-title" style={{ color: theme.text }}>{experience["title"]}</h3>
              <p className="experience-card-company" style={{ color: theme.text }}>
                <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div>
              <div className="experience-card-heading-right">
                <p className="experience-card-duration" style={{ color: theme.secondaryText }}>{experience["duration"]}</p>
                <p className="experience-card-location" style={{ color: theme.secondaryText }}>{experience["location"]}</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20 }}>
            <p style={{ color: theme.secondaryText }}>
              {experience["description"]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
