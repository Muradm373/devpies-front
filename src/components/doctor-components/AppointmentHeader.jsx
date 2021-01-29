import React, { Component } from "react";

class AppointmentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toString(arr){
    let result = ""
    for(let item = 0; item < arr.length; item++)
      result += arr[item] + " ";

    return result;
  }

  render() {
    return (
     
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
          <img
            src={this.props.appointment.thumbnail}
            alt=""
          />
        </div>
        <div class="blog-slider__content">
          <span class="blog-slider__code">{this.props.appointment.dateOfIssue}</span>
          <div class="blog-slider__title"><i class="fas fa-user mx-2 color-gray"></i>{`${this.props.appointment.user.name} ${this.props.appointment.user.surname}`}</div>
          <div class="blog-slider__text">
          Symptoms are: {" "}
              <div className="tags-cloud mx-auto mt-2">
          <div>
                <p>{this.toString(this.props.appointment.symptoms)}</p>
          </div>
        </div>
           
          </div>
          <a href="#" class="blog-slider__button">
            READ MORE
          </a>

        </div>
      </div>
    );
  }
}

export default AppointmentHeader;
