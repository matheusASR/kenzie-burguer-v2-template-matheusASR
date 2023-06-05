import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProduct } from '../../../ProductList/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../../../../providers/CartContext';

const CartProductCard = ({ product }: IProduct) => {
  const {setCurrentProductsList, currentProductsList} = useContext(CartContext)

  const removeProductFromCart = (productId: number) => {
    const newCurrentProductsList = currentProductsList.filter(
      (product) => product.id !== productId
    );
    setCurrentProductsList(newCurrentProductsList);
  };

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={() => removeProductFromCart(product.id)}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
