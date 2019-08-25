(function() {
    var employeeFactory= function(){
       var empname=[  
        {id:1,name:"john",employeeID:"32",designation:"ret"},
        {id:2,name:"john1",employeeID:"32",designation:"ret"},
        {id:3,name:"john2",employeeID:"32",designation:"ret"},
        {id:4,name:"john3",employeeID:"32",designation:"ret"}
    ]; 
        var factory={};
        factory.getEmployees =function(){
            return empname;
        };
        return factory;
    };
    angular.module('myApp').factory('employeesFactory',employeeFactory);
}());