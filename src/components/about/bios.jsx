import React from 'react';

import image01 from '../../images/about-image-grid-01.jpg';
import image02 from '../../images/about-image-grid-02.jpg';
import image03 from '../../images/about-image-grid-03.jpg';
import image04 from '../../images/about-image-grid-04.jpg';
import image05 from '../../images/about-image-grid-05.jpg';
import image06 from '../../images/about-image-grid-06.jpg';
import image07 from '../../images/about-image-grid-07.jpg';
import image08 from '../../images/about-image-grid-08.jpg';
import image09 from '../../images/about-image-grid-09.jpg';
import image10 from '../../images/about-image-grid-10.jpg';
import image11 from '../../images/about-image-grid-11.jpg';
import image12 from '../../images/about-image-grid-12.jpg';
import image13 from '../../images/about-image-grid-13.jpg';

const AboutBios = () => (
  <section className="about__bios">
    <div className="about__bios-image-grid">
      <div className="image-grid">
        <img className="image-grid__image" src={image01} alt="" />
        <img className="image-grid__image" src={image02} alt="" />
        <img className="image-grid__image" src={image03} alt="" />
        <img className="image-grid__image" src={image04} alt="" />
        <img className="image-grid__image" src={image05} alt="" />
        <img className="image-grid__image" src={image06} alt="" />
        <img className="image-grid__image" src={image07} alt="" />
        <img className="image-grid__image" src={image08} alt="" />
        <img className="image-grid__image" src={image09} alt="" />
        <img className="image-grid__image" src={image10} alt="" />
        <img className="image-grid__image" src={image11} alt="" />
        <img className="image-grid__image" src={image12} alt="" />
        <img className="image-grid__image" src={image13} alt="" />
      </div>
    </div>
    <div className="about__bios-copy-wrapper">
      <div className="bio">
        <div className="bio__header">
          <h2 className="bio__name">
            <span>Jason</span> <span>Pierce</span>
          </h2>
          <div className="bio__titles">
            <span>Founder</span>
          </div>
        </div>
        <p className="bio__copy">
          Detroit native, Photographer, Chef, Sneaker Snob, Creative Director.
          Jason has been a highly awarded creative leader in the Advertising
          industry. With nearly 20 years of experience in brand building, he has
          worked with some of the world&rsquo;s top Agencies building some of
          the world&rsquo;s top brands. His leadership and creativity has been
          recognized by the NAACP, the late Senator Joe Young Jr, as well as
          multiple awards at Cannes. Jason is an unconventional thinker and
          throughout his journey has developed a knack for building
          relationships between brands and the consumer. He enjoys the
          occasional mountain view, but remains a city boy at heart.
        </p>
      </div>

      <div className="bio">
        <div className="bio__header">
          <h2 className="bio__name">
            <span>Sebastian</span> <span>Walker</span>
          </h2>
          <div className="bio__titles">
            <span>Co-Founder</span> <span>Head of Creative</span>
          </div>
        </div>
        <p className="bio__copy">
          Born and raised in South Florida, Sebastian&rsquo;s unique style has
          just the right of smoothness you would expect from the name. His
          career as an Art Director started in the Miami sunshine, where he
          developed a supreme eye for detail, and an aesthetic that is defining
          the visual language of new. His talent has taken him to reputable
          agencies throughout the country where he&rsquo;s worked on major
          campaigns for iconic brands like Acura, Infiniti, American Airlines,
          Hersey&rsquo;s, Fruit of the Loom, and Domino&rsquo;s. His passions
          are photography, design, fashion and anything that involves sand,
          waves, and fruity drinks.
        </p>
      </div>

      <div className="bio">
        <div className="bio__header">
          <h2 className="bio__name">
            <span>Ant</span> <span>Tull</span>
          </h2>
          <div className="bio__titles">
            <span>Co-Founder</span> <span>Head of Creative</span>
          </div>
        </div>
        <p className="bio__copy">
          Ant is a first-generation American by way of Georgetown, Guyana. Named
          after two saints (St. Clement and St. Anthony), but prefers Ant (like
          the bug). A writer by trade, who&rsquo;s career in writing for brands
          started at the age of six when he wrote a letter to Mars Candy Company
          suggesting they create White Chocolate M&M&rsquo;s (their legal
          department got back to him and sent him free swag). A widely decorated
          creative in the advertising industry. With a wit and unapologetic
          humor that had benefited brands such as REFORM Alliance, Kit Kat,
          Hotels.com, 1800 Tequila, Hennessy, Domino&rsquo;s, and Wendy&rsquo;s.
          He&rsquo;s also an avid connoisseur of apple-juice.
        </p>
      </div>

      <div className="bio">
        <div className="bio__header">
          <h2 className="bio__name">
            <span>Jane</span> <span>Doe</span>
          </h2>
          <div className="bio__titles">
            <span>Head of Recruiting</span>
          </div>
        </div>
        <p className="bio__copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat amet
          aliquam rhoncus faucibus fermentum, quis. Quis sed magna nunc nulla
          lorem sed mi, neque enim. Gravida ullamcorper duis auctor enim aliquet
          amet amet, egestas. Massa, velit erat turpis massa donec elit duis id.
        </p>
      </div>
    </div>
  </section>
);

export default AboutBios;
