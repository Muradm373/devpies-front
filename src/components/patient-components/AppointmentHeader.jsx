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
      // <div className="list-group-item list-group-item-action flex-column align-items-start w-75 mx-auto">
      //   <div class="d-flex w-100 justify-content-between">
      //     <div className="ml-3 mb-1">
      //       <h5>{this.props.appointment.hospitalName}</h5>
      //       <p>Symptoms:</p>
      //     </div>
      //     <div>
      //       <small>{this.props.appointment.dateOfIssue}</small>
      //       <br />
      //       <small>{this.props.appointment.status}</small>
      //     </div>
      //   </div>
      //   <div className="tags-cloud w-50 mx-auto">
      //     <div className="tagcloud01">
      //       <ul>
      //         <li>
      //           {this.props.appointment.symptoms.map((symptom) => {
      //             return (
      //               <a href="/#" className="mx-1 description">
      //                 {symptom}
      //               </a>
      //             );
      //           })}
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </div>

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
