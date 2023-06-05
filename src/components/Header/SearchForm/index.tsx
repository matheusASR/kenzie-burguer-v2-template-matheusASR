import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';

const SearchForm = () => {
  const {filter, setFilter, filterProductsList} = useContext(CartContext)

  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green' onClick={(event) => {
        event.preventDefault()
        filterProductsList()
      }}>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
