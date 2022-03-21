import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faSkype, faTwitter, faInstagram, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://github.com/VS-star" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/okrittim/?originalSubdomain=bd" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
          <a href="https://t.me/vs_star" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faTelegram} />
          </a>
          <a href="https://wa.me/381611659267" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faWhatsapp} />
          </a>
          <a href="skype:live:.cid.444f02cb3463635f?chat" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faSkype} />
          </a>
         </Col>
  );
}

export default SocialIcons;
