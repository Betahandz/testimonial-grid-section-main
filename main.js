// selected tags or elements
const testimonial = [...document.querySelectorAll(".testimonial")];

// conditions or options
let condition = true;
let iteration = 0;

// shuffing my array of testimonials
let mediaQuery = matchMedia("(max-width : 768px");
if(!mediaQuery.matches) {
    for(let x in testimonial) {
        let random = Math.floor(Math.random() * testimonial.length);
        let tmp = testimonial[x];
        testimonial[x] = testimonial[random];
        testimonial[random] = tmp;
    }
}

// this is me setting a promise, been a while, back to vanilla things
const order = (time, work) => {
   
    return new Promise((resolve, reject) => {
        if(condition) {
            setTimeout(() => {
                resolve(work());
                iteration++;
            }, time);
        }
        else {
            reject (work());
        }
    })
}

// creating the asynchronous function to make this happen
const loaded = async () => {
    try {
        for(let x in testimonial) {
            await order(200, () => testimonial[iteration].classList.add("show"))
        }
    }
    catch(err) {
        console.log("Da-Hubb");
    }
    finally {

    }
}

// the event listener - the event i want to listen for
window.onload = () => {
    loaded();
}

// window.onresize= () => console.log("resizing");