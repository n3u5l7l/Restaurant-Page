const homepage = document.createElement("div");
homepage.classList.add("homepage");

const about = document.createElement("div");
about.classList.add("about");

homepage.appendChild(about);

const title = document.createElement("div");
title.classList.add("abouttitle");

const content = document.createElement("div");
content.classList.add("aboutcontent");

about.appendChild(title);
about.appendChild(content);

