//Checking Bom Objects
var bomDiv = document.getElementById("BomDiv")
var x = true;

window.addEventListener('load',function(){
	bomDiv.innerHTML = "Browser Name::" + navigator.appName;
})

window.addEventListener('resize',function(){
	if(x==true){
		bomDiv.innerHTML = "Window is resized and screen size :: " + screen.width + "*" + screen.height;
		x = false;
	}
	else{
		bomDiv.innerHTML = "Browser Name::" + navigator.appName + " and screen size :: " + screen.width + "*" + screen.height;
		x = true;
	}
})


//Checking Dom Objects

class Employee{
	constructor(empid,empname){
		this.empid = empid;
		this.empname = empname;
	}

	display(){
		var x= "Employee id is:: "+this.empid+"  and   the employee name is:: "+this.empname;
		return x;
	}
}

var domEmpIdField = document.getElementById('empId');
var domEmpNameField = document.getElementById('empName');
var IdBgColor = domEmpIdField.style.backgroundColor;
var NameBgColor = domEmpNameField.style.backgroundColor;

domEmpIdField.addEventListener('focus',function(){
	domEmpIdField.style.backgroundColor = "skyblue";
})

domEmpIdField.addEventListener('blur',function(){
	domEmpIdField.style.backgroundColor = IdBgColor;
})

domEmpNameField.addEventListener('focus',function(){
	domEmpNameField.style.backgroundColor = "yellow";
})

domEmpNameField.addEventListener('blur',function(){
	domEmpNameField.style.backgroundColor = NameBgColor;
})


var domBtn = document.getElementById('domBtn');
var btnColor = domBtn.style.backgroundColor;

domBtn.addEventListener('click',function(){
	var empId = domEmpIdField.value;
	var empName = domEmpNameField.value;

	var employee = new Employee(empId,empName);
	document.getElementById('domDiv').innerHTML = employee.display();
})

domBtn.addEventListener('mouseover',function(){
	domBtn.style.backgroundColor = "white";
})

domBtn.addEventListener('mouseout',function(){
	domBtn.style.backgroundColor = btnColor;
})