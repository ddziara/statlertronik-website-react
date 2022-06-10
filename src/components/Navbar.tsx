import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import prodData, { getProductByID } from "../products-data";
import { useGlobalContext } from "./AppContextProvider";

type SubmenuStyle = Pick<
  React.CSSProperties,
  "left" | "top" | "width" | "height" | "padding" | "visibility"
>;

interface ISubmenuSizeLocation {
  width: string;
  height: string;
  left?: string;
}

export default () => {
  const [productSubmenuStyle, setProductSubmenuStyle] = useState<SubmenuStyle>(
    {}
  );
  const [productsSubmenuContent, setProductsSubmenuContent] = useState<
    JSX.Element[] | null
  >(null);
  const [submenuLocation, setSubmenuLocation] =
    React.useState<ISubmenuSizeLocation | null>(null);
  const refProductSubmenu = React.useRef(null);

  const { isProductMenuShown, openProductsSubmenu, closeProductsSubmenu } =
    useGlobalContext();

  // useEffect(() => {
  //   const productsOption = document.getElementById("products-option");
  //   const rProductsOption = productsOption!.getBoundingClientRect();

  //   const navbarLinkc = document.getElementById("navbar-links");
  //   const rNavbarLinks = navbarLinkc!.getBoundingClientRect();
  //   const pageHeader = document.getElementById("page-header");
  //   const rPageHeader = pageHeader!.getBoundingClientRect();
  //   const left =
  //     (rProductsOption.left + rProductsOption.right) / 2 - rNavbarLinks.left;
  //   const top = rProductsOption.bottom - rPageHeader.top;
  //   const style: SubmenuStyle = {
  //     left: `calc(${left}px - 100px)`, // test
  //     top: `calc(${top}px + 0.5rem)`,
  //     width: "0",
  //     height: "0",
  //     visibility: "hidden",
  //   };

  //   setProductSubmenuStyle(style);

  // }, []);

  // React.useLayoutEffect(() => {
  //   if (isProductMenuShown) {
  //     /*
  //       Stage 1:
  //         Change submenu style such as setting content could corectly resize it & build the content
  //     */
  //     setProductSubmenuStyle((prevStyle): SubmenuStyle => {
  //       return {
  //         ...prevStyle,
  //         width: "max-content",
  //         height: "auto",
  //         padding: "0.5rem",
  //         visibility: /*"hidden"*/ "visible",
  //       };
  //     });

  //     console.log("STAGE 1 - preparing to render layout (setting styles)");


  //     //=========================================
  //   // Options for the observer (which mutations to observe)
  //   const config = { attributes: true, childList: true, subtree: true };

  //   // Callback function to execute when mutations are observed
  //   const callback = function (mutationList: MutationRecord[], observer: MutationObserver) {
  //     // Use traditional 'for loops' for IE 11
  //     for (const mutation of mutationList) {
  //       if (mutation.type === "childList") {
  //         console.log(`A child node of ${mutation.target.nodeName} has been added or removed.`);
  //         const div = mutation.target as HTMLElement;
  //         console.log(`class = ${div.className}`);
  //       } else if (mutation.type === "attributes") {
  //         console.log(
  //           `The ${mutation.attributeName} (${mutation.oldValue} -> ${mutation.attributeName ? (mutation.target as HTMLElement).getAttribute(mutation.attributeName) : null} ) attribute was modified.`
  //         );
  //       }
  //     }

  //     //     // TEST
  //     const aa = (
  //       refProductSubmenu.current! as HTMLElement
  //     ).getBoundingClientRect();
  //     console.log("DOM SIZE (observable callback)");
  //     console.log(aa);
  //     //     // TEST END

  //   };

  //   const productsSubmenu = document.getElementById("products-submenu");

  //   // Create an observer instance linked to the callback function
  //   const observer = new MutationObserver(callback);

  //   // Start observing the target node for configured mutations
  //   observer.observe(productsSubmenu!, config);

  //   return () => {
  //     // Later, you can stop observing
  //     observer.disconnect();
  //   };

  //     //=========================================

  //   }
  // }, [isProductMenuShown]);

  // React.useEffect(() => {
  //   if (productSubmenuStyle.width === "max-content") {
  //     /*
  //       STAGE 2:
  //         Creating layout.
  //     */
  //     const prodsSubmenuContent = prodData.map((prod) => (
  //       <NavLink
  //         key={prod.id}
  //         to={`/products/${prod.id}`}
  //         className="submenu-item"
  //         onClick={handleItemOnClick}
  //       >
  //         <img
  //           src={prod.imageURL}
  //           alt={prod.title}
  //           className="submenu-item-img"
  //         />
  //         <div>{prod.title}</div>
  //       </NavLink>
  //     ));

  //     // const prodsSubmenuContent = [
  //     //   <div className="submenu-item">
  //     //     {/* <img
  //     //       src={prodData[0].imageURL}
  //     //       alt="dadada"
  //     //       className="submenu-item-img"
  //     //     /> */}
  //     //     <span>
  //     //       Ala ma kot a kot ma Alę ty głupi konowale, ale nie ma ali, ale Ale
  //     //       ale 1
  //     //     </span>
  //     //   </div>,
  //     //   //============================
  //     //   <div className="submenu-item">
  //     //     {/* <img
  //     //       src={prodData[0].imageURL}
  //     //       alt="dadada"
  //     //       className="submenu-item-img"
  //     //     /> */}
  //     //     <span>
  //     //       Ala ma kot a kot ma Alę ty głupi konowale, ale nie ma ali, ale Ale
  //     //       ale 1
  //     //     </span>
  //     //   </div>,
  //     //   //============================
  //     //   <div className="submenu-item">
  //     //     {/* <img
  //     //       src={prodData[0].imageURL}
  //     //       alt="dadada"
  //     //       className="submenu-item-img"
  //     //     /> */}
  //     //     <span>
  //     //       Ala ma kot a kot ma Alę ty głupi konowale, ale nie ma ali, ale Ale
  //     //       ale 1
  //     //     </span>
  //     //   </div>,
  //     //   //============================
  //     // ];

  //     setProductsSubmenuContent(prodsSubmenuContent);

  //     console.log("STAGE 2 - creating layout");
  //   }
  // }, [productSubmenuStyle]);

  // React.useLayoutEffect(() => {
  //   if (productsSubmenuContent !== null) {
  //     /*
  //       STAGE 3:
  //         Delay to give it a chance to setup layout correctly
  //     */
  //     setSubmenuLocation({ width: "0", height: "0" });
  //     console.log("STAGE 3 - delaying");
  //   }
  // }, [productsSubmenuContent]);

  // React.useLayoutEffect(() => {
  //   if (submenuLocation !== null && submenuLocation.width === "0") {
  //     /*
  //        STAGE 4:
  //          Get rendered submenu location
  //     */

  //     const productsSubmenu = document.getElementById("products-submenu");
  //     const rProductsSubmenu = productsSubmenu!.getBoundingClientRect();

  //     setSubmenuLocation({
  //       width: `${rProductsSubmenu.right - rProductsSubmenu.left}px`,
  //       height: `${rProductsSubmenu.bottom - rProductsSubmenu.top}px`,
  //     });

  //     console.log("STAGE 4 - getting submenu location");

  //     console.log({
  //       width: `${rProductsSubmenu.right - rProductsSubmenu.left}px`,
  //       height: `${rProductsSubmenu.bottom - rProductsSubmenu.top}px`,
  //     });

  //     //     // TEST
  //     const aa = (
  //       refProductSubmenu.current! as HTMLElement
  //     ).getBoundingClientRect();
  //     console.log("DOM SIZE");
  //     console.log(aa);
  //     //     // TEST END

  //     setTimeout(() => {
  //       const productsSubmenu = document.getElementById("products-submenu");
  //       const rProductsSubmenu = productsSubmenu!.getBoundingClientRect();
  //       console.log("FINAL SIZE");
  //       console.log({
  //         width: `${rProductsSubmenu.right - rProductsSubmenu.left}px`,
  //         height: `${rProductsSubmenu.bottom - rProductsSubmenu.top}px`,
  //       });
  //     }, 1000);
  //   }
  // }, [submenuLocation]);

  // React.useEffect(() => {
  //   console.log(`productSubmenuStyle.width = ${productSubmenuStyle.width}`);
  //   if (!isProductMenuShown && productSubmenuStyle.width === "max-content") {
  //     // STAGE 2:
  //     // build subnemnu content and render it with visibilty hidden

  //     console.log("STAGE: 2");
  //   }
  // }, [productSubmenuStyle.width]);

  // React.useEffect(() => {
  //   // ignore case when submenu is not rendered
  //   if (isProductMenuShown) {
  //     /*
  //        Stage 3:
  //          Get rendered (but still invisible) size of submenu
  //     */
  //     const productsSubmenu = document.getElementById("products-submenu");
  //     const rProductsSubmenu = productsSubmenu!.getBoundingClientRect();

  //     setSubmenuLocation({
  //       width: `${rProductsSubmenu.right - rProductsSubmenu.left}px`,
  //       height: `${rProductsSubmenu.bottom - rProductsSubmenu.top}px`,
  //     });

  //     // setProductSubmenuStyle((prevStyle): SubmenuStyle => {
  //     //   return {
  //     //     ...prevStyle,
  //     //     width: "0",
  //     //     height: "0",
  //     //     padding: "0",
  //     //   };
  //     // });

  //     console.log("STAGE: 3");
  //     console.log(rProductsSubmenu);
  //     console.log({
  //       width: `${rProductsSubmenu.right - rProductsSubmenu.left}px`,
  //       height: `${rProductsSubmenu.bottom - rProductsSubmenu.top}px`,
  //     });

  //     // TEST
  //     console.log(refProductSubmenu.current);
  //     const aa = (
  //       refProductSubmenu.current! as HTMLElement
  //     ).getBoundingClientRect();
  //     console.log("--------------------");
  //     console.log(aa);
  //     // TEST END

  //     setTimeout(() => {
  //       const productsSubmenu = document.getElementById("products-submenu");
  //       const rProductsSubmenu = productsSubmenu!.getBoundingClientRect();
  //       console.log("FINAL SIZE");
  //       console.log({
  //         width: `${rProductsSubmenu.right - rProductsSubmenu.left}px`,
  //         height: `${rProductsSubmenu.bottom - rProductsSubmenu.top}px`,
  //       });
  //     }, 1000);
  //   }
  // }, [isProductMenuShown]);

  //   /*
  //     Stage 4:
  //       Set correct sizes of submenu and change visibility to visible
  //   */

  // useEffect(() => {
  //   if (isProductMenuShown) {
  //     //   setProductSubmenuStyle((prevStyle): SubmenuStyle => {
  //     //     return {
  //     //       ...prevStyle,
  //     //       width: submenuLocation.width,
  //     //       height: submenuLocation.height,
  //     //       padding: "0.5rem",
  //     //       visibility: "visible",
  //     //     };
  //     //   });

  //     console.log("STAGE: 4");
  //     const productsSubmenu = document.getElementById("products-submenu");
  //     const rProductsSubmenu = productsSubmenu!.getBoundingClientRect();
  //     console.log(rProductsSubmenu);
  //   }
  // }, [submenuLocation]);

  const getClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `link link-active` : `link`;

  const handleItemOnClick = () => {
    closeProductsSubmenu();
  };

  // const handleProductsOnClick = (e: React.SyntheticEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   openProductsSubmenu(); // force rendering it
  // };

  console.log("RENDER");

  return (
    <nav id="navbar-links" className="header-links">
      <NavLink to="/" className={getClass}>
        Home
      </NavLink>
      <NavLink
        id="products-option"
        to="/products"
        className={getClass}
        // onClick={handleProductsOnClick}
      >
        Products
      </NavLink>
      <NavLink to="/about" className={getClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={getClass}>
        Contact
      </NavLink>

      {isProductMenuShown && (
        <div
          id="products-submenu"
          className="products-submenu"
          style={productSubmenuStyle}
          ref={refProductSubmenu}
        >
          <h3 className="products-submenu-title">Products</h3>
          <hr />
          <div className="products-submenu-list">{productsSubmenuContent}</div>
        </div>
      )}
    </nav>
  );
};
