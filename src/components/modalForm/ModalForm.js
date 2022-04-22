import { Button, Form, Input, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveForm } from '../../store/actions/formAction';
import './ModalForm.css';

const ModalForm = ({ isShippingModalOpen, setIsShippingModalOpen, itemId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCancel = () => {
        setIsShippingModalOpen(false)
    }
    const onFinish = (values) => {
        if (values) {
            dispatch(saveForm(values))
            navigate(`/meal/orderDetails/${itemId}`)
            setIsShippingModalOpen(false)
        }
    }
    return (
        <Modal className='shipping-modal' title="Shipping Details" visible={isShippingModalOpen} footer={false} onCancel={handleCancel}>
            <Form name="basic" onFinish={onFinish} labelCol={{
                span: 8,
            }}
                wrapperCol={{
                    span: 16,
                }}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                >
                    <Input type="email" placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                    name="mobile"
                    label="Mobile Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Mobi!e Number',
                        },
                    ]}
                >
                    <Input placeholder="Enter your Mobile Number" />
                </Form.Item>
                <Form.Item
                    name="shippingAddress"
                    label="Shipping Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the shipping Address',
                        },
                    ]}
                >
                    <TextArea rows={4} placeholder="Enter your valid Address"/>
                </Form.Item>
                <Button htmlType='submit' className='purchase-button' type='danger'>Purchase</Button>
            </Form>
        </Modal>
    )
}

export default ModalForm