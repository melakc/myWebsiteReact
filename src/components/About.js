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
              <div className="column contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                </p>
              </div>
              <div className="column content">
                <h2>Hobbies</h2>
                <div class="content__container">
                  <p class="content__container__text">I</p>
                  <ul class="content__container__list">
                    <li class="content__container__list__item">create art</li>
                    <li class="content__container__list__item">photograph</li>
                    <li class="content__container__list__item">read</li>
                    <li class="content__container__list__item">design shit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
