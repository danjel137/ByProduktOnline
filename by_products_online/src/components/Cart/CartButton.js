import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";

const CartButton = (props) => {

    const dispatch=useDispatch();
    const cartQuantity=useSelector(state=>state.cart.totalQuantity)
    const toggleCartHandle=(event)=>{
        // event.preventDefault()
        dispatch(uiActions.toggle())
    }
  return (
    <button className={classes.button} onClick={toggleCartHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
