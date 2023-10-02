import { Grid } from '@giphy/react-components';
import useSearch from './hooks/useSearch';

const Results = () => {
  const { fetchGifs, searchKey } = useSearch();
  return (
    <>
      <Grid
        key={searchKey}
        columns={3}
        width={800}
        fetchGifs={fetchGifs}
      />
    </>
  );
};

export default Results;
