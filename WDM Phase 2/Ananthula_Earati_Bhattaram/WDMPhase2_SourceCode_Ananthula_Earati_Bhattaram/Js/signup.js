/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

        function signup()
        {
            
            var uname=document.getElementById('dc_firstname').value;
            var lastname=document.getElementById('dc_lastname').value; 
            var contact=document.getElementById('dc_contact').value; 
            var password=document.getElementById('dc_password').value; 
            var confirm_password=document.getElementById('dc_Confirmpassword').value; 
            var email=document.getElementById('dc_email').value;

            if(uname=='' | lastname=='' | contact=='' | password=='' | confirm_password=='' | email=='')
            {
                error.innerHTML = "<span style='color: red;'>"+
                        "Fields cannot be empty</span>"
                return false;
            }
            else
            {
                error.innerHTML = "";
            } 
            if(contact.length>10 | contact.length <10)
            {
                error.innerHTML="<span style='color: red;'>"+
                        "Please enter valid mobile number</span>";
                        return false;

            } 
            else
            {
                 error.innerHTML = "";   
            }
            if(email.indexOf('@')!=-1 & email.indexOf('.')!=-1)
            {
                 error.innerHTML = "";
            }
            else
            {
                error.innerHTML="<span style='color: red;'>"+
                        "Please enter valid Email ID</span>";
                        return false;
            }

            if(confirm_password == password)
            {
                return true;
            }         
            else
            {
                  error.innerHTML = "<span style='color: red;'>"+
                        "Password & Confirm password is not match</span>"
            }
            return false;
        }

