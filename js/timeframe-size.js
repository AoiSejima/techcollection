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

        let techSize = tech.fields.size;

        let techYear = tech.fields.year;     

        techContainer.classList.add(techYear);

        if (techSize == '0') {
            document.querySelector(".s_0").appendChild(techContainer);
        }
        if (techSize == '1') {
            document.querySelector(".s_1").appendChild(techContainer);
        }
        if (techSize == '2') {
            document.querySelector(".s_2").appendChild(techContainer);
        }
        if (techSize == '3') {
            document.querySelector(".s_3").appendChild(techContainer);
        }
        if (techSize == '4') {
            document.querySelector(".s_4").appendChild(techContainer);
        }
        if (techSize == '5') {
            document.querySelector(".s_5").appendChild(techContainer);
        }
        if (techSize == '6') {
            document.querySelector(".s_6").appendChild(techContainer);
        }
        if (techSize == '7') {
            document.querySelector(".s_7").appendChild(techContainer);
        }
        if (techSize == '8') {
            document.querySelector(".s_8").appendChild(techContainer);
        }
        if (techSize == '9') {
            document.querySelector(".s_9").appendChild(techContainer);
        }
        if (techSize == '10') {
            document.querySelector(".s_10").appendChild(techContainer);
        }

        document.querySelector(".y_1964").addEventListener("click", function () {
            if (techContainer.classList.contains("1964")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_1983").addEventListener("click", function () {
            if (techContainer.classList.contains("1983")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_1984").addEventListener("click", function () {
            if (techContainer.classList.contains("1984")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_1985").addEventListener("click", function () {
            if (techContainer.classList.contains("1985")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_1991").addEventListener("click", function () {
            if (techContainer.classList.contains("1991")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_1994").addEventListener("click", function () {
            if (techContainer.classList.contains("1994")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2004").addEventListener("click", function () {
            if (techContainer.classList.contains("2004")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2006").addEventListener("click", function () {
            if (techContainer.classList.contains("2006")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2007").addEventListener("click", function () {
            if (techContainer.classList.contains("2007")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2010").addEventListener("click", function () {
            if (techContainer.classList.contains("2010")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2012").addEventListener("click", function () {
            if (techContainer.classList.contains("2012")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2013").addEventListener("click", function () {
            if (techContainer.classList.contains("2013")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2014").addEventListener("click", function () {
            if (techContainer.classList.contains("2014")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2015").addEventListener("click", function () {
            if (techContainer.classList.contains("2015")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2016").addEventListener("click", function () {
            if (techContainer.classList.contains("2016")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2017").addEventListener("click", function () {
            if (techContainer.classList.contains("2017")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2018").addEventListener("click", function () {
            if (techContainer.classList.contains("2018")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2019").addEventListener("click", function () {
            if (techContainer.classList.contains("2019")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2020").addEventListener("click", function () {
            if (techContainer.classList.contains("2020")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".y_2021").addEventListener("click", function () {
            if (techContainer.classList.contains("2021")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
});
}
