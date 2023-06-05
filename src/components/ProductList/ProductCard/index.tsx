import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IGetProducts } from '../../../pages/ShopPage';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';

export interface IProduct {
  product: IGetProducts;
}

const ProductCard = ({ product }: IProduct) => {
  const {currentProductsList, setCurrentProductsList, productsList} = useContext(CartContext)

  const handleClick = (productId: number) => {
    if (!currentProductsList.some((product) => product.id === productId)) {
      const newCurrentProductsList = productsList.find(
        (product) => product.id === productId
      );
      setCurrentProductsList([...currentProductsList, newCurrentProductsList]);
      toast.success("Item adicionado ao carrinho de compras!")
    } else {
      toast.warn("O item já foi adicionado ao carrinho de compras");
    }
  };

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {product.category}
        </StyledParagraph>
        <StyledParagraph className='price'>{product.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => handleClick(product.id)} >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
