//  Javascript Event Listeners

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//     Syntax: addEventListener(clickevent/event, function, useCapture)

const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false) ;
h2.removeEventListener("click", doSomething, false);

//  h2.addEventListener("click", (event) => {});
h2.addEventListener("click", function (event) {
    console.log(event.target);
    event.target.textContent = "Clicked";
})

//******************************************* 
//  useCapture working its way in when we set it to true
//  useCapture working its way out when we set it to false
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
} );

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener (
        "click",
        (event) => 
         {
             event.stopPropagation(); 
             // In this the backgroundColor will change to purple and rest will remain the same
             view.style.backgroundColor = "purple";
            //  event.target.style.backgroundColor = "purple";

             view.classList.add("purple");
             view.classList.remove("darkblue");
            // In this the outer box with bgcolor is dark-blue and the inner-box with bgcolor black with the text is My 2nd View ===> On applying this changes to outer-box purple and inner-box to blue with text Clicked.

            view.classList.toggle("purple");
            view.classList.toggle("darkblue");
            //  In this if the view class is set to darkblue it changes it to purple and vice-versa.
         }, false
    );

    div.addEventListener(
        "click",
        (event) => {
             event.stopPropagation();
            // In this the outer box backgroundColor is dark blue and the inner-box content changes to clicked and background color is blue.
            div.style.backgroundColor = "blue";
            // event.target.style.backgroundColor = "blue";

            div.classList.toggle("blue");
            div.classList.toggle("black");
            //  In this if the div class is set to black it changes it to blue and vice-versa.
        },
        false
    );

    h2.addEventListener(
        "click",
        (event) => {
              event.stopPropagation();
            // In this the outer box backgroundColor is dark blue and the inner-box content changes to clicked.
            event.target.textContent = "Clicked";

            const myText = event.target.textContent;
            myText === "My 2nd View"
            ? (event.target.textContent = "Clicked")
            : (event.target.textContent = "My 2nd View");
        },
        false
    );
            //  In this it works as a Toggle on First it appears as 
            // outer box with bgcolor darkBlue and inner box with bgcolor black and with text My 2nd View ===> outerbox purple inner box blue with content Clicked.
            
            const nav = document.querySelector("nav");
            nav.addEventListener("mouseover", (event) =>{
                event.target.classList.add("height100");
            });
            nav.addEventListener("mouseout",(event) => {
                event.target.classList.remove("height100");
            });
        };

        //****************************
        // A normal Form with one input and doesnt set to default state due to the event.preventDefault()
        
        document.addEventListener("readystatechange", (event) => {
            if(event.target.readyState === "complete") {
                console.log("readyState: complete");
                initApp();
            }
        });

        const initApp = () => {
            const view3 = document.querySelector("#view3");
            const myForm = view3.querySelector("#myForm");
            myForm.addEventListener("submit", (event) => {
                event.preventDefault();
                console.log("submit event");
            });
        };