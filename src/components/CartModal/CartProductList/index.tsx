import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { currentProductsList, setCurrentProductsList } =
    useContext(CartContext);

  return (
    <StyledCartProductList>
      {currentProductsList.length > 0 ? (
        currentProductsList.map((product) => {
          return <CartProductCard key={product.id} product={product} />;
        })
      ) : (
        <div className='emptyBox'>
          <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
            Sua sacola está vazia
          </StyledTitle>
          <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
        </div>
      )}

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R${' '}
          {currentProductsList
            .reduce(
              (previousValue, product) => previousValue + product.price,
              0
            )
            .toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => setCurrentProductsList([])}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
