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
function nextSlideshow(){
    var actual_page = $('#slideshow-wrapper').attr('page')
    var total_pages = document.getElementById('slideshow-wrapper').getElementsByClassName('slideshow-wrap').length

    if(actual_page<(total_pages-1)){
        $('#slideshow-wrapper').attr('style','left:-'+(parseInt(actual_page)+1)+'00%')
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
        $('#slideshow-wrapper').attr('style','left:-'+(parseInt(actual_page)-1)+'00%')
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
        $('#capacidades-parati-slider-wrap').attr('style','left:-'+(parseInt(actual_page)+1)+'00%')
        $('#capacidades-parati-slider-wrap').attr('page',(parseInt(actual_page)+1))
    }

    //pages
    var pages = document.getElementById('slideshow-paginator').getElementsByTagName('div')
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
        $('#capacidades-parati-slider-wrap').attr('style','left:-'+(parseInt(actual_page)-1)+'00%')
    }

    //pages
    var pages = document.getElementById('capacidades-parati-pages').getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove('capacidades-parati-page-active')
    }
    pages[parseInt(actual_page)-1].classList.add('capacidades-parati-page-active')
    event.preventDefault()
}

function overMenuSeguros(){
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