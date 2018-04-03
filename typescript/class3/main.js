//example 1 
// var price = 10 , quantity = 4;
// var product1 = {
//     price,
//     quantity,
//     calculate: () => {
//         return this.price * this.quantity;
//     }
// };
// console.log(product1.calculate());

//  example 2 
var field = 'dynamicfield';
var productUpdate = {
    [field + '-001']:10
}
console.log(productUpdate['dynamicfield-001']);
// console.log()


// defaultFnParameters 

var getInfo = function(name ='ravi',age = (29 + name)){
    console.log(name  +' ' + age );
}
getInfo(undefined);

// rest and spread 

function testFn(productid , ...productslist){
    console.log(productslist);
    console.log(arguments.length);
}
testFn(25,'watch','trousers','waterbotel');

// spread 
function maxNumber(firstNo, ...listOfNumbers){
	console.log(listOfNumbers);
	console.log(Math.max(...listOfNumbers));
}

maxNumber(10,20,30,40)