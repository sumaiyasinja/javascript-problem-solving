function sortMaker(arr) {    
        if (arr.length !==2) {
            return "array should have two elements";
        }  
        if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
            return "Input Should be numbers";
        }
        if(arr[0] < 0 || arr[1] < 0 )
        {
            return 'Invalid Input'
        }else if(arr[0] === arr[1] ){
            return 'equal'
        }else{
            if(arr[0]< arr[1]){
                return [arr[0],arr[1]]
            }
            else if(arr[1]< arr[0]){
                return [arr[1],arr[0]]}
        }            
        }


