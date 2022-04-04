const contactpage = document.createElement("div");
contactpage.classList.add("contactpage");

function generateContact(){
    const phonenumber = document.createElement("div");
    phonenumber.classList.add("contactinfo");
    phonenumber.textContent = "Contact: 123-456-7777";

    const addressinfo = document.createElement("div");
    addressinfo.classList.add("addressinfo");
    addressinfo.textContent = "12345 Unknown Dr. Unknown Anon 10101";

    const googlemap = document.createElement("iframe");
    googlemap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.978607233969!2d-95.69154216633612!3d29.69275971707631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dfb34c496cc1%3A0x292afa42b355cebe!2sTaco%20Bell!5e0!3m2!1sen!2sus!4v1649058829451!5m2!1sen!2sus";
    googlemap.width="500";
    googlemap.height="300";
    googlemap.style.border="0";
    googlemap.allowFullscreen="";
    googlemap.loading="lazy";
    googlemap.referrerPolicy="no-referrer-when-downgrade";
    
    contactpage.appendChild(phonenumber);
    contactpage.appendChild(addressinfo);
    contactpage.appendChild(googlemap);

    return contactpage;
}

export default generateContact();