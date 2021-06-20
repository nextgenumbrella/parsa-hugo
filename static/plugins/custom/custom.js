$( document ).ready(function() {
      const imgs = document.getElementsByTagName('img')
      
      for (let img of imgs) {
        if(img.src.includes('xs-size')){
            $(img).addClass('img-extra-small-size')
        }else if(img.src.includes('sm-size')){
            $(img).addClass('img-small-size')
        }else if(img.src.includes('md-size')){
            $(img).addClass('img-middle-size')
        }else if(img.src.includes('lg-size')){
            $(img).addClass('img-large-size')
        }else if(img.src.includes('xl-size')){
            $(img).addClass('img-extra-large-size')
        }
        
    }
});