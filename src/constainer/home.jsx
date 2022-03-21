import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getItems, addToCart} from '../store/inventory/action'
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.inventory.items);
  const cartItems = useSelector((state) => state.inventory.cartItems);

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleAddToCart = (id) => {
    cartItems[id] = cartItems[id] ? cartItems[id] + 1 : 1;
    dispatch(addToCart({...cartItems}));
  }

  const handleRemoveFromCart = (id) => {
    cartItems[id] = cartItems[id] - 1;
    dispatch(addToCart({...cartItems}));
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <div className='row' key={item.id}>
            <img className='img' src={item.image} />
            <div className='col'>
              <div className='title'>{item.title}</div>
              <div className='price'>$ {item.price}</div>
              <div className='desc'>{item.description}</div>
            </div>
            {!!cartItems[item.id] ?
            <div className='btn-con'>
            <button onClick={() => handleRemoveFromCart(item.id)} className='plus-btn'>-</button>
            <div>{cartItems[item.id]}</div>
            <button onClick={() => handleAddToCart(item.id)} className='plus-btn'>+</button>
            </div> :
              <button onClick={() => handleAddToCart(item.id)} className='add-btn'>ADD</button>
            }
          </div>
        )
      })}
    </div>
  )
}

export default Home;