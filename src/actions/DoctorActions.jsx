import { devpiesAPI, headers } from "./Actions";
import axios from "axios";

export const getListOfPatients = (dispatch) => {
  let url = `${devpiesAPI}/admin/users/`;

  axios.get(url, { headers: headers }).then((response) => {
    let patients = response.data;

    console.log(patients);

    dispatch({
      type: "SET_LIST_OF_PATIENTS",
      data: patients,
    });
  });
};

export const getListOfAppointments = (dispatch) => {
  let url = `${devpiesAPI}/doctor/appointments/`;

  axios.get(url, { headers: headers }).then((response) => {
    let appointments = response.data;

    console.log(appointments);

    dispatch({
      type: "SET_LIST_OF_APPOINTMENTS",
      data: appointments,
    });
  });
};

export const getListOfAppointmentsByStatus = (dispatch, status) => {
  let url = `${devpiesAPI}/doctor/appointments/status?status=${status}`;

  axios.get(url, { headers: headers }).then((response) => {
    let appointments = response.data;

    console.log(appointments);

    dispatch({
      type: "SET_LIST_OF_APPOINTMENTS_BY_STATUS",
      data: appointments,
      status: status,
    });
  });
};

export const getAppointmentById = (dispatch, id) => {
  let url = `${devpiesAPI}/doctor/appointments/${id}`;

  axios.get(url, { headers: headers }).then((response) => {
    let appointment = response.data;

    console.log(appointment);

    dispatch({
      type: "SET_APPOINTMENT_BY_ID",
      data: appointment,
    });
  });
};

export const acceptAppointmentById = (dispatch, id) => {
  let url = `${devpiesAPI}/doctor/appointments/${id}`;

  axios.post(url, {}, { headers: headers }).then((response) => {
    let appointmentDTO = response.data;

    console.log(appointmentDTO);

    dispatch({
      type: "ACCEPT_APPOINTMENT",
      data: appointmentDTO,
    });
  });
};

export const rejectAppointmentById = (dispatch, id) => {
  let url = `${devpiesAPI}/doctor/appointments/${id}`;

  axios.delete(url, {}, { headers: headers }).then((response) => {
    let appointmentDTO = response.data;

    console.log(appointmentDTO);

    dispatch({
      type: "REJECT_APPOINTMENT",
      data: appointmentDTO,
    });
  });
};

export const endAppointmentById = (dispatch, id) => {
  let url = `${devpiesAPI}/doctor/appointments/${id}`;

  axios.delete(url, {}, { headers: headers }).then((response) => {
    let appointmentDTO = response.data;

    console.log(appointmentDTO);

    dispatch({
      type: "END_APPOINTMENT",
      data: appointmentDTO,
    });
  });
};

export const deleteDoctorProfile = (dispatch) => {
  let url = `${devpiesAPI}/doctor/profile`;

  axios.delete(url, {}, { headers: headers }).then((response) => {
    let doctorDTO = response.data;

    console.log(doctorDTO);

    dispatch({
      type: "DELETE_DOCTOR_PROFILE",
      data: doctorDTO,
    });
  });
};

export const editDoctorProfile = (dispatch, doctor) => {
  let url = `${devpiesAPI}/doctor/profile`;

  axios.put(url, { doctor: doctor }, { headers: headers }).then((response) => {
    let doctorDTO = response.data;

    console.log(doctorDTO);

    dispatch({
      type: "EDIT_DOCTOR_PROFILE",
      data: doctorDTO,
    });
  });
};

export const getDoctorProfile = (dispatch) => {
  let url = `${devpiesAPI}/doctor/profile`;

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
