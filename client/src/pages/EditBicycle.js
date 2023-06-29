import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { addBicycle, editBicycle, getAllBicycles } from "../redux/actions/bicycleActions";
function EditBicycle({ match }) {
  const { bicycles } = useSelector((state) => state.bicyclesReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [bicycle, setbicycle] = useState();
  const [totalbicycles, settotalbicycles] = useState([]);
  useEffect(() => {
    if (bicycles.length == 0) {
      dispatch(getAllBicycles());
    } else {
      settotalbicycles(bicycles);
      setbicycle(bicycles.find((o) => o._id == match.params.bicycleid));
      console.log(bicycle);
    }
  }, [bicycles]);

  function onFinish(values) {
    values._id = bicycle._id;

    dispatch(editBicycle(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {totalbicycles.length > 0 && (
            <Form
              initialValues={bicycle}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit bicycle</h3>

              <hr />
              <Form.Item
                name="name"
                label="Bicycle name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fuelType"
                label="Fuel Type"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit bicycle</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default EditBicycle;