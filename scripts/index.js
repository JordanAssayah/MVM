var sideMenu = $('.side-menu-mmwf');

function toggleSideMenu(){
  if(sideMenu.css('margin-left')=='0px'){
    sideMenu.css('margin-left','-300px');
    sideMenu.css('transition','margin-left ease-in 0.4s');
    $('.nav-toggle').removeClass('is-active');
  }
  else{
    sideMenu.css('margin-left','0');
    sideMenu.css('transition','margin-left ease-out 0.4s');
    $('.nav-toggle').addClass('is-active');
  }
}

function addClassLoading(element){
  $(element).addClass('is-loading');
}
