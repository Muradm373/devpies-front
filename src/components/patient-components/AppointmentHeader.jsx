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
            src="https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg?auto=format"
            alt=""
          />
        </div>
        <div class="blog-slider__content">
          <span class="blog-slider__code">{this.props.appointment.dateOfIssue}</span>
          <div class="blog-slider__title"><i class="fas fa-hospital mx-2 color-gray"></i>{this.props.appointment.hospitalName}</div>
          <div class="blog-slider__text">
           Your symptoms were: {" "}
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
