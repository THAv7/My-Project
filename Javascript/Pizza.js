const select = document.getElementsByTagName("li");
for(let i=0; i<select.length; i++){
    select[i].addEventListener('click',myFunction);
    function myFunction(){
        const s = document.querySelector(".act");
        s.className = s.className.replace("act","");
        select[i].classList.toggle("act");
    }
}

const chose = document.getElementsByTagName("h6");
for(let i=0; i<chose.length; i++){
    chose[i].addEventListener('click',myFunction);
    function myFunction(){
        const c = document.querySelector(".active");
        c.className = c.className.replace("active","");
        chose[i].classList.toggle("active");
    }
}

const getItem = document.getElementsByTagName("img");
for(let i=0; i<getItem.length; i++){
    getItem[i].addEventListener('click',myFunction);
    function myFunction(){
        const g = document.querySelector(".active-item");
        g.className = g.className.replace("active-item","");
        getItem[i].classList.toggle("active-item");
    }
}