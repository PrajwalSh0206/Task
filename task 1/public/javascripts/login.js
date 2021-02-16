$('#signblock').click(function(){
    $('#signform').slideDown();
    $('.createform').slideUp();
    clear();
});

$('#create').click(function (e) { 
    e.preventDefault();
    if($('#signform').is(':visible')){
        $('#signform').slideUp();
        $('.createform').slideDown();
        clear();
    }
    else
    {
        let check=true;
        $("#basic-addon1, #basic-addon2, #basic-addon3, #basic-addon4").each(function(){ 
            console.log($(this).html())
            if($(this).html() != '<i class="fas text-secondary fa-check-circle"></i>')
                check=false;
        })
        if(check)
        {
            let formValues= $('#createform').serialize();
            post('/signup',formValues,'createform');
        }   
        else
            myFunction("Form Data invalid",'#dc3545');
    }
});

$('#sign').click(function(e){  
    e.preventDefault();
    let check=true;
    $("#basic-addon5, #basic-addon6").each(function(){ 
        if($(this).html() != '<i class="fas text-secondary fa-check-circle"></i>')
            check=false;
    })
    if(check)
    {
        let formValues= $('#signform').serialize();
        post('/login',formValues,'signform');
    }
    else
        myFunction('Invalid Form Data','#dc3545');
});

$('#checksignpass').change(function () { 
        if(this.checked) 
            $(".signpassword").prop("type", "text");
        else
           $(".signpassword").prop("type", "password");
});

$('#signpass').change(function () { 
    if(this.checked) 
        $(".password").prop("type", "text");
    else
       $(".password").prop("type", "password");
});

$('#formname').keyup(function (e) { 
    if($(this).val() !== '')
    $('#basic-addon1').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon1').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

//Email Validation
var emailvalidate=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$('#formemail').keyup(function (e) { 
    if($(this).val() !== '' && emailvalidate.test($(this).val()))
    $('#basic-addon2').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon2').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

$('#formname').keyup(function (e) { 
    if($(this).val() !== '' && ($(this).val()).length>6)
    $('#basic-addon1').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon1').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

$('#createpass1').keyup(function (e) { 
    if($(this).val().length>6)
    $('#basic-addon3').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon3').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

$('#createpass2').keyup(function (e) { 
    if($(this).val() === $('#createpass1').val())
    $('#basic-addon4').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon4').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

$('#signemail').keyup(function (e) { 
    if($(this).val() !== '' & emailvalidate.test($(this).val()))
    $('#basic-addon5').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon5').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

$('#signpass').keyup(function (e) { 
    if($(this).val().length>6)
    $('#basic-addon6').html(`<i class="fas text-secondary fa-check-circle"></i>`);
    else
    $('#basic-addon6').html(`<i class="fas text-secondary fa-times-circle"></i>`);
});

//Recurring Functions
function post(url,formValues,form){
    $.post(url, formValues,
            function (data, textStatus, jqXHR) {
                if(data.status)
                {
                    if(form === 'signform')
                    {
                        clear();
                        window.location="http://localhost:3000/plans";
                    }
                    else
                    {
                        myFunction(data.message,'mediumseagreen');
                        clear();
                    }
                }
                else{
                    myFunction(data.message,'#dc3545');
                }
            },
        );
}

function myFunction(message,color) {
    var x = document.getElementById("snackbar");
    x.innerHTML=message;
    x.className = "show";
    x.style.backgroundColor =color;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

function clear(){
    $('#createform')[0].reset();
    $('#signform')[0].reset();
    $("#basic-addon1, #basic-addon2, #basic-addon3, #basic-addon4, #basic-addon5, #basic-addon6").html(`<i class="fas text-secondary fa-times-circle"></i>`);
}
