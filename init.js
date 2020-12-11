function initGame() {
    //1. lépés: generáljuk ki a képeket.

    let defaultNumber = 6;
    //TODO ne mindig ugyanúgy rakja le a képet
    //Ha beletesszük egy tömbbe, hogy beforeend és afterbegin, akkor a tömbből random tudunk választani egyet. (Hol az elejére, hol a végére teszi)

    const pictureNumbers = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];

    const shuffleArray = pictureNumbers => {
        for (let index = pictureNumbers.length - 1; index > 0; index--) {
            const j = Math.floor(Math.random() * (index + 1));
            const temp = pictureNumbers[index];
            pictureNumbers[index] = pictureNumbers[j];
            pictureNumbers[j] = temp;

        }
        return pictureNumbers;
    }

    /*     let clickedNumber = 0; */

    const position = ["beforeend", "afterbegin"]
    const random = position[Math.floor(Math.random() * position.length)]
    /* console.log(random, position[random]) */
    let box = document.getElementById("picture-box");

    for (let index = 0; index < 1; index++) {
        console.log(shuffleArray(pictureNumbers));
             box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[0]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[1]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[2]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[3]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[4]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[5]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[6]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[7]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[8]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[9]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[10]}.png" alt=""></div>
        `);
        box.insertAdjacentHTML(random, `
         <div class="divPicture"><img src="./img/mongoose${pictureNumbers[11]}.png" alt=""></div>
        `);
        console.log(pictureNumbers)
    };
    console.log(shuffleArray(pictureNumbers));
    let pictures = box.querySelectorAll(".divPicture img");


    function pictureClick(e) {

        //0. Rátesszük a show class nevet.

        e.target.classList.add("show");
        //1. Mielőtt rátesszük a clicked class-t , megnézzük, hogy van-e már clicked class nevű elemünk,
        if (box.querySelector(".clicked")) {
            //2. Ha van, akkor összehasonlítjuk az e.target és a clicked class nevű elem src-jét. 
            if (e.target.getAttribute("src") === box.querySelector(".clicked").getAttribute("src")) {
                //4. Ha egyenlőek, akkor rátesszük a show class-t az e.target-re is, majd levesszük a clicked class nevet az előzőről
                e.target.classList.add("show1");
                box.querySelector(".clicked").classList.add("show1")
            } else {
                //3. Ha nem egyenlőek, akkor töröljük az összes show class-t az elemekről.
                let showCards = box.querySelectorAll(".show");
                for (let index = 0; index < showCards.length; index++) {
                    setTimeout(() => { showCards[index].classList.remove("show") }, 1000);
                }

            }
            box.querySelector(".clicked").classList.remove("clicked");


        } else {
            //5. Ha nincsen clicked class nevű elemünk, akkor rátesszük a clicked-et az e.targetre
            e.target.classList.add("clicked");
        }


        /*  e.target.parentElement.classList.toggle("clicked"); */
        /*  if (clickedNumber === 2) {
             let clickedPictures = box.querySelectorAll(".divPicture.clicked");
             for (let index = 0; index < clickedPictures.length; index++) {
                   clickedPictures[index].classList.remove("clicked");    
             }
             clickedNumber = 1;
           
         } else { 
             clickedNumber = clickedNumber + 1;  
         }
         e.target.parentElement.classList.add("clicked");  */
    }

    for (let index = 0; index < pictures.length; index++) {
        pictures[index].addEventListener("click", pictureClick);
    }
}
function reloadLocation() {
    const button = document.querySelector("#reset");
    button.addEventListener("click", () => location.reload());
};
window.addEventListener("load", initGame);
window.addEventListener("click", reloadLocation);