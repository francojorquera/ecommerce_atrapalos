
//Definición de Clase
class producto{
    constructor(id,pkmn,img,id1,id2,cant,precio){
        this.id = id;
        this.pokemon = pkmn;
        this.imagen = "./assets/img/" + img;
        this.element = document.getElementById(id1);
        this.element2 = document.getElementById(id2);   
        this.cantidad = cant;
        this.precio = precio;
        this.precioTotal = cant*precio;
    }
    
    writeHTML(){
        if (this.cantidad > 0){
            this.element.innerHTML = "<p>" + this.cantidad + " x Funko " + this.pokemon + " $" + this.precio;
            this.element.innerHTML += "<img src=" + this.imagen + " width='60' height='60' ></p>"
            this.element.innerHTML += "<input type='button' class='btn btn-danger' onclick='eliminaProducto(" + this.id + ")' value='X'>";
            this.element2.innerHTML = "<p class='text-right'><b>Total $ <input class='sinBorde' type='text' value=" + this.precioTotal + " disabled></b></p>";
        }
        else{
            this.element.innerHTML = "";
            this.element2.innerHTML = "";
        }
        
    }
}

function writeHTML(){
    funko1.writeHTML();
    funko2.writeHTML();
    funko3.writeHTML();
    if (funko1.cantidad == 0 && funko2.cantidad == 0 && funko3.cantidad == 0)
        funko1.element.innerHTML="<p>Carrito vacío</p>";  
}

function eliminaProducto(value){
    if (value == 1)
        funko1.cantidad = 0;
    else if (value == 2)
        funko2.cantidad = 0;
    else if (value == 3)
        funko3.cantidad = 0;
    cantidadtotales.value = funko1.cantidad+funko2.cantidad+funko3.cantidad;
    writeHTML();   
    totalesCarrito(descuentoAplicado);
}

function vaciarCarrito(){
    funko1.cantidad = 0;
    funko2.cantidad = 0;
    funko3.cantidad = 0;
    funko1.precioTotal=funko1.cantidad*funko1.precio;
    funko2.precioTotal=funko2.cantidad*funko2.precio;
    funko3.precioTotal=funko3.cantidad*funko3.precio;
    cantidadtotales.value = funko1.cantidad+funko2.cantidad+funko3.cantidad;
    writeHTML();
    totalesCarrito(descuentoAplicado);
}

function agregarProducto(value){
    if (value == 1)
        funko1.cantidad++;
    else if (value == 2)
        funko2.cantidad++;
    else if (value == 3)
        funko3.cantidad++;
    cantidadtotales.value = funko1.cantidad+funko2.cantidad+funko3.cantidad;
    funko1.precioTotal=funko1.cantidad*funko1.precio;
    funko2.precioTotal=funko2.cantidad*funko2.precio;
    funko3.precioTotal=funko3.cantidad*funko3.precio;
    writeHTML();
    totalesCarrito(descuentoAplicado);
}
    
function totalesCarrito(descuento){
    cantidadtotales.value = funko1.cantidad+funko2.cantidad+funko3.cantidad;
    cantidad.innerHTML = "<p class='text-right'> <b>N° productos <span>" + cantidadTotales.value + "</span></b></p><br>";
    if (cantidadTotales.value > 0){
        let totalParcial = funko1.precioTotal + funko2.precioTotal + funko3.precioTotal;
        let aDescontar = parseInt(totalParcial*descuento);
        let totalFinal = totalParcial - aDescontar;
        totalCompra.innerHTML = "<p class='text-right'> <b>Total $ <span id='total'>" + totalParcial + "</span></b></p><br>";
        descuentoTotal.innerHTML = "<p class='text-right'> <b>Descuento $ <span id='total'>" + aDescontar + "</span></b></p><br>";
        totalConDescuento.innerHTML = "<p class='text-right'> <b>TOTAL A PAGAR $ <span id='descuento'>" + totalFinal + "</span></b></p><br>";
        btnPago.innerHTML = "<a href='./assets/html/carrito.html' class='btn bntCarrito w-100 m-1'>Finalizar pedido</a>";"<a href='carrito.html' class='btn bntCarrito w-100 m-1'>Finalizar pedido</a>";
        btnPago.innerHTML += "<input type='button' class='btn bntCarrito w-100 m-1 btnFinalizar' value='Pago2'>";
        btnPago.innerHTML += "<input type='button' class='btn bntVaciar w-100 m-1' value='Vaciar' onclick='vaciarCarrito()'>";
    }
    else{
        totalCompra.innerHTML = "";
        descuentoTotal.innerHTML = "";
        totalConDescuento.innerHTML = "";
        btnPago.innerHTML = "";
    }
    
}

//Inicializa Objetos y variables
let descuentoAplicado = 0.1; //Aplicar descuento
let cantidadTotales = document.getElementById("cantidadtotales");
let cantidad = document.getElementById("cantidad");
let totalCompra = document.getElementById("total");
let descuentoTotal = document.getElementById("descuento");
let totalConDescuento = document.getElementById("total-descuento");
let btnPago = document.getElementById("btn-pago-eliminar");        

funko1 = new producto(1,"Pikachu","img_pikachu.jpg","productos-carrito-funko1","total-funko1",0,10000);
funko2 = new producto(2,"Charmander","img_charmander.jpg","productos-carrito-funko2","total-funko2",0,20000);
funko3 = new producto(3,"Lapras","img_lapras.jpg","productos-carrito-funko3","total-funko3",0,30000);
writeHTML();


