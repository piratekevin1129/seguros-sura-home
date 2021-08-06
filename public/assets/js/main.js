function overBodyBtn(btn){
    $('#img-'+btn).attr('class', 'body-img body-img-over')
}
function outBodyBtn(btn){
    $('#img-'+btn).attr('class', 'body-img')
}

function focusSelect(select,clase){
    var divparent = select.parentNode
    divparent.className = clase+'-select '+clase+'-select-active'
} 

function unfocusSelect(select,clase){
    var divparent = select.parentNode
    divparent.className = clase+'-select'
}

function clickCotizaSeguro(event,btn){
    var status = $(btn).attr('status')
    if(status=='collapsed'){
        $('#cotiza-seguro-wrap').attr('class', 'cotiza-seguro-expanded')
        $('#cotiza-seguro-btn').attr('status', 'expanded')
    }else{
        $('#cotiza-seguro-wrap').attr('class', 'cotiza-seguro-collapsed')
        $('#cotiza-seguro-btn').attr('status', 'collapsed')
    }
    event.preventDefault()
}

///////////////////SLIDESHOW PRINCIPAL//////////////////
function setSlideshow(data){
    //var pages = document.getElementById(data.wrapper).getElementsByClassName(data.wrap)
    var pages = $("#"+data.wrapper+" ."+data.wrap)
    document.getElementById(data.wrapper).style.width = 'calc(100% * '+pages.length+')'
    document.getElementById(data.wrapper).style.width = '-moz-calc(100% * '+pages.length+')'
    document.getElementById(data.wrapper).style.left = '0%'

    $('#'+data.wrapper).attr('page','0')
    $("#"+data.wrapper+" ."+data.wrap).attr('style','width:calc(100% / '+pages.length+'); width:-moz-calc(100% / '+pages.length+')');
}

function nextSlideshow(){
    var actual_page = $('#slideshow-wrapper').attr('page')
    var total_pages = document.getElementById('slideshow-wrapper').getElementsByClassName('slideshow-wrap').length

    if(actual_page<(total_pages-1)){
        document.getElementById('slideshow-wrapper').style.left = '-'+(parseInt(actual_page)+1)+'00%'
        $('#slideshow-wrapper').attr('page',(parseInt(actual_page)+1))
    }

    //pages
    var pages = document.getElementById('slideshow-paginator').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('slideshow-page-active')
    }
    pages[parseInt(actual_page)+1].classList.add('slideshow-page-active')
    event.preventDefault()
}
function prevSlideshow(){
    var actual_page = $('#slideshow-wrapper').attr('page')

    if(actual_page>0){
        $('#slideshow-wrapper').attr('page',(parseInt(actual_page)-1))
        document.getElementById('slideshow-wrapper').style.left = '-'+(parseInt(actual_page)-1)+'00%'
    }

    //pages
    var pages = document.getElementById('slideshow-paginator').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('slideshow-page-active')
    }
    pages[parseInt(actual_page)-1].classList.add('slideshow-page-active')
    event.preventDefault()
    event.preventDefault()
}

///////////////////SLIDESHOW YA CONOCES LAS CAPACIDADES//////////////////
function nextSlideshow2(){
    var actual_page = $('#capacidades-parati-slider-wrap').attr('page')
    var total_pages = document.getElementById('capacidades-parati-slider-wrap').getElementsByClassName('capacidades-parati-row').length

    if(actual_page<(total_pages-1)){
        document.getElementById('capacidades-parati-slider-wrap').style.left = '-'+(parseInt(actual_page)+1)+'00%'
        $('#capacidades-parati-slider-wrap').attr('page',(parseInt(actual_page)+1))
    }

    //pages
    var pages = document.getElementById('capacidades-parati-pages').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('capacidades-parati-page-active')
    }
    pages[parseInt(actual_page)+1].classList.add('capacidades-parati-page-active')

    event.preventDefault()
}
function prevSlideshow2(){
    var actual_page = $('#capacidades-parati-slider-wrap').attr('page')

    if(actual_page>0){
        $('#capacidades-parati-slider-wrap').attr('page',(parseInt(actual_page)-1))
        document.getElementById('capacidades-parati-slider-wrap').style.left = '-'+(parseInt(actual_page)-1)+'00%'
    }

    //pages
    var pages = document.getElementById('capacidades-parati-pages').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('capacidades-parati-page-active')
    }
    pages[parseInt(actual_page)-1].classList.add('capacidades-parati-page-active')
    event.preventDefault()
}

///////////////////SLIDESHOW ENTERATE//////////////////
function nextSlideshow3(){
    var actual_page = $('#enterate-wrap').attr('page')
    var total_pages = document.getElementById('enterate-wrap').getElementsByClassName('enterate-card').length

    if(actual_page<(total_pages-1)){
        document.getElementById('enterate-wrap').style.left = '-'+(parseInt(actual_page)+1)+'00%'
        $('#enterate-wrap').attr('page',(parseInt(actual_page)+1))
    }

    //pages
    var pages = document.getElementById('enterate-pages').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('enterate-page-active')
    }
    pages[parseInt(actual_page)+1].classList.add('enterate-page-active')

    event.preventDefault()
}
function prevSlideshow3(){
    var actual_page = $('#enterate-wrap').attr('page')

    if(actual_page>0){
        $('#enterate-wrap').attr('page',(parseInt(actual_page)-1))
        document.getElementById('enterate-wrap').style.left = '-'+(parseInt(actual_page)-1)+'00%'
    }

    //pages
    var pages = document.getElementById('enterate-pages').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('enterate-page-active')
    }
    pages[parseInt(actual_page)-1].classList.add('enterate-page-active')
    event.preventDefault()
}

