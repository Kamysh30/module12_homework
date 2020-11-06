const obj = {
    car1: "BMW",
    car2: "Mercedes"
};

let str = "car1";

function getStrObj(str, obj){
 for(let key in obj){
     if (key === str)
         return true;
     }
 return false;
}


getStrObj("car2", obj);




