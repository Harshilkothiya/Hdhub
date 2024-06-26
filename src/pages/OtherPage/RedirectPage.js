import React from "react";
import "./RedirectPage.css";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Logo from "../../components/logo";

import SimpleSlider from "../../components/Slider";
import imageData from "../../Data/imageData";

import { useLocation } from "react-router-dom";

export default function RedirectPage() {
  const location = useLocation();
  const id = location.state;
  const data = imageData.find((obj) => obj.id === id);
  const Links = data.ss;

  return (
    <div>
      <div className="nav">
        <Logo />
        <Navbar />
      </div>
      <div className="search">
        <Search />
      </div>
      {/* <div>
        <SimpleSlider />
      </div> */}
      <div className="details">
        <div className="outer">
          <div className="title">{"🎬" + data.title}</div>
        </div>
        <div className="metadata">
          <div className="time">{"📅 " + data.date}</div>
          <div className="other-meta">
            {data.metadata.map((meta) => {
              return <div className="meta">{meta}</div>;
            })}
          </div>
        </div>

        <div className="line"></div>

        <div className="other-headding">{data["other-headding"]}</div>

        <div className="img">
          <img src={data.images} alt="not found" />
        </div>
        <div className="link_to_download">
          <a href={data.images}>[ How To Download 🚀 ]</a>
        </div>

        <div className="line"></div>

        <div className="innertitle">{data.inner_title}</div>
        <div className="maindetails">
          {data.dis.map((d) => {
            return <div className="maindetails_part">{d}</div>;
          })}
        </div>
        <div className="line"></div>
        <div className="ss">: Screen-Shots :</div>
        <div className="ssimgdiv" key={data.id}>
          {Links.map((links) => {
            return <img src={links} alt="not found" className="ssimg" />;
          })}
        </div>
        <div className="line"></div>
        <div className="download">
          <div className="dtitle">Download {data.inner_title}</div>
          <p className="dlink">: DOWNLOAD LINKS :</p>
          <div>.................links................</div>
          <p className="dlink wlink"> WATCH ONLINE FULL MOVIE:-</p>
          <div>.................link....................</div>
        </div>
        <div className="line"></div>
        <div className="trailer">
          <div className="trailer-title">{data.inner_title + ":-"}</div>
          <iframe
            loading="lazy"
            title="YouTube video player"
            src={data.trailer}
            width="75%"
            height="600"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            data-mce-fragment="1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
