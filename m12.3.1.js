const person = {

  city: "Moscow"
 
 }
 const student = Object.create(person);
 function getKeyValue(object) {
   
   student.ownCity = "Piter";
   student.ownCity2 = "Kazan";
   for(let key in student){
     if(student.hasOwnProperty(key)){
     console.log( "Ключ: " + key + " значение: " + student[key] );
   } 
 }
 }
   getKeyValue(student);
  

  