import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllBicycles } from "../redux/actions/bicycleActions";
import moment from "moment";
import { rentBicycle } from "../redux/actions/rentalActions";
import StripeCheckout from "react-stripe-checkout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from "react-router-dom";

const { RangePicker } = DatePicker;
function RentalBicycle({ match }) {
  const { bicycles } = useSelector((state) => state.bicyclesReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [bicycle, setBicycle] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [helmet, setHelmet] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (bicycles.length === 0) {
      dispatch(getAllBicycles());
    } else {
      setBicycle(bicycles.find((o) => o._id === id || {}));
    }
  }, [bicycles]);

  useEffect(() => {
    setTotalAmount(totalHours * bicycle.rentPerHour);
    if (helmet) {
      setTotalAmount(totalAmount + 10 * totalHours);
    }
  }, [helmet, totalHours]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      bicycle: bicycle._id,
      totalHours,
      totalAmount,
      helmetRequired: helmet,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(rentBicycle(reqObj));
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <DefaultLayout>
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className='p-3'>
          <img src={bicycle.image} className="bicycleimg2 bs1 w-100" data-aos='flip-left' data-aos-duration='1500'/>
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          {Object.keys(bicycle).length > 0 && (
            <>
              <Divider type="horizontal" dashed>
                Bicycle Info
              </Divider>
              <div style={{ textAlign: "right" }}>
                <p>{bicycle.name}</p>
                <p>{bicycle.rentPerHour} Rent Per hour /-</p>
                <p>Type : {bicycle.type}</p>
                <p>Gear : {bicycle.gear}</p>
              </div>

              <Divider type="horizontal" dashed>
                Select Time Slots
              </Divider>
              <RangePicker
                showTime={{ format: "HH:mm" }}
                format="MMM DD yyyy HH:mm"
                onChange={selectTimeSlots}
              />
              <br />
              <button
                className="btn1 mt-2"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                See Booked Slots
              </button>
              {from && to && (
                <div>
                  <p>
                    Total Hours : <b>{totalHours}</b>
                  </p>
                  <p>
                    Rent Per Hour : <b>{bicycle.rentPerHour}</b>
                  </p>
                  <Checkbox
                    onChange={(e) => {
                      setHelmet(e.target.checked);
                    }}
                  >
                    Helmet Required
                  </Checkbox>

                  <h3>Total Amount : {totalAmount}</h3>

                  <StripeCheckout
                    shippingAddress
                    token={onToken}
                    currency='inr'
                    amount={totalAmount * 100}
                    stripeKey="pk_test_51NOHzjSFdHuJ3OrQke6RekO0r8zLM84uV3v1garayPv7WZ9WSJrckxN5QcFfcRTq8du06TfiZZKq3UWTSw4wmvJ000hV4FV7jb"
                  >
                    <button className="btn1">
                      Book Now
                    </button>
                  </StripeCheckout>
                </div>
              )}
            </>
          )}
        </Col>

        {Object.keys(bicycle).length > 0 && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {bicycle.bookedTimeSlots.map((slot) => (
                <button className="btn1 mt-2">
                  {slot.from} - {slot.to}
                </button>
              ))}
              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>
    </DefaultLayout>
  );
}

export default RentalBicycle;
