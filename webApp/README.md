# WebApp

To Launch the project properly you need:

- To install Node.JS (https://nodejs.org/en/download)

If you use Visual Studio Code, just open a new Terminal and do `npm -v`.
Otherwise go to your Command line Runner (Exemple: PowerShell for Windows) and type `npm -v`.
if it give you a version, It was downloaded and installed properly.

- Then to install Angular Cli using: `npm i -g @angular/cli`

- You can also download all the dependancies of the project by doing `npm i`

You can test Angular CLI by using `ng -v`
If you encounter an Error while being on Windows and PowerShell, do the following:
- Set the execution policy as RemoteSigned (`Set-ExecutionPolicy RemoteSigned`)
- Set the path to the bin Folder of angular cli in your Rnviroment Variables of Windows (`PATH_TO_YOUR_NPM_FOLDER\npm\node_modules\@angular\cli\bin`). Your npm Folder should already have been added to the `Path` Variable
- Restart all your terminals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
You can also run `npm start` or `ng serve -o`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
