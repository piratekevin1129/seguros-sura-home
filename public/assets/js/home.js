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

    document.getElementById(data.prev).setAttribute('onclick',"prevSlideshow("+"'"+data.wrapper+"','"+data.wrap+"','"+data.paginator+"','"+data.active+"',event)")
    document.getElementById(data.next).setAttribute('onclick',"nextSlideshow("+"'"+data.wrapper+"','"+data.wrap+"','"+data.paginator+"','"+data.active+"',event)")

    $('#'+data.wrapper).attr('page','0')
    $("#"+data.wrapper+" ."+data.wrap).attr('style','width:calc(100% / '+pages.length+'); width:-moz-calc(100% / '+pages.length+')');

    var paginas = document.getElementById(data.paginator).getElementsByTagName('div')
    for(var i = 0;i<paginas.length;i++){
        paginas[i].setAttribute('onclick',"clickSlideshow("+"'"+data.wrapper+"','"+data.wrap+"','"+data.paginator+"','"+data.active+"',"+i+")")        
    }

    if(data.time!=null&&data.time!=undefined){
        data.animation = setInterval(function(){
            nextSlideshow(data.wrapper,data.wrap,data.paginator,data.active)
        },data.time)
    }
}

function nextSlideshow(wrapper,wrap,paginator,active,event){
    var actual_page = parseInt($('#'+wrapper).attr('page'))
    var total_pages = document.getElementById(wrapper).getElementsByClassName(wrap).length

    if(actual_page<(total_pages-1)){
        actual_page++
        document.getElementById(wrapper).style.left = ('-'+actual_page+'00%')
        $('#'+wrapper).attr('page',actual_page)
        
    }else{
        //reiniciar
        actual_page = 0
        document.getElementById(wrapper).style.left = actual_page+'%'
        $('#'+wrapper).attr('page',actual_page)
    }

    //pages
    var pages = document.getElementById(paginator).getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove(active)
    }
    pages[actual_page].classList.add(active)
    if(event!=null&&event!=undefined){
        event.preventDefault()
    }
}
function prevSlideshow(wrapper,wrap,paginator,active,event){
    var actual_page = parseInt($('#'+wrapper).attr('page'))
    var total_pages = document.getElementById(wrapper).getElementsByClassName(wrap).length

    if(actual_page>0){
        actual_page--
        document.getElementById(wrapper).style.left = ('-'+actual_page+'00%')
        $('#'+wrapper).attr('page',actual_page)
    }else{
        //poner la ultima
        actual_page = (total_pages-1)
        document.getElementById(wrapper).style.left = ('-'+actual_page+'00%')
        $('#'+wrapper).attr('page',actual_page)
    }

    //pages
    var pages = document.getElementById(paginator).getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove(active)
    }
    pages[actual_page].classList.add(active)
    if(event!=null&&event!=undefined){
        event.preventDefault()
    }
}
function clickSlideshow(wrapper,wrap,paginator,active,p){
    actual_page = p
    document.getElementById(wrapper).style.left = ('-'+actual_page+'00%')
    $('#'+wrapper).attr('page',actual_page)

    var pages = document.getElementById(paginator).getElementsByTagName('div')
    for(var i = 0;i<pages.length;i++){
        pages[i].classList.remove(active)
    }
    pages[actual_page].classList.add(active)
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
        setSlideshow({
            wrapper:'slideshow-wrapper',
            wrap:'slideshow-wrap',
            paginator:'slideshow-paginator',
            active:'slideshow-page-active',
            prev:'slideshow-prev-btn',
            next:'slideshow-next-btn',
            animation:null,
            time:7000
        })
    }
    if(document.getElementById('capacidades-parati-slider-wrap')!=null){
        setSlideshow({
            wrapper:'capacidades-parati-slider-wrap',
            wrap:'capacidades-parati-row',
            paginator:'capacidades-parati-pages',
            active:'capacidades-parati-page-active',
            prev:'capacidades-parati-paginator-prev',
            next:'capacidades-parati-paginator-next',
            animation:null,
            time:null
        })
    }
    if(document.getElementById('enterate-wrap')!=null){
        setSlideshow({
            wrapper:'enterate-wrap',
            wrap:'enterate-card',
            paginator:'enterate-pages',
            active:'enterate-page-active',
            prev:'enterate-paginator-prev',
            next:'enterate-paginator-next',
            animation:null,
            time:null
        })
    }
});