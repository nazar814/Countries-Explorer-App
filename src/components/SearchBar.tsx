// src/components/SearchBar.tsx  
import React from 'react';  

interface SearchBarProps {  
  query: string;  
  setQuery: React.Dispatch<React.SetStateAction<string>>;  
  setSortId: React.Dispatch<React.SetStateAction<number>>;  
}  

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, setSortId }) => {  
  return (  
    <>
        <input  
        type="text"  
        placeholder="Search for a country..."  
        value={query}  
        onChange={(e) => setQuery(e.target.value)}  
        className='border mb-[20px] w-full p-[10px]'
        />
        <div  className='flex justify-center items-center mb-[20px]'>
            <p className='mr-2'>Sort By : </p>
        <select onChange={(e: any) => setSortId(e.target.value)} className='border flex-1 p-[10px] w-full'>
            <option value={0}>Default</option>
            <option value={1}>Name</option>
            <option value={2}>Region</option>
        </select>
        </div>
    </>  
  );  
};  

export default SearchBar;