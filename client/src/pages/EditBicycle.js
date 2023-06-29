import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { editBicycle, getAllBicycles } from "../redux/actions/bicycleActions";
import { useParams } from "react-router-dom";

function EditBicycle({ match }) {
  const { bicycles } = useSelector((state) => state.bicyclesReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [bicycle, setbicycle] = useState();
  const [totalbicycles, settotalbicycles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (bicycles.length === 0) {
      dispatch(getAllBicycles());
    } else {
      settotalbicycles(bicycles);
      setbicycle(bicycles.find((o) => o._id === id));
      console.log(bicycle);
    }
  }, [bicycles, bicycle, dispatch, id]);

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
                name="gear"
                label="Gear"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="type"
                label="Type"
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