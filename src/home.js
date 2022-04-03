const homepage = document.createElement("div");
homepage.classList.add("homepage");

const about = document.createElement("div");
about.classList.add("about");

homepage.appendChild(about);

const title = document.createElement("div");
title.classList.add("abouttitle");
title.textContent="About";

const content = document.createElement("div");
content.classList.add("aboutcontent");
content.textContent=`This is a very safe restaurant with very safe foods. We serve you 
the best we can and help out with your budget. We are very keen to 
satisify our customers taste and needs. We ha--- error error error
error error error error error error error error error error error 
error error error error error error error error error error error
error error error error error`;

about.appendChild(title);
about.appendChild(content);

export default homepage;