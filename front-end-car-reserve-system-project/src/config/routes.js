import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Location from "../components/pages/Location";
import CarModel from "../components/pages/CarModel";
import Reservation from "../components/pages/Reservation";
import SelectCar from "../components/pages/SelectCar";
import Reserveinfo from "../components/pages/ReserveInfo";
import Sucessful from "../components/reservation/sucessful";
import SeedData from "../components/SeedData/initialItems";

const components = {
  login: {
    url: "/user/login",
    component: Login,
  },
  register: {
    url: "/user/register",
    component: Register,
  },
  home: {
    url: "/home",
    component: Home,
  },
  location: {
    url: "/location",
    component: Location,
  },
  carModel: {
    url: "/carmodel",
    component: CarModel,
  },
  reservation: {
    url: "/reservation",
    component: Reservation,
  },
  selectCar: {
    url: "/reservation/selectcar",
    component: SelectCar,
  },
  reserveInfo: {
    url: "/reservation/selectcar/reserveinfo",
    component: Reserveinfo,
  },
  sucessful: {
    url: "/reservation/sucessful",
    component: Sucessful,
  },
  seedData: {
    url: "/seeddata",
    component: SeedData,
  },
};

// Role permission
export default {
  user: {
    allowedRoutes: [
      components.register,
      components.login,
      components.home,
      components.carModel,
      components.location,
      components.reservation,
      components.selectCar,
      components.reserveInfo,
      components.sucessful,
      components.seedData,
    ],
    redirectionRoutes: "/reservation",
  },
  guest: {
    allowedRoutes: [
      components.register,
      components.login,
      components.home,
      // components.carModel,
      // components.location,
      // components.reservation,
      // components.selectCar,
      // components.reserveInfo,
    ],
    redirectionRoutes: "/user/login",
  },
};
