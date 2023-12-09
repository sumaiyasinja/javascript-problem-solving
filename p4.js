function findAddress(obj) {
    var result = "";
  
    if (obj['street'] !== undefined) {
      result += obj['street'];
    } else {
      result += "__";
    }
  
    result += ",";
  
    if (obj['house'] !== undefined) {
      result += obj['house'];
    } else {obj
      result += "__";
    }
  
    result += ",";
  
    if (obj['society'] !== undefined) {
      result += obj['society'];
    } else {
      result += "__";
    }
  
    return result;
 
}


// Test cases
var address1 = { street: 10, house: '15A', society: 'Earth Perfect' };
var address2 = { street: 10, society: 'Earth Perfect' };
var address3 = { society: 'Earth Perfect' };

console.log(findAddress(address1)); // result: 10,15A,Earth Perfect
console.log(findAddress(address2)); // result: 10,__,Earth Perfect
console.log(findAddress(address3)); // result: 10,__,__ 


    