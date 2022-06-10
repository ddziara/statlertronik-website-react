import { useOutletContext } from "react-router-dom";

interface IProductContextType {
  pageComp: JSX.Element;
}

export const useProductContext = () => {
  return useOutletContext<IProductContextType>();
};
