const initState = {
  user: undefined,
  authUser: undefined,
  userType: undefined,
  menu: "My Appointments",
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
      hospitalName: "Leyla Medical Center",
      status: "Pending",
    },{
      dateOfIssue: "01/11/2021",
      symptoms: ["headache", "apathy", "irritability"],
      hospitalName: "Leyla Medical Center",
      status: "Pending",
    },
  ],

  hospitals: [
    {
      name: "Leyla Medical Clinic",
      lng: 59.938043,
      lat: 30.337157,
      rating: 5,
      address: "101 Hasan Aliyev str",
      phoneNumber: "(012)000 00 00",
      timetable: "Opens 8:30AM",
    },
    {
      name: "Istanbul Clinic",
      lng: 59.955413,
      lat: 30.337157,
      rating: 5,
      address: "35 Matbuat avenue",
      phoneNumber: "(012)000 00 00",
      timetable: "Opens 8:30AM",
    },
    {
      name: "Hayat Clinic",
      lng: 59.955413,
      lat: 30.337157,
      rating: 5,
      address: "Qara Qarayev Pr., 66 / 1",
      phoneNumber: "(012) 000 00 00",
      timetable: "Opens 8:30AM",
    },
  ],
  myPatients: [  {
    user: { name: "Murad", surname: "Mammadov" },
    symptoms: ["headache", "apathy", "irritability"],
    date: "03.12.2020",
    thumbnail: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
  },
  {
    user: { name: "Anar", surname: "Aliyev" },
    symptoms: ["headache", "apathy", "irritability"],
    date: "03.12.2020",
    thumbnail:"https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
  }],
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
  selectedBodyParts: []
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
      userType: undefined
    };
  }

  if (action.type === "SET_BODY_PARTS") {
    return {
      ...state,
      selectedBodyParts: action.bodyParts,
    };
  }

  return { ...state };
};

export default rootReducer;
