function Validate() {
    var checked = 0;

    //Reference the Table.
    var tblButtons = document.getElementById("tblButtons");

    //Reference all the CheckBoxes in Table.
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

    // if click Timeframe and Brand checkmarks, then move to the next page
    // window.location.href = "timeframe-brand.html";

    // if click Timeframe and Type checkmarks, then move to the next page
    // window.location.href = "timeframe-type.html";
};

