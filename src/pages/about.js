/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { useWindowSize } from '../hooks/useWindowSize';

const SecondPage = () => {
  const size = useWindowSize();
  const isMedBreakpoint = size.width >= 767;

  return (
    <Layout headerLogoColor="#000" footerBgColor="#000" footerTextColor="#fff">
      <SEO title="About" />
      <section className="about__intro container">
        <div className="about__intro-content">
          <h1 className="about__intro-heading">
            INK—MGMT is a full service creative staffing and talent management
            agency.
          </h1>
          <div className="about__intro-sub-content-wrapper">
            <p className="about__intro-copy">
              We are the first black owned talent management agency, founded by
              creative professionals, to have an emphasis on representing black
              creative talent.
            </p>
            <div className="about__intro-teaser-wrapper">
              <p className="about__intro-teaser">get to know us</p>
              <span className="about__intro-arrow">&darr;</span>
            </div>
          </div>
        </div>
      </section>
      <section className="about__bios">
        <div className="about__bios-image-grid">
          <p>IMAGE GRID</p>
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
              Detroit native, Photographer, Chef, Sneaker Snob, Creative
              Director. Jason has been a highly awarded creative leader in the
              Advertising industry. With nearly 20 years of experience in brand
              building, he has worked with some of the world&rsquo;s top
              Agencies building some of the world&rsquo;s top brands. His
              leadership and creativity has been recognized by the NAACP, the
              late Senator Joe Young Jr, as well as multiple awards at Cannes.
              Jason is an unconventional thinker and throughout his journey has
              developed a knack for building relationships between brands and
              the consumer. He enjoys the occasional mountain view, but remains
              a city boy at heart.
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
              Born and raised in South Florida, Sebastian&rsquo;s unique style
              has just the right of smoothness you would expect from the name.
              His career as an Art Director started in the Miami sunshine, where
              he developed a supreme eye for detail, and an aesthetic that is
              defining the visual language of new. His talent has taken him to
              reputable agencies throughout the country where he&rsquo;s worked
              on major campaigns for iconic brands like Acura, Infiniti,
              American Airlines, Hersey&rsquo;s, Fruit of the Loom, and
              Domino&rsquo;s. His passions are photography, design, fashion and
              anything that involves sand, waves, and fruity drinks.
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
              Ant is a first-generation American by way of Georgetown, Guyana.
              Named after two saints (St. Clement and St. Anthony), but prefers
              Ant (like the bug). A writer by trade, who&rsquo;s career in
              writing for brands started at the age of six when he wrote a
              letter to Mars Candy Company suggesting they create White
              Chocolate M&M&rsquo;s (their legal department got back to him and
              sent him free swag). A widely decorated creative in the
              advertising industry. With a wit and unapologetic humor that had
              benefited brands such as REFORM Alliance, Kit Kat, Hotels.com,
              1800 Tequila, Hennessy, Domino&rsquo;s, and Wendy&rsquo;s.
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
              aliquam rhoncus faucibus fermentum, quis. Quis sed magna nunc
              nulla lorem sed mi, neque enim. Gravida ullamcorper duis auctor
              enim aliquet amet amet, egestas. Massa, velit erat turpis massa
              donec elit duis id.
            </p>
          </div>
        </div>
      </section>
      <section className="about__formula">
        <div className="formula__heading-wrapper">
          <h2 className="formula__heading">The Formula</h2>
          <p className="formula__sub-heading">Creative+ Recruiting</p>
        </div>
        <p className="formula__copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non blandit
          scelerisque sed phasellus venenatis id eget commodo. Sed ullamcorper
          pretium, purus imperdiet. Nibh eu, aenean bibendum tincidunt
          vestibulum nec posuere nulla. Sollicitudin condimentum commodo,
          faucibus eu egestas at. Tempus, nisi, dui elementum nam nunc diam
          amet. Diam enim mauris sed sed feugiat. Viverra metus nisl lectus sem
          sit viverra scelerisque ac scelerisque. Leo mauris vulputate sed nulla
          enim vitae ultrices id. Lorem nec odio odio vel. Quis mi semper donec
          in consequat quisque ultricies.
        </p>
      </section>
      <section className="about__principles">
        <h2 className="principles__heading">We have principles</h2>
        <div className="principles__list">
          <div
            className="principles__item"
            tabIndex={isMedBreakpoint ? 0 : null}
          >
            <span className="principles__item-number">01</span>
            <h3 className="principles__item-heading">
              People matter.
              <br /> Relationships
              <br /> matter more.
            </h3>
            <p className="principles__item-copy">
              Hear from us more than just when you update your LinkedIn Profile.
              Inserting your name and new job into a generic email isn&rsquo;t
              our style. We don&rsquo;t treat our candidates like some
              recruiters have. Our members will be joining a family and will be
              treated as such. With a care and concern that should stretch
              throughout their careers in whatever field they choose. And
              whatever plans they have beyond.
            </p>
          </div>

          <div
            className="principles__item"
            tabIndex={isMedBreakpoint ? 0 : null}
          >
            <span className="principles__item-number">02</span>
            <h3 className="principles__item-heading">
              Integrity.
              <br />
              Always.
            </h3>
            <p className="principles__item-copy">
              We have strong morals and principles. And that&rsquo;s not
              negotiable. We know that in creative fields many people take
              liberties with your ideas, your voice, and anything else to get
              ahead. We push to foster environments that provide creative growth
              without trampling on those around it.
            </p>
          </div>

          <div
            className="principles__item"
            tabIndex={isMedBreakpoint ? 0 : null}
          >
            <span className="principles__item-number">03</span>
            <h3 className="principles__item-heading">
              Keep it
              <br /> creative
            </h3>
            <p className="principles__item-copy">
              We push creative thought in everything we do. From the candidates
              we source to the chances we take in creating opportunities for
              them. What&rsquo;s the point of being founded by creatives if you
              don&rsquo;t take creative liberties with the traditional structure
              of staffing?
            </p>
          </div>

          <div
            className="principles__item"
            tabIndex={isMedBreakpoint ? 0 : null}
          >
            <span className="principles__item-number">04</span>
            <h3 className="principles__item-heading">
              Embrace
              <br /> and evolve
            </h3>
            <p className="principles__item-copy">
              The enemy of progress is the phrase &ldquo;that&rsquo;s how
              it&rsquo;s always been done.&rdquo;. There will always be better
              ways to source talent and to get talent the best opportunities
              possible. And we&rsquo;ll be open to whatever will give them the
              best shot at success. You can either provoke change or succumb to
              it. We prefer the former.
            </p>
          </div>

          <div
            className="principles__item"
            tabIndex={isMedBreakpoint ? 0 : null}
          >
            <span className="principles__item-number">05</span>
            <h3 className="principles__item-heading">
              Talent
              <br /> finds talent
            </h3>
            <p className="principles__item-copy">
              We have a different point of view on creatives. Where to find the
              most creative people. Not just from ad school. Not just poaching
              from another agency. Because there will always be better ways to
              source talent and to get talent the best opportunities possible.
              And we&rsquo;ll be open to whatever will give them the best shot
              at success.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SecondPage;
