async function getExchange() {
    let x = await fetch('https://finans.truncgil.com/today.json');
    let y = await x.text();
    let z = await JSON.parse(y);
 
    document.getElementById('usdAlis').innerHTML = z['USD']['Alış']
    document.getElementById('usdSatis').innerHTML = z['USD']['Satış']
    document.getElementById('eurAlis').innerHTML = z['EUR']['Alış']
    document.getElementById('eurSatis').innerHTML = z['EUR']['Satış']
}
getExchange();

async function convertExchange() {
    let x = await fetch('https://finans.truncgil.com/today.json');
    let y = await x.text();
    let z = await JSON.parse(y);
    let amountValue = document.getElementById('amount').value;
    let fromValue = document.getElementById('from').value; 
    let toValue = document.getElementById('to').value; 
   
   
    
    if (toValue == 'TRY') {
       let convertedValue = parseFloat(amountValue) * parseFloat(z[fromValue]['Satış'].replace(',', '.'));
       console.log(convertedValue);
       document.getElementById('result').innerHTML = convertedValue;} 
      else if (fromValue =='TRY'){
       let convertedValue = parseFloat(amountValue) / parseFloat(z[toValue]['Satış'].replace(',', '.'));
       console.log(convertedValue);
       document.getElementById('result').innerHTML = convertedValue;
    } else {
        let convertedValue = parseFloat(amountValue) * parseFloat(z[fromValue]['Satış'].replace(',', '.')) / parseFloat(z[toValue]['Satış'].replace(',', '.'));
        console.log(convertedValue);
        document.getElementById('result').innerHTML = convertedValue;
    }  
}
