import { Router } from "express";
import getAllData from "../controller/getAllData.js"
import submitData from "../controller/submitData.js";
import deleteData from "../controller/deleteData.js";
import pintostart from "../controller/pintostart.js";
import unPin from "../controller/unPin.js";
import updateNote from "../controller/updateNote.js";

const router=Router()

router.get('/all',getAllData)
router.post('/submit',submitData)
router.delete('/delete/:id',deleteData)
router.put('/pinToStart/:id',pintostart)
router.put('/unpin/:id',unPin)
router.put('/update/:id',updateNote)


export default router