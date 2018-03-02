//La función matchMedia() Es la manera de acceder a los media queries a través de JS,
//es lo mismo que @media en CSS

//Boton
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');
var $body = document.body;
var $guitarras = document.getElementById('guitar');

//Media Querie
var consulta = window.matchMedia('(max-width:500px)');
//Escucha los cambios que se producen cuando se realiza un resize de la pantalla
consulta.addListener(mediaQuery);

//Estamos llamando a la function mediaQuery para que se ejecute ni bien cargue la página, por eso se pone sola/ suelta
mediaQuery();

//Esta función guarda la condición: cuando se cumple o no el media query de 500px
// function mediaQuery()
// {
// if(consulta.matches)
//     {
//     console.log('se cumplió la condición');
//     $burguerButton.addEventListener('touchstart', toggleMenu);
//     //$guitarras.addEventListener('touchstart', toggleMenu);
    
//     }
// else
//     {
//     console.log('no se cumplió la condición, la resolución es mayor a 500');
//     $burguerButton.removeEventListener('touchstart', toggleMenu);
    
//     }
// }

function mediaQuery() {
	if (consulta.matches) {
		console.log("cumple resolución, es < 500px");
		$burguerButton.addEventListener('click', toogleMenu);
		$guitarras.addEventListener('click', toogleMenu);
	} else {
		console.log("no cumple resolución, es > 500px");
	}
}

//Esta función le agrega y le saca la clase active. Es lo que hace que aparezca o desaparezca el menú
function toggleMenu()
    {
    $menu.classList.toggle('active');
    $burguerButton.classList.toggle('icon-close');
    $body.classList.toggle('opened'); 
    
    }

//Agrego la clase opened al body para que cuando el menu
// se muestre (showMenu) no se pueda scrollear, la clase tiene overflow:hidden
function showMenu()
    {
    $menu.classList.add('active');
    $burguerButton.classList.add('icon-close');
    $body.classList.add('opened');

    }

function hideMenu()
    {
    $menu.classList.remove('active');
    $burguerButton.classList.remove('icon-close');
    $body.classList.remove('opened'); //y acá saco la clase opened al body
    }
//Lazy Loading 
//recordar que las img deben tener el alt puesto, sino no funciona lazy.
//Colocar en las img que quiero que se carguen al hacer scroll: el atributo data-src con la url de la img.
var bLazy = new Blazy({
    selector: 'img'
    });

//Gestos Touch (En hammer para llamar a un evento se hace con .on)

var gestos = new Hammer($body);

gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);

