import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContextProvider';
import iconDelete from '../../assets/icons/icon-delete.svg';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const count = sessionStorage.getItem('count');

  return (
    <section className='cart-card'>
      <div className='cart-title-container'>
        <h2 className='cart-title'>Cart</h2>
      </div>
      {cart.length > 0 && count > 0 ? <div className='cart-items-list'>
        {cart?.map((item) => {
          const { id, imageSrc, title } = item;
          return (
            <div key={id} className='cart-item-container'>
              <div className='cart-item'>
                <img
                  src={imageSrc}
                  alt={title}
                  className='cart-item-img'
                />
                <div className='cart-item-text'>
                  <p>{title}</p>
                  <div className='cart-item-total'>
                    <p>$125 &times; {sessionStorage.getItem('count')} <b>${sessionStorage.getItem('count') * 125}.00</b></p>
                  </div>
                </div>
              </div>
              <div className='cart-item-icon-container'>
                <img src={iconDelete} title='Remove from cart' className='cart-item-icon' onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART', id
                  });
                  sessionStorage.setItem('count', 0);
                }} />
              </div>
            </div>
          );
        })}
        <button className='cart-btn'>Checkout</button>
      </div> : <div className='cart-items-list'><p className='cart-text'>Your cart is empty.</p></div>}
    </section>
  );
};

export default Cart;