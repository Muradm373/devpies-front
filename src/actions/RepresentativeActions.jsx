import {devpiesAPI} from "./Actions";
import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

export const addHospital = (dispatch) => {
    let url = `${devpiesAPI}/representative/hospitals/`;
 
  };

  export const addDoctor = (dispatch, hospitalId, username, password, doctor) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}?username=${username}&password=${password}`;
 
  };
  export const getListOfHospitals = (dispatch) => {
    let url = `${devpiesAPI}/representative/hospitals/`;
 
  };

  export const getHospitalById = (dispatch, hospitalId) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}`;
 
  };

  export const editHospital = (dispatch, hospitalId) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}`;
 
  };


  export const deleteHospitalById = (dispatch, hospitalId) => {
    let url = `${devpiesAPI}/representative/hospitals/${hospitalId}`;
 
  };

  export const getDoctors = (dispatch) => {
    let url = `${devpiesAPI}/representative/doctors`;
 
  };

  export const getDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/representative/doctors/${doctorId}`;
 
  };

  export const getRepresentativeInfo = (dispatch) => {
    let url = `${devpiesAPI}/representative/profile/`;
 
  };

  export const deleteRepresentative = (dispatch) => {
    let url = `${devpiesAPI}/representative/profile/`;
 
  };

  export const editRepresentative = (dispatch, representative) => {
    let url = `${devpiesAPI}/representative/profile/`;
 
  };