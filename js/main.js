function validateForm(){
  /* Escribe tú código aquí */
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var email = document.getElementById("input-email").value;
  var contrasena = document.getElementById("input-password").value;
  var m= "";
  function mensaje1(m){
    var span = document.createElement("span");
    var referencia= document.getElementById("name");
    var padre=referencia.parentNode;
    padre.insertBefore(span,referencia);
    var texto = document.createTextNode(m);
    span.appendChild(texto);
  }

   if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      mensaje1("Debe ingresar su nombre");
   }
   else{
       var m = /^[a-zA-Z]*$/;
       if(!nombre.search(m)) {
              console.log("letra")
              m=/[a-z]/g;}
              if(!nombre.search(m)){
                
              }
         else{
            mensaje1("Ingrese datos válidos (A-Z)");}
   
  } if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("lastname");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su apellido ");
        span.appendChild(texto);
         return span;
  } else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
      var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Verifique su email ");
        span.appendChild(texto);
         return span;
  } else if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
      var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("La contraseña debe de tener al menos 6 caracteres");
        span.appendChild(texto);
        return span;
  } else if( lista.selectedIndex == null || lista.selectedIndex == 0 ) { 
        var span = document.createElement("span");
        var referencia= document.getElementByTagName("select")[0].selectedIndex;
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debes de seleccionar almenos un tipo de bici");
        span.appendChild(texto);
        return span;
    }
}