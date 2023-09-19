/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

        function login()
        {
            var uname=document.getElementById('username').value;
            var password=document.getElementById('password').value; 
            if(uname=='' | password=='')
            {
                error.innerHTML = "<span style='color: red;'>"+
                        "Fields cannot be empty</span>"
                return false;
            }
            else
            {
                error.innerHTML = "";
            }           
            if(uname =="admin@instawash.com" & password == "admin12345")
            {
                
                document.getElementById("login-form").action="./AdminDashboard.html";
                return true;
             
            }
            else if(uname =="manager@instawash.com" & password =="manager12345")
            {
                document.getElementById("login-form").action="./Manage.html";
                return true;
            }
            else if(uname =="user@gmail.com" & password =="user123456")
            {
                
                document.getElementById("login-form").action="./UserOrders.html";
                return true;
            }
            else
            {
                  error.innerHTML = "<span style='color: red;'>"+
                        "Please enter valid credentials</span>"   
                return false;
            }
            return false;
        }
