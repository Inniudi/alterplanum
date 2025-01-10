let prologoContainer = document.getElementById("PROLOGOcontainer");
let navbarLinks = [];

navbarLinks[0] = document.getElementById("PARTE0link");
navbarLinks[1] = document.getElementById("PARTE1link");
navbarLinks[2] = document.getElementById("PARTE2link");
navbarLinks[3] = document.getElementById("PARTE3link");
navbarLinks[4] = document.getElementById("PARTE4link");
navbarLinks[5] = document.getElementById("PARTE5link");

function closeModal(modal)
{
    modal.parentElement.classList.add("hidden");
}

function openModal(id)
{
    console.log("hh");

    let modal = document.getElementById(id);
    modal.classList.remove("hidden");
}

function goToPart(num, modalToHide)
{
    if (modalToHide != undefined) document.getElementById(modalToHide).classList.add("hidden");
    document.getElementsByClassName("currentPart")[0].classList.add("hidden");
    document.getElementsByClassName("currentPart")[0].classList.remove("currentPart");
    document.getElementById("PARTE" + num + "container").classList.add("currentPart");
    document.getElementById("PARTE" + num + "container").classList.remove("hidden");
    let newLink = document.getElementById("PARTE" + num + "link");
    newLink.classList.remove("hidden");
    setCurrentNavbarLink(num);
    newLink.classList.add("currentNavbarLink");
}

function setCurrentNavbarLink(index)
{
    document.getElementsByClassName("currentNavbarLink")[0].classList.remove("currentNavbarLink");
    navbarLinks[index].classList.add("currentNavbarLink");
}