import { Card } from 'antd';
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
            {list?.slice(0,10)?.map((data) => (
                <Card className='card'
                    onClick={() => onOpenMeal(data.idMeal)}
                    key={data.idMeal}
                    cover={<img src={data.strMealThumb} alt={data.strMealThumb} className='listed-images' />}
                    hoverable>
                    <h1>{data.strMeal}</h1>
                    <p>{data.strCategory} Dish</p>
                    <p className='area'>Area: {data.strArea}</p>
                </Card>
            ))}

        </div>
    )
}

export default MealsCardList