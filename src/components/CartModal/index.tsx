import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledTitle } from '../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';

const CartModal = () => {
  const { handleCloseDialog, isDialogOpen } =
    useContext(CartContext);

  return (
    <>
      {isDialogOpen && (
        <StyledCartModalBox>
          <dialog open={isDialogOpen} onClose={() => handleCloseDialog()}>
            <header>
              <StyledTitle tag='h2' $fontSize='three'>
                Carrinho de compras
              </StyledTitle>
              <button
                type='button'
                aria-label='Fechar'
                onClick={() => {
                  handleCloseDialog();
                }}
              >
                <MdClose size={21} />
              </button>
            </header>
            <div className='cartBox'>
              <CartProductList />
            </div>
          </dialog>
        </StyledCartModalBox>
      )}
    </>
  );
};

export default CartModal;
