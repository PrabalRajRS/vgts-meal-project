import { Card, Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MealsCard.css';

const MealsCardList = ({ list }) => {
    const navigate = useNavigate()
    const onOpenMeal = (id) => {
        navigate(`/meal/${id}`)
    }
    return (
        <div className="list-cards">
            {list?.map((data) => (
                <Card className='card'
                    onClick={() => onOpenMeal(data.idMeal)}
                    key={data.idMeal}
                    hoverable>
                    <Row>
                        <Col lg={8} sm={8} md={8}>
                            <img src={data.strMealThumb} alt={data.strMealThumb} className='listed-images' />
                        </Col>
                        <Col lg={16} sm={16} md={16} className='card-rightside'>
                            <h1>{data.strMeal}</h1>
                            <p>{data.strCategory} Dish</p>
                            <p>Area: {data.strArea}</p>
                        </Col>
                    </Row>
                </Card>
            ))}

        </div>
    )
}

export default MealsCardList