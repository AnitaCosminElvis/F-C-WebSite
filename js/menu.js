// Get Menu reference
var homeBtn = document.querySelector('#id_menu_home');
var linksBtn = document.querySelector('#id_menu_links');
var contactsBtn = document.querySelector('#id_menu_contacts');


homeBtn.addEventListener('click',() => {
    window.location = "/index.html";
});

linksBtn.addEventListener('click',() => {
    window.location = "/links.html";
});

contactsBtn.addEventListener('click',() => {
    window.location = "/contacts.html";
});