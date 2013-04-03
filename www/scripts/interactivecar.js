$(document).ready(function(){
    $('#infoContainer').children().hide();
    $('#partInfoText').children().hide();
    
    $('#interactivecar').hover(
        function() {
            $('#closedCar').fadeOut(100);
        },
        function () {
            $('#closedCar').fadeIn(100);
        }
    );

    $('#carMap > area').hover(
        function() {
            partHover($(this).attr("target"));
        }, function() {
            partHoverEnd($(this).attr("target"))
        }
    );
});


/*  Called when one of the defined map areas is hovered on
    Displays the highlighted image using the given
    base id (eg urea) */
function partHover(backgroundStyle) {
    $('#' + backgroundStyle).fadeIn(100);
    $('#' + backgroundStyle + "InfoText").fadeIn(100);
}


/*  Called when one of the defined map areas is hovered off of
    hides all information pretaining to the previously hovered area */
function partHoverEnd(backgroundStyle) {
    $('#' + backgroundStyle).fadeOut(100);
    $('#' + backgroundStyle + "InfoText").fadeOut(100);
}