import notekeeper from "../model/notesmodel.js"

async function deleteData(req,res){
    const id=req.params.id
    console.log("id=====",id)
    const deletedData= await notekeeper.findByIdAndDelete(id)
    console.log("deleted data is here====",deletedData)
    return res.status(200).json(deletedData)
}

export default deleteData