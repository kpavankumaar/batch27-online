-> installation 
    install node - https://nodejs.org/en/ download LTS version and install
    install typescript - npm install -g typescript  --> source  = https://www.npmjs.com/package/typescript
-> using transiler    
    tsc filename.ts  --> will transpile the code to javascript file filename.js

typescript 
we can identify type errors . 
how is it done ? 
-> types are identified by editor and we have to define the type when we declare the variable 
or when we initialize a value 
var num = 100; --> here type of num is any 
var num1:number = num + 'string '--> it will show type errors as num1 is of type number and we are assigning strings

class 

-> typescript has class which is converted to js code as IIFE with a function constructor inside IIFE
-> contains of Fields, constructor,property, methods
constructor accepts parameter values , one can add public or private key before parameters 
public and private keywords will allow us to access the parameters (defined in construtor ) inside class methods 
public keyword will make the parameter available for object created out of class
private keyword will through an error in typescript stating we cannot use privately defined parameters outside the class 
but when it is transpiled to javascript both public and private parameters are accessable with object created from function constructor