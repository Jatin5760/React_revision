async function fetchListOfProducts() {
    try{
        const apiResponse = await fetch('https:url.com',{
            method:'GET'
        })
        const result = await apiResponse.json();
    }
    catch(e){
        console.log(e);
        
    }
}
fetchListOfProducts() 