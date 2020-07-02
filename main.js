// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']

// This is one example of implementing the functionality of forEach:
function newForEach(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}

// complete the functions below so that they mimic the built in methods
function newSome(array, callback) {
    for(let index = 0; index <array.length; index ++){
        let currentItem = array[index]
        if(callback(currentItem)){
            return true
        }
    }
    return false
}

function newEvery(array, callback) {
    for(let index = 0; index <array.length; index ++){
        let currentItem = array[index]
        if(!callback(currentItem)){
            return false
        }
    }
    return true
}

function newFind(array, callback) {
    for(let index = 0; index <array.length; index ++){
        let currentItem = array[index]
        if(callback(currentItem)){
            return currentItem
        }
    }
    return undefined
}

function newFindIndex(array, callback) {
    for(let index = 0; index <array.length; index ++){
        let currentItem = array[index]
        if(callback(currentItem)){
            return index
        }
    }
    return -1 
}

function newMap(array, callback) {
    let newArray = []
    for(let index = 0; index <array.length; index ++){
        let currentItem = array[index]
        newArray.push(callback(currentItem))
    }
    return newArray
}

function newFilter(array, callback) {
    let newArray = []
    for(let index = 0; index <array.length; index ++){
        let currentItem = array[index]
        if(callback(currentItem)){
            newArray.push(currentItem)
        }
    }
    return newArray
}