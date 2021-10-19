////////////////COTIZAR SEGURO///////////////
function focusSelect(select,clase){
    var divparent = select.parentNode
    divparent.className = clase+'-select '+clase+'-select-active'
} 

function unfocusSelect(select,clase){
    var divparent = select.parentNode
    divparent.className = clase+'-select'
}

function clickCotizaSeguro(select){
    var valor = select.value
    document.getElementById('cotiza-seguro-link').setAttribute('href',valor)

    var btn = document.getElementById('cotiza-seguro-btn')
    if(valor=="#"){
        btn.className = 'cotiza-seguro-btn-locked'
        btn.locked = true
    }else{
        btn.className = ''
        btn.locked = false
    }
}

/*function clickCotizaSeguro(event,btn){
    var status = $(btn).attr('status')
    if(status=='collapsed'){
        $('#cotiza-seguro-wrap').attr('class', 'cotiza-seguro-expanded')
        $('#cotiza-seguro-btn').attr('status', 'expanded')
    }else{
        $('#cotiza-seguro-wrap').attr('class', 'cotiza-seguro-collapsed')
        $('#cotiza-seguro-btn').attr('status', 'collapsed')
    }
    event.preventDefault()
}*/


///////////////////SLIDESHOW PRINCIPAL//////////////////
function setSlideshow(data){
    //var pages = document.getElementById(data.wrapper).getElementsByClassName(data.wrap)
    var slider = document.getElementById(data.wrapper).getAttribute('slider')
    if(slider!='off'){
        var active = data.page+'-active'
        var pages = $("#"+data.wrapper+" ."+data.wrap)
        document.getElementById(data.wrapper).style.width = 'calc(100% * '+pages.length+')'
        document.getElementById(data.wrapper).style.width = '-moz-calc(100% * '+pages.length+')'
        document.getElementById(data.wrapper).style.left = '0%'
    
        document.getElementById(data.prev).setAttribute('onclick',"prevSlideshow("+"'"+data.wrapper+"','"+data.wrap+"','"+data.paginator+"','"+active+"',event)")
        document.getElementById(data.next).setAttribute('onclick',"nextSlideshow("+"'"+data.wrapper+"','"+data.wrap+"','"+data.paginator+"','"+active+"',event)")
    
        $('#'+data.wrapper).attr('page','0')
        $("#"+data.wrapper+" ."+data.wrap).attr('style','width:calc(100% / '+pages.length+'); width:-moz-calc(100% / '+pages.length+')');
    
        //agregar paginas al paginador
        document.getElementById(data.paginator).innerHTML = ''
        for(var i = 0;i<pages.length;i++){
            var pag = document.createElement('div')
            if(i==0){
                pag.className = data.page+' '+active
            }else{
                pag.className = data.page
            }
            pag.setAttribute('onclick',"clickSlideshow("+"'"+data.wrapper+"','"+data.wrap+"','"+data.paginator+"','"+active+"',"+i+")")
            document.getElementById(data.paginator).appendChild(pag)
        }
    
        if(data.time!=null&&data.time!=undefined){
            data.animation = setInterval(function(){
                nextSlideshow(data.wrapper,data.wrap,data.paginator,active)
            },data.time)
        }
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

function prevSlider(event){
    $('#beneficios-noticias-scroll').attr('class','beneficios-noticias-scroll-start')
    if(event!=null&&event!=undefined){
        event.preventDefault()
    }
}
function nextSlider(event){
    $('#beneficios-noticias-scroll').attr('class','beneficios-noticias-scroll-end')
    if(event!=null&&event!=undefined){
        event.preventDefault()
    }
}


/////////////TABS EXTRANJEROS//////////////
var global_tab_ext = 'arl'
function clickTabExt(btn,tab){
    var aria = btn.getAttribute('data')
    var titles = document.getElementById('ext-tabs'+tab).getElementsByClassName('ext-tab-title')
    for(var i = 0;i<titles.length;i++){
        titles[i].classList.remove('ext-tab-title-active')
    }
    var contents = document.getElementById('ext-tabs'+tab).getElementsByClassName('ext-tabs-content')
    for(var i = 0;i<contents.length;i++){
        contents[i].classList.remove('ext-tabs-content-active')
    }
    document.getElementById('ext-tabs-title-'+aria).classList.add('ext-tab-title-active')
    document.getElementById('ext-tabs-content-'+aria).classList.add('ext-tabs-content-active')
    if(aria=='1'){
        document.getElementById('espanol_link').setAttribute('href','https://www.arlsura.com/')
    }else if(aria=='2'){
        document.getElementById('espanol_link').setAttribute('href','https://www.epssura.com/')
    }else if(aria=='3'){
        document.getElementById('espanol_link').setAttribute('href','/paginas/personas.aspx')
    }
}

////////////TABS ENLACES INTERES//////////////
function clickEnlaceInteres(t){
    //limpiar clase active
    var listas = document.getElementById('enlaces-interes-lista').getElementsByTagName('p')
    for(var i = 0;i<listas.length;i++){
        listas[i].classList.remove('enlaces-interes-list-active')
    }
    //ocultar boards
    var boards = document.getElementById('enlaces-interes-col2').getElementsByClassName('enlaces-interes-row2')
    for(var j = 0;j<boards.length;j++){
        boards[j].classList.remove('enlaces-interes-row-active')
    }
    listas[t-1].classList.add('enlaces-interes-list-active')
    boards[t-1].classList.add('enlaces-interes-row-active')
}


//////////////////SETEAR SLIDESHOWS DEL HOME-PERSONAS///////////////
$(document).ready(function() {
    if(document.getElementById('slideshow-wrapper')!=null){
        setSlideshow({
            wrapper:'slideshow-wrapper',
            wrap:'slideshow-wrap',
            paginator:'slideshow-paginator',
            page:'slideshow-page',
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
            page:'capacidades-parati-page',
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
            page:'enterate-page',
            prev:'enterate-paginator-prev',
            next:'enterate-paginator-next',
            animation:null,
            time:null
        })
    }
});