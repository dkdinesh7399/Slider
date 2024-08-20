import React from 'react'

function SliderContent ({activeIndex,SliderImage})  {
  return (
    <section>
        {SliderImage.map((slide,index)=>(
            <div
            key={index}
            className={index=== activeIndex ? "sildes active":"inactive"}
            >
                <img className='Slide-image' src={slide.urls} alt=''/>
                <h2 className='Slide-title'>{slide.title}</h2>
                <h3 className='Slide-text'>{slide.description}</h3>
            </div>
        ))}
    </section>
  );
}

export default SliderContent;