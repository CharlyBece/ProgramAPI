function Leer() {
    const Comida = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='';
    const api_url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Comida}`
    buscar3(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);

            const {meals=[]} = resultado;
            
            console.log(meals);
            document.getElementById("lista").innerHTML='';

            meals.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='30%' src=${p.strMealThumb} alt="No hay strMealThumb"></img><h6>Nombre: ${p.strMeal}</h6>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.meals;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='30%' src=${p.strMealThumb} alt="No hay strMealThumb"></img><h6>Nombre: ${p.strMeal}</h6></div>`;
        })

    }

}    

const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.meals;
    console.log(respuesta.data.meals);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='30%' src=${p.strMealThumb} alt="No hay strMealThumb"></img><h6>Nombre: ${p.strMeal}</h6><` ;
                 

                })   

    }     
}
