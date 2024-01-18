import React, { useContext, useEffect, useState } from "react";
import { newContext } from "../../Rout";
import images from "./items.png";
import { useNavigate } from "react-router-dom";



function Addproduct(){
    const { state, setState , adminlogin} = useContext(newContext);
    
    const navigate = useNavigate()

    const [selectedImage, setSelectedImage] = useState("");
    const [typeofItem, setTypeofItem] = useState('Food');
    const [typeofctg, setTypeofctg] = useState("Dog");
    const [itemName, setItemName] = useState("");
    const [itemId, setItemId] = useState(0);
    const[itemDetail, setItemDetail] = useState("");
    const [itemAbout, setItemAbout] = useState("");
    const [itemPrice, setPrice] = useState(0);
    


    useEffect(()=>{
        if(state && state.length > 0) {
            let id = state[state.length - 1].id;
            setItemId(id+1); 
        }
        else {
            setItemId(1);
        }
    },[state]);
    function AddItem(){
        if(
            itemId !== null &&
            selectedImage != null &&
            typeofItem !== null &&
            typeofctg !== null  &&
            itemName !== "" &&
            itemDetail !== "" &&
            itemAbout  !== "" &&
            itemPrice !== null
        ){


            let dummyState = [
                ...state,
                {
                    id: itemId,
                    catagory: typeofctg,
                    type: typeofItem,
                    img: selectedImage,
                    name: itemName,
                    detail: itemDetail,
                    about: itemAbout,
                    price: parseInt(itemPrice),
                    qty: 1,
                }
            ];
            setState(dummyState);
            alert("item added ");
            navigate("/Product")
        } else {
            alert("fill the blanks");
        }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };



    return(
        <div style={{ marginTop: "70px",backgroundColor :"lightblue",paddingBottom:"20px",paddingTop:"20px",minHeight:"100vh"}}>
      {adminlogin?<><div className="container" style={{paddingTop:"10px"}}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 d-flex" style={{flexDirection:"column",alignItems:"center"}}>
            <div
              className="d-flex"
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                justifyContent:"center",
                backgroundColor:"white",
                alignItems:"center",
                height:"250px",
                width:"250px",
                border:"2px solid black"
              }}
            >
              <label htmlFor="imageinp"><img
                src={selectedImage || images}
                style={{ borderRadius: "10px", width: "240px" ,border:"1px solid black"}}
                className="img-fluid"
              /></label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="input-file"
                name="uploadimage"
                id="imageinp"
                style={{ textDecoration: "none" ,display:"none"}}
              />
            </div>
            <p>Choose Image</p>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 d-flex"
            style={{
              flexDirection: "column",
              alignItems: "start",
              // backgroundColor: "green",
            }}
          >
            <h5>#id:{itemId}</h5>
            <br />
            <strong>Select Category</strong>
            <span>
              Dog &nbsp;
              <input
                type="radio"
                name="ctg"
                value="Dog"
                onChange={(e) => setTypeofctg(e.target.value)}
              />
              Food &nbsp;
              <input
                type="radio"
                name="ctg"
                value="Cat"
                onChange={(e) => setTypeofctg(e.target.value)}
              />
              Toy &nbsp;
              <input
                type="radio"
                name="ctg"
                value="Toy"
                onChange={(e) => setTypeofctg(e.target.value)}
              />
              Medicine  &nbsp;
              <input
                type="radio"
                name="ctg"
                value="Medicine"
                onChange={(e) => setTypeofctg(e.target.value)}
              />
            </span>
            <strong>Select Type</strong>
            {/* <span>
              <input
                type="radio"
                name="type"
                value="Food"
                onChange={(e) => setTypeofItem(e.target.value)}
              />
              Food &nbsp;
              <input
                type="radio"
                name="type"
                value="care"
                onChange={(e) => setTypeofItem(e.target.value)}
              />
              Care
            </span> */}
            <input
              type="text"
              placeholder="Name of item"
              onChange={(e) => setItemName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Details or Qty"
              onChange={(e) => setItemDetail(e.target.value)}
            />
            <input
              type="text"
              placeholder="description"
              onChange={(e) => setItemAbout(e.target.value)}
            />
            <span>
              <b style={{ fontSize: "20px" }}>₹</b>&nbsp;&nbsp;
              <input
                type="number"
                placeholder="Price"
                min={1}
                onChange={(e) => setPrice(e.target.value)}
              />
            </span>
            <br />
            <button style={{display:"flex", alignSelf:"center",padding:"5px 50px"}} onClick={AddItem}>Add Item</button>
          </div>
        </div>
      </div></>:<h1 style={{color:"red",textAlign:"center"}}>Access Denied</h1>}
    </div>
    );
}
export default Addproduct;