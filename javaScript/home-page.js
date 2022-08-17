/*an hien noi dung */
$(document).ready(function()
{
    $("#show").click(function(){
        $("div.obj").show();
    });
    $("#hide").click(function(){
        $("div.obj").hide();
    });
});

//them anh
function chooseFile(fileInput) {
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#display-image').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

//modal
$(document).ready(function() {
    var modal =$('.js-modal');
    var btn = $('.js-btn');
    var span = $('.js-close');

    btn.click(function () {
        modal.show();
    })

    span.click(function () {
        modal.hide();
    })

    &(window).onabort('click', function(e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
});
//modal list
$(document).ready(function() {
    var modal =$('.js-modal-like');
    var btn = $('.js-list');
    var span = $('.js-close-like');

    btn.click(function () {
        modal.show();
    })

    span.click(function () {
        modal.hide();
    })

    &(window).onabort('click', function(e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
});

//goto top  
$(document).ready(function() {
    $(window).scroll(function(event) {
       var gotoTop = $('html,body').scrollTop();
    });
    $('.logo').click(function(event) {
       $('html,body').animate({scrollTop: 0},1200); //thoi gian truot len dau trang 1200ml
    });
 });


