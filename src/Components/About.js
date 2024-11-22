import React from 'react'

export default function About(props){
    return(
        <>
        <section className="py-5 bg-light"  >
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-6">
        <img src="https://via.placeholder.com/500x300" alt="About Us" className="img-fluid rounded" />
      </div>

      
      <div className="col-md-6">
        <h2 className="mb-4">About Us</h2>
        <p className="text-muted">
          We are a team of dedicated professionals committed to delivering exceptional services and innovative solutions. Our goal is to help our clients succeed in their ventures through collaboration, creativity, and excellence.
        </p>
        <p>
          With years of experience in the industry, we have established ourselves as a trusted partner for businesses worldwide. Join us on our journey as we continue to make a positive impact.
        </p>
        <a href="#learn-more" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  </div>
</section>
        </>
    );
}