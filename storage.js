function Storage(){

}
Storage.prototype.addFilmToStorage=function(newFilm){
    let films=this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films)); //Array stringe çevrildi
    
}
Storage.prototype.getFilmsFromStorage=function(){
    let films;
    if(localStorage.getItem("films")===null){
        films=[];
    }
    else{
        films=JSON.parse(localStorage.getItem("films"));

    }
    return films;
}
