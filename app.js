const api_url="https://api.quotable.io";

async function getquote(url){
    const response= await fetch(url);
    var data = await response.json();
}