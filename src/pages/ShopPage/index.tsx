import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { CartContext } from '../../providers/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface IGetProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

const ShopPage = () => {
  const navigate = useNavigate();
  const { productsList, setProductsList } = useContext(CartContext);

  useEffect(() => {
    const authentication = async () => {
      const token = localStorage.getItem('@kenzieHamburgueria:TOKEN');
      if (!token) {
        toast.error('Você não possui credenciais')
        navigate('/');
      } else {
        const response = await api.get<IGetProducts[]>('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductsList(response.data);
      }
    };
    authentication();
  }, []);

  return (
    <StyledShopPage>
      <CartModal />
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList productsList={productsList} />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );

  <Outlet />;
};

export default ShopPage;
