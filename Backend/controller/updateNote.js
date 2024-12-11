import notekeeper from "../model/notesmodel.js"

async function updateNote(req,res){

    const id=req.params.id
    const updatedData={
        title:req.body.newTitle,
        description:req.body.newDesc
    }
    const updation=await notekeeper.findByIdAndUpdate(id,updatedData)

    console.log("updation is here",updation)

    return res.send({updation})
    
}
export default updateNote