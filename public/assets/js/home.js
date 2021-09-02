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


/////////////TABS EXTRANJEROS//////////////
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