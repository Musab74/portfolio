const menu = document.querySelector("#menu"); // Use ID here
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Change icon to an "x" on click
    nav.classList.toggle('active'); // Toggle the visibility of the links
};
