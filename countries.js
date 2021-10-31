function get_countries(){
    $.ajax({
        url : "https://restcountries.eu/rest/v2/all",
        type: "GET",
        dataType: "JSON",
        success: function(data){
            populate_countries(data);
        },
        failure: function(){
            console.log("Error");
        }


    });
       
}
function populate_countries(countries){
    for(var a= 0; a< countries.length; a++){
        console.log(countries[0].name)
    }
}
get_countries();