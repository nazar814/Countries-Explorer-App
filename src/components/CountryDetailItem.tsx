// src/components/CountryDetailItem.tsx  
import React from 'react'; 
interface CountryDetailItemProps {  
  title: string;
  value: string;
}  

const CountryDetailitem: React.FC<CountryDetailItemProps> = ({ title, value }) => {  
  return ( 
      <div className='mb-3 text-xl w-full flex justify-center items-center'>
        <p className='flex-1'>{title}</p>  
        <p className='flex-1'>{value}</p>  
      </div>
  );  
};  

export default CountryDetailitem;