function overMenuSeguros(menu){
    //ocultar todos los menu
    var menus = document.getElementById('seguros-sura-menu').getElementsByClassName('seguros-sura-menu-azul-wraper')
    for(var i = (menus.length-1);i>=0;i--){
        menus[i].className = 'seguros-sura-menu-azul-wraper seguros-sura-menu-azul-wraper-collapsed'
    }
    document.getElementById(menu).classList.add('seguros-sura-menu-azul-wraper-active')
    $('#seguros-sura-menu').attr('class', 'seguros-sura-menu-on')
}

function outMenuSeguros(){
    $('#seguros-sura-menu').attr('class', 'seguros-sura-menu-off')
}

function clickBuscador(){
    var estado = $('#buscador-btn').attr('status')
    if(estado=='closed'){
        $('#buscador-btn').attr('status','opened')
        $('#buscador-btn').attr('class','buscador-btn-cancel')
        $('#buscador-container').attr('class', 'buscador-container-on')
    }else{
        $('#buscador-btn').attr('status','closed')
        $('#buscador-btn').attr('class','buscador-btn-lupa')
        $('#buscador-container').attr('class', 'buscador-container-off')
    }
    event.preventDefault()
}

function clickMenuPaises(){
    $('#nav-pais-select-menu').attr('class','nav-pais-select-menu-on')
}
function outMenuPaises(){
    $('#nav-pais-select-menu').attr('class','nav-pais-select-menu-off')
}
function selectPais(pais){
    $('#nav-pais-selected').html(String(pais.innerHTML+'<i class="fas fa-caret-down"></i>'))
    $('#nav-pais-select-menu').attr('class','nav-pais-select-menu-off')

    $('#nav-pais-selected2').html(String(pais.innerHTML))
    clickAcordeon(document.getElementById('nav-pais-selected2'))
}

function clickIniciarSesion(event,btn){
    var status = btn.getAttribute('status')
    if(status=='closed'){
        $('#iniciar-sesion-btn').attr('class','iniciar-sesion-btn-on')
        $('#iniciar-sesion-btn').attr('status','opened')
        $('#iniciar-sesion-options').attr('class','iniciar-sesion-options-on')
    }else{
        $('#iniciar-sesion-btn').attr('class','iniciar-sesion-btn-off')
        $('#iniciar-sesion-btn').attr('status','closed')
        $('#iniciar-sesion-options').attr('class','iniciar-sesion-options-off')
    }
    event.preventDefault()
}

/************ACORDEON MENU RESPONSIVE*************/
function clickMenuHamburguesa(){
    var estado = $('#menu-hamburguesa').attr('status')
    if(estado=='closed'){
        $('#menu-hamburguesa').attr('status','opened')
        $('#menu-hamburguesa').attr('class','menu-hamburguesa-opened')
        $('#seguros-sura-menu').attr('class', 'seguros-sura-menu-on')
    }else{
        $('#menu-hamburguesa').attr('status','closed')
        $('#menu-hamburguesa').attr('class','menu-hamburguesa-closed')
        $('#seguros-sura-menu').attr('class', 'seguros-sura-menu-off')
    }
    event.preventDefault()
}

function clickAcordeon(title){
    var padre = title.parentNode
    var clase_padre = padre.className
    var nueva_clase_padre = ''
    var menu = padre.getElementsByTagName('div')[1]
    var title = padre.getElementsByTagName('div')[0]
    //var alto_menu = menu.offsetHeight
    //var alto_title = title.offsetHeight

    if(clase_padre.indexOf('expanded')!=-1){
        //esta abierto, vamos a cerrarlo
        nueva_clase_padre = clase_padre.replace('expanded','collapsed')
        padre.className = nueva_clase_padre
        //padre.style.height = alto_title+'px'
    }else{
        //esta cerrado, vamos a abrirlo
        nueva_clase_padre = clase_padre.replace('collapsed','expanded')
        padre.className = nueva_clase_padre
        //padre.style.height = String(parseInt(alto_menu)+parseInt(alto_title))+'px'
    }
}

function clickAcordeon2(title,contenedor){
    var padre = title.parentNode
    var clase_padre = padre.className
    var nueva_clase_padre = ''
    var menu = padre.getElementsByTagName('ul')[0]
    var title = padre.getElementsByTagName('h5')[0]

    //ocultar todos y de paso el actual
    var cols = document.getElementById(contenedor).getElementsByClassName('seguros-sura-menu-col')
    for(var i = (cols.length-1);i>=0;i--){
        cols[i].className = 'seguros-sura-menu-col seguros-sura-menu-col-collapsed'
    }

    if(clase_padre.indexOf('expanded')!=-1){
        //esta abierto, vamos a cerrarlo
        nueva_clase_padre = clase_padre.replace('expanded','collapsed')
        padre.className = nueva_clase_padre
        //padre.style.height = alto_title+'px'
    }else{
        //esta cerrado, vamos a abrirlo
        nueva_clase_padre = clase_padre.replace('collapsed','expanded')
        padre.className = nueva_clase_padre
        //padre.style.height = String(parseInt(alto_menu)+parseInt(alto_title))+'px'
    }
}

$(document).ready(function() {
    setSlideshow({wrapper:'slideshow-wrapper',wrap:'slideshow-wrap'})
    setSlideshow({wrapper:'capacidades-parati-slider-wrap',wrap:'capacidades-parati-row'})
    setSlideshow({wrapper:'enterate-wrap',wrap:'enterate-card'})
});