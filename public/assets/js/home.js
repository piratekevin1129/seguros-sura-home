////////////////COTIZAR SEGURO///////////////
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

function nextSlideshow(wrapper,wrap,paginator,active){
    var actual_page = $('#'+wrapper).attr('page')
    var total_pages = document.getElementById(wrapper).getElementsByClassName(wrap).length

    if(actual_page<(total_pages-1)){
        document.getElementById(wrapper).style.left = '-'+(parseInt(actual_page)+1)+'00%'
        $('#'+wrapper).attr('page',(parseInt(actual_page)+1))
    }

    //pages
    var pages = document.getElementById(paginator).getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove(active)
    }
    pages[parseInt(actual_page)+1].classList.add(active)
    event.preventDefault()
}
function prevSlideshow(wrapper,wrap,paginator,active){
    var actual_page = $('#'+wrapper).attr('page')

    if(actual_page>0){
        document.getElementById(wrapper).style.left = '-'+(parseInt(actual_page)-1)+'00%'
        $('#'+wrapper).attr('page',(parseInt(actual_page)-1))
    }

    //pages
    var pages = document.getElementById(paginator).getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove(active)
    }
    pages[parseInt(actual_page)-1].classList.add(active)
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


//////////////////SETEAR SLIDESHOWS DEL HOME-PERSONAS///////////////
$(document).ready(function() {
    if(document.getElementById('slideshow-wrapper')!=null){
        setSlideshow({wrapper:'slideshow-wrapper',wrap:'slideshow-wrap',paginator:'slideshow-paginator',active:'slideshow-page-active'})
    }
    if(document.getElementById('capacidades-parati-slider-wrap')!=null){
        setSlideshow({wrapper:'capacidades-parati-slider-wrap',wrap:'capacidades-parati-row'})
    }
    if(document.getElementById('enterate-wrap')!=null){
        setSlideshow({wrapper:'enterate-wrap',wrap:'enterate-card'})
    }
});