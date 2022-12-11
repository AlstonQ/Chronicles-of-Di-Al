
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
    var movieTrivia = document.getElementById("movieTrivia").value;
    var result = movieTrivia.toString().toLowerCase();
    var finalResult = result.includes("chutiya saala");
    if (finalResult == true) {
        window.location.href = "/Chronicles-of-Di-Al/almostthere";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer. Please Try again.";
    }
});

console.clear();
