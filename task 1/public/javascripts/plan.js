
let basic=`<h3 class="text-dark lead">You have selected <b>Basic</b> pack:</h3><ul class="text-secondary list-unstyled">
<li><i class="fas fa-check me-2"></i> Get started with <span class="text-dark fw-bold">messaging</span></li>
<li><i class="fas fa-check me-2"></i> Flexible <span class="text-dark fw-bold">team meetings</span></li>
<li><i class="fas fa-check me-2"></i> <span class="text-dark fw-bold">5TB</span> cloud storage</li>
</ul>`

let startup=`<h3 class="text-dark lead">You have selected <b>Startup</b> pack:</h3>
<ul class="text-dark list-unstyled">
<li><i class="fas fa-check me-2"></i> <span class="text-secondary">All features in </span> Basic</li>
<li><i class="fas fa-check me-2"></i>  <span class="text-secondary">Flexible</span> call scheduling</li>
<li><i class="fas fa-check me-2"></i>15TB <span class="text-secondary">cloud storage</span> </li>
</ul>
`

let enterprise=`
<h3 class="text-dark lead">You have selected <b>Enterprise</b> pack:</h3>
<ul class="text-secondary list-unstyled">
<li><i class="fas fa-check me-2"></i> All features in <span class="text-dark fw-bold">Startup</span></li>
<li><i class="fas fa-check me-2"></i> Growth <span class="text-dark fw-bold">oriented</span></li>
<li><i class="fas fa-check me-2"></i> <span class="text-dark fw-bold">Unlimited</span> cloud storage</li>
</ul>
`

$('#startup').click(function (e) { 
    $('#exampleModal').modal();
    $('.modal-body').html(startup);
    $('#subform').removeClass().addClass('startup');
});

$('#enterprise').click(function (e) { 
    $('#exampleModal').modal();
    $('.modal-body').html(enterprise);
    $('#subform').removeClass().addClass('enterprise');
});

$('#basic').click(function (e) { 
    $('#exampleModal').modal();
    $('.modal-body').html(basic);
    $('#subform').removeClass().addClass('basic');
});

let no,sub,amount;

$('.save').click(function (e) {
    if(no !== undefined && no !== 0)
    { 
        $.post('/plans/sub', {amount:amount,count:no,sub:sub},
            function (data, textStatus, jqXHR) {
                $('#exampleModal').modal('hide');
                if(data.status)
                {
                    myFunction(data.message,'mediumseagreen');
                    clear();
                }
                else{
                    if(data.pending)
                        $('#exampleModal1').modal();
                    else
                    {
                        myFunction(data.message,'#dc3545');
                        clear();
                    }
                }
            },
        );
    }
    else
        myFunction("Please provide number of users","#dc3545");
});

$('#subval').keyup(function(e){
   count();
})

$('#subval').change(function (e) { 
    count();    
});


function myFunction(message,color) {
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    x.style.backgroundColor = color;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


function count(){
    no=$('#subval').val();
    sub=$('#subform').attr('class');
    amount=0;
    if(sub === 'basic')
        amount=no*10;
    else if(sub === 'enterprise')
        amount=no*35;
    else
        amount=no*24;
    $('#amount').text("Amount: "+amount);
}

$('#exampleModal').on('hidden.bs.modal', function (event) {
    $('#subval').val('')
    $('#amount').text("Amount: "+0);
  })

$('#exampleModal1').on('hidden.bs.modal', function (event) {
    clear();
    $('#subval').val('')
    $('#amount').text("Amount: "+0);
});  

$('#update').click(function(e){
    $.post('/plans/update',  {amount:amount,count:no,sub:sub},
    function (data, textStatus, jqXHR) {
        if(data.status)
            myFunction(data.message,'mediumseagreen');
        else
            myFunction(data.message,'#dc3545');
        clear();
    });
})

function clear(){
    no=undefined;
    sub=undefined;
    amount=undefined;
}