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
          <h2 class="title">Why Devpies?</h2>
          <p class="category mt-2 description text-center">
            Devpies is an AI based medical assistant for doctors and patients.
          </p>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Simple</h5>
                <p class="card-text mb-3 description text-center">
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
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Dataset</h5>
                <p class="card-text mb-3 description text-center">
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
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Approval</h5>
                <p class="card-text mb-3 description text-center">
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
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Powerful</h5>
                <p class="card-text mb-3 description text-center">
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
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title">Open</h5>
                <p class="card-text mb-3 description text-center">
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
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
              />
              <div class="card-body">
                <h5 class="card-title title">News</h5>
                <p class="card-text mb-3 description text-center">
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
