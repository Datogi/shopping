import { SearchIcon } from '@heroicons/react/solid'
export default function Search(){
    
    return(
        <div className="flex justify-between">
             <div class="flex relative w-8 h-8 ml-2 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img class="rounded-full" alt="A" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/> </div>
            <div className='flex relative'>
          
            <input
                    id="search"
                    className="block my-1 pl-2 w-full border-2 border-black  bg-white   rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                    placeholder="Search"
                    name="search"
                    />  
                    <SearchIcon onClick={()=>{console.log(document.querySelector('#search').value)}} className="h-7 cursor-pointer mt-1 w-7 right-1 absolute" aria-hidden="true" />
</div> 

<div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg></div>
        </div>
    )
}