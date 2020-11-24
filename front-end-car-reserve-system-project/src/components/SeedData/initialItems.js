import React from "react";
import axios from "axios";
import carSeeds from "./initialCarItems.json";
import locationSeeds from "./initLocationItems.json";
export default class InitialItems extends React.Component {
  state = {};

  async componentDidMount() {
    for (const carItem of carSeeds) {
      console.log("carItem", carItem);
      const checkItem = await axios.get(`/Car/${carItem.carId}`);

      console.log("checkItem", checkItem);

      if (!checkItem.data.carId) {
        const httpResponse = await axios.post(
          `http://localhost:8000/Car`,
          carItem
        );
        console.log("put seed data to car table mysql:", httpResponse.data);
      }
    }

    for (const locationItem of locationSeeds) {
      // console.log("locationItem", locationItem);
      const checkItem = await axios.get(`/Location/${locationItem.locationId}`);

      console.log("checkItem", checkItem);

      if (!checkItem.data.locationId) {
        const httpResponse = await axios.post(
          `http://localhost:8000/Location`,
          locationItem
        );
        console.log(
          "put seed data to location table mysql:",
          httpResponse.data
        );
      }
    }
  }

  render() {
    return <div>seeding...</div>;
  }
}
