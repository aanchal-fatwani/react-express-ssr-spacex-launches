import React from "react";
import { Link } from "react-router-dom";

const Filters = ({ year, routeProps, setLaunchSuccess, setLandSuccess, setYear, urlParams}) => {
const queryParams = urlParams ? (urlParams.split('/').length > 1 ? urlParams.split('/')[1] : '') : (routeProps && routeProps.location && routeProps.location.search ? routeProps.location.search : "")
  let allYears = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020" ];
  allYears = allYears.map((el) => (
    <Link
      to={`${urlFormatter(queryParams, "year", el)}`} key={el}
      onClick={() => setYear(year === null || year != el ? el : null) }
      className={`${queryParams.indexOf(el) > -1 ? "selTab" : ""}`} >
      {el}
    </Link>
  ));

  let launchStatus = [true, false];
  launchStatus = launchStatus.map((el) => (
    <Link to={`${urlFormatter(queryParams, "launchSuccess", el)}`} key={`launchSuccess-${el}`}
      onClick={() => setLaunchSuccess(el)}
      className={`${queryParams.indexOf(`launchSuccess=${el}`) > -1 ? "selTab" : ""}`}>
        {`${el}`}
      </Link>
  ));

  let landStatus = [true, false];
  landStatus = landStatus.map((el) => <Link
        to={`${urlFormatter(queryParams, "landSuccess", el)}`} key={`landSuccess-${el}`}
        onClick={() => setLandSuccess(el)}
        className={`${ queryParams.indexOf(`landSuccess=${el}`) > -1 ? "selTab" : "" }`}
      >{`${el}`}
      </Link>);

  return (
    <div className="filterAr">
      <div className="bgLayer">
        <div className="subHead">Filters</div>
        <div className="filtHeads">Launch Year</div>
        <div className="filtOptions">{allYears}</div>

        <div className="filtHeads">Successful Launch</div>
        <div className="filtOptions">{launchStatus}</div>

        <div className="filtHeads">Successful Landing</div>
        <div className="filtOptions">{landStatus}</div>
      </div>
    </div>
  );
};

const urlFormatter = (locnData, filter, filterVal) => {

  if (!locnData && filterVal)
    return `?${filter}=${filterVal}`
  if (!locnData && !filterVal)
    return ``

  if (locnData.indexOf(filter) > -1) {
    if ((["launchSuccess", "landSuccess"].includes(filter))) {
      if (filterVal) {
        return locnData
      } else {
        let t = locnData.split('?')[1].split('&').filter(el => el.indexOf(filter) == -1)
        if (t.length > 0)
          return `?${t.join("&")}`
      }
    }
    else {
      if (locnData.indexOf(filterVal) > -1) {
        let t = locnData.split('?')[1].split('&').filter(el => el.indexOf(filter) == -1)
        if (t.length > 0)
          return `?${t.join("&")}`
      }
      else {
        return `${locnData.replace(locnData.split('year=')[1].substr(0, 4), filterVal)}`
      }
    }
  } else {
    if ((["launchSuccess", "landSuccess"].includes(filter))) {
      if (filterVal) {
        return `${locnData}&${filter}=${filterVal}`
      }
      return `${locnData}`
    }
    else {
      return `${locnData}&${filter}=${filterVal}`
    }
  }
  return ``
}

export default Filters