import React, { createContext, useState } from 'react';

interface ICartProviderProps {
  children: React.ReactNode;
}

interface IGetProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  filter: string
  setFilter: any;
  filterProductsList: any;
  productsList: IGetProducts[]
  setProductsList: any;
  isDialogOpen: boolean
  setIsDialogOpen: any
  handleOpenDialog: any
  handleCloseDialog: any
  currentProductsList: IGetProducts[]
  setCurrentProductsList: any
  filteredProductsList: IGetProducts[]
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [filter, setFilter] = useState('');
  const [filteredProductsList, setFilteredProductsList] = useState<IGetProducts[]>([]);
  const [productsList, setProductsList] = useState<IGetProducts[]>([]);
  const [currentProductsList, setCurrentProductsList] = useState<IGetProducts[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  

  const filterProductsList = () => {
    const filteredProducts = productsList.filter(
      (product) =>
        product.name.includes(filter) || product.category.includes(filter)
    );
    setFilteredProductsList(filteredProducts);
  };

  return (
    <CartContext.Provider
      value={{
        setFilter,
        filter,
        filterProductsList,
        productsList,
        setProductsList,
        isDialogOpen,
        setIsDialogOpen,
        handleOpenDialog,
        handleCloseDialog,
        currentProductsList,
        setCurrentProductsList,
        filteredProductsList
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
