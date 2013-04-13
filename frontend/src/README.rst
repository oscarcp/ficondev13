Producción FrontEnd FicONDev 2013
=================================

Nota: Esta web necesita un servidor web iniciado para funcionar. Se puede
obtener uno a través del comando:

    python -m SimpleHTTPServer

Y accediendo a http://localhost:8000

Características:

* Utiliza CSS3 transforms para las animaciones del menú y del logotipo
* Utiliza jQuery y FancyBox para mostrar las comidas
* Carga dinámica de contenido, no existe la recarga de página
* Semi responsive. Si un dispositivo de 480px o menos visualiza la página
  ésta se adaptará. ESTA FUNCIÓN NO ESTÁ TERMINADA
* El documento base (index.html) pasa la validación HTML5 http://validator.w3.org/check

Fallos:

* Las características responsive han sido dejadas de lado por falta de
  tiempo y desconocimiento de las mismas.
* Debido al intensivo uso de caché de los navegadores, puede que a veces el
  contenido no se refresque correctamente y haya que vaciar la caché del
  navegador.
