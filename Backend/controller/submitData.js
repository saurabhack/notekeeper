import notekeeper from "../model/notesmodel.js";

async function submitData(req,res){
    const allData={
        title:req.body.title,
        description:req.body.description,
        pin:false
    }
    console.log(allData)
    const data=await notekeeper.create(allData)
    return res.json(data)

}

export default submitData