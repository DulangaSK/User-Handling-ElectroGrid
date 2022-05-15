$(document).ready(function() {
    if ($('#alertSuccess').text().trim() == "") {
        $('#alertSuccess').hide();
    }

    $('#alertError').hide();
})

// Register ============================================
$(document).on("click", "#btnRegister", function(event) {
	// Clear status messages
    $("#alertSuccess").text(""); 
    $("#alertSuccess").hide(); 
    $("#alertError").text(""); 
    $("#alertError").hide();
	
	// Form validation
    var status = validateUserForm();

    // If not valid
    if (status != true) {
        $("#alertError").text(status); 
        $("#alertError").show(); 
        return;
    }
    
    // If valid
    var type = ($("#hidUserSave").val() == "") ? "POST" : "PUT";

    // ajax communication
    $.ajax({
        url: "UserAPI",
        type: type,
        data: $("#formUser").serialize(),
        dataType: "text",
        complete: function(response, status) {
            onUserSaveComplete(response.responseText, status);
        }
    });
});


// after completing save request
function onUserSaveComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully saved");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divUserGrid").html(resultSet.data);

        } else if (resultSet.status.trim() === "error") { //if the json status is error
            //display error alert
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") { 
        //if the response status is error
        $("#alertError").text("Error while saving");
        $("#alertError").show();
    } else { 
        //if an unknown error occurred
        $("#alertError").text("Unknown error occurred while saving");
        $("#alertError").show();
    } 
    
     //resetting the form
    $("#hidUserSave").val("");
    $("#formItem")[0].reset();
}

// UPDATE
$(document).on("click", ".btnUpdate", function(event) 
{ 
    $("#hidUserSave").val($(this).data('userName')); 
    $("#acntNumber").val($(this).closest("tr").find('td:eq(0)').text()); 
    $("#fullName").val($(this).closest("tr").find('td:eq(1)').text()); 
    $("#email").val($(this).closest("tr").find('td:eq(2)').text()); 
    $("#NIC").val($(this).closest("tr").find('td:eq(3)').text()); 
    $("#address").val($(this).closest("tr").find('td:eq(4)').text());
    $("#mobileNumber").val($(this).closest("tr").find('td:eq(5)').text());
    $("#landpNumber").val($(this).closest("tr").find('td:eq(6)').text());
       
}); 

// DELETE
$(document).on("click",".btnRemove", function(event) {
    // ajax communication
    $.ajax({
        url: "UserAPI",
        type: "DELETE",
        data: "userName=" + $(this).data("userName"),
        dataType: "text",
        complete: function(response, status) {
            onUserDeleteComplete(response.responseText, status);
        }
    });
});

// after completing delete request
function onUserDeleteComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully deleted");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divUserGrid").html(resultSet.data);

        } else if (resultSet.status.trim() === "error") { //if the json status is error
            //display error alert
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") { 
        //if the response status is error
        $("#alertError").text("Error while deleting");
        $("#alertError").show();
    } else { 
        //if an unknown error occurred
        $("#alertError").text("Unknown error occurred while deleting");
        $("#alertError").show();
    } 
}

// CLIENT-MODEL ================================================
// FORM VALIDATION ============================================
function validateUserForm() {

    //Account Number
    if ($("#txtacntNumber").val().trim() == "") {
        return "Insert Account Number";
    }

    //Full Name
    if ($("#txtfullName").val().trim() == "") {
        return "Insert Full Name";
    }
    
    //Email
    if ($("#txtemail").val().trim() == "") {
        return "Insert Email";
    }
    
    //NIC
    if ($("#txtNIC").val().trim() == "") {
        return "Insert NIC";
    }
    
    //Address
    if ($("#txtaddress").val().trim() == "") {
        return "Insert Address";
    }
    
    //Mobile Number
    if ($("#txtmobileNumber").val().trim() == "") {
        return "Insert Mobile Number";
    }
    
    //Land Phone
    if ($("#txtlandpNumber").val().trim() == "") {
        return "Insert Land Phone";
    }
    
    //Username
    if ($("#txtuserName").val().trim() == "") {
        return "Insert Username";
    }
    
    //Password
    if ($("#txtpassword").val().trim() == "") {
        return "Insert Password";
    }
    
    //Confirm Password
    if ($("#txtconfirmPassword").val().trim() == "") {
        return "Confirm Password ";
    }
    

    return true;
}
 