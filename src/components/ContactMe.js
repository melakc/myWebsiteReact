import React, { Component } from "react";

export default class ContactMe extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="contact">
        <div className=" row section-head">
          <div className="four columns">
            <p className="lead">Feel free to contact me.</p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <a
                className="contactMe"
                href="mailto:melise.akcay@bcmsolutions.de"
              >
                Contact Me
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
