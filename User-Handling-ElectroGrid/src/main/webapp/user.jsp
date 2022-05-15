<%@page import="model.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
       <meta charset="ISO-8859-1">
       <title>User Details</title>
       <link rel="stylesheet" href="Views/bootstrap.min.css">
       <script src="Components/jquery.min.js"></script>
       <script src="Components/user.js"></script>
    </head>
    <body>
       <div class="container"> 
           <div class="row">
               <div class="col-8"> 
                   <h1 class="m-3">User details</h1> 
                   <form id="formUser" name="formUser" method="post" action="user.jsp"> 
                   
                       <!-- Account Number -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Account Number: </span>
                           </div>
                           <input type="text" id="txtacntNumber" name="txtacntNumber">
                       </div>
                       
                       <!-- Full Name -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Full Name: </span>
                           </div>
                           <input type="text" id="txtfullName" name="txtfullName">
                       </div>
                       
                       <!-- Email -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Email: </span>
                           </div>
                           <input type="text" id="txtemail" name="txtemail">
                       </div>
                       
                       <!-- NIC --> 
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">NIC: </span>
                           </div>
                           <input type="text" id="txtNIC" name="txtNIC">
                       </div>
                       
                       <!-- Address -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Address: </span>
                           </div>
                           <input type="text" id="txtaddress" name="txtaddress">
                       </div>
                       
                       <!-- Mobile Number -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Mobile Number: </span>
                           </div>
                           <input type="text" id="txtmobileNumber" name="txtmobileNumber">
                       </div>
                       
                       <!-- Land Phone -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Land Phone: </span>
                           </div>
                           <input type="text" id="txtlandpNumber" name="txtlandpNumber">
                       </div>
                       
                       <!-- Username -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Username: </span>
                           </div>
                           <input type="text" id="txtuserName" name="txtuserName">
                       </div>
                       
                       <!-- Password -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Password: </span>
                           </div>
                           <input type="text" id="txtpassword" name="txtpassword">
                       </div>
                       
                       <!-- Confirm Password -->
                       <div class="input-group input-group-sm mb-3">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="lblName">Confirm Password: </span>
                           </div>
                           <input type="text" id="txtconfirmPassword" name="txtconfirmPassword">
                       </div>
                       
                       <input type="button" id="btnSave" value="Register" class="btn btn-primary">
                       
                   </form>
                   
                   <div id="alertSuccess" class="alert alert-success"></div> 
                   <div id="alertError" class="alert alert-danger"></div>
                   
               </div>
           </div>
        
           <br>
        
           <div class="row">
               <div class="col-12" id="colUser">
 
               </div>
           </div>
           
           <div id="divUserGrid">
						<%
							User user = new User (); 
							out.print(user.DisplayUsers());
						%>
					</div>
       </div>
    </body>
</html>