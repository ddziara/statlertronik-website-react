import React from "react";

interface IAppContext {
  isProductMenuShown: boolean;
  openProductsSubmenu: () => void;
  closeProductsSubmenu: () => void;
}

const AppContext = React.createContext<IAppContext>({
  isProductMenuShown: false,
  openProductsSubmenu: () => {},
  closeProductsSubmenu: () => {},
});

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const AppContextProvider = ({ children }: IProps) => {
  const [isProductMenuShown, setIsProductMenuShown] = React.useState(false);

  const openProductsSubmenu = () => {
    setIsProductMenuShown(true);
  };

  const closeProductsSubmenu = () => {
    setIsProductMenuShown(false);
  };

  return (
    <AppContext.Provider value={{ isProductMenuShown, openProductsSubmenu, closeProductsSubmenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export default AppContextProvider;
