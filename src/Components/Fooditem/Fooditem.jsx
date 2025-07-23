import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/Storecontext'
const Fooditem = ({id, name, price, description, image}) => {
  // const [itemCount, setitemCount] = useState(0)
  const {cartItems, addtocart, removefromcart} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image' alt="" />
            { !cartItems[id]
                ? <img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white}/>
                : <div className="food-item-counter">
                  <img src={assets.remove_icon_red} onClick={()=>removefromcart(id)} alt="" />
                  <p>{cartItems[id]}</p>
                  <img src={assets.add_icon_green} onClick={()=> addtocart(id)} alt="" />
                </div> 
              }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <div className="food-item-desc">{description}</div>
            <div className="food-item-price">${price}</div>
        </div>
      
    </div>
  )
}

export default Fooditem
