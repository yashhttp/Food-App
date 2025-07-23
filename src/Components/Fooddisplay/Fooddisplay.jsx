import React from 'react'
import './fooddisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'

const Fooddisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
              if(category === "All" || category === item.category){
                return <Fooditem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
        </div>
      
    </div>
  )
}

export default Fooddisplay
