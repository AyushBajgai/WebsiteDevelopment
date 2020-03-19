
alert(userguess);
exit()

function guess()
{

	userguess=document.getElementById("userguess").value;
	
	if(userguess<30)
	{
		document.getElementById("result").innerHTML="Your guess is too low";
	}
	else if(userguess>30 && userguess<45)
	{
		document.getElementById("result").innerHTML="Your guess is near about";
	}
	else if(userguess>45 && userguess<55)
	{
		document.getElementById("result").innerHTML="Your guess is slightly higher";
	}
	else if(userguess == 45)
	{
		document.getElementById("result").innerHTML="Your guess is correct";
	}
	else
	{
		document.getElementById("result").innerHTML="Your guess is higher";
	}
	return false;
}