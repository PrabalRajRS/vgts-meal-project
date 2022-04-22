import { Input, Layout, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MealsCardList from '../../components/mealsCard/MealsCard';
import { filterMeal, getMeals } from '../../store/actions/mealAction';
import './Home.css';

const { Content } = Layout;

const Home = () => {
  const meals = useSelector(state => state.mealReducer.meals);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  const onMealsSearch = (e) => {
    dispatch(filterMeal(e.target.value))
  }

  useEffect(() => {
    setLoading(true)
    dispatch(getMeals());
    setLoading(false)
  }, [dispatch]);

  return (
    <>
      {
        loading
          ? <Spin size="large" className='spinner' />
          : <Layout className='home-layout'>
            <h1 className='title'>Come, Lets Order Something!!</h1>
            <Content className='content'>

              <Input.Search placeholder="search meals" onChange={onMealsSearch} className="searchbar" />
              <MealsCardList list={meals} />
            </Content>
          </Layout>
      }


    </>
  )
}
export default Home;