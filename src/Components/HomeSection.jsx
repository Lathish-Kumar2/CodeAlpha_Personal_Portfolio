import React from 'react';
import programmer from '../Images/Programmer.avif';

const HomeSection = () => {
  return (
    <div className="HomeDiv">
      <section className="HomeSection">
        <div className="HomeLeft" style={{overflow:'hidden'}}>
          <h1>Hello, I am <span>Lathish Kumar</span> and I am a <span>Web Developer</span>.</h1>
          <p>I am flexible, reliable and very willing to learn and develop new skills, self-motivated, reliable, responsible and hard working person. I am a mature collaborative worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.</p>
          <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit sequi aut dicta modi aliquid ipsam numquam, facilis voluptas debitis eos accusamus praesentium nulla quidem non et, provident esse odio ut, optio cum dolor. Eveniet quis placeat impedit ut? Alias iure dolorem inventore unde doloribus quas optio repudiandae sint nihil!</p>
        </div>
        <div className="HomeRight">
          <img src={programmer} alt="Loading" />
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
