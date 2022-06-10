import * as React from "react";
import { useParams, Outlet, NavLink, useLocation } from "react-router-dom";
import { getProductByID } from "../products-data";
import DOMPurify from "dompurify";
import Error from "./Error";
import { ImFacebook2 } from "react-icons/im";
import DragonScaleMysteryDesc from "./products/dragon-scale-mystery/Desc";
import EarthClockDesc from "./products/earth-clock/Desc";
import EarthGlobeCompassDesc from "./products/earth-globe-compass/Desc";
import EGCompass3D from "./products/eg-compadd-3d/Desc";
import GravityGravityDesc from "./products/gravity-gravity/Desc";
import HoneyCombPuzzleDesc from "./products/honey-comb-puzzle/Desc";
import MemoryStrainDesc from "./products/memory-strain/Desc";
import RestoreBlueDesc from "./products/restore-blue/Desc";
import ShakeMeBellDesc from "./products/shakeme-bell/Desc";
import SharkInWaterDesc from "./products/shark-in-water/Desc";
import ThisIsMineMouseDesc from "./products/thisismine-mouse/Desc";
import ThisIsMineMouseRes from "./products/thisismine-mouse/Res";
import ThisIsMineRemoteControlDesc from "./products/thisismine-remote-control/Desc";
import ThisIsMineRemoteControlRes from "./products/thisismine-remote-control/Res";

