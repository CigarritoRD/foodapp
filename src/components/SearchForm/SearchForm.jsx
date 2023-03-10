import React from "react";

const SearchForm = ({ onChangeHandler, value }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} action='' className='p-4'>
      <input
        onChange={onChangeHandler}
        type='text'
        name='searchbar'
        placeholder='Buscar'
        id=''
        className='border shadow-md w-full py-4 rounded-lg px-4 outline-none'
        value={value}
      />
    </form>
  );
};

export default SearchForm;
