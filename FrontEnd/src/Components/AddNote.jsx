import axios from 'axios'
import React, { useEffect } from 'react'
import { useActionState } from 'react'
import { useState } from 'react'
function AddNote() {
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')

    const data={
        title,
        description,
    }

    console.log("data is ===",data)
    async function addData(){
     await axios.post(`http://localhost:3000/notekeepers/submit`,data).then(()=>{
        console.log('successfully updates')
        fetchAllData()
     }).catch(()=>{
        console.log("something went wrong")
     })
    }

    function opening(){
        setOpen(true)
    }
    function closing(){
        setOpen(false)
    }
    const fetchAllData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/notekeepers/all");
          const sortedData = response.data.sort(
            (a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0)
          );
          setData(sortedData);
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error("Failed to fetch tasks.", { position: "top-center" });
        
        }
        
      };
      useEffect(()=>{
        fetchAllData()
      },[])
  return (
    <div className='w-screen flex flex-col justify-center items-center '>
        { !open ? (
            <div className='w-1/2 flex flex-col justify-center items-center bg-slate-800 p-2 rounded-xl bg-opacity-70'>

            <div className='w-full '>
                <input type="text" onClick={opening} placeholder='Title' className='w-full px-2 py-3 outline-none text-white bg-slate-800 bg-opacity-10' />
            </div>
            
            </div>
        ): 

            (<div className='w-1/2 flex flex-col justify-center items-center bg-slate-800 p-2 rounded-xl bg-opacity-70'>

        <div className='w-full '>
            <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)} className='w-full px-2 py-3 outline-none text-white bg-slate-800 bg-opacity-10' />
        </div>
        <div className='w-full '>
            <textarea type="text" placeholder='Note' onChange={(e)=>setDescription(e.target.value)} className='w-full px-3 py-3 outline-none text-white bg-slate-800 bg-opacity-10' />
        </div>
        <div className='flex justify-end w-full gap-5 text-white'>
            <button onClick={addData}>Add</button>
            <button onClick={closing}>Cancel</button>
        </div>
        </div>)}

    </div>
  )
}

export default AddNote
