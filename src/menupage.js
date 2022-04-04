const menupage = document.createElement("div");
menupage.classList.add("menupage");

function generateFoodLabel(imagelink, foodname, price){
    const foodinfo = document.createElement("div");
    foodinfo.classList.add("foodinfo");
    foodinfo.textContent=foodname;

    const contenttitle = document.createElement("div");
    contenttitle.classList.add("contenttitle");

    const images = document.createElement("img");
    images.src = `${imagelink}`;
    images.alt = foodname;

    const contentsection = document.createElement("div");
    contentsection.classList.add("contentsection");

    const contentabout = document.createElement("div");
    contentabout.classList.add("contentabout");
    contentabout.textContent="About:";

    const contents = document.createElement("div");
    contents.classList.add("content");
    contents.textContent=`This is a very delicious candy that grows from the cornfield
    we own. With our magical potions and rainwater, this candy Corn
    will surely bring you good health`

    const cost = document.createElement("cost");
    cost.classList.add("cost");
    cost.textContent="Cost: ";

    const costnumber = document.createElement("strong");
    costnumber.textContent=`$${price}`;

    const checkoutIcon = document.createElement("img");
    checkoutIcon.classList.add("svg");
    checkoutIcon.src="spooky/cart-arrow-right.svg";

    cost.appendChild(costnumber);
    cost.appendChild(checkoutIcon);

    contentsection.appendChild(contentabout);
    contentsection.appendChild(contents);
    contentsection.appendChild(cost);

    foodinfo.appendChild(contenttitle);
    foodinfo.appendChild(images);
    foodinfo.appendChild(contentsection);

    return foodinfo;
}
menupage.appendChild(generateFoodLabel(
    "spooky/candy-corn-g754cd41f9_1280.jpg", 
    "Spooky Corn", 
    "5.99"
));
menupage.appendChild(generateFoodLabel(
    "spooky/candy-ga5529a6e2_1280.jpg",
    "Spooky Gummy",
    "8.99"
));

export default menupage;
