$(document).ready(function(){
    $('#infoContainer').children().hide();
    $('#partInfoText').children().hide();


    $('#interactivecar').hover(
        function() {
            $('#closedCar').fadeOut();
        },
        function () {
            $('#closedCar').fadeIn();
        }
    );

    $('#batteryMap').hover(
        function() {
            partHover("#battery", "Battery")
        }, function() {
            partHoverEnd("#battery")
        }
    );

    $('#engineMap').hover(
        function() {
            partHover("#engine", "Engine")
        }, function() {
            partHoverEnd("#engine")
        }
    );

    $('#gearboxMap').hover(
        function() {
            partHover("#gearbox", "Gearbox")
        }, function() {
            partHoverEnd("#gearbox")
        }
    );

    $('#inverterMap').hover(
        function() {
            partHover("#inverter", "Inverter")
        }, function() {
            partHoverEnd("#inverter")
        }
    );

    $('#motorMap').hover(
        function() {
            partHover("#motor", "Motor")
        }, function() {
            partHoverEnd("#motor")
        }
    );

    $('#tankMap').hover(
        function() {
            partHover("#tank", "Tank")
        }, function() {
            partHoverEnd("#tank")
        }
    );

    $('#transMap').hover(
        function() {
            partHover("#trans", "Transmission")
        }, function() {
            partHoverEnd("#trans")
        }
    );

    $('#ureaMap').hover(
        function() {
            partHover("#urea", "Urea")
        }, function() {
            partHoverEnd("#urea")
        }
    );
});


/*  Called when one of the defined map areas is hovered on
    Displays the highlighted image and the text using the given
    base id (eg #urea) and text */
function partHover(backgroundStyle, text) {
    $(backgroundStyle + "Info").fadeIn();
    $(backgroundStyle + "InfoText").html(text);
    $(backgroundStyle + "InfoText").fadeIn();
}


/*  Called when one of the defined map areas is hovered off of
    hides all information pretaining to the previously hovered area */
function partHoverEnd(backgroundStyle) {
    $(backgroundStyle + "InfoText").fadeOut();
    $(backgroundStyle + "Info").fadeOut();
}