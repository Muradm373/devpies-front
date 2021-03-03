import {devpiesAPI} from "./Actions";
import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};


export const registerAdmin = (dispatch, username, password) => {
    let url = `${devpiesAPI}/auth/register-admin?username=${username}&password=${password}`;
  
    axios.get(url, {}, { headers: headers }).then((response) => {
      let token = response.data;
      dispatch({
        type: "USER_SIGN_IN",
        authUser: token,
        user: token,
      });
    });
  };

  export const getListOfPatients = (dispatch) => {
    let url = `${devpiesAPI}/admin/users/`;
 
  };

  export const getPatientById = (dispatch, patientId) => {
    let url = `${devpiesAPI}/admin/users/${patientId}`;
 
  };

  export const deletePatientById = (dispatch, patientId) => {
    let url = `${devpiesAPI}/admin/users/${patientId}`;
 
  };

  export const editPatientById = (dispatch, patientId) => {
    let url = `${devpiesAPI}/admin/users/${patientId}`;
 
  };

  export const getListOfRepresentatives = (dispatch) => {
    let url = `${devpiesAPI}/admin/representatives/`;
 
  };

  export const getRepresentativeById = (dispatch, representativeId) => {
    let url = `${devpiesAPI}/admin/representatives/${representativeId}`;
 
  };

  export const deleteRepresentativeById = (dispatch, representativeId) => {
    let url = `${devpiesAPI}/admin/representatives/${representativeId}`;
 
  };

  export const editRepresentativeById = (dispatch, representativeId) => {
    let url = `${devpiesAPI}/admin/representatives/${representativeId}`;
 
  };

  export const getListOfDoctors = (dispatch) => {
    let url = `${devpiesAPI}/admin/doctors/`;
 
  };

  export const getDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/admin/doctors/${doctorId}`;
 
  };

  export const deleteDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/admin/doctors/${doctorId}`;
 
  };

  export const editDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/admin/doctors/${doctorId}`;
 
  };

  export const getListOfAppointments = (dispatch) => {
    let url = `${devpiesAPI}/admin/appointments/`;
 
  };

  export const getAppointmentById = (dispatch, appointmentId) => {
    let url = `${devpiesAPI}/admin/appointments/${appointmentId}`;
 
  };

  export const getAppointmentsByStatus = (dispatch, appointmentStatus) => {
    let url = `${devpiesAPI}/admin/appointments/status?status=${appointmentStatus}`;
 
  };

  export const addRepresentative = (dispatch, username, password, representative) => {
    let url = `${devpiesAPI}/admin/representatives?username=${username}&password=${password}`;
 
  };

  export const editRepresentative = (dispatch, representative) => {
    let url = `${devpiesAPI}/admin/representatives`;
 
  };

  export const deleteRepresentative = (dispatch, representative) => {
    let url = `${devpiesAPI}/admin/representatives`;
 
  };