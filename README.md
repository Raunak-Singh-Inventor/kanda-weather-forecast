# Kanda Weather Forecast
This repository contains the source code for my Kanda Weather Forecast website made in ReactJS.  

## GitHub Pages Demo
To view a demo of my website hosted on Github Pages: 
1. Click this link [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and then click the `Request temporary access to the demo server` button to get temporary access to the Heroku CORS server the website uses to communicate with the dClimate API.
2. View my website at [https://Raunak-Singh-Inventor.github.io/kanda-weather-forecast/](https://Raunak-Singh-Inventor.github.io/kanda-weather-forecast/)

## Local Host Development 
To view in development mode on localhost:
1. `git clone` this repository
2. Navigate to the cloned repo
3. Click this link [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and then click the `Request temporary access to the demo server` button to get temporary access to the Heroku CORS server the website uses to communicate with the dClimate API.
4. Run `yarn start` and see the website open in development mode

## Deployment on other platforms
This project was made using Create-React-App. For deplyoment on other platforms, follow the Create-React-App instructions: [https://create-react-app.dev/docs/deployment/](https://create-react-app.dev/docs/deployment/)

Note: The Heroku CORS server limits requests to the dClimate Soil Moisture API to 50 requests per hour. When deploying on other platforms (such as Amplify, Azure, Firebase, etc.) the CORS server may not be needed as most servers on the cloud have CORS anywhere permissions.

## Adjusting the backend parameters
The soil moisture and flood risk (flood risk is calculated from the soil moisture) data come from the dClimate API in the backend. The rest of the parameters `[Temperature,Condition,Humidity,Chance of Rain,Pressure,Wind]` can be adjusted from the `forecasts.txt` in the data directory. Just copy paste your data into the txt and see the weather forecast get updated. 

### Issues
Any questions regarding this website can be put in the `Issues` page of this repo. 🙂
