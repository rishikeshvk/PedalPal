import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllRentals } from "../redux/actions/rentalActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";
function UserRentals() {
  const dispatch = useDispatch();
  const { rentals } = useSelector((state) => state.rentalsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllRentals());
  }, []);

  return (
    <DefaultLayout>
        {loading && (<Spinner />)}
      <h3 className="text-center mt-2">My Rentals</h3>
    
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {rentals.filter(o=>o.user==user._id).map((rental) => {
             return <Row gutter={16} className="bs1 mt-3 text-left">
                <Col lg={6} sm={24}>
                    <p><b>{rental.bicycle.name}</b></p>
                    <p>Total hours : <b>{rental.totalHours}</b></p>
                    <p>Rent per hour : <b>{rental.bicycle.rentPerHour}</b></p>
                    <p>Total amount : <b>{rental.totalAmount}</b></p>
                </Col>

                <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{rental.transactionId}</b></p>
                <p>From: <b>{rental.bookedTimeSlots.from}</b></p>
                <p>To: <b>{rental.bookedTimeSlots.to}</b></p>
                <p>Date of rental: <b>{moment(rental.createdAt).format('MMM DD yyyy')}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                    <img style={{borderRadius:5}} src={rental.bicycle.image}  height="140" className="p-2"/>
                </Col>
              </Row>;
            })}
          
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserRentals;