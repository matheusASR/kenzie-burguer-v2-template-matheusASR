import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { IGetProducts } from '../../pages/ShopPage';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';

interface IProductsList {
  productsList: IGetProducts[];
}

const ProductList = ({ productsList }: IProductsList) => {
  const { filteredProductsList } = useContext(CartContext);

  return (
    <StyledProductList>
      {filteredProductsList.length > 0
        ? filteredProductsList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        : productsList &&
          productsList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
    </StyledProductList>
  );
};

export default ProductList;
