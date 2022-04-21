import { CheckCircleOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Row, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./OrderDetails.css";

const OrderDetails = () => {
    const formValues = useSelector(state => state.formReducer.formValues);
    const mealData = useSelector(state => state.mealReducer.meal[0])
    const navigate = useNavigate()
    useEffect(() => {
        if (!mealData) {
            navigate("/")
        }
    }, [mealData, navigate])
    const { name, shippingAddress, email, mobile } = formValues;
    return (
        <div className='order-details'>
            <h1>Order Information</h1>
            <p className='message'>Your Purchase request for the below Item has been done.!! &nbsp;
                <span><Tag icon={<CheckCircleOutlined />} color="#87d068"> Purchase Success </Tag></span></p>

            <Divider />
            <Row>
                <Col sm={8} md={8} xs={24} >
                    <img className='meal-images' src={mealData?.strMealThumb} alt={mealData?.strMealThumb} />
                </Col>
                <Col sm={16} md={16} xs={24} >

                    <Row className='orders'>
                        <Col sm={12} ms={12}>
                            <Card className="meal-details">
                                <h1>Order Details</h1>
                                <p>Name: {mealData?.strMeal}</p>
                                <p>Category: {mealData?.strCategory}</p>
                                <p>Area: {mealData?.strArea}</p>
                            </Card>
                        </Col>
                        <Col sm={12} ms={12}>
                            <Card className='shipping-details'>
                                <h1>Shipping Details</h1>
                                <p>Name : {name}</p>
                                <p>Email : {email}</p>
                                <p>Mobile Number : {mobile}</p>
                                <p>Address : {shippingAddress}</p>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <p className='thanks-message'>Thank You For the Purchase!! See You Again!!</p>

        </div>
    )
}

export default OrderDetails