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

<br/>

### Special features of the App

#### Responsive Behaviour
The app has been created by keeping in mind the variability of devices and system resources that can be used to access this, and hence the app supports great level of responsiveness.
<br/>
Responsive Behavior Details 
1. Mobile View: Page should have only one Column until 700 px. <br/>
2. Tablet View: Page should have 2 columns between 700 and 1024 px. <br/>
3. Desktop View: Page should have 4 columns between 1024 and 1440 px. Beyond 1440px viewport, the content will be centered align with a max width of 1440.
<br/>

The designs for reference
![image](https://user-images.githubusercontent.com/63228776/91385447-841fef80-e84e-11ea-9487-b2a70a87160e.png)

![image](https://user-images.githubusercontent.com/63228776/91385516-b03b7080-e84e-11ea-9bb8-0779a0b278f5.png)

![image](https://user-images.githubusercontent.com/63228776/91385540-c5180400-e84e-11ea-83c8-069cd3bcebf7.png)


#### Isomorphic Behaviour
The first page loaded for the user is provided from the server and then further changes are catered on the client end. This has been done by creating a structure for Server side rendering and then hydrating on the client end.


#### SEO Friendly
The app has incorporated SEO friendly techniques with proper meta content and description handling and incorporating robots.txt for aid in the crawling process.


#### Performance Centric
The app is very performant savvy with multiple techniques such as lazy loading, critical loading, optimizing CRP, preloading data, etc. to achieve high performance.
The performance can be checked along the lines of Lighthouse API score for the app reflecting good numbers in both, Mobile View and Desktop Mode.

The design for reference
![Mob97Prod](https://user-images.githubusercontent.com/63228776/91386215-25f40c00-e850-11ea-9550-aab50c3a55f0.PNG)

![Desktop95Prod](https://user-images.githubusercontent.com/63228776/91386248-360beb80-e850-11ea-8467-fe8e53beaf5c.PNG)

<br/>

#### Deployed on live hosting environment
The app is hosted on Heroku environment for code deployment to check the functionality on production environment.
<br/>
https://spacex-launches-react-express.herokuapp.com/


## Future Scope Of Improvement

The project can be extended through better handling of filter options and by adding more choices for users to request and explore.
<br/>
The project can add a layer of robustness by introducing testing methodologies at various stages. To start, custom test cases can be built to test sanity and corner edge cases.
