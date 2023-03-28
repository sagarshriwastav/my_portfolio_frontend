import React from 'react'
import "./About.css"

const About = () => {
  
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet <span style={{ color: "#6c63ff" }} >Sagar Shriwastav <br />Welcome to my world of technology and creativity! </span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>  As a 4th year student in Information Technology, I have developed a deep passion for the field. Through this website, I hope to showcase my skills, projects, and experiences in a way that will resonate with potential employers and collaborators. Thank you for taking the time to explore my work!</p>
          </div>
          <div className="right_container mt-3">
            <img src="/images/study_table.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About