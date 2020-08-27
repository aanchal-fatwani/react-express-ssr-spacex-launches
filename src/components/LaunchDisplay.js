import React, { useEffect, useState } from "react";

const LaunchDisplay = ({launchData}) => {
  const [data, setData] = useState(launchData.slice(0, 20));
  const [off, setOff] = useState(20);

  useEffect(() => {
      if(data != launchData)
      setData(launchData)
    const imageObserver = new IntersectionObserver(
      (entries, imgObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lzy-img");
            imgObserver.unobserve(lazyImage);
          }
        });
      },
      {
        rootMargin: "900px",
      }
    );
    const allImgs = document.querySelectorAll("img.lzy-img");
    allImgs.forEach((v) => {
      imageObserver.observe(v);
    });

    let n = 0;
    const launchObserver = new IntersectionObserver(
      (entries, lObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            n++;
            const lazyDiv = entry.target;
            lazyDiv.classList.remove("lzy-div");
            if (n == 20 && data.length < 100) {
              setData([...data, ...launchData.slice(off, off + 20)]);
              setOff(data.length + 20);
            }
            lObserver.unobserve(lazyDiv);
          }
        });
      },
      {
        rootMargin: "900px",
      }
    );
    const allDivs = document.querySelectorAll("div.lzy-div");
    allDivs.forEach((v) => {
      launchObserver.observe(v);
    });
  }, [data, launchData]);

  const results = data.map((el, i) => {
    return (
      <div key={el.nm} className="lzy-div">
        <div className="imgBg">
          {el.img ? <img className="lzy-img" data-src={el.img} alt={el.nm} /> : null}
        </div>
        <div className="launchName">{`${el.nm} #${i + 1}`}</div>
        {el.id.length > 0 ? (
          <div className="missions">
            <span>Mission Ids:</span>
            <ul>
              {el.id.map((mId) => (
                <li key={mId}>{mId}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="launchInfo">
          <span>Launch Year: </span>
          <span>{el.yr}</span>
        </div>
        <div className="launchInfo">
          <span>Successful Launch: </span>
          <span>{`${el.launchSucc}`}</span>
        </div>
        {el.landSucc !== null ? (
          <div className="launchInfo">
            <span>Successful Landing: </span>
            <span>{`${el.landSucc}`}</span>
          </div>
        ) : null}
      </div>
    );
  });

  return <div className="launchAr">{results}</div>;
};

export default LaunchDisplay;
