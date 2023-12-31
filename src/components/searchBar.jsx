const SearchBar = ({ setSearchQuery, searchQuery }) => {
  return (
    <div className="search_wrapper">
      <input
        type="text"
        className="search_input"
        placeholder="Search crops..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          style={{ marginLeft: "8px", padding: "8px" }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
