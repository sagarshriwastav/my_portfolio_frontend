import React from 'react'
import "./About.css"

const About = () => {

  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h1><span style={{ color: "#6c63ff" }} >Skills </span></h1>
            {/* <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}> */}
            <p style={{ letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
              <b>Programming Languages:</b>   Java, Java Script, C/C++, Python <br />
              <b>Coding Journey:</b>  <a href="https://leetcode.com/problemset/all/" target="_blank" rel="noreferrer">LeetCode</a> ,    <a href='https://auth.geeksforgeeks.org/user/sagarshriwastav2/practice' target="_blank" rel="noreferrer">GeeksforGeeks</a> , <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noreferrer">HackerRank </a>    <br />
              Solved 460+ DSA Probelms , 5-Star in SQL HackerRank <br />
              <b>Frameworks:</b> React.js, Redux, Node.js, Express.js, Socket.io, React-Bootstrap
              <br />
              <b>Database Management System:</b>   SQL, MongoDB <br />
              <b>Development & Operations:</b>   Render.com, Cloudfare, Netlify <br />
              <b>Computer Fundamentals:</b> OOPS, DBMS, Computer Networking, Operating System <br />
              <b>Other Skills:</b> Linux, <a href="https://www.facebook.com/sagarkumar.shriwastav" target="_blank" rel="noreferrer">Git-GitHub</a> , FIGMA
            </p>
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





// import React from 'react'
// import "./About.css"

// const About = () => {
  
//   return (
//     <>
//       <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
//         <div className="container main_container d-flex justify-content-around flex-wrap">
//           <div className="left_container mt-5" style={{ width: 500 }}>
//             <h2>Meet <span style={{ color: "#6c63ff" }} >Sagar Shriwastav <br />Welcome to my world of technology and creativity! </span></h2>
//             <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>  As a 4th year student in Information Technology, I have developed a deep passion for the field. Through this website, I hope to showcase my skills, projects, and experiences in a way that will resonate with potential employers and collaborators. Thank you for taking the time to explore my work!</p>
//           </div>
//           <div className="right_container mt-3">
//             <img src="/images/study_table.jpg" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default About