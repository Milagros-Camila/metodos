const apiURL = "http://localhost/metodos/api.php"
//FUNCION GET
async function getData(){
    console.log('Ingreso a GET data');
    try{
        const respuesta = await fetch(`${apiURL}?id=123&nombre=Milagros&apellido=Churata`,{
            
            method: 'GET'
        });
        const data = await respuesta.json();
        console.log(data);
    }catch (error){
        console.log("Error al momento de hacer la petición GET", error);

    }
}

let btnGet = document.querySelector('#getdata');
btnGet.addEventListener('click',function(){
getData();
});
//FUNCION POST
async function postData(){
    console.log('Ingreso a POST data');
    try {
        const respuesta = await fetch(`${apiURL}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // indicamos que el tipo de respuesta en este caso json
            },
            body: JSON.stringify({                 //en POST el contenido NO va en una URL va en el CUERPO
                nombre: 'Milagros Camila',
                apellido: 'Churata Ordoñez',
                lenguaje_favorito:"Javascript",
                id:'251003'
            })
        });
        const data_retorno = await respuesta.json();//conviertiendo la respuesta en una JSON
        // console.log('data POST');
        console.log(data_retorno);
        
    } catch (error) {
        console.log("Error al momento de hacer la petición POST", error);  //imprimimos el error en caso de que haya un error al hacer la peticion POST.
        
    }
}

let btnPost = document.querySelector('#postdata');//llamamos al ID del boton
btnPost.addEventListener('click',function(){//le damos la funcion al boton cuando se haga click
    postData();
    // alert('Ingreso aquiiiiii');

});

//FUNCION PUT
async function putData(){
    console.log('Ingreso a PUT data');
    try {
        const respuesta = await fetch(`${apiURL}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // indicamos que el tipo de respuesta en este caso json
            },
            body: JSON.stringify({                 
                nombre: 'Camila',
                apellido: 'Ordoñez',
                lenguaje_favorito:"Javascript",
                id:'251003'
            })
        });
        const data_entrante = await respuesta.json();//conviertiendo la respuesta en una JSON
        // console.log('data POST');
        console.log(data_entrante );
        
    } catch (error) {
        console.log("Error al momento de hacer la petición PUT", error);  //imprimimos el error en caso de que haya un error al hacer la peticion PUT.
        
    }
}

let btnPut = document.querySelector('#putdata');//llamamos al ID del boton
btnPut.addEventListener('click',function(){//le damos la funcion al boton cuando se haga click
    putData();
    // alert('Ingreso aquiiiiii');

});

//FUNCION DELETE
async function deleteData() {
    console.log('Ingreso a DELETE data');
    try {
        const respuesta = await fetch(`${apiURL}?id=123`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer la petición DELETE", error);
    }
}

let btnDelete = document.querySelector('#deletedata');
btnDelete.addEventListener('click', function() {
    deleteData();
});

