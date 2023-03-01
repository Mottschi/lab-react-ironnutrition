import { Divider, Input } from 'antd';

// Iteration 5
function Search({handleSearch, searchTerm}) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
