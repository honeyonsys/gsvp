jQuery(document).ready(function(){
    // alert('bhak '+app.gApiKey);
    $('#google-signin-scope').attr('content', app.gEmail)
    $('#google-signin-client_id').attr('content', app.gClientId)    
})