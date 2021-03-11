import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="../images/profilepic.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                </p>
              </div>
              <div className="row">
                <div className="columns hobbies">
                  <h2>Hobbies</h2>
                  <p className="hobbies-text">{resumeData.hobbies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
