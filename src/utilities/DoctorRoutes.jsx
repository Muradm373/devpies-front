import MyAppointments from "../components/doctor-components/MyAppointments";
import MyPatients from "../components/doctor-components/MyPatients";
import MySchedule from "../components/doctor-components/MySchedule";
import Statistics from "../components/doctor-components/Statistics";
import NewsFeed from "../components/doctor-components/NewsFeed";

export let routes = {
  "My Appointments": {
    path: "/#",
    icon: "fas fa-calendar-check fa-2x",
    component: <MyAppointments></MyAppointments>,
    layout: "/",
    label: "My Appointments",
  },
  "My Patients": {
    path: "/#",
    icon: "fas fa-user fa-2x",
    component: <MyPatients></MyPatients>,
    layout: "/",
    label: "My Patients",
  },
  Statistics: {
    path: "/#",
    icon: "fas fa-chart-bar fa-2x",
    component: <Statistics></Statistics>,
    layout: "/",
    label: "Statistics",
  },
  News: {
    path: "/#",
    icon: "fas fa-newspaper fa-2x",
    component: <NewsFeed></NewsFeed>,
    layout: "/",
    label: "News",
  },

  "My Schedule": {
    path: "/#",
    icon: "fas fa-calendar-alt fa-2x",
    component: <MySchedule></MySchedule>,
    layout: "/",
    label: "My Schedule",
  },
};
