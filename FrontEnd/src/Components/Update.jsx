import axios from "axios"
import { useState } from "react"

function Update({title,description,setUpdate,id}){
    const [newTitle,setNewTitle]=useState(title)
    const [newDesc,setNewDesc]=useState(description)
    console.log("id is here========",id)
    async function updateData(){
        const data={
            newTitle,
            newDesc
        }
        const updatedData=await axios.put(`http://localhost:3000/notekeepers/update/${id}`,data)
        console.log(updatedData)
        setUpdate(false)
        console.log("id ========",id)
    }
    return(
        <>
        <div className="bg-slate-800 text-white bg-opacity-70 border rounded-lg">
            <div>

            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} className="bg-slate-800 outline-none bg-opacity-0 w-full py-2 text-2xl p-2" ></input>
            <textarea type="text" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)} className="bg-slate-800 outline-none bg-opacity-0 w-full py-4 text-2xl p-2 "></textarea>
            <div className="flex justify-end p-2 gap-5 ">
            <button className="" onClick={()=>setUpdate(false)}>cancel</button>
            <button onClick={updateData}>update</button>
            </div>
            
            </div>
            

        </div>
        </>
    )
}

export default Update