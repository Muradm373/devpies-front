import About from "../components/patient-components/About";
import AIHelp from "../components/patient-components/AIHelp";
import Appointments from "../components/patient-components/Appointments";
import Hospitals from "../components/patient-components/Hospitals";
import Settings from "../components/patient-components/Settings";

export let routes = {
  "My Appointments": {
    path: "/#",
    icon: "fas fa-calendar-check fa-2x",
    component: <Appointments></Appointments>,
    layout: "/",
    label: "My Appointments",
  },
  Hospitals: {
    path: "/#",
    icon: "fas fa-map-marked-alt fa-2x",
    component: <Hospitals></Hospitals>,
    layout: "/",
    label: "Hospitals",
  },
  "AI Assistant": {
    path: "/#",
    icon: "fas fa-robot fa-2x",
    component: <AIHelp></AIHelp>,
    layout: "/",
    label: "AI Assistant",
  },
  "My data": {
    path: "/#",
    icon: "fas fa-user fa-2x",
    component: <Settings></Settings>,
    layout: "/",
    label: "My Data",
  },

  About: {
    path: "/#",
    icon: "fas fa-info fa-2x",
    component: <About></About>,
    layout: "/",
    label: "About",
  },
};
