
document.addEventListener('DOMContentLoaded',function(){
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style','top: '+(e.pageY-10)+'px; left: '+(e.pageX-10)+'px;')
    })

    /*document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        },500)
    })*/




    var loader = document.querySelector(".loader");
    window.addEventListener("load",function(){
        loader.style.display = 'none';
    })





})
