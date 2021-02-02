$(document).ready(function(){
    $("#enter-data").click(function(){
        $(this).hide();
    });
    
    $('body').click(function(event){
        var id = $(event.target).attr('id');
       
        if(id !== 'enter-data')
        {
            $('#enter-data').show();
        }
    })
});