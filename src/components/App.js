import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters'
import LaunchDisplay from './LaunchDisplay'
import fetchRequests from '../../fetchRequests'

const App = (props) => {
  const [launchSuccess, setLaunchSuccess] = useState(null)
  const [landSuccess, setLandSuccess] = useState(null)
  const [year, setYear] = useState(null)
  const [updatedLaunches, setUpdatedLaunches] = useState(null)

  useEffect(() => {
    if (launchSuccess !== null || landSuccess !== null || year !== null)
      fetchRequests(!launchSuccess ? null : launchSuccess, !landSuccess ? null : landSuccess, year).then(response => { setUpdatedLaunches(response.launchData) });
  }, [launchSuccess, landSuccess, year])

  const data = updatedLaunches ? updatedLaunches : props.launchData
  const urlParams = props.urlParams ? props.urlParams : ""
  
  return (
    <>
      <div className="df">
        <Switch>
          <Route exact path="/" render={(props) => <><Filters year={year} routeProps={props} setLaunchSuccess={setLaunchSuccess} setLandSuccess={setLandSuccess} setYear={setYear} urlParams={props.location.key?"":urlParams}/>
              <LaunchDisplay launchData={data} /></>}
          />
          <Route path="/:id" render={(props) => <><Filters year={year} routeProps={props} setLaunchSuccess={setLaunchSuccess} setLandSuccess={setLandSuccess} setYear={setYear} urlParams={urlParams} />
              <LaunchDisplay launchData={data} /></>}
          />
        </Switch>
      </div>
      <div className="name">
        <div>Developed by: </div>
        <div> Aanchal Fatwani</div>
      </div>
    </>
  )
}

export default App
