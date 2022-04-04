import spawn from "./home.js"
import menus from "./menupage.js"

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
    
    if(this.textContent==="Home"){
        content.insertBefore(spawn, footer);
    }else if (this.textContent==="Menu"){
        content.insertBefore(menus, footer);
    }else{
        
    }
}
content.appendChild(header);
content.appendChild(spawn);
content.appendChild(footer);


console.log(spawn);