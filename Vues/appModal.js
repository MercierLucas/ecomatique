let modal=null;

const openModal=function(e){
    
    e.preventDefault(); // empeche le comportement classique du lien
    const target=document.querySelector(e.target.getAttribute('href')); // récupère la cible du clic
    target.style.display=null;
    modal=target;
    modal.addEventListener('click',closeModal);
    modal.querySelector('.js-modal-close').addEventListener('click',closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click',stopPropagation);
}


const closeModal=function(e){
    if(modal === null) return
    e.preventDefault(); // empeche le comportement classique du lien
    
    // Nettoyage de la boite > décharge les event listener
    modal.removeEventListener('click',closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click',closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click',stopPropagation);
    window.setTimeout(function(){
        modal.style.display="none";
        modal=null;
    },200)
    
}

const stopPropagation=function(e){
    // empêche la propagation du click aux parents > empeche de fermer quand on clique dans la fenetre
    e.stopPropagation(); //
}
document.querySelectorAll('.js-modal').forEach(a=>{
    a.addEventListener('click',openModal)
    
})

window.addEventListener('keydown',function(e){
    if(e.key == "Escape" || e.key=="Esc"){
        closeModal(e)
    }
})