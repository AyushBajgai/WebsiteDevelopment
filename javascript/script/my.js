
/* Displaying data type
a=10;
b="20";
alert(typeof(a));

alert(typeof(b));
*/

// Making alert box
function hello(){
	alert("Hello World");
}

//For closing the window
function closewindow(){
// Assigning the variable named as makeSure	
	let makeSure=confirm("Are you sure want to close this window?");

	if(makeSure==true){
// Built in function i.e.(window.close())		
		window.close();
	}
}

//Calculation of Sum
function sum(){
	let n1,n2,sum;
	n1=parseInt(prompt("Enter the first number: "));
	n2=parseInt(prompt("Enter the second number: "));

	sum=n1+n2;
	alert("The sum of "+n1+"and"+n2+"is: "+sum);
}

//Printing pattern
function pattern(){
	for (var i = 0; i <= 5; i++)
	{
		for (var j=0; j <=i; j++)
		{
			if(i%2==0)
			{
				document.write("+");
			}
			else{
				document.write("#");
			}
		}
		document.write("<br/>")
	}
}	

//Validate form
function validateForm()
{
	let uname,upass;
// Taking username and password from Form
	uname=document.getElementById("username").value;
	upass=document.getElementById("Password").value;
		if (uname=="admin" && upass=="admin") 
		{
			window.location="https://www.facebook.com";
			document.getElementById("Error").innerHTML="<p>Password Matched</p>";
		}
		else if (uname=="" && upass=="")
		 {
		 	document.getElementById("Error").innerHTML="<p>Username and Password is required</p>";
		 }
		 else if(uname=="")
		 {
		 	document.getElementById("Error").innerHTML="<p>Username required</p>";
		 }
		 else if(upass=="")
		 {
		 	document.getElementById("Error").innerHTML="<p>Password required</p>";
		 }
		else
		 {
		 	document.getElementById("Error").innerHTML="<p>Username and Password Not Matched</p>";
		 }


	return false;
}

//Array function
function names(){
names=["ram","shyam","gita","heera"];

document.write(names[10]);
console.log(names[10]);

document.write(names.length);
for (i = 0;i<names.length;i++)
{
	document.write(names[i]+"<br/>");
}

//Adding items to array	
names.push("Anita","Rishi","Anish");
names.forEach(function(value ,key ,array){
	document.write("<br/>"+" Hello "+ value + key);})

//To remove last item
names.pop();
names.forEach(function(value ,key ,array){
	document.write("<br/>"+" Hello "+ value + key);})
}
