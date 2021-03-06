import React from 'react';
import _ from 'lodash/fp';

import './about.scss';

import OrderedBlock from '../components/OrderedBlock/OrderedBlock';
import PersonBlock from '../components/PersonBlock/PersonBlock';
import FitToRhythm from '../components/FitToRhythm/FitToRhythm';

import { gaTrack } from '../shared/utils/ga';

import teamData from '../../data/team.js';
import OrderedBlockData from '../../data/orderedBlock.js';

export default class AboutPage extends React.Component {

  componentWillMount() {
    gaTrack({
      eventCategory: 'about',
      eventAction: 'about',
      eventLabel: 'About',
    });
  }

  render() {
    return (
      <div className="about-page bg lines-bg">
        <div className="container">
          <FitToRhythm className="header">
            <div className="header-text">
              <h1>About</h1>
              <p>
                The largest international frontend conference in Ukraine originated from Tel-Aviv
                is happening for the fourth time.
                <small>24-25 May, Kyiv</small>
              </p>
            </div>
          </FitToRhythm>

          <OrderedBlock data={OrderedBlockData.whoWeAre} />

          <div className="about-page-past">
            <div className="about-page-past-section">
              <FitToRhythm>
                <p>In 2017 at the third run of the conference, we gladly hosted world-class Frontend gurus who gave terrific talks.</p>
              </FitToRhythm>
              <a
                href="https://www.youtube.com/watch?v=kTUs0mu0HHk&list=PLII-CO3Ff0qYaPv6MvFsFzy8LSqPY6KOj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-underline"
              >
                View 2017 Talks
              </a>
            </div>
          </div>
          <OrderedBlock data={OrderedBlockData.team} />
          <div className="team-list">
            { _.shuffle(teamData.all).map((speaker, index) => {
              return <PersonBlock data={speaker} key={index} isSmall />
            })}
          </div>
        </div>
      </div>
    );
  }
}
