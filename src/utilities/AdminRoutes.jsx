import DoctorsManagement from "../components/admin-components/DoctorsManagement"
import HospitalsManagement from "../components/admin-components/HospitalsManagement";
import PatientsManagement from "../components/admin-components/PatientsManagement";
import RepresentativesManagement from "../components/admin-components/RepresentativesManagement";
import NewsManagement from "../components/admin-components/NewsManagement";


export let routes = {
  "Doctors": {
    path: "/#",
    icon: "fas fa-user-nurse fa-2x",
    component: <DoctorsManagement></DoctorsManagement>,
    layout: "/",
    label: "Doctors",
  },
  "Representatives": {
    path: "/#",
    icon: "fas fa-user-md fa-2x",
    component: <RepresentativesManagement></RepresentativesManagement>,
    layout: "/",
    label: "Representatives",
  },
  "Patients": {
    path: "/#",
    icon: "fas fa-user fa-2x",
    component: <PatientsManagement></PatientsManagement>,
    layout: "/",
    label: "Patients",
  },
  "Hospitals": {
    path: "/#",
    icon: "fas fa-hospital fa-2x",
    component: <HospitalsManagement></HospitalsManagement>,
    layout: "/",
    label: "Hospitals",
  },
  
  News: {
    path: "/#",
    icon: "fas fa-newspaper fa-2x",
    component: <NewsManagement></NewsManagement>,
    layout: "/",
    label: "News",
  },
};
