/* eslint-disable react/prop-types */

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-64 py-2 px-3 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none"
        placeholder="Search for tools..."
      />
    </div>
  );
};

export default SearchBar;
