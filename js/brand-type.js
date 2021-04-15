// console.log("Is my script working?");

let Airtable = require("airtable");
// console.log(Airtable);

let base = new Airtable({ apiKey: "keyHgmsY3PeOahiOd" }).base(
    "applJFfaZF765xTG2"
);

//get "tech_collection" airtable base, select all the records (records = rows)
// specify function that will recieve the data
base("tech_collection").select({}).eachPage(gotPageOfTechs, gotAllTechs);

// an empty array to hold the our data
// const is another word for var 
const techs = [];

// callback function that receives our data
function gotPageOfTechs(records, fetchNextPage) {
    console.log("gotPageOfTechs()");
    // push(add) the records from this page to our empty array
    techs.push(...records);
    // request more pages
    fetchNextPage();
;}

// call back function that is called when all pages are loaded
function gotAllTechs(err) {
    console.log("gotAllTechs()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the techs
    consoleLogTechs();

    try {
        showTechs();
    } catch (e) {
        console.error(e);
    }
};

// just loop through the techs and console.log them
function consoleLogTechs() {
    console.log("consoleLogTechs()");
    techs.forEach((tech) => {
      console.log("Tech:", tech);
    });
};
  
// loop through airtable data, and display them onto our page
function showTechs() {
    console.log("showTechs()");
    techs.forEach((tech) => {
        // let techTitle = document.createElement("h3");
        // techTitle.innerText = tech.fields.title;
        // document.body.appendChild(techTitle);

        // creating a new div container for EACH tech item
        // haven't added to the page yet by appending
        let techContainer = document.createElement("div");
        techContainer.classList.add("tech-container");

        // creating a new tech-img elemtnt
        let techImage = document.createElement("img");
        techImage.classList.add("tech-image");
        techImage.src = tech.fields.img[0].url;
        // adding the image to the tech container
        techContainer.appendChild(techImage);

        let techType = tech.fields.type;

        let techBrand = tech.fields.brand;

        // adding techBrand as a class to each tech container
        // clicking amazon would only add amazon products to the container
        techContainer.classList.add(techBrand);

        if (techType == 'phone') {
            document.querySelector(".click-phone").appendChild(techContainer);
        }
        if (techType == 'tablet') {
            document.querySelector(".click-tablet").appendChild(techContainer);
        }
        if (techType == 'computer') {
            document.querySelector(".click-computer").appendChild(techContainer);
        }
        if (techType == 'keyboard') {
            document.querySelector(".click-keyboard").appendChild(techContainer);
        }
        if (techType == 'mouse') {
            document.querySelector(".click-mouse").appendChild(techContainer);
        }
        if (techType == 'watch') {
            document.querySelector(".click-watch").appendChild(techContainer);
        }
        if (techType == 'game') {
            document.querySelector(".click-game").appendChild(techContainer);
        }
        if (techType == 'music') {
            document.querySelector(".click-music").appendChild(techContainer);
        }

        // Get all buttons with class="brand" inside the container
        var activeBrand = document.getElementsByClassName("brand");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < activeBrand.length; i++) {
          activeBrand[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }

        if (techContainer.classList.contains("Apple")){
          techContainer.style.display = "flex";
        } else {
          techContainer.style.display = "none";
        }

        document.querySelector(".click-3Dconnexion").addEventListener("click", function () {
            if (techContainer.classList.contains("3Dconnexion")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Acer").addEventListener("click", function () {
            if (techContainer.classList.contains("Acer")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Amazon").addEventListener("click", function () {
            if (techContainer.classList.contains("Amazon")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Apple").addEventListener("click", function () {
            if (techContainer.classList.contains("Apple")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Asus").addEventListener("click", function () {
            if (techContainer.classList.contains("Asus")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Bang_Olufsen").addEventListener("click", function () {
            if (techContainer.classList.contains("Bang_Olufsen")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Beats").addEventListener("click", function () {
            if (techContainer.classList.contains("Beats")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Blackberry").addEventListener("click", function () {
            if (techContainer.classList.contains("Blackberry")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Boring_Phone").addEventListener("click", function () {
            if (techContainer.classList.contains("Boring_Phone")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Bose").addEventListener("click", function () {
            if (techContainer.classList.contains("Bose")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Cherry_MX").addEventListener("click", function () {
            if (techContainer.classList.contains("Cherry_MX")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Dell").addEventListener("click", function () {
            if (techContainer.classList.contains("Dell")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Eluktronic").addEventListener("click", function () {
            if (techContainer.classList.contains("Eluktronic")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-FitBit").addEventListener("click", function () {
            if (techContainer.classList.contains("FitBit")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Google").addEventListener("click", function () {
            if (techContainer.classList.contains("Google")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-HP").addEventListener("click", function () {
            if (techContainer.classList.contains("HP")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Huawei").addEventListener("click", function () {
            if (techContainer.classList.contains("Huawei")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Jabra").addEventListener("click", function () {
            if (techContainer.classList.contains("Jabra")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Jaybird").addEventListener("click", function () {
            if (techContainer.classList.contains("Jaybird")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-JBL").addEventListener("click", function () {
            if (techContainer.classList.contains("JBL")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Lenovo").addEventListener("click", function () {
            if (techContainer.classList.contains("Lenovo")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-LG").addEventListener("click", function () {
            if (techContainer.classList.contains("LG")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Logitech").addEventListener("click", function () {
            if (techContainer.classList.contains("Logitech")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Microsoft").addEventListener("click", function () {
            if (techContainer.classList.contains("Microsoft")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Motorola").addEventListener("click", function () {
            if (techContainer.classList.contains("Motorola")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Nintendo").addEventListener("click", function () {
            if (techContainer.classList.contains("Nintendo")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-None").addEventListener("click", function () {
            if (techContainer.classList.contains("None")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-OnePlus").addEventListener("click", function () {
            if (techContainer.classList.contains("OnePlus")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Oppo").addEventListener("click", function () {
            if (techContainer.classList.contains("Oppo")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Palm").addEventListener("click", function () {
            if (techContainer.classList.contains("Palm")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Razer").addEventListener("click", function () {
            if (techContainer.classList.contains("Razer")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Samsung").addEventListener("click", function () {
            if (techContainer.classList.contains("Samsung")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Senheiser").addEventListener("click", function () {
            if (techContainer.classList.contains("Senheiser")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Sony").addEventListener("click", function () {
            if (techContainer.classList.contains("Sony")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-Vivo").addEventListener("click", function () {
            if (techContainer.classList.contains("Vivo")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
});
}
