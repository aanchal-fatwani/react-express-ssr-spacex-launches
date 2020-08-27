import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './components/App'

module.exports = function renderData(initialData) {
  const { launchData, urlParams } = initialData;

  let content = renderToString(
    <StaticRouter>
      <App launchData={launchData} urlParams={urlParams}/>
    </StaticRouter>
  );
  return { content };
}
