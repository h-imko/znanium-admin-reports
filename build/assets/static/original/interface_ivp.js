$(document).ready(function() {

    //SHOW-NEW-LIST-ITEM-FORM
    $("body").on("click", ".js-new-item__link", function(e){
        e.preventDefault();
        $(this).next(".new-item__form").fadeIn();
    });
    $(document).click(function (e){
        var div = $(".new-item");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".new-item__form").fadeOut();
        }
    });

    //SHOW-EDIT-LIST-ITEM-FORM
    $("body").on("click", ".js-edit-item__link", function(e){
        e.preventDefault();
        $(this).next(".edit-item__form").fadeIn();
    });
    $(document).click(function (e){
        var div = $(".edit");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".edit-item__form").fadeOut();
        }
    });


    $( document ).on( "keydown", function ( e ) {
        if ( e.keyCode === 27 ) { // ESC
            $(".new-item__form").fadeOut();
            $(".edit-item__form").fadeOut();
        }
    });



});