import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Descriptions, Steps, Button ,Divider } from "antd";
import "antd/dist/antd.css";
import "./reserveInfo.css";
// import Navbar from "../navbar";
import Navbar from "../pages/navbar";
const { Step } = Steps;
class ReserveInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      loading: true,
      carSelected: [],
    };
  }
  async componentDidMount() {
    const pickup_locationName = localStorage.getItem("pickup_locationName");
    const pickup_Date = localStorage.getItem("pickup_Date");
    const pickup_Time = localStorage.getItem("pickup_Time");
    const return_locationName = localStorage.getItem("return_locationName");
    const return_Date = localStorage.getItem("return_Date");
    const return_Time = localStorage.getItem("return_Time");
    const carId = localStorage.getItem("carId");

    //get items from mysql>>
    const httpResponse = await axios.get(`http://localhost:8000/car/${carId}`);
    console.log("car selected:", httpResponse.data);
    
    // re format duration date time
    let pickup_DateTime = moment(pickup_Date + ' ' + pickup_Time, 'DD/MM/YYYY HH:mm') //12-10-2020T11:13
    let return_DateTime = moment(return_Date + ' ' + return_Time,'DD/MM/YYYY HH:mm') //12-10-2020T11:13
    let durationDiff = moment.duration(return_DateTime.diff(pickup_DateTime));
    // console.log('duration', durationDiff);
    let duration = durationDiff.asDays(); // using in 
    console.log('duration',duration);
    
    // calcution estimatedExtra 
    let extra = 0 // 7% not sure
    let total = (duration * httpResponse.data.carPrice) + extra
    let vat = (total*7)/100
    let estimatedTotal = total + vat
    console.log('vat',vat);
 
    this.setState({
      List: httpResponse.data,
      pickupLocationId: pickup_locationName,
      returnLocationId: return_locationName,
      pickupDate: pickup_Date,
      pickupTime: pickup_Time,
      returnDate: return_Date,
      returnTime: return_Time,
      pickupDateTime: pickup_DateTime,
      returnDateTime: return_DateTime,
      carSelected: httpResponse.data,
      baseRate: httpResponse.data.carPrice.toFixed(2),
      extra: extra.toFixed(2),
      vat: vat.toFixed(2),
      estimatedTotal: estimatedTotal.toFixed(2),
      duration: duration,
      days: durationDiff._data.days,
      hours: durationDiff._data.hours,
      minutes: durationDiff._data.minutes
    });
    console.log('carSelected', this.state.carSelected);
  }

  handleSubmit = async(event) => {
    event.preventDefault(); // not reload when onclick submit.
    // check user autherizer if not let user register first >> change to... user nedd to login before reserved.
    // if user passes autherizer put item to reservation and go to pay bill.

      const body = {
        reserveStatus: "passed",
        reserveTotalPrice: this.state.estimatedTotal,
        // userId: this.state.userId,
        carId: this.state.carSelected.carId,
        pickupLocationId: this.state.pickupLocationId,
        returnLocationId: this.state.returnLocationId,
        pickupDateTime: this.state.pickupDateTime,
        returnDateTime: this.state.returnDateTime,
      };
      // console.log("payload", payload);
      // const newReserve = await axios.post(
      //   `http://localhost:8000/Reservation`,
      //   payload
      // );
      // console.log("reserved create:", newReserve);

    await axios
      .post(`http://localhost:8000/Reservation`, body)
      .then((result) => {
        console.log("result from sql:", result);
        this.props.history.push("/reservation/sucessful");
      });
  };

  render() {
    
    return (
      <div>
        <Navbar />
      <div className="reserveInfo">
        <Steps size="small" progressDot current={2}>
          <Step title="RESERVE A CAR" />
          <Step title="SELECT A CAR" />
          <Step title="YOUR INFOMATION" />
        </Steps>
        <div id="reservationInfo">
          <Descriptions size="small" column={2}>
            <div>
              Pick-up Location: {this.state.pickup_locationName}
              <br />
              Pick-up Date: {this.state.pickup_Date}
              <br />
              Pick-up Time: {this.state.pickup_Time}
              <br />
            </div>
            <div className="divisionLine">
              Return Location: {this.state.return_locationName}
              <br />
              Return Date: {this.state.return_Date}
              <br />
              Return Time: {this.state.return_Time}
              <br />
            </div>
          </Descriptions>
        </div>
       
        <div className="divisionLineHor">
          <p><br /><br /><b>{this.state.carSelected.carName}</b><br />{this.state.carSelected.carBrandName}  </p>
          <div className="img">
            <img
            width={200}
            alt="carSamplePic"
            src="https://www.autoduqaan.com/images/no-image-big.jpg"
            />
          </div>
        </div>
       
        <div className="eachElement">
          <Divider orientation="center" >
            Reservation Info
          </Divider>
          <Descriptions size="small" column={1}  layout="horizontal">
            <Descriptions.Item label="Rental Duration">{`${this.state.days} Day(s) ${this.state.hours} Hour(s) ${this.state.minutes} Minute(s)`}</Descriptions.Item>
            <Descriptions.Item label="Base Rate">฿{this.state.baseRate}</Descriptions.Item>
            <Descriptions.Item label="Extra">฿{this.state.extra}</Descriptions.Item>
            <Descriptions.Item label="VAT">฿{this.state.vat}</Descriptions.Item>
            <Descriptions.Item label="Estimated Total">฿{this.state.estimatedTotal}</Descriptions.Item>
          </Descriptions>
          <br />
          <div>
            <Button onClick={this.handleSubmit}>SUMMIT</Button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(ReserveInfo);
