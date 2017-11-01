# Angular1.6ProtractorSeed#
Basic structure for AngularJs project with Protractor E2E 
## Specs
-This project use UI-Route for make routing with multiple views.
-Use Angular 1.6.x or leter
-Need Nodejs 6.x or leter
-Protractor 5.2.0 or leter

## Installation
**Note**
**This version require Node 6.11.x or leter.**
In order to start the seed use: 
```bash
> git clone https://github.com/pablogcardoso/Angular1.6ProtractorSeed.git myproyect
> cd myproyect
# install the project's dependencies
> myproyect/ npm install
#Install protractor (global)
> npm install -g protractor
#update web-driver
> myproyect/ webdriver-manager update
```

## Running
For run your project need init the node server:
```bash
> myproyect/ npm start

#In other windows run:
> myproyect/ webdriver-manager start
#In other windows run :
> myproyect/ protractor conf.js
```
This project run in port 9000, open browser and go to: http://localhost:9000/

