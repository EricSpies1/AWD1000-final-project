function SearchBar({ setSearchTerm }) {
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search students..."
          onChange={handleChange}
        />
      </div>
    );
  }
  
  export default SearchBar;
  