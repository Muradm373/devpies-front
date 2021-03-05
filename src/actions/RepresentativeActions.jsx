import {devpiesAPI} from "./Actions";
import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

export const addHospital = (dispatch, hospital) => {
    let url = `${devpiesAPI}/representative/hospitals/`;

    axios
    .post(url, { hospital: hospital }, { headers: headers })
    .then((response) => {
      let hospitalDTO = response.data;

      console.log(hospitalDTO);

      dispatch({
        type: "ADD_HOSPITAL",
        data: hospitalDTO,
      });
    });
 
  };

  export const addDoctor = (dispatch, hospitalId, username, password, doctor) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}?username=${username}&password=${password}`;

    axios
    .post(url, { doctor: doctor }, { headers: headers })
    .then((response) => {
      let doctorDTO = response.data;

      console.log(doctorDTO);

      dispatch({
        type: "ADD_DOCTOR",
        data: doctorDTO,
      });
    });
 
  };
  export const getListOfHospitals = (dispatch) => {
    let url = `${devpiesAPI}/representative/hospitals/`;

    axios
    .get(url, { headers: headers })
    .then((response) => {
      let hospitals = response.data;

      console.log(hospitals);

      dispatch({
        type: "GET_LIST_OF_REPRESENTATIVES_HOSPITALS",
        data: hospitals,
      });
    });
 
  };

  export const getHospitalById = (dispatch, hospitalId) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}`;

    axios
    .get(url, { headers: headers })
    .then((response) => {
      let hospital = response.data;

      console.log(hospital);

      dispatch({
        type: "GET_REPRESENTATIVE_HOSPITAL_BY_ID",
        data: hospital,
      });
    });
 
  };

  export const editHospital = (dispatch, hospitalId) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}`;

    axios
    .put(url, {}, { headers: headers })
    .then((response) => {
      let hospital = response.data;

      console.log(hospital);

      dispatch({
        type: "EDIT_REPRESENTATIVE_HOSPITAL_BY_ID",
        data: hospital,
      });
    });
 
  };


  export const deleteHospitalById = (dispatch, hospitalId) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}`;

    axios
    .delete(url,{}, { headers: headers })
    .then((response) => {
      let hospital = response.data;

      console.log(hospital);

      dispatch({
        type: "DELETE_REPRESENTATIVE_HOSPITAL_BY_ID",
        data: hospital,
      });
    });
 
  };

  export const getDoctors = (dispatch) => {
    let url = `${devpiesAPI}/representative/doctors`;
    axios.get(url, { headers: headers }).then((response) => {
      let doctors = response.data;
  
      console.log(doctors);
  
      dispatch({
        type: "SET_LIST_OF_DOCTORS",
        data: doctors,
      });
    });
  };

  export const getDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/representative/doctors/${doctorId}`;

    axios.get(url, { headers: headers }).then((response) => {
      let doctor = response.data;
  
      console.log(doctor);
  
      dispatch({
        type: "SET_DOCTOR",
        data: doctor,
      });
    });
 
  };

  export const getRepresentativeInfo = (dispatch) => {
    let url = `${devpiesAPI}/representative/profile/`;

    let token = JSON.parse(localStorage.getItem("authUser"));

  headers["Authorization"] = `Bearer ${token}`;
  axios.get(url, { headers: headers }).then((response) => {
    let user = response.data;

    dispatch({
      type: "SET_USER_INFO",
      data: user,
    });
  });
 
  };

  export const deleteRepresentative = (dispatch) => {
    let url = `${devpiesAPI}/representative/profile/`;

    axios.delete(url, {}, { headers: headers }).then((response) => {
      let representativeDTO = response.data;
  
      console.log(representativeDTO);
  
      dispatch({
        type: "DELETE_REPRESENTATIVE_PROFILE",
        data: representativeDTO,
      });
    });
 
  };

  export const editRepresentative = (dispatch, representative) => {
    let url = `${devpiesAPI}/representative/profile/`;

    axios
    .put(url, { representative: representative }, { headers: headers })
    .then((response) => {
      let representativeDTO = response.data;

      console.log(representativeDTO);

      dispatch({
        type: "EDIT_REPRESENTATIVE_PROFILE",
        data: representativeDTO,
      });
    });
 
  };