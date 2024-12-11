import React, { useEffect, useState } from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { BsPinFill } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

function AllTasks() {
  const [data, setData] = useState([]);
  const [update,setUpdate]=useState(false)
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [id,setId]=useState(null)

  // Fetch all tasks and sort by pin status
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

  // Pin a task
  const pinTask = async (id) => {
    try {
      await axios.put(`http://localhost:3000/notekeepers/pinToStart/${id}`);
      toast.success("Task pinned successfully.", { position: "top-center" });
      fetchAllData(); // Refresh data
    } catch (error) {
      console.error("Error pinning task:", error);
      toast.error("Failed to pin task.", { position: "top-center" });
    }
  };

  // Unpin a task
  const unPinTask = async (id) => {
    try {
      await axios.put(`http://localhost:3000/notekeepers/unpin/${id}`);
      toast.success("Task unpinned successfully.", { position: "top-center" });
      fetchAllData(); // Refresh data
    } catch (error) {
      console.error("Error unpinning task:", error);
      toast.error("Failed to unpin task.", { position: "top-center" });
    }
  };

  

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notekeepers/delete/${id}`);
      toast.success("Task deleted successfully.", { position: "top-center" , className:"bg-green-400"});
      fetchAllData(); // Refresh data
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task.", { position: "top-center" });
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="w-screen">
      <ToastContainer />
      {
        update ? (<div className="absolute ml-[30rem] mt-[5rem] z-0 w-[30%] ">
          <Update title={title} description={description} setUpdate={setUpdate} id={id}/>
        </div>) : ""
      }
      <div className="w-full grid grid-cols-4 gap-4 p-10">
        {data.length > 0 ? (
          data.map((task) => (
            <div

            onClick={()=>{setUpdate(true)
              setTitle(task.title)
              setDescription(task.description)
              setId(task._id)
            }}
              key={task._id}
              className="w-full bg-slate-800 border-2 cursor-pointer group rounded-br-2xl flex flex-col justify-center items-center bg-opacity-50 p-4"
            >
              <div className="flex justify-end w-full p-2 gap-3">
                {/* Delete Icon */}
                <FaTrashAlt
                  onClick={() => deleteTask(task._id)}
                  className="text-xl text-white opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-75"
                />
                {/* Pin/Unpin Icons */}
                {task.pin ? (
                  <BsPinFill
                    onClick={() => unPinTask(task._id)}
                    className="text-2xl text-white opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-75"
                  />
                ) : (
                  <MdOutlinePushPin
                    onClick={() => pinTask(task._id)}
                    className="text-2xl text-white opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-75"
                  />
                )}
              </div>
              {/* Task Title */}
              <h2 className="text-white text-3xl">{task.title}</h2>
              {/* Task Description */}
              <p className="p-3 text-gray-400">{task.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-400">No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default AllTasks;
