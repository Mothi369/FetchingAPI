import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const DisplayApi = ({data}) => {
  const bodyStyle={
    display:"flex",justifyContent:"center"
  }
  
  const imgStyle={
    height:"190px",width:"200px",padding:"14px",
    margin:"10px",backgroundColor: "#97D9E1",borderRadius:"10px ",
    backgroundImage: "linear-gradient(0deg, #97D9E1 0%, #D9AFD9 78%)"
    

  }
  const containerS={
    borderRadius:"10px " ,margin:"20px",height:"50%",width:"50%",
    backgroundColor: "#D9AFD9",
    backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
    

    
    
  }
  const titleStyle={
    backgroundcolor: "#FFFB7D",
backgroundImage: "linear-gradient(45deg, #FFFB7D 0%, #85FFBD 84%)"

  }
  
  
  return (
    <div style={bodyStyle}>
    
        <div style={containerS}>
            <img style={imgStyle} src={data.image} alt="image"></img>
            <h3 className='title' style={titleStyle}> <span style={{color:"#4158D0"}} >Title :</span> {data.title}</h3>
            <h3 className='Pricetag'><span style={{color:"#4158D0"}} >Price :</span> {data.price}</h3>
        </div>
        
    </div>
  )
}

export default DisplayApi