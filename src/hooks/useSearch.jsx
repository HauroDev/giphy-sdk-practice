import { SearchContext } from '@giphy/react-components';
import { useContext } from 'react';

const useSearch = () => useContext(SearchContext);

export default useSearch;
