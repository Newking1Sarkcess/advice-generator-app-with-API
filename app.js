const api_url = 'https://api.adviceslip.com/advice';

async function getApi(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    
    document.getElementById('id').textContent = `ADVICE #${data.slip.id}`;
    document.getElementById('advice').textContent = `"${data.slip.advice}"`;
   
} 

getApi();