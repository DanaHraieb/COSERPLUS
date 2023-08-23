import React from 'react'
import { useState , useEffect, useRef } from 'react'
import axios from "axios"
import './Dashboard.css'
function Dashboard() {
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");


  //functions
  const getItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/file");
      
      setItems(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("desc", desc);
      formData.append("file", fileInputRef.current.files[0]);
      const res = await axios.post(
        "http://localhost:5000/file/add",
        formData
      );
      console.log("res",res);
    window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/file/download/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file1";
    //   link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      console.log(error);
    }
  };
  const removeFile = async(id) =>{
   try{
    const res = await axios.delete(`http://localhost:5000/file/${id}`);
    alert(res.data)
    window.location.reload();
     }catch (error) {
    console.log(error);
  }
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div style={{height: "100vh" , paddingTop: "200px"}}>
    <div className="addItems">
      <input
        type="text"
        placeholder="add name"
        onChange={(e) => setName(e.target.value)}
      />
       <input
        type="text"
        placeholder="add category"
        onChange={(e) => setCategory(e.target.value)}
      />
       <textarea
        type="text"
        placeholder="add Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <input type="file" ref={fileInputRef} />
      <button onClick={addItem}>Add</button>
    </div>
    <div className="row" style={{padding: "0px" , margin:"0px"}}>
      {/* {items &&
        items.map((item) => (
          <div className="item" key={item._id}>
            <h3>{item.name}</h3>
            <button onClick={() => downloadFile(item._id)}>
              Download File
            </button>
          </div>
        ))} */}
        {
          items&& items.map((item)=>(
<div className="col-lg-4" style={{textAlign:"center" , alignItems:"center" , margin:"0px"}} key={item._id}>
        <div class="card">
        <h3>{item.name}</h3>
  <div class="card__content">
  <p class="card__description">{item.description}</p>
  </div>
</div>
<button  onClick={() => downloadFile(item._id)} >
              Download File
            </button>
            <button  onClick={() => removeFile(item._id)} >
              Remove File
            </button>
    </div>
          ))
        }
        
    </div>
  </div>
  )
}

export default Dashboard