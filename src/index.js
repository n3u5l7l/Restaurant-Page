import spawn from "./home.js"
import menus from "./menupage.js"
import contacts from "./contact.js"

const content = document.querySelector("#content");

function generateHeader(){
    const header = document.createElement("div");
    header.classList.add("header");

    const headertitle = document.createElement("div");
    headertitle.classList.add("title");
    headertitle.textContent = "Spooky Restaurant";

    const options = document.createElement("div");
    options.classList.add("options");

    const homebutton = document.createElement("div");
    homebutton.classList.add("home");
    homebutton.textContent = "Home";
    homebutton.addEventListener("click", changepage);

    const menubutton = document.createElement("div");
    menubutton.classList.add("menu");
    menubutton.textContent = "Menu";
    menubutton.addEventListener("click", changepage);

    const contactbutton = document.createElement("div");
    contactbutton.classList.add("contact");
    contactbutton.textContent = "Contact";
    contactbutton.addEventListener("click", changepage);

    options.appendChild(homebutton);
    options.appendChild(menubutton);
    options.appendChild(contactbutton);

    header.appendChild(headertitle);
    header.appendChild(options);

    return header;
}

function generateFooter(){
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Made by :))))))))))))))))";

    return footer;
}

const header = generateHeader();
const footer = generateFooter();

function changepage(e){
    content.textContent = "";
    content.appendChild(header);
    content.appendChild(footer);
    
    const homebutton = document.querySelector(".home");
    const menubutton = document.querySelector(".menu");
    const contactbutton = document.querySelector(".contact");

    if(this.textContent==="Home"){
        content.insertBefore(spawn, footer);
        this.classList.add("optionvisit");
        menubutton.classList.remove("optionvisit");
        contactbutton.classList.remove("optionvisit");
    }else if (this.textContent==="Menu"){
        content.insertBefore(menus, footer);
        this.classList.add("optionvisit");
        homebutton.classList.remove("optionvisit");
        contactbutton.classList.remove("optionvisit");

    }else{
        content.insertBefore(contacts, footer);
        this.classList.add("optionvisit");
        homebutton.classList.remove("optionvisit");
        menubutton.classList.remove("optionvisit");
    }
}
content.appendChild(header);
content.appendChild(spawn);
content.appendChild(footer);
document.querySelector(".home").classList.add("optionvisit");


console.log(spawn);