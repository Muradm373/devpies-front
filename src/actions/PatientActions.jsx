import { devpiesAPI, headers } from "./Actions";
import axios from "axios";

export const deletePatientProfile = (dispatch) => {
  let url = `${devpiesAPI}/patient/profile`;

  axios.delete(url, {}, { headers: headers }).then((response) => {
    let patientDTO = response.data;

    console.log(patientDTO);

    dispatch({
      type: "DELETE_PATIENT_PROFILE",
      data: patientDTO,
    });
  });
};

export const editPatientProfile = (dispatch, patient) => {
  let url = `${devpiesAPI}/patient/profile`;

  axios
    .put(url, { patient: patient }, { headers: headers })
    .then((response) => {
      let patientDTO = response.data;

      console.log(patientDTO);

      dispatch({
        type: "EDIT_PATIENT_PROFILE",
        data: patientDTO,
      });
    });
};

export const getPatientProfile = (dispatch) => {
  let url = `${devpiesAPI}/patient/profile`;

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

export const getListOfHospitals = (dispatch) => {
  let url = `${devpiesAPI}/patient/hospitals`;

  axios.get(url, { headers: headers }).then((response) => {
    let hospitals = response.data;

    console.log(hospitals);

    dispatch({
      type: "SET_LIST_OF_HOSPITALS",
      data: hospitals,
    });
  });
};

export const getHospitalById = (dispatch, id) => {
  let url = `${devpiesAPI}/patient/hospitals/${id}`;

  axios.get(url, { headers: headers }).then((response) => {
    let hospital = response.data;

    console.log(hospital);

    dispatch({
      type: "SET_HOSPITAL_BY_ID",
      data: hospital,
    });
  });
};

export const getListOfDoctorsByHospital = (dispatch, hospitalId) => {
  let url = `${devpiesAPI}/patient/hospitals/doctors?id=${hospitalId}`;

  axios.get(url, { headers: headers }).then((response) => {
    let doctors = response.data;

    console.log(doctors);

    dispatch({
      type: "SET_LIST_OF_DOCTORS_BY_HOSPITAL",
      data: doctors,
    });
  });
};

export const getListOfDoctors = (dispatch) => {
  let url = `${devpiesAPI}/patient/doctors`;

  axios.get(url, { headers: headers }).then((response) => {
    let doctors = response.data;

    console.log(doctors);

    dispatch({
      type: "SET_LIST_OF_DOCTORS",
      data: doctors,
    });
  });
};

export const createAppointment = (dispatch, appointment) => {
  let url = `${devpiesAPI}/patient/appointments`;

  axios
    .post(url, { appointment: appointment }, { headers: headers })
    .then((response) => {
      let appointmentDTO = response.data;

      console.log(appointmentDTO);

      dispatch({
        type: "CREATE_APPOINTMENT",
        data: appointmentDTO,
      });
    });
};

export const getListOfAppointments = (dispatch) => {
  let url = `${devpiesAPI}/patient/appointments`;

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
  let url = `${devpiesAPI}/patient/appointments/status?status=${status}`;

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

export const getAppointmentById = (dispatch, appointmentId) => {
  let url = `${devpiesAPI}/patient/appointments/${appointmentId}`;

  axios.get(url, { headers: headers }).then((response) => {
    let appointment = response.data;

    console.log(appointment);

    dispatch({
      type: "SET_APPOINTMENT_BY_ID",
      data: appointment,
    });
  });
};

export const cancelAppointmentById = (dispatch, appointmentId) => {
  let url = `${devpiesAPI}/patient/appointments/${appointmentId}`;

  axios.delete(url, {}, { headers: headers }).then((response) => {
    let appointment = response.data;

    console.log(appointment);

    dispatch({
      type: "CANCEL_APPOINTMENT_BY_ID",
      data: appointment,
    });
  });
};

export const changeDateOfAppointmentById = (
  dispatch,
  appointmentId,
  appointment
) => {
  let url = `${devpiesAPI}/patient/appointments/${appointmentId}`;

  axios
    .put(url, { appointment: appointment }, { headers: headers })
    .then((response) => {
      let appointmentDTO = response.data;

      console.log(appointmentDTO);

      dispatch({
        type: "CHANGE_DATE_OF_APPOINTMENT_BY_ID",
        data: appointmentDTO,
      });
    });
};

export const changeDetailsOfAppointmentById = (
  dispatch,
  appointmentId,
  appointment
) => {
  let url = `${devpiesAPI}/patient/appointments/${appointmentId}`;

  axios
    .patch(url, { appointment: appointment }, { headers: headers })
    .then((response) => {
      let appointmentDTO = response.data;

      console.log(appointmentDTO);

      dispatch({
        type: "CHANGE_DETAILS_OF_APPOINTMENT_BY_ID",
        data: appointmentDTO,
      });
    });
};
