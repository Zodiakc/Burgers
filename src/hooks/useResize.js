import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLimit } from "../redux/slices/currentPageSlice";
export function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const [limitPage, setLimitPage] = useState(Math.trunc(width / 255) + 1);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    width,
    limitPage,
  };
}
