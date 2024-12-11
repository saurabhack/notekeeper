import notekeeper from "../model/notesmodel.js"

async function unPin(req,res){
    const id=req.params.id
    const data=await notekeeper.findByIdAndUpdate(id,{pin:false})
    return res.status(200).json(data)
}
export default unPin