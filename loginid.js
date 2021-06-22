function login()
	{
        var user = document.getElementById('user').value;
		var passd = document.getElementById('passd').value;
	
		if(user =="")
		{
			document.getElementById('username').innerHTML = " Please enter Name!";
          return false;
		}
		else if(passd=="")
		{
        	document.getElementById('pwd1').innerHTML = " Please enter the password!";
        return false;
		}
		else if(passd.length <=8){
            document.getElementById('pwd1').innerHTML = " Please enter valid Password!";
            return false;
          }
		else
		{
	        alert('Thank You for Login & You are Redirecting to Eduzone Website *Website is in progress you do not need to register & login more than once :) *')
  
       window.location = "";
			}
	}
	