function Validate() {
    var checked = 0;

    var tblButtons = document.getElementById("button-container");

    //Reference all the CheckBoxes in container.
    var chks = tblButtons.getElementsByTagName("INPUT");

    //Loop and count the number of checked CheckBoxes.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            checked++;
        }
    }

    if (checked > 0) {
        alert(checked + " CheckBoxe(s) are checked.");
        return true;
    } else {
        alert("Please select CheckBoxe(s).");
        return false;
    }

    document.querySelector(".click-music").addEventListener("click", function () {

        if (techContainer.classList.contains("music")){
              techContainer.style.display = "flex";
            } else {
              techContainer.style.display = "none";
            }

    })

    // if click Timeframe and Brand checkmarks, then move to the next page
    // window.location.href = "timeframe-brand.html";

    // if click Timeframe and Type checkmarks, then move to the next page
    // window.location.href = "timeframe-type.html";
};

