import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewSlider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NewSlider() {
   
  // const[product,setProduct] =useState({}),
  // const[page,setPage] = useState()
  
  // useEffect(()=>{
  //   const fetchingData =async()=>{
  //     const result =await axios.get( 'https://fakestoreapi.com/products');
  //     setProduct(result.data);
  //     console.log(result)
  //   }
  //   fetchingData();
  // },
  // []);
  const[title,setTitle] = useState()
  const[description,setDescription] = useState()
  const[price,setPrice] = useState()
  const[image,setImage] = useState()
  const[page,setPage] =useState(1)


 useEffect(()=>{

  async function handle(){
    const response =await axios.get('https://fakestoreapi.com/products/'+page).then((response)=>{
    setTitle(response.data.title);
    setDescription(response.data.descriprtion);
    setPrice(response.data.price);
    setImage(response.data.image);
    setPage(response.data.id);
  
    console.log("api ka response:",response.data)
    // console.log(response.data.title);
    // console.log(response.data.description);
    // console.log(response.data.price);
    // console.log(response.data.image);
  })
   }
handle();

 },[page])

  return (
    <>
      <div className="slider">
        <div className="left">
          <img src={image} alt="product name" />
        </div>
        <div className="right">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
          <p>this is the page-{page}</p>
        </div>
      </div>
      <div className="navigation">
        <button>
          <ArrowBackIosIcon onClick={()=>setPage(page-1)}/>
        </button>
        <button>
          <ArrowForwardIosIcon onClick={()=>setPage(page+1)}/>
        </button>
      </div>
    </>
  );
}

export default NewSlider;
