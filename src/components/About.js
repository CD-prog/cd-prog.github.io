import React from 'react'

function About() {
  return (
    <>
     <div className="text-white" style={{ fontWeight: "bolder", fontSize: "50px" }}>About me</div><br/><br/>
        <main className="row ">
        <div className="col-md-4 ">
          <img src={require("../images/profile-photo.JPG")} className="img-thumbnail border-dark img-fluid slide-in-top" alt="MyFace" />
        </div>
        <div className="col-md-8 slide-in-bottom text-monospace">
          <h4 className="text-white ">Hello, I'm Claudiu. I'm a full stack web developer who specializes in creating dynamic, high-speed applications and web pages. </h4>
          <h4 className="text-white">After a long career in industrial automation, I've decided to make the switch to the web development world and I'm looking forward to the challenges and the rewards that lie ahead. </h4>
          <h4 className="text-white">I enjoy traveling the world with my wife, learning about other cultures and discovering new places, all while improving my  photography skills and making new friends. I love skiing, cycling and scuba-diving, started running a couple of years ago and completed Chicago Marathon in 2019. </h4>
          <h4 className="text-white">I hope you enjoy the site and looking forward to hearing from you !</h4>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
    </>
  )
}

export default About