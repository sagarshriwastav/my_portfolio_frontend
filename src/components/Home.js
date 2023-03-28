import React from 'react'
import { Button } from 'react-bootstrap'
import "./Home.css"


const Home = () => { 
  // var audio = new Audio("/audio/welcome.mp3")
  // audio.play();
  return (
    <>  
      <div className="container home_container ">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2> <span style={{ color: "#6c63ff" }}>Hello and welcome to my online portfolio! <br />Step into my digital space and explore my portfolio. </span> </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }} >
             As a student of Information Technology in my 4th year, I am thrilled to share my passion for technology with you. I have spent countless hours honing my skills and developing innovative projects, and I look forward to sharing them with you today.
            </p>
            <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, backgroundColor: "#2f2d69", marginRight: 24 }} href="https://www.linkedin.com/in/sagar-kumar-3a0111170/" target='_blank' >LinkedIn</Button>
            <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, backgroundColor: "#6c63ff" }} href="/SAGAR_Resume1.pdf"  download="SAGAR_Resume1.pdf" >Download CV</Button>
          </div>
          <div className="right_div">
            <img src="/images/homepage_img.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home