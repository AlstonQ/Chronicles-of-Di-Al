
(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});

// Submit Answer
$("#submitAnswer").click(function () {
    var ruleTrivia = document.getElementById("ruleTrivia").value;
    var result = ruleTrivia.toString().toLowerCase();
    var finalResult =  result.includes("it's never goodbye, it's always see you again");
    if (finalResult == true) {
        window.location.href = "/Chronicles-of-Di-Al/ggwp";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer. Please Try again.";
    }
});

console.clear();
