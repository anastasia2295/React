import { cartActions } from "./card-slice"
import { uiAction } from "./ul-slice"

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.jsn"
      )
      if(!response.ok) {
        throw new Error("Could not fetch cart data")
      }
      const data = await response.json()
      return data
    }
    try{
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    }catch(error) {
      dispatch(uiAction.showNotification({
        status: "Error",
        title: "Error...",
        message: "Fetching cart data failed"  
      })
      )
    }
  }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data"
          })
        )
        const sendRequest = async () =>{
          const response = await fetch(
            "https://react-http-6b4a6.firebaseio.com/cart.jsn", 
            {
          method: "PUT",
          body: JSON.stringify(cart)
        })
        if(!response.ok) {
          throw new Error("Sending cart data failed")
        }  
        }
        try{
            await sendRequest()
            dispatch(uiAction.showNotification({
            status: "success",
            title: "Success",
            message: "Sent cart data successfully"
          })
          )
        } catch (error){
            dispatch(uiAction.showNotification({
                status: "Error",
                title: "Error...",
                message: "Sending cart data failed"  
              })
              )
        }
        
    }
}