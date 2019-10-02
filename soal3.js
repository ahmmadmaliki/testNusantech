function balik(str){
    let n=str.length
    let kata=""
    let hitung=0
    for(i=0;i<n;i++){
        kata=kata+str[n-i-1]
        if(kata[i]===str[i]){
            hitung++
        }
    }
    if(hitung==n){
        console.log(true)
    }else{
        console.log(false)
    }
}
balik('malikiikilam')