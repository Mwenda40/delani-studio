$(Document).ready(function(){
    $('#designText').hide();
    $('#design').click(function(){
        $('#designText').toggle();
        // $('#design').toggle();
    })
    $('#developmentText').hide();
    $('#development').click(function(){
        $('#developmentText').toggle();
        // $('#design').toggle();
    })
    $('#productText').hide();
    $('#product').click(function(){
        $('#productText').toggle();
        // $('#design').toggle();
    })
    $('.portfolio-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });

});
function reply(){
    var user = document.getElementById(user);
    alert(
        "thank you for reaching out to us " + user
    );

}