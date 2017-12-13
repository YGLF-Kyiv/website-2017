import React, { Component, PropTypes as toBe } from 'react';
import './speaker-block.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/environment';
import { getAnchorName } from '../../utils/common';

export default class SpeakerBlock extends Component {

  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {},
  }

  render() {
    const {
      data: { first_name, last_name, image_src, social_icons, position, company, description }
    } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="speaker-block container container-fluid">
        <div className="speaker-block-cols">
          <a
            href=""
            name={getAnchorName([first_name, last_name])}
            className="-no-outline anchor"
          />
          <div className="speaker-block-img">
            <LazyLoad offset={150}>
              <img
                src={`/speakers/${image_src}.${imageExtension}`}
                className="drop-shadow"
                alt={`${first_name} ${last_name}`}
              />
            </LazyLoad>
            <SocialIcons urls={social_icons} />
          </div>
          <div className="speaker-block-text">
            <h3>
              <span className="speaker-first-name">{first_name}</span>{' '}
              <span className="speaker-last-name">{last_name}</span>
            </h3>
            <p>
              { position && <span className="speaker-position">{position}</span> }
              { company && <span className="speaker-company">{company}</span> }
            </p>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>
        </div>
      </div>
    );
  }
}
