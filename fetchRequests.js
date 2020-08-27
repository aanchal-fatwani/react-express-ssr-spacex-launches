const fetch = require('node-fetch');

module.exports = function fetchRequests(launch_success_selected = null, land_success_selected = null, launch_year_selected = null) {
  var url = 'https://api.spacexdata.com/v3/launches?limit=100';
  if (launch_success_selected)
    url += "&launch_success=true"
  if (land_success_selected)
    url += "&land_success=true"
  if (launch_year_selected)
    url += `&launch_year=${launch_year_selected}`

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const launchData = data.map((el) => {
        const { mission_name: nm, mission_id: id, launch_year: yr, links, launch_success: launchSucc, rocket: rkt } = el;
        const { mission_patch_small: img } = links;
        const { land_success: landSucc } = rkt.first_stage.cores[0];
        return { ...{ nm, id, yr, img, launchSucc, landSucc } };
      });
      return { launchData }
    })
    .catch(err => {
      console.log({ err });
    });
}