function validation(){
      var user = document.getElementById('user').value;
      
      var roll = document.getElementById('roll').value;
      var contact = document.getElementById('contact').value;
      var instname = document.getElementById('instname').value;
      var pass = document.getElementById('pass').value;


      if(user == "" ){
          document.getElementById('username').innerHTML = " Fill this field!";
          return false;
      }
      if(!isNaN(user)){
        document.getElementById('username').innerHTML = " Please enter valid Name!";
        return false;
      }


    if(roll == "" ){
        document.getElementById('rollno').innerHTML = " Fill this field!";
        return false;
    }
    if(isNaN(roll)){
        document.getElementById('rollno').innerHTML = " Please enter your valid roll no. !";
        return false;
    }

    if(contact == "" ){
        document.getElementById('phne').innerHTML = " Fill this field!";
        return false;
    }
    if(isNaN(contact)){
        document.getElementById('phne').innerHTML = " Please enter a valid Contact Number!";
        return false;
    }
    if(contact.length!=10){
        document.getElementById('phne').innerHTML = " Please enter a valid Contact Number!";
        return false;
    }

    if(instname == "" ){
        document.getElementById('inst').innerHTML = " Fill this field!";
        return false;
    }

    if(pass == "" ){
        document.getElementById('pwd').innerHTML = " Fill this field!";
        return false;
    }
    if(pass.length <=8){
        document.getElementById('pwd').innerHTML = " Please enter valid Password!";
        return false;
      }
}