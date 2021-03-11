import React, { Component } from 'react';
import {connect} from "react-redux";

class HospitalsSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
      ...state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => {},
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(HospitalsSelector);