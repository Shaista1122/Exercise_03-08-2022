//Problem 1
let obj={
    name:" Faiza Bibi",
    rollno: " fa19-bcs-123"
}
for (let x in obj){
    console.log(x)
}
//Problem 2
var student = {
  name: "Faiza bibi",
  department: " BSCS ",
  rollno: 123 };
console.log(student);
delete student.rollno;
console.log(student)
//Problem 3
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
   //Problem 5
   var calculate_average_and_highest = function(){
    var return_array =  new Array();
    var sum = 0;
    for(var i = 0; i<arguments.length ; i++){
        sum = sum + arguments[i];
     }
    return_array.push(sum/arguments.length);
    return_array.push(Math.max.apply(Math,arguments));
    return return_array;
     
}
var result = calculate_average_and_highest(10,10,70,60,64);
console.log("Average is : ",result[0]," and highest is: ",result[1]);
//Problem 4
let sandwitch_calculato = function(bread){
    if(bread % 2 == 0 ){
        return bread / 2;
    }
    else{
        return "bread is not enough to make sandwitch";
    }
    }
    console.log("Amount of entered bread: 10 and sandwitch mades: ",sandwitch_calculato(10));
    function sandwitch_calculator(bread,cheese){
        if(bread % 2 == 0 && cheese > 1 ){
            return bread / 2;
        }
        else if(bread % 2 == 0 && cheese == 1){
            return 1;
        }
        else{
            return "bread is not enough to make sandwitch";
        }
    }
    console.log("Amount of entered bread: 10 and 1 cheese so sandwitch mades: ",sandwitch_calculator(10,1));
   