import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container-sm">
      <Navbar />

      <Router>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
      </Router>

      <br />
      <br />
      <br />
      <div className="text-white" style={{ fontWeight: "bolder", fontSize: "50px" }}>About me</div>
      <br />
      <br />

      <main className="row ">
        <div className="col-md-4 ">
          <img src={require("./images/profile-photo.JPG")} className="img-thumbnail border-dark img-fluid slide-in-top" alt="MyFace" />
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
      <Footer/>
      <div />

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"></script>

    </div>
  );
}

export default App;
