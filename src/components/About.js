import React from "react";

// import img
import Image from "../assets/img/3.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Roshitha Makula
                              </h2>
              <p className="mb-4 text-accent">Passionate Computer Science Student</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                      I am a recent graduate with a keen interest in Computer Science.
                      As a committed and eager learner, I've triumphantly concluded my academic pursuits, arming myself with a robust proficiency in python,Web technologies,Machine learning algorithms . 
                      During my academic tenure, I immersed myself in a myriad of challenging projects that not only enriched my theoretical understanding but also provided me with valuable hands-on experience in practical scenarios. 
                      My unwavering dedication to achieving excellence, coupled with an insatiable thirst for knowledge, has been the driving catalyst behind my academic accomplishments.
                <br />
                <br />Now I am currently working on javascript and its frame work.
              </p>
            </div>
            <a href= "https://www.linkedin.com/in/roshitha-makula-47a609220/" target="_blank" rel="noreferrer">
             
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