export default () => {
  const { productId } = useParams();

  if (productId) {
    const prod = getProductByID(parseInt(productId));

    if (prod) {
      const freeDownloads: JSX.Element[] = [];
      const websites: JSX.Element[] = [];
      const paidDownloads: JSX.Element[] = [];
      const online = prod.online;
      let freeOnlineCount = 0;
      let paidOnlineCount = 0;
      let siteOnlineCount = 0;

      const pathname = useLocation().pathname;

      const isResource = /\/res$/i.test(pathname);
      let descPageComp: JSX.Element | null = null;
      let resourcePageComp: JSX.Element | null = null;

      if (prod.descPageURL === "DragonScaleMysteryDesc") {
        descPageComp = <DragonScaleMysteryDesc />;
      } else if (prod.descPageURL === "EarthClockDesc") {
        descPageComp = <EarthClockDesc />;
      } else if (prod.descPageURL === "EarthGlobeCompassDesc") {
        descPageComp = <EarthGlobeCompassDesc />;
      } else if (prod.descPageURL === "EGCompass3D") {
        descPageComp = <EGCompass3D />;
      } else if (prod.descPageURL === "GravityGravityDesc") {
        descPageComp = <GravityGravityDesc />;
      } else if (prod.descPageURL === "HoneyCombPuzzleDesc") {
        descPageComp = <HoneyCombPuzzleDesc />;
      } else if (prod.descPageURL === "MemoryStrainDesc") {
        descPageComp = <MemoryStrainDesc />;
      } else if (prod.descPageURL === "RestoreBlueDesc") {
        descPageComp = <RestoreBlueDesc />;
      } else if (prod.descPageURL === "ShakeMeBellDesc") {
        descPageComp = <ShakeMeBellDesc />;
      } else if (prod.descPageURL === "SharkInWaterDesc") {
        descPageComp = <SharkInWaterDesc />;
      } else if (prod.descPageURL === "ThisIsMineMouseDesc") {
        descPageComp = <ThisIsMineMouseDesc />;
      } else if (prod.descPageURL === "ThisIsMineRemoteControlDesc") {
        descPageComp = <ThisIsMineRemoteControlDesc />;
      }

      if (prod.resourcesPageURL === "ThisIsMineMouseRes") {
        resourcePageComp = <ThisIsMineMouseRes />;
      } else if (prod.resourcesPageURL === "ThisIsMineRemoteControlRes") {
        resourcePageComp = <ThisIsMineRemoteControlRes />;
      }

      const pageComp = isResource ? resourcePageComp : descPageComp;

      if (pageComp === null) return <Error />;

      let descLabelComp: JSX.Element | null = null;
      let resourceLabelComp: JSX.Element | null = null;

      if (descPageComp && resourcePageComp) {
        if (isResource) {
          descLabelComp = (
            <NavLink className="single-product-main-nav-link" to="">
              Description
            </NavLink>
          );

          resourceLabelComp = <h2>Resources</h2>;
        } else {
          descLabelComp = <h2>Description</h2>;

          resourceLabelComp = (
            <NavLink className="single-product-main-nav-link" to="res">
              Resources
            </NavLink>
          );
        }
      } else if (descPageComp) {
        descLabelComp = <h2>Description</h2>;
      } else if (resourcePageComp) {
        resourceLabelComp = <h2>Resources</h2>;
      }

      for (let i = 0; i < online.length; i++) {
        const item = online[i];
        if (item.type === "free") {
          freeOnlineCount++;

          freeDownloads.push(
            <a key={item.id} href={item.url} target="_blank">
              <img src={item.badgeURL} alt={item.name} />
            </a>
          );
        } else if (item.type === "site") {
          siteOnlineCount++;

          if (item.name === "facebook") {
            websites.push(
              <a key={item.id} href={item.url} target="_blank">
                <ImFacebook2 />
              </a>
            );
          } else {
            websites.push(
              <a key={item.id} href={item.url} target="_blank">
                Facebook
              </a>
            );
          }
        } else if (item.type === "paid") {
          paidOnlineCount++;

          paidDownloads.push(
            <a key={item.id} href={item.url} target="_blank">
              <img src={item.badgeURL} alt={item.name} />
            </a>
          );
        }
      }

      const onlineGroupClassFree =
        freeOnlineCount > 1 ? "online-group-2" : "online-group-1";
      const onlineGroupClassPaid =
        paidOnlineCount > 1 ? "online-group-2" : "online-group-1";
      const onlineGroupClassSite =
        siteOnlineCount > 1 ? "online-group-2" : "online-group-1";

      return (
        <>
          <div className="single-product-section">
            <div className="single-product-container">
              <div className="single-product-subcontainer">
                <img
                  src={prod.imageURL}
                  alt={prod.title}
                  className="single-product-img"
                />
                <article className="single-product-desc">
                  <h4 className="single-product-title">
                    {`${prod.title}`} <i>{`(${prod.typeInfo})`}</i>
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(prod.aboutHTML),
                    }}
                  ></p>
                </article>
              </div>
              <div className="product-online">
                {freeDownloads.length > 0 && (
                  <article className={`online-group ${onlineGroupClassFree}`}>
                    <h5 className="online-title">Free version</h5>
                    {freeDownloads}
                  </article>
                )}
                {paidDownloads.length > 0 && (
                  <article className={`online-group ${onlineGroupClassPaid}`}>
                    <h5 className="online-title"> Paid version</h5>
                    {paidDownloads}
                  </article>
                )}
                {websites.length > 0 && (
                  <article className={`online-group ${onlineGroupClassSite}`}>
                    <h5 className="online-title"> Website</h5>
                    {websites}
                  </article>
                )}
              </div>
            </div>
          </div>
          <div className="single-product-main-section">
            <main className="single-product-main-container">
              <div className="single-product-main-nav">
                {descLabelComp}
                {resourceLabelComp}
              </div>
              <div>
                <Outlet context={{ pageComp }} />
              </div>
              {!isResource && prod.inPaidVerHTML && (
                <>
                  <hr />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(prod.inPaidVerHTML),
                    }}
                  ></div>
                </>
              )}
            </main>
          </div>
          {!isResource && (
            <div className="single-product-snapshots-section">
              <div className="single-product-snapshots-container">
                {prod.snapshotsURLs.map((shapshotURL, index) => (
                  <img key={index} src={shapshotURL} alt="snapshot" />
                ))}
              </div>
            </div>
          )}
        </>
      );
    }
  }

  return <Error />;
};
