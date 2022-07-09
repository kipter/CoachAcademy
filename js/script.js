if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').then(e=>{
        console.log('Registered' + e);
    }).catch(err=>{
        console.log(err)
    })
}
