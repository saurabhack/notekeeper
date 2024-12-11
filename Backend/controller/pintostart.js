import notekeeper from "../model/notesmodel.js"

async function pintostart(req,res){

    const id=req.params.id
    const data=await notekeeper.findByIdAndUpdate(id,{pin:true})
    return res.status(200).json(data)

}

export default pintostart