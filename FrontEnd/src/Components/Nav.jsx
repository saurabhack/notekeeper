import React from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";



function Nav() {
  return (
    <div className='w-[100vw] h-[10vh] bg-slate-800 flex '>
        <div className='w-[20%] flex justify-center items-center gap-3'>
            <div>
            <FaRegNoteSticky className='text-white text-3xl'/>
            </div>
            <h1 className='text-white font-medium text-2xl'>NoteKeeper</h1>
            
        </div>
        <div className='flex justify-center items-center w-[50%] gap-3  '>
            <div className='flex justify-center items-center rounded-xl px-4 bg-slate-500 w-1/2'>
            <input type='text' className='w-full rounded-xl p-2 outline-none text-white bg-slate-500' placeholder='search here'></input>
      <div className='text-white text-xl cursor-pointer'><FaSearch/></div>
        </div>
            </div>
      
        <div>

        </div>
    </div>
  )
}

export default Nav
