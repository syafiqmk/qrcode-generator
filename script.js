$(document).ready(function() {

    $("#qrButton").on("click", function() {

        let text = $("#qrText").val();
        
        $("#result").html('');
        $("#result").qrcode(text);
    })
})