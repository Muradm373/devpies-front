const initState = {
  user: undefined,
  authUser: undefined,
  userType: undefined,
  menu: 0,
  files: [
    {
      filename: "Test Results",
      dateModified: "03/12/2020 00:57",
      fileExtension: "pdf",
    },
    {
      filename: "MRI Scan",
      dateModified: "03/12/2020 00:57",
      fileExtension: "image",
    },
  ],
  userDetails: {
    name: "Murad",
    surname: "Mammadov",
    birthDay: "03",
    birthMonth: "12",
    birthYear: "1996",
    gender: "Male",
    address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
    city: "Baku",
    country: "Azerbaijan",
    postalCode: "AZ1025",
    county: "Khatai",
    knownAllergiesList: [],
    phoneNumber: "(+994) 556181203",
    email: "muradm373@gmail.com",
    idNumber: "C00820373",
  },
  appointmentsHistory: [],
  activeAppointments: [
    {
      dateOfIssue: "01/11/2021",
      symptoms: ["headache", "apathy", "irritability"],
      hospitalName: "Biosis Tibb Mərkəzi",
      status: "Pending",
    },
    {
      dateOfIssue: "01/11/2021",
      symptoms: ["headache", "apathy", "irritability"],
      hospitalName: "Leyla Medical Center",
      status: "Pending",
    },
  ],

  hospitals: [
    {
      name: "Biosis Tibb Mərkəzi",
      lng: 59.938043,
      lat: 30.337157,
      rating: 5,
      address: "101 Kilyazi",
      phoneNumber: "(012)000 00 00",
      timetable: "Opens 8:30AM",
    },
  ],
  myPatients: [
    {
      user: { name: "Murad", surname: "Mammadov" },
      symptoms: ["headache", "apathy", "irritability"],
      date: "03.12.2020",
      thumbnail:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    },
    {
      user: { name: "Anar", surname: "Aliyev" },
      symptoms: ["headache", "apathy", "irritability"],
      date: "03.12.2020",
      thumbnail:
        "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    },
  ],
  feedbacks: [
    {
      user: { name: "Murad", surname: "Mammadov" },
      rating: "",
      description: "Great job!",
      date: "03.12.2020",
    },
    {
      user: { name: "Anar", surname: "Aliyev" },
      rating: "",
      description: "Thanks for a good job!",
      date: "03.12.2020",
    },
  ],
  selectedBodyParts: [],

  listOfAdminDoctors: [],
  listOfAdminPatients: [],
  listOfAdminRepresentatives: [],
  listOfAdminHospitals: [],

  adminHasMoreDoctors: true,
  adminHasMorePatients: true,
  adminHasMoreRepresentatives: true,
  adminHasMoreHospitals: true,

  dailyAppointments: [],
  weeklyAppointments: [],

  fetchedUser: {},
  fetchedHospital:{}
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_USERTYPE") {
    return { ...state, usertype: action.usertype };
  }

  if (action.type === "SET_MENU") {
    return { ...state, menu: action.menu };
  }
  if (action.type === "USER_SIGN_IN") {
    return {
      ...state,
      authUser: action.authUser,
      userType: action.user.authorities[0].authority,
    };
  }
  if (action.type === "USER_SIGN_OUT") {
    return {
      ...state,
      authUser: undefined,
      userType: undefined,
    };
  }

  if (action.type === "SET_BODY_PARTS") {
    return {
      ...state,
      selectedBodyParts: action.bodyParts,
    };
  }

  //PATIENT

  if (action.type === "DELETE_PATIENT_PROFILE") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "EDIT_PATIENT_PROFILE") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "SET_USER_INFO") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "SET_LIST_OF_HOSPITALS") {
    return { ...state, hospitals: action.data };
  }
  if (action.type === "SET_LIST_OF_DOCTORS_BY_HOSPITAL") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "SET_LIST_OF_DOCTORS") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "CREATE_APPOINTMENT") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "SET_LIST_OF_APPOINTMENTS") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "SET_LIST_OF_APPOINTMENTS_BY_STATUS") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "SET_APPOINTMENT_BY_ID") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "CANCEL_APPOINTMENT_BY_ID") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "CHANGE_DATE_OF_APPOINTMENT_BY_ID") {
    return { ...state, usertype: action.usertype };
  }
  if (action.type === "CHANGE_DETAILS_OF_APPOINTMENT_BY_ID") {
    return { ...state, usertype: action.usertype };
  }

  //ADMIN

  if (action.type === "SET_LIST_OF_USERS_BY_PAGE") {

    if (action.data === []) return { ...state, adminHasMorePatients: false };

    let patients = state.listOfAdminPatients;
    let concatPatients = patients.concat(action.data)
    return {
      ...state,
      listOfAdminPatients: [...concatPatients],
    };
  }
  if (action.type === "SET_LIST_OF_HOSPITALS_BY_PAGE") {
    if (action.data === []) return { ...state, adminHasMoreHospitals: false };

    let hospitals = state.listOfAdminHospitals;
    let concatHospitals = hospitals.concat(action.data)
    return {
      ...state,
      listOfAdminHospitals: [...concatHospitals],
    };
  }
  if (action.type === "SET_LIST_OF_REPRESENTATIVES_BY_PAGE") {
    if (action.data === []) return { ...state, adminHasMoreRepresentatives: false };

    let representatives = state.listOfAdminRepresentatives;
    let concatRepresentatives = representatives.concat(action.data)
    return {
      ...state,
      listOfAdminRepresentatives: [...concatRepresentatives],
    };
  }
  if (action.type === "SET_LIST_OF_DOCTORS_BY_PAGE") {
    if (action.data === []) return { ...state, adminHasMoreDoctors: false };

    let doctors = state.listOfAdminDoctors;
    let concatDoctors = doctors.concat(action.data)
    return {
      ...state,
      listOfAdminDoctors: [...concatDoctors],
    };
  }

  if (action.type === "RESET_LIST_OF_USERS_BY_PAGE") {
    return {
      ...state,
      listOfAdminPatients: [],
    };
  }
  if (action.type === "RESET_LIST_OF_DOCTORS_BY_PAGE") {
    return {
      ...state,
      listOfAdminDoctors: [],
    };
  }
  if (action.type === "RESET_LIST_OF_HOSPITALS_BY_PAGE") {
    return {
      ...state,
      listOfAdminHospitals: [],
    };
  }
  if (action.type === "RESET_LIST_OF_REPRESENTATIVES_BY_PAGE") {
    return {
      ...state,
      listOfAdminRepresentatives: [],
    };
  }

  if (action.type === "SET_DOCTOR_BY_ID") {
    return {
      ...state,
      fetchedUser: action.data,
    };
  }

  if (action.type === "SET_PATIENT_BY_ID") {
    return {
      ...state,
      fetchedUser: action.data,
    };
  }

  if (action.type === "SET_REPRESENTATIVE_BY_ID") {
    return {
      ...state,
      fetchedUser: action.data,
    };
  }
  if (action.type === "SET_HOSPITAL_BY_ID") {
    console.log(action.data)
    return {
      ...state,
      fetchedHospital: action.data,
    };
  }

    //Appointments
    if (action.type === "GET_LIST_OF_DAILY_APPOINTMENTS") {
      return {
        ...state,
        dailyAppointments: action.data,
      };
    }
  
    if (action.type === "GET_LIST_OF_WEEKLY_APPOINTMENTS") {
      return {
        ...state,
        weeklyAppointments: action.data,
      };
    }
  

  return { ...state };
};



export default rootReducer;
