import ServicesManagement from "../components/representative-components/ServicesManagement";
import DoctorsManagement from "../components/representative-components/DoctorsManagement";
import HospitalsManagement from "../components/representative-components/HospitalsManagement";
import Dashboard from "../components/representative-components/Dashboard";

export let routes = {
    "Doctors": {
        path: "/#",
        icon: "fas fa-user-nurse fa-2x",
        component: <DoctorsManagement></DoctorsManagement>,
        layout: "/",
        label: "Doctors",
      },
      "Services": {
        path: "/#",
        icon: "fas fa-cogs fa-2x",
        component: <ServicesManagement></ServicesManagement>,
        layout: "/",
        label: "Services",
      },
      "Dashboard": {
        path: "/#",
        icon: "fas fa-tachometer-alt fa-2x",
        component: <Dashboard></Dashboard>,
        layout: "/",
        label: "Dashboard",
      },
      "Hospitals": {
        path: "/#",
        icon: "fas fa-hospital fa-2x",
        component: <HospitalsManagement></HospitalsManagement>,
        layout: "/",
        label: "Hospitals",
      },
};
