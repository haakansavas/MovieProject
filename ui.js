// Arayüz Sınıfı
function UI(){
  
    }

// Arayüze Ekleme
UI.prototype.addFilmToUI=function(newFilm){ 
const filmList=document.getElementById("films");
filmList.innerHTML +=
`<tr>
<td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
<td>${newFilm.title}</td>
<td>${newFilm.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`;
}
// Yüklendikten sonra iputun temizlenmesi
UI.prototype.clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}
// Alert oluştur
UI.prototype.displayMessage=function(message,type){
    const cardBody=document.querySelector(".card-body");
    const div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;
    cardBody.appendChild(div);
    setTimeout(function(){
        div.remove();
    },2000)
}
// Storage'dan arayüze ekleme
UI.prototype.loadAllFilms=function(films){
    const filmList=document.getElementById("films");
    films.forEach(function(film){
        filmList.innerHTML+=`<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;
    });
}
// Arayüzden Silme
UI.prototype.deleteFilmFromUI=function(element){
    element.parentElement.parentElement.remove();
}