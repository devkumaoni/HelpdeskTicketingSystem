import React from "react";
import Layout from "../components/Layout";
import { Col, Form, Input, message, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";

const ApplyEngineer = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-engineer",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.success);
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went Wrong");
    }
  };
  return (
    <Layout>
      <h1 className="text-center">Apply Engineer</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h6 className="">Personal Details</h6>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="first name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="last name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="email" />
            </Form.Item>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyEngineer;
