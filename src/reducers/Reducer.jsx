const initState = {
  usertype: "user",
  menu: "My Appointments",
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
    },
  ],

  myPatients: [],
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
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_USERTYPE") {
    return { ...state, usertype: action.usertype };
  }

  if (action.type === "SET_MENU") {
    return { ...state, menu: action.menu };
  }

  return { ...state };
};

export default rootReducer;
