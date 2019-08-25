var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/employee',{
          controller: 'employeeController',
          templateUrl: 'employee.html'
          })
    .when('/create',{
          controller: 'createController',
          templateUrl: 'create.html'
          })
        .when('/update',{
          controller: 'updateController',
          templateUrl: 'update.html'
          })
        .when('/delete',{
          controller: 'deleteController',
          templateUrl: 'delete.html'
          })
    
});
app.controller('employeeController',function($scope,employeesFactory){
   // $scope.empname=empname;
    $scope.empname=employeesFactory.getEmployees();
});

app.controller('createController',function($scope,employeesFactory){
   // $scope.empname=empname;
    $scope.empname = employeesFactory.getEmployees();
    var maxID=(Math.max.apply(null,$scope.empname.map(x =>x.id))||0)+1;
    
   $scope.add= function(){
       if(($scope.name !=null) && ($scope.emid!=null) && ($scope.de!=null) && ($scope.name !='') && ($scope.emid!='') && ($scope.de!=''))
           {
               $scope.empname.push({id:maxID,name:$scope.name,employeeID:$scope.emid,designation:$scope.de});
               
               $scope.name ='';
               $scope.emid ='';
               $scope.de = '';
               
           }
       else{
           alert("Enter Employee Details");
       }
       console.log($scope.empname);  
}
});


app.controller('deleteController',function($scope,employeesFactory){
   //$scope.empname=empname;
     $scope.empname = employeesFactory.getEmployees();
    $scope.remove=function(item){
        var index=$scope.empname.indexOf(item)
        $scope.empname.splice(index,1);
    }
});
var index=0;
var flag= false;
app.controller('updateController',function($scope,employeesFactory){
    //$scope.empname=empname;
     $scope.empname = employeesFactory.getEmployees();
    $scope.upd=function(item){
        index=$scope.empname.indexOf(item);       
                $scope.name=$scope.empname[index].name;
                $scope.employeeID=$scope.empname[index].employeeID;
            $scope.designation=$scope.empname[index].designation;
        
        flag=true;
    }
    $scope.edit = function(){
    if(flag==true)
        {
        index++;
        console.log(index);
        var employeeToEdit = $scope.empname.find(x => x.id === index);
        employeeToEdit.name=$scope.name;
        employeeToEdit.employeeID=$scope.employeeID;
        employeeToEdit.designation=$scope.designation;
        
        
         $scope.name ='';
               $scope.employeeID ='';
               $scope.designation = '';
        }
        else{
            alert("Click any row to update");
        }
        flag=false;
    }
});











