import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./use-product-context";

export default () => {
  const { pageComp } = useProductContext();
  return pageComp;
};
