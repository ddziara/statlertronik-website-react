import * as React from "react";
import prodData, { getProductByID } from "../products-data";
import updatesData from "../updates-data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductShowContent from "../components/ProductShowContent";
import DOMPurify from "dompurify";
import { NavLink } from "react-router-dom";

type ActionType =
  | "GO_TO_NEXT"
  | "GO_TO_PREV"
  | "FINALIZE"
  | "RESET_AUTOSCROLL"
  | "GO_TO_NEXT_UPD_PAGE"
  | "GO_TO_PREV_UPD_PAGE";

interface IAction {
  type: ActionType;
}

interface IState {
  productID: number;
  lastProductID: number;
  posClass: string;
  lastPosClass: string;
  autoScroll: boolean;
  updatesPageStart: number;
  updatesPageSize: number;
}

const reducer = (state: IState, action: IAction): IState => {
  if (action.type === "GO_TO_NEXT" || action.type === "GO_TO_PREV") {
    let index = prodData.findIndex((prod) => prod.id === state.productID);
    let newPosClass = state.posClass;

    if (action.type === "GO_TO_NEXT") {
      index = (index + 1) % prodData.length;
      newPosClass = "position-left notransition";
    } else {
      index = (index + prodData.length - 1) % prodData.length;
      newPosClass = "position-right notransition";
    }

    const o = {
      ...state,
      lastProductID: state.productID, // store current ID as last one
      lastPosClass: `${state.posClass} notransition`, // store current position class as last one
      productID: prodData[index].id,
      posClass: newPosClass,
    };

    // console.log(action.type);
    // console.log(o);
    return o;
  } else if (action.type === "FINALIZE") {
    if (state.lastProductID !== 0) {
      let newLastPosClass = state.lastPosClass;

      if (state.posClass === "position-left notransition") {
        newLastPosClass = "position-right";
      } else if (state.posClass === "position-right notransition") {
        newLastPosClass = "position-left";
      }

      const o = {
        ...state,
        lastPosClass: newLastPosClass,
        posClass: "position-center",
      };

      // console.log(action.type);
      // console.log(o);
      return o;
    }
  } else if (action.type === "RESET_AUTOSCROLL") {
    // console.log("RESET_AUTOSCROLL");
    return {
      ...state,
      autoScroll: false,
    };
  } else if (action.type === "GO_TO_NEXT_UPD_PAGE") {
    let startIndex = updatesData.findIndex(
      (prod) => prod.id === state.updatesPageStart
    );

    let newStartIndex = startIndex - state.updatesPageSize;

    if (newStartIndex >= 0) {
      const o = {
        ...state,
        updatesPageStart: updatesData[newStartIndex].id,
      };

      return o;
    }
  } else if (action.type === "GO_TO_PREV_UPD_PAGE") {
    let startIndex = updatesData.findIndex(
      (prod) => prod.id === state.updatesPageStart
    );

    if (startIndex < updatesData.length - 1) {
      let newStartIndex = startIndex + state.updatesPageSize;

      if (newStartIndex >= updatesData.length)
        newStartIndex = updatesData.length - 1;

      const o = {
        ...state,
        updatesPageStart: updatesData[newStartIndex].id,
      };

      return o;
    }
  }

  return state;
};

export default () => {
  const [state, dispatch] = React.useReducer(reducer, {
    productID: prodData[0].id,
    lastProductID: 0,
    posClass: "position-center",
    lastPosClass: "position-center",
    autoScroll: true,
    updatesPageStart: updatesData[updatesData.length - 1].id,
    updatesPageSize: 4,
  });

  /*
    there should be 2 renderings when product changes 

    1. renders prev/next product hidden

    2. renders current & prev/next with modified position class
  */

  React.useEffect(() => {
    if (state.autoScroll) {
      const timerId = setInterval(() => {
        dispatch({ type: "GO_TO_NEXT" });
      }, 5000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [state.productID, state.autoScroll]);

  React.useEffect(() => {
    // delay slightly FINALIZE (hopefully it will help with slide rendering problem)
    const timerID = setTimeout(() => {
      dispatch({ type: "FINALIZE" });
    }, 50);

    return () => {
      clearTimeout(timerID);
    };
  }, [state.lastProductID, state.productID]);

  let lastProduct;

  const product = getProductByID(state.productID);

  if (state.lastProductID) {
    lastProduct = getProductByID(state.lastProductID);
  }

  const goToNext = () => {
    dispatch({ type: "GO_TO_NEXT" });
  };

  const goToPrev = () => {
    dispatch({ type: "GO_TO_PREV" });
  };

  const goToNextUpdatesPage = () => {
    dispatch({ type: "GO_TO_NEXT_UPD_PAGE" });
  };

  const goToPrevUpdatesPage = () => {
    dispatch({ type: "GO_TO_PREV_UPD_PAGE" });
  };

  // create updates components
  const updates: JSX.Element[] = [];

  for (
    let i = updatesData.length - 1, count = 0;
    i >= 0 && count < state.updatesPageSize;
    i--
  ) {
    const updateData = updatesData[i];

    if (updateData.id <= state.updatesPageStart) {
      const prod = getProductByID(updateData.productID);

      if (prod) {
        count++;

        updates.push(
          <div key={updateData.id} className="product-update">
            <NavLink to={`/products/${prod.id}`}>
              <img src={prod.imageURL} alt={prod.title} />
            </NavLink>
            <article className="update-info">
              <h5>{prod.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(updateData.descHTML),
                }}
              ></div>
            </article>
          </div>
        );
      }
    }
  }

  const updatesContainerClass =
    updatesData.length > 1 ? "updates-container" : "updates-container-2";

  return (
    <div className="home-section">
      <h2>
        Apps for Android<sup> TM</sup> Powered Devices
      </h2>

      {state.productID !== 0 && (
        <>
          <div className="product-show">
            <div
              className="product-container"
              onClick={() => {
                if (state.autoScroll) dispatch({ type: "RESET_AUTOSCROLL" });
              }}
            >
              {[
                product && (
                  <ProductShowContent
                    key={state.productID}
                    product={product}
                    posClass={state.posClass}
                  />
                ),
                lastProduct && (
                  <ProductShowContent
                    key={state.lastProductID}
                    product={lastProduct}
                    posClass={state.lastPosClass}
                  />
                ),
              ]}
            </div>
            <div>
              <button className="arrow" onClick={goToPrev}>
                <FaChevronLeft />
              </button>
              <button className="arrow" onClick={goToNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>
          {updates.length > 0 && (
            <div className="product-updates">
              <h3>Updates</h3>

              <div className={updatesContainerClass}>{updates}</div>

              <div>
                <button className="arrow" onClick={goToPrevUpdatesPage}>
                  <FaChevronLeft />
                </button>
                <button className="arrow" onClick={goToNextUpdatesPage}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
