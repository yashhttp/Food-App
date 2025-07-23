import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)
const Storecontextprovider = (props)=>{

    const [cartItems, setcartItems] = useState({})

    const addtocart = (itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev, [itemId]:1}))
        }else{
            setcartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
        }
    }

    const removefromcart = (itemId)=>{
        setcartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))

    }
    const getTotalCartAmount = ()=>{
        let totolAmount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){

                let itemInfo = food_list.find((product)=>product._id === item)
                totolAmount += itemInfo.price * cartItems[item]

            }
            
        }
        return totolAmount

    }

    const contextValue={
        food_list,
        cartItems,
        addtocart,
        removefromcart, 
        setcartItems,
        getTotalCartAmount
       }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default Storecontextprovider;