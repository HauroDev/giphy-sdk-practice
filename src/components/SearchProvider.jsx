/* eslint-disable react/prop-types */
import { SearchContextManager } from '@giphy/react-components';

const SearchProvider = ({ children }) => (
  <SearchContextManager apiKey='y6PWjWZjAjdE88vNINacLa85DBuhZvJW'>
    {children}
  </SearchContextManager>
);

export default SearchProvider;
