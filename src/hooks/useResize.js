import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLimit } from "../redux/slices/currentPageSlice";
export function useWindowDimensions() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [limitPage, setLimitPage] = useState();
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    if (width < 1800 && width > 1400) {
      setLimitPage(6);
     
    } 
    if (width < 1400) {
      setLimitPage(4);
     
    } 
    
    else(setLimit(8))
 
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    width,
    limitPage
  };
}
