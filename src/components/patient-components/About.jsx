import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="header text-center mt-3">
          <h4 class="title">Why Devpies?</h4>
          <p class="category mt-2 description text-center">
            Devpies is an AI based medical assistant for doctors and patients.
          </p>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Simple</h5>
                <p class="card-text mb-3 description text-left size-m">
                  Devpies has a user-friendly interface so you already know how
                  to use it.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Dataset</h5>
                <p class="card-text mb-3 description text-left size-m">
                  Devpies has the key difference - carefully created dataset to
                  get maximum accuracy.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Approval</h5>
                <p class="card-text mb-3 description text-left size-m">
                  Devpies has an approve and positive feedback from medical
                  students and doctors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Powerful</h5>
                <p class="card-text mb-3 description text-left size-m">
                  Devpies contains 900+ diseases and 1500+ symptoms and signs
                  only for therapy.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Open</h5>
                <p class="card-text mb-3 description text-left size-m">
                  Devpies has an open API to assist doctors to diagnose diseases
                  and help patients to find physician.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              />
              <div class="card-body">
                <h5 class="card-title title">News</h5>
                <p class="card-text mb-3 description text-left size-m">
                  Devpies shows daily basis diseases people suffer from and
                  serve them as a sort of a newsfeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
