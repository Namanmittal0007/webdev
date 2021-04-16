var students=[];
function student(firstname, lastname, age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.greetings=function(){
        var message="Hi, I am "+this.firstname;
        return message;
    }
}
var s1= new student("Naman", "Mittal",21);
var s2= new student("Tushar", "Mittal",18);
var s3= new student("Ritik", "Tyagi",22);

students.push(s1);
students.push(s2);
students.push(s3);
students.push(new student("Devnak","Rana",23));

console.log(students);

for(var idx=0;idx<students.length;idx++){
    console.log(students[idx].greetings());
}

for(var key in s1){
    console.log(s1[key]);
}