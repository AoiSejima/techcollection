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

        let techType = tech.fields.type;     

        techContainer.classList.add(techType);

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

        document.querySelector(".click-phone").addEventListener("click", function () {
            if (techContainer.classList.contains("phone")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-tablet").addEventListener("click", function () {
            if (techContainer.classList.contains("tablet")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-computer").addEventListener("click", function () {
            if (techContainer.classList.contains("computer")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-keyboard").addEventListener("click", function () {
            if (techContainer.classList.contains("keyboard")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-mouse").addEventListener("click", function () {
            if (techContainer.classList.contains("mouse")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-watch").addEventListener("click", function () {
            if (techContainer.classList.contains("watch")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-game").addEventListener("click", function () {
            if (techContainer.classList.contains("game")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })
        document.querySelector(".click-music").addEventListener("click", function () {
            if (techContainer.classList.contains("music")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }
        })

        // if (type === 'phone') {
        //     let techType = document.createElement("h3");
        //     techType.innerText = tech.fields.type;
        //     document.body.appendChild(techType);
        //     let techSize = document.createElement("h3");
        //     techSize.innerText = tech.fields.size;
        //     document.body.appendChild(techSize);
        //     let techImage = document.createElement("img");
        //     techImage.classList.add("tech-image");
        //     techImage.src = tech.fields.img[0].url;
        //     document.body.appendChild(techImage);
        // }

        // typeFilter.forEach((type) => { 
        //     if (type === 'phone') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     }
        //     if (type === 'tablet') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     } 
        //     if (type === 'computer') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     }
        //     if (type === 'keyboard') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     } 
        //     if (type === 'mouse') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     }
        //     if (type === 'watch') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     } 
        //     if (type === 'game') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     }
        //     if (type === 'music') {
        //         let techType = document.createElement("h3");
        //         techType.innerText = tech.fields.type;
        //         document.body.appendChild(techType);
        //         let techSize = document.createElement("h3");
        //         techSize.innerText = tech.fields.size;
        //         document.body.appendChild(techSize);
        //         let techImage = document.createElement("img");
        //         techImage.classList.add("tech-image");
        //         techImage.src = tech.fields.img[0].url;
        //         // adding the image to the tech container
        //         techContainer.appendChild(techImage);
        //     } 

        // })
});
}