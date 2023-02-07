//Ha habido un problema de datos maestros que afectó los precios de los productos. Compruebe si cada producto tiene un precio válido (entero o flotante, y mayor o igual a cero). Los productos con un precio de 0 son gratuitos y cuentan como un precio válido.

function hasValidPrice(product) {
    if (typeof product?.price === "number" && product?.price >= 0){
        return true
      }
    else{
        return false
      };
              
    }
    
    
    console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))	//true
    console.log(hasValidPrice({ "product": "Cheese", price: -1 }))	//false
    console.log(hasValidPrice({ "product": "Eggs", price: 0 })) //true
    console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))	//false
    console.log(hasValidPrice())//false


    
//Estoy tratando de escribir una función para aplanar una matriz de subarreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

//En otras palabras, quiero transformar esto: [[1, 2], [3, 4]] en [1, 2, 3, 4].


function flatten(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++){
      
      result.push(arr[i][k]);
    }
  }
   return result
}
console.log(flatten([[1, 2], [3, 4]]))
console.log(flatten([[1], [2], [3], [4]]))
console.log(flatten([["a", "b"], ["c", "d"]]))
console.log(flatten([[true, false], [false, false]]))



//El siguiente código intenta agregar un clon de una arreglo a sí mismo. No hay ningún mensaje de error, pero los resultados no son los esperados. ¿Puedes arreglar el código?

function clone(arr) {
  let newArr = []
  newArr.push(arr)
  return arr.concat(newArr);
};

console.log(clone([1, 1]))	//[1, 1, [1, 1]]
console.log(clone([1, 2, 3]))	//[1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"]))	//["x", "y", ["x", "y"]]
console.log(clone([true, false, true]))	//[true, false, true, [true, false, true]]