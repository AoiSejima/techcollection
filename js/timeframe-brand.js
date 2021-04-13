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

        let techYear = tech.fields.year;

        let techBrand = tech.fields.brand;

        // adding techBrand as a class to each tech container
        // clicking amazon would only add amazon products to the container
        techContainer.classList.add(techBrand);

        if (techYear == '1964') {
            document.querySelector(".y_1964").appendChild(techContainer);
        }
        if (techYear == '1983') {
            document.querySelector(".y_1983").appendChild(techContainer);
        }
        if (techYear == '1984') {
            document.querySelector(".y_1984").appendChild(techContainer);
        }
        if (techYear == '1985') {
            document.querySelector(".y_1985").appendChild(techContainer);
        }
        if (techYear == '1991') {
            document.querySelector(".y_1991").appendChild(techContainer);
        }
        if (techYear == '1994') {
            document.querySelector(".y_1994").appendChild(techContainer);
        }
        if (techYear == '2004') {
            document.querySelector(".y_2004").appendChild(techContainer);
        }
        if (techYear == '2006') {
            document.querySelector(".y_2006").appendChild(techContainer);
        }
        if (techYear == '2007') {
            document.querySelector(".y_2007").appendChild(techContainer);
        }
        if (techYear == '2010') {
            document.querySelector(".y_2010").appendChild(techContainer);
        }
        if (techYear == '2012') {
            document.querySelector(".y_2012").appendChild(techContainer);
        }
        if (techYear == '2013') {
            document.querySelector(".y_2013").appendChild(techContainer);
        }
        if (techYear == '2014') {
            document.querySelector(".y_2014").appendChild(techContainer);
        }
        if (techYear == '2015') {
            document.querySelector(".y_2015").appendChild(techContainer);
        }
        if (techYear == '2016') {
            document.querySelector(".y_2016").appendChild(techContainer);
        }
        if (techYear == '2017') {
            document.querySelector(".y_2017").appendChild(techContainer);
        }
        if (techYear == '2018') {
            document.querySelector(".y_2018").appendChild(techContainer);
        }
        if (techYear == '2019') {
            document.querySelector(".y_2019").appendChild(techContainer);
        }
        if (techYear == '2020') {
            document.querySelector(".y_2020").appendChild(techContainer);
        }
        if (techYear == '2021') {
            document.querySelector(".y_2021").appendChild(techContainer);
        }
        if (techYear == 'N/A') {
            document.querySelector(".y_NA").appendChild(techContainer);
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
