import React from 'react';

const Search = () => {
    return (
        
<form className='lg:hidden block'>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-800">Your Email</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-rose-50 rounded-lg border border-rose-800 focus:ring-rose-800  " placeholder="Search" required=""/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-red-300 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2  ">Search</button>
    </div>
</form>

    );
};

export default Search;



{/* <form class="w-full max-w-sm lg:hidden">
         <div class="md:flex md:items-center mb-6">
   
    <div class="md:w-2/3">
      <input class="bg-rose-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-rose-200" id="inline-full-name" type="text" value="Search"/>
    </div>
   
  </div>
      </form> */}