import React from "react";

const SearchForm = ({ onChangeHandler }) => {
  return (
    <form action='' className='p-4'>
      <input
        onChange={onChangeHandler}
        type='text'
        name='searchbar'
        placeholder='Buscar'
        id=''
        className='border shadow-md w-full py-4 rounded-lg px-4 outline-none'
      />
    </form>
  );
};

export default SearchForm;
