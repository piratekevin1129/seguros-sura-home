////////////BOTONES DEL HOME//////////////
function overBodyBtn(btn){
    $('#img-'+btn).attr('class', 'body-img body-img-over')
}
function outBodyBtn(btn){
    $('#img-'+btn).attr('class', 'body-img')
}

/////////////MENU HEADER////////////
function overMenuSeguros(menu){
    //ocultar todos los menu
    var menus = document.getElementById('seguros-sura-menu').getElementsByClassName('seguros-sura-menu-azul-wraper')
    for(var i = (menus.length-1);i>=0;i--){
        menus[i].className = 'seguros-sura-menu-azul-wraper seguros-sura-menu-azul-wraper-collapsed'
    }
    //'seguros-sura-menu-azul-nuestrosproductos'
    if(menu!=null&&menu!=undefined){
        document.getElementById(menu).className = 'seguros-sura-menu-azul-wraper seguros-sura-menu-azul-wraper-active seguros-sura-menu-azul-wraper-collapsed'
    }
    $('#seguros-sura-menu').attr('class', 'seguros-sura-menu-on')
}

function outMenuSeguros(){
    $('#seguros-sura-menu').attr('class', 'seguros-sura-menu-off')
}

/////////////BUSCADOR/////////////
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

////////////MENU PAISES///////////
function clickMenuPaises(){
    $('#nav-pais-select-menu').attr('class','nav-pais-select-menu-on')
}
function outMenuPaises(){
    $('#nav-pais-select-menu').attr('class','nav-pais-select-menu-off')
}
function selectPais(pais){
    /*$('#nav-pais-selected').html(String(pais.innerHTML+'<i class="fas fa-caret-down"></i>'))
    $('#nav-pais-select-menu').attr('class','nav-pais-select-menu-off')

    $('#nav-pais-selected2').html(String(pais.innerHTML))
    clickAcordeon(document.getElementById('nav-pais-selected2'))*/
    location.href = pais
}

/////////////MENU INICIAR SESION///////////

function clickIniciarSesion2(event,btn){
    var status = btn.getAttribute('status')
    if(status=='closed'){
        $('#iniciar-sesion-btn2').attr('status','opened')
        $('#seguros-sura-menu-amarillo-cont').attr('class','seguros-sura-menu-amarillo-expanded')
    }else{
        $('#iniciar-sesion-btn2').attr('status','closed')
        $('#seguros-sura-menu-amarillo-cont').attr('class','seguros-sura-menu-amarillo-collapsed')
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

function clickIniciarSesion(btn){
    preventDefaultBtn()
    
    var status = btn.getAttribute('status')
    if(status=='off'){
        btn.className = 'iniciar-sesion-cont-on'
        btn.setAttribute('status','on')
    }else{
        btn.className = ''
        btn.setAttribute('status','off')
    }
}
function blurIniciarSesion(){
    var btn = document.getElementById('iniciar-sesion-cont')
    btn.className = ''
    btn.setAttribute('status','off')
}

function preventDefaultBtn(){
    return false
}

//window.onscroll = function(){
    //check alto header
    //var alto_header = document.getElementById('')
//}

/*setTimeout(function(){
    document.getElementById('iniciar-sesion-cont').focus()
},1000)*/