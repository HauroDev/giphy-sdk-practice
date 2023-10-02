import Results from './components/Results';
import './App.css';
import SearchProvider from './components/SearchProvider';
import { SearchBar } from '@giphy/react-components';

function App() {
  return (
    <>
      <h1>Album Gif</h1>
      <SearchProvider>
        <SearchBar />
        <Results />
      </SearchProvider>
    </>
  );
}

export default App;
