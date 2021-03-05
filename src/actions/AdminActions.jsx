import {devpiesAPI, headers} from "./Actions";
import axios from "axios";


export const getAdminProfile = (dispatch) => {
  let token = JSON.parse(localStorage.getItem("authUser"));

  headers["Authorization"] = `Bearer ${token}`;
  
    dispatch({
      type: "SET_USER_INFO",
      data: token,
    });
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

    axios.get(url, { headers: headers }).then((response) => {
      let patients = response.data;
  
      console.log(patients);
  
      dispatch({
        type: "SET_LIST_OF_PATIENTS",
        data: patients,
      });
    });
 
  };

  export const getPatientById = (dispatch, patientId) => {
    let url = `${devpiesAPI}/admin/users/${patientId}`;

    axios.get(url, { headers: headers }).then((response) => {
      let patient = response.data;
  
      console.log(patient);
  
      dispatch({
        type: "SET_PATIENT_BY_ID",
        data: patient,
      });
    });
 
  };

  export const deletePatientById = (dispatch, patientId) => {
    let url = `${devpiesAPI}/admin/users/${patientId}`;

    axios.delete(url, {}, { headers: headers }).then((response) => {
      let patient = response.data;
  
      console.log(patient);
  
      dispatch({
        type: "DELETE_PATIENT_BY_ID",
        data: patient,
      });
    });
 
  };

  export const editPatientById = (dispatch, patientId, patient) => {
    let url = `${devpiesAPI}/admin/users/${patientId}`;

    axios.put(url, patient, { headers: headers }).then((response) => {
      let patient = response.data;
  
      console.log(patient);
  
      dispatch({
        type: "EDIT_PATIENT_BY_ID",
        data: patient,
      });
    });

  };

  export const getListOfRepresentatives = (dispatch) => {
    let url = `${devpiesAPI}/admin/representatives/`;

    axios.get(url, { headers: headers }).then((response) => {
      let representatives = response.data;
  
      console.log(representatives);
  
      dispatch({
        type: "SET_LIST_OF_REPRESENTATIVES",
        data: representatives,
      });
    });
 
  };

  export const getRepresentativeById = (dispatch, representativeId) => {
    let url = `${devpiesAPI}/admin/representatives/${representativeId}`;

    axios.get(url, { headers: headers }).then((response) => {
      let representative = response.data;
  
      console.log(representative);
  
      dispatch({
        type: "SET_REPRESENTATIVE_BY_ID",
        data: representative,
      });
    });
 
  };

  export const deleteRepresentativeById = (dispatch, representativeId) => {
    let url = `${devpiesAPI}/admin/representatives/${representativeId}`;

    
    axios.delete(url, {}, { headers: headers }).then((response) => {
      let representative = response.data;
  
      console.log(representative);
  
      dispatch({
        type: "DELETE_REPRESENTATIVE_BY_ID",
        data: representative,
      });
    });
 
 
  };

  export const editRepresentativeById = (dispatch, representativeId, representative) => {
    let url = `${devpiesAPI}/admin/representatives/${representativeId}`;

    axios.put(url, representative, { headers: headers }).then((response) => {
      let representative = response.data;
  
      console.log(representative);
  
      dispatch({
        type: "EDIT_REPRESENTATIVE_BY_ID",
        data: representative,
      });
    });
 
  };

  export const getListOfDoctors = (dispatch) => {
    let url = `${devpiesAPI}/admin/doctors/`;

    axios.get(url, { headers: headers }).then((response) => {
      let doctors = response.data;
  
      console.log(doctors);
  
      dispatch({
        type: "SET_LIST_OF_DOCTORS",
        data: doctors,
      });
    });
 
 
  };

  export const getListOfDoctorsByPage = (dispatch, page) => {
    let url = `${devpiesAPI}/admin/doctors/page?page=${page}`;

    axios.get(url, { headers: headers }).then((response) => {
      let doctors = response.data;
  
      console.log(doctors);
  
      dispatch({
        type: "SET_LIST_OF_DOCTORS_BY_PAGE",
        data: doctors,
      });
    });
 
 
  };
  export const getListOfRepresentativesByPage = (dispatch, page) => {
    let url = `${devpiesAPI}/admin/representatives/page?page=${page}`;

    axios.get(url, { headers: headers }).then((response) => {
      let representatives = response.data;
  
      console.log(representatives);
  
      dispatch({
        type: "SET_LIST_OF_REPRESENTATIVES_BY_PAGE",
        data: representatives,
      });
    });
 
  };

  export const getListOfHospitalsByPage = (dispatch, page) => {
    let url = `${devpiesAPI}/admin/hospitals/page?page=${page}`;

    axios.get(url, { headers: headers }).then((response) => {
      let hospitals = response.data;
  
      console.log(hospitals);
  
      dispatch({
        type: "SET_LIST_OF_HOSPITALS_BY_PAGE",
        data: hospitals,
      });
    });
 
  };

  export const getListOfUsersByPage = (dispatch, page) => {
    let url = `${devpiesAPI}/admin/users/page?page=${page}`;

    axios.get(url, { headers: headers }).then((response) => {
      let users = response.data;
  
      console.log(users);
  
      dispatch({
        type: "SET_LIST_OF_USERS_BY_PAGE",
        data: users,
      });
    });
 
  };

  export const getDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/admin/doctors/${doctorId}`;

    axios.get(url, { headers: headers }).then((response) => {
      let doctor = response.data;
  
      console.log(doctor);
  
      dispatch({
        type: "SET_DOCTOR_BY_ID",
        data: doctor,
      });
    });
 
  };

  export const deleteDoctorById = (dispatch, doctorId) => {
    let url = `${devpiesAPI}/admin/doctors/${doctorId}`;

    axios.delete(url, {}, { headers: headers }).then((response) => {
      let doctor = response.data;
  
      console.log(doctor);
  
      dispatch({
        type: "DELETE_DOCTOR_BY_ID",
        data: doctor,
      });
    });
 
  };

  export const editDoctorById = (dispatch, doctorId, doctor) => {
    let url = `${devpiesAPI}/admin/doctors/${doctorId}`;

    axios.put(url, doctor, { headers: headers }).then((response) => {
      let doctor = response.data;
  
      console.log(doctor);
  
      dispatch({
        type: "EDIT_DOCTOR_BY_ID",
        data: doctor,
      });
    });
 
 
  };

  export const getListOfAppointments = (dispatch) => {
    let url = `${devpiesAPI}/admin/appointments/`;

    axios.get(url, { headers: headers }).then((response) => {
      let appointments = response.data;
  
      console.log(appointments);
  
      dispatch({
        type: "SET_LIST_OF_APPOINTMENTS",
        data: appointments,
      });
    });
 
  };

  export const getAppointmentById = (dispatch, appointmentId) => {
    let url = `${devpiesAPI}/admin/appointments/${appointmentId}`;

    axios.get(url, { headers: headers }).then((response) => {
      let appointment = response.data;
  
      console.log(appointment);
  
      dispatch({
        type: "SET_APPOINTMENT_BY_ID",
        data: appointment,
      });
    });
 
  };

  export const getAppointmentsByStatus = (dispatch, appointmentStatus) => {
    let url = `${devpiesAPI}/admin/appointments/status?status=${appointmentStatus}`;

    axios.get(url, { headers: headers }).then((response) => {
      let appointments = response.data;
  
      console.log(appointments);
  
      dispatch({
        type: "SET_LIST_OF_APPOINTMENTS_BY_STATUS",
        data: appointments,
        status: appointmentStatus,
      });
    });
 
  };

  export const addRepresentative = (dispatch, username, password, representative) => {
    let url = `${devpiesAPI}/admin/representatives?username=${username}&password=${password}`;

    axios.post(url, representative, { headers: headers }).then((response) => {
      let representative = response.data;
  
      console.log(representative);
  
      dispatch({
        type: "ADD_REPRESENTATIVE",
        data: representative,
      });
    });
 
  };

  export const addDoctor = (dispatch, username, password, doctor) => {
    let url = `${devpiesAPI}/admin/doctor?username=${username}&password=${password}`;

    axios.post(url,doctor, { headers: headers }).then((response) => {
      let doctor = response.data;
  
      console.log(doctor);
  
      dispatch({
        type: "ADD_DOCTOR",
        data: doctor,
      });
    });
 
  };


  export const editRepresentative = (dispatch, representative) => {
    let url = `${devpiesAPI}/admin/representatives`;

    axios.put(url,representative, { headers: headers }).then((response) => {
      let representative = response.data;
  
      console.log(representative);
  
      dispatch({
        type: "EDIT_REPRESENTATIVE",
        data: representative,
      });
    });
 
  };

  export const deleteRepresentative = (dispatch, representative) => {
    let url = `${devpiesAPI}/admin/representatives`;

    axios.delete(url,{representative: representative}, { headers: headers }).then((response) => {
      let representative = response.data;
  
      console.log(representative);
  
      dispatch({
        type: "DELETE_REPRESENTATIVE",
        data: representative,
      });
    });
 
  };

  export const resetListOfDoctors = (dispatch) => {
    dispatch({
      type: "RESET_LIST_OF_DOCTORS_BY_PAGE"
    });
  }

  export const resetListOfHospitals = (dispatch) => {
    dispatch({
      type: "RESET_LIST_OF_HOSPITALS_BY_PAGE"
    });
  }

  export const resetListOfPatients = (dispatch) => {
    dispatch({
      type: "RESET_LIST_OF_USERS_BY_PAGE"
    });
  }

  export const resetListOfRepresentatives = (dispatch) => {
    dispatch({
      type: "RESET_LIST_OF_REPRESENTATIVES_BY_PAGE"
    });
  }