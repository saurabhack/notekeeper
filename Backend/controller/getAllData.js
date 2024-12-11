import notekeeper from "../model/notesmodel.js";
async function getAllData(req,res){
    const data=await notekeeper.find()
    console.log("data is===",data)
    return res.json(data)
}

export default getAllData