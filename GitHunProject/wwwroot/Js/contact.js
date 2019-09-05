

$(document).ready(function () {

    //create yiur local veriables
    
    var fName = null;
    var lName = null;
    var country = null;
    var subject = null;

   // get form data and save it into local variable

    
    
    $('#btnSubmit').click(function () {

        fName = $('#firstname').val();
        lName = $('#lastname').val();
        country = $('#country').val();
        subject = $('#subject').val();

        $('#fName').text('First Name: '+fName);
        $('#lName').text('Last Name: '+lName);
        $('#cntry').text('contry: ' +country);
        $('#sbjt').text('subject:' + subject);


        $('#divForm').hide();


    })

    //alert the saved data
});