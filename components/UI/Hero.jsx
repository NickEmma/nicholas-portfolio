import React from 'react';
import classes from '../../styles/hero.module.css';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/hero.png';

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`}>
          <SectionSubtitle subtitle="hi there" />
          <h3>
            I&apos;M NICHOLAS <br />
            EMMANUEL
          </h3>
          <h5>Full-Stack Developer</h5>
          <p>
            Techie Emma. Building LazyCoders.Io - Learn To Code And Connect With
            The Best Minds.
          </p>
          <div className={`${classes.btn}`}>
            <button type="button" className={`${classes.btn_primary}`}>
              <Link href="#">Hire me</Link>
            </button>
            <button type="button" className={`${classes.btn_secondary}`}>
              <Link href="#">Download CV</Link>
            </button>
          </div>
        </div>
        <div className={`${classes.image}`}>
          <Image src={heroImg} alt="awesome" width="500" height="500" />
          <div className={`${classes.skills}`}>
            <span>
              <i className="ri-lightbulb-flash-line"></i>
            </span>
            <div className={`${classes.expert}`}>
              <h4>1 year</h4>
              <h5>Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
