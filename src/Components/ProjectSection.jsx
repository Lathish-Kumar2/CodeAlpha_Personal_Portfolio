import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="Projects">
      <h1>Projects</h1> <br />
      <div className="projectdiv">
        <div className="project1">
          <h2>Tour My <span style={{ color: '#A4B953' }}>Mangalore</span></h2>
          <p>"Tour My Mangalore" invites you on an exhilarating journey through the vibrant coastal city of Mangalore. Immerse yourself in the natural beauty of pristine beaches, lush hills, and tranquil backwaters. Our curated tours unveil the cultural richness of Mangalore, showcasing ancient temples, churches, and bustling markets. Indulge your taste buds in the flavors of Mangalorean cuisine, from delectable seafood to aromatic spices.</p> <br />
          <p style={{ marginTop: '1vh' }}>You can visit my website by <a href="https://mangalore-tourism-web.web.app/">clicking here.</a></p>
          {/* <p style={{ marginLeft: '25%' }}>or</p>
          <p>You can visit my <a href="http://www.google.com" style={{ fontSize: '23px' }}>GitHub.</a></p> */}
        </div>
        <div className="project2">
          <h2>Movie<span style={{ color: 'red' }}>Store</span></h2>
          <p>Welcome to MovieStore, your premier destination for cinematic joy! Dive into a vast collection of films that cater to every taste, from timeless classics to the latest blockbusters. Our user-friendly platform provides an immersive movie experience, allowing you to explore detailed information and make informed choices. Whether you're a streaming enthusiast or prefer building a physical collection, MovieStore offers the perfect blend of convenience and quality.</p> <br />
          <p style={{ marginTop: '1vh' }}>You can visit my website by <a href="http://www.google.com">clicking here.</a></p>
          {/* <p style={{ marginLeft: '25%' }}>or</p>
          <p>You can visit my <a href="http://www.google.com" style={{ fontSize: '23px' }}>GitHub.</a></p> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
