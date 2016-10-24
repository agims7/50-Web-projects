$(document).ready(function () {
    var headclix = 0;
    var eyesnoseclix = 0;
    var mouthclix = 0;

    $("#head").click(function () {
        if (headclix < 4) {
            $("#head").animate({ left: "-=500px" }, 500)
            headclix += 1;
        }
        else {
            $("#head").animate({ left: "0px" }, 500)
            headclix = 0;
        }
    });

    $("#eyesnose").click(function () {
        if (eyesnoseclix < 4) {
            $("#eyesnose").animate({ left: "-=500px" }, 500)
            eyesnoseclix += 1;
        }
        else {
            $("#eyesnose").animate({ left: "0px" }, 500)
            eyesnoseclix = 0;
        }
    });

    $("#mouth").click(function () {
        if (mouthclix < 4) {
            $("#mouth").animate({ left: "-=500px" }, 500)
            mouthclix += 1;
        }
        else {
            $("#mouth").animate({ left: "0px" }, 500)
            mouthclix = 0;
        }
    });
});