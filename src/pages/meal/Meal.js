import { ShoppingCartOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Layout, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModalForm from '../../components/modalForm/ModalForm';
import { getMeal } from '../../store/actions/mealAction';
import './Meal.css';

const { Content } = Layout;

const Meal = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const mealData = useSelector(state => state.mealReducer.meal[0])
    const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        dispatch(getMeal(params?.id))
        setLoading(false)
    }, [dispatch, params])
    const onCheckOut = () => {
        setIsShippingModalOpen(true)
    }
    return (
        <Layout className='meal-page-layout'>
            {
                loading
                    ? <Spin size="large" className='spinner' />
                    : (
                        <Content className='content'>
                            <h1 className='title'>{mealData?.strMeal}</h1>
                            <ModalForm itemId={params?.id} isShippingModalOpen={isShippingModalOpen} setIsShippingModalOpen={setIsShippingModalOpen} />
                            <Row>
                                <Col lg={12} sm={12} md={12}>
                                    <img src={mealData?.strMealThumb} alt={mealData?.strMealThumb} className='meal-images' />
                                </Col>
                                <Col lg={12} sm={12} md={12} className='rightside'>
                                    <Button className='cart-button' onClick={() => onCheckOut()} type="danger"><ShoppingCartOutlined />Check Out</Button>
                                    <h1>{mealData?.strArea} Dish</h1>
                                    <h3 className='meal-category'>{mealData?.strCategory}</h3>
                                    <p className='meal-instructions'>{mealData?.strInstructions}</p>

                                    <Card className='card'>
                                        <h2 >Ingredients:</h2>
                                        <Divider className='divider' />
                                        <Row className='ingredients'>
                                            <Col md={12} sm={12}>
                                                <p>{mealData?.strIngredient1 && <SwapRightOutlined />}{mealData?.strIngredient1}{mealData?.strIngredient1 && ':'} {mealData?.strMeasure1}</p>
                                                <p>{mealData?.strIngredient2 && <SwapRightOutlined />}{mealData?.strIngredient2}{mealData?.strIngredient2 && ':'} {mealData?.strMeasure2}</p>
                                                <p>{mealData?.strIngredient3 && <SwapRightOutlined />}{mealData?.strIngredient3}{mealData?.strIngredient3 && ':'} {mealData?.strMeasure3}</p>
                                                <p>{mealData?.strIngredient4 && <SwapRightOutlined />}{mealData?.strIngredient4}{mealData?.strIngredient4 && ':'} {mealData?.strMeasure4}</p>
                                                <p>{mealData?.strIngredient5 && <SwapRightOutlined />}{mealData?.strIngredient5}{mealData?.strIngredient5 && ':'} {mealData?.strMeasure5}</p>
                                                <p>{mealData?.strIngredient6 && <SwapRightOutlined />}{mealData?.strIngredient6}{mealData?.strIngredient6 && ':'} {mealData?.strMeasure6}</p>
                                                <p>{mealData?.strIngredient7 && <SwapRightOutlined />}{mealData?.strIngredient7}{mealData?.strIngredient7 && ':'} {mealData?.strMeasure7}</p>
                                                <p>{mealData?.strIngredient8 && <SwapRightOutlined />}{mealData?.strIngredient8}{mealData?.strIngredient8 && ':'} {mealData?.strMeasure8}</p>
                                                <p>{mealData?.strIngredient9 && <SwapRightOutlined />}{mealData?.strIngredient9}{mealData?.strIngredient9 && ':'} {mealData?.strMeasure9}</p>

                                            </Col>
                                            <Col md={12} sm={12}>
                                                <p>{mealData?.strIngredient10 && <SwapRightOutlined />}{mealData?.strIngredient10}{mealData?.strIngredient10 && ':'} {mealData?.strMeasure10}</p>
                                                <p>{mealData?.strIngredient11 && <SwapRightOutlined />}{mealData?.strIngredient11}{mealData?.strIngredient11 && ':'} {mealData?.strMeasure11}</p>
                                                <p>{mealData?.strIngredient12 && <SwapRightOutlined />}{mealData?.strIngredient12}{mealData?.strIngredient12 && ':'} {mealData?.strMeasure12}</p>
                                                <p>{mealData?.strIngredient13 && <SwapRightOutlined />}{mealData?.strIngredient13}{mealData?.strIngredient13 && ':'} {mealData?.strMeasure13}</p>
                                                <p>{mealData?.strIngredient14 && <SwapRightOutlined />}{mealData?.strIngredient14}{mealData?.strIngredient14 && ':'} {mealData?.strMeasure14}</p>
                                                <p>{mealData?.strIngredient15 && <SwapRightOutlined />}{mealData?.strIngredient15}{mealData?.strIngredient15 && ':'} {mealData?.strMeasure15}</p>
                                                <p>{mealData?.strIngredient16 && <SwapRightOutlined />}{mealData?.strIngredient16}{mealData?.strIngredient16 && ':'} {mealData?.strMeasure16}</p>
                                                <p>{mealData?.strIngredient17 && <SwapRightOutlined />}{mealData?.strIngredient17}{mealData?.strIngredient17 && ':'} {mealData?.strMeasure17}</p>
                                                <p>{mealData?.strIngredient18 && <SwapRightOutlined />}{mealData?.strIngredient18}{mealData?.strIngredient18 && ':'} {mealData?.strMeasure18}</p>
                                            </Col>
                                        </Row>
                                    </Card>


                                </Col>
                            </Row>
                            <p className='source'>source: <span><a target="_blank" rel="noopener noreferrer" href={mealData?.strSource}>{mealData?.strSource}</a></span></p>
                        </Content>
                    )
            }

        </Layout>
    )
}

export default Meal;