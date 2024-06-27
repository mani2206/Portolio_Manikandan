import React, { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';

var options = {
    damping: 0.7,
    
}

function SmoothScroll() {
    useEffect(()=>{
        Scrollbar.init(document.body, options);
    },[])
  return null
  
}

export default SmoothScroll