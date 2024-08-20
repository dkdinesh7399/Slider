import React from "react";

function Dots({activeIndex,onclick,SliderImage}){
    return(
        <div className="all-dots">
            {
                SliderImage.map((slide,index)=>(
                <span
                    key={index}
                    className={`${activeIndex=== index ?"dot active-dot":"dot"}`}
                    onclick={()=> onclick(index)}
                    ></span>
                ))}
            </div>
    );
                
            }
    
            export default Dots;