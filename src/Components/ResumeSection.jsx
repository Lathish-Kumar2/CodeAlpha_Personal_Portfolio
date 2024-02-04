import React from 'react';
import resume from '../Images/Lathish.jpg';
import resume2 from '../Images/Lathish.pdf';

const ResumeSection = () => {
  return (
    <section id="Resume" >
      <h1 style={{ marginBottom: '5px' }}>Resume</h1>
      <div >
        <img src={resume} alt="Resume loading"  />
        <button className='viewbtn' >
          <a href={resume2} style={{ color: 'black' }}>View resume in Browser</a>
        </button>
        <a href={resume2} download="Lathish Resume.pdf">
          <button className='downloadbtn'>Download</button>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
