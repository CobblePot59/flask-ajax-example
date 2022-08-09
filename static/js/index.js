$(document).ready(function(){
    $('#gbutton').click(function(){
        $.ajax({
            url: '/data',
            type: 'GET',
            data: {
                'gbutton_key' : $('#gbutton')[0].innerText
            },
            datatype: 'json',
            success: function(response){
                alert(response)
            }
        });
        // console.log($('#gbutton')[0].innerText);
    });
    $('#pbutton').click(function(){
        $.ajax({
            url: '/data',
            type: 'POST',
            data: {
                'pbutton_key' : $('#pbutton')[0].innerText
            },
            datatype: 'json',
            success: function(response){
                alert(response)
            }
        });
        // console.log($('#pbutton')[0].innerText);
    });
});