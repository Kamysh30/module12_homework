const obj = {
    car1: "BMW",
    car2: "Mercedes"
};

let str = "car1";

function getStrObj(str, obj){
    return str in obj;
}

getStrObj("car2", obj);

// Задача решена верно, но функцию getStrObj можно упростить. Выше показала как