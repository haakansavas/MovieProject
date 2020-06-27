const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");

// UI Objesini Başlatma
const ui=new UI();

// Storage Objesi Üret
const storage=new Storage();

// Tüm eventleri yükleme
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
    let films=storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
    });
}
function addFilm(e)
{
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title === "" || director === "" || url === ""){
        //Hata
        ui.displayMessage("Tüm alanları doldurunuz.","danger");
    }
    else{
        // Yeni Film
        const newFilm=new Film(title,director,url);
        // Arayüze film ekleme
        ui.addFilmToUI(newFilm);
        // Storage yeni film ekleme
        storage.addFilmToStorage(newFilm);
        ui.displayMessage("Başarıyla eklendi.","success");
        }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
