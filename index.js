const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name) {
  console.log("destructivelyAppendCat name is " , name)
  cats.push(name)
}
destructivelyAppendCat("test")

function destructivelyPrependCat(name) {
  cats.unshift(name)
}
destructivelyPrependCat("test1")


//   cats.length = 0;
// cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(name) {
cats.pop(name)

  }

destructivelyRemoveLastCat("test2")


function destructivelyRemoveFirstCat(name) {
cats.shift(name)
  
    }
  
destructivelyRemoveFirstCat("test2")

const array = [...cats];    


function appendCat(name) {
  //const array = cats.slice(0, cats.length - 1);
 // console.log(array)
 // console.log(cats)
const copyOfPrimesUsingSlice = cats.slice();
  copyOfPrimesUsingSlice.push(name)
  console.log(copyOfPrimesUsingSlice)

}

appendCat("test")