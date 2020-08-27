# SpaceX Launch Programs

An app for browsing through the launches by Space Exploration Technologies Inc (SpaceX) along with their relevant content. 
<br/> 
(This application is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX, as well as related names, marks, emblems, and images, are registered trademarks of their respective owners.)
<br/><br/>
The user can work on the following features:

1. View the launches that were planned in the recent few years.
2. Filter the results on the basis of the year of launch.
3. Filter the results on the basis of whether the launch was successful or not.
4. Filter the results by achieved a successful landing.


## To get started:

1. Install [NodeJS](http://www.nodejs.org)
2. Download this repo.
3. Open the command line of your choice and cd to a sample directory within this repo on your machine.
4. `npm install` - Installs the relevant packages as defined in the package.json file. This step helps to get all the dependencies of the project.
5. `npm start | npm run start` - Creates a build-in development and provides an Express server which should have been started by now.
6. Check for informational console message on the server to ensure that all the dependencies are properly installed and the server is up and running.
7. Navigate to [http://localhost:8080/](http://localhost:8080/), and find the app running.


## Scripts

In the project directory, try running:

### `npm run build`

Creates an optimized build out of the resources folder and output the file within the folder structure.

### `npm run start`

Creates a build and runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


## Technical Details

The project has been developed using React and Express. The data being utilized is being accessed and fetched through an API request which gives the list of launches along with their details up to a limit as requested by the user.

### API Endpoints

For initial loading of content; gives the entire list up to the limit <br/>
https://api.spacexdata.com/v3/launches?limit=100

For fetching successful launches <br/>
https://api.spacexdata.com/v3/launches?limit=100&launch_success=true

For fetching launches with successful landing <br/>
https://api.spacexdata.com/v3/launches?limit=100&land_success=true

For fetching launches corresponding to a particular year of launch <br/>
https://api.spacexdata.com/v3/launches?limit=100&launch_year=2014

<br/>

The above specifications can be combined on the basis of user choice of options and provide filtered data <br/>
https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014


## Future Scope Of Improvement

The project can be extended through better handling of filter options and by adding more choices for users to request and explore.
<br/>
The project can add a layer of robustness by introducing testing methodologies at various stages. To start, custom test cases can be built to test sanity and corner edge cases.

