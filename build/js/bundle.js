function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver(t=>{t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")}).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.setAttribute("alt","Imagen-"+t),n.dataset.id=t,n.onclick=mostrarImagen;const a=document.createElement("LI");a.appendChild(n),e.appendChild(a)}}function mostrarImagen(e){const t=e.target.dataset.id,n=document.createElement("IMG");n.classList.add("no-cerrar"),n.src=`build/img/grande/${t}.webp`;const a=document.createElement("DIV");a.classList.add("overlay");const r=document.createElement("P");r.textContent="X",r.classList.add("btn-cerrar"),a.appendChild(n),a.appendChild(r);const c=document.querySelector("body");c.appendChild(a),a.onclick=e=>{e.target.classList.contains("no-cerrar")||(a.remove(),c.classList.remove("fijar-body"))},c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",()=>{scrollNav(),navegacionFija()}),document.addEventListener("DOMContentLoaded",()=>{crearGaleria()});
//# sourceMappingURL=bundle.js.map
