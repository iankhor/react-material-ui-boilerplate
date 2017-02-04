This project was bootstrapped with   
* [Create React App](https://github.com/facebookincubator/create-react-app) 
* [react-router v4.0.0-beta.3](https://github.com/ReactTraining/react-router/releases)
* [Material UI](http://material-ui.com) as the front end framework

An example of the boilerplate can be seen [here at https://react-material-ui.herokuapp.com/](https://react-material-ui.herokuapp.com/)

### Instructions
1. Git clone repository into your local directory
2. Run ```npm i``` in your local directory
3. Run ```cp .env.example .env```
4. Start React App with ```npm run watch```
5. Open React App at ```localhost:9000``` 

### Notes
1. Update any environment variables where applicable in your local ```.env``` file
2. Update CSS only in the style.styl
3. Any changes in the code and ```.styl``` files will automatically recompile the project
4. Update routes in the component called ```Routes``` in ```\src\components\shared\Routes.js```
5. The component ```JSONDebugger``` can be used to display JSON data by passing the component a JSON file with the prop name ```json```.
See example in ```\src\components\PageOne.js```  
