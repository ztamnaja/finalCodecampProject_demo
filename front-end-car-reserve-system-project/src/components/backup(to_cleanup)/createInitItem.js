import React, { Component } from 'react'

import axios from "axios";

class CreateInitItem extends Component {
  
  createItems = async () => {
    
    const iniItems = [
      {
        carId: 'car1',
        carName: 'carName1',
        carBrandName: 'carBrandName1',
        carPrice: 1234.56,
        carInfoDoor: 4,
        carInfoSeat: 5,
        carInfoBags: 3,
        carInfoGear: 'auto',
        carInfoAC: 'AC',
        carInfoRadio: 'yes',
      },
      {
        carId: 'car2',
        carName: 'carName2',
        carBrandName: 'carBrandName2',
        carPrice: 1234.56,
        carInfoDoor: 4,
        carInfoSeat: 5,
        carInfoBags: 3,
        carInfoGear: 'auto',
        carInfoAC: 'AC',
        carInfoRadio: 'yes',
      }
    ]
    for (const item of iniItems) {
  
      const payload = {
        carId: item.carId,
        carName: item.carName,
        carBrandName: item.carBrandName,
        carPrice: item.carPrice,
        carInfoDoor: item.carInfoDoor,
        carInfoSeat: item.carInfoSeat,
        carInfoBags: item.carInfoBags,
        carInfoGear: item.carInfoGear,
        carInfoAC: item.carInfoAC,
        carInfoRadio: item.carInfoRadio,
      }
      // console.log('payload', payload);
      await axios.post(`http://localhost:8000/Car`, payload)
  
    }
  }

  render() {
    return (
      <div>
        {this.createItems.bind(this)}

      </div>
    )
  }
}

export default CreateInitItem;