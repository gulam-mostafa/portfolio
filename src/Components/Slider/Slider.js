import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "../../data";
import { Button } from "flowbite-react";

const Slider = () => {
  const [people] = useState(data);
  // console.log(people)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section " id="projects">
      <div className="title">
        <h1 className="text-5xl font-bold">Projects</h1>
        <h2>I have done some Projects</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote , link} = item;
          // console.log(link)
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position } key={id}>
              <img src={image} alt={name} className="person-img  " />
              <h4>{name}</h4>
              <p className="text ">{quote}</p>
              <a href={link} target='black' className="title m-1/2 btn  rounded btn-primary rounded-0 mx-auto ">{title}</a>
             
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>&#8592;
          <i className="fas fa-arrow-left"  />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>&#8594;
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
