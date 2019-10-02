function sort(data){
    let n=data.length
    let dataa=data
    for(let i=0;i<n-1;i++){
      let min=data[i],pos=i
      for(j=i+1;j<n;j++){
        if(min>data[j]){
          min=data[j]
          pos=j
        }
      }
      temp=data[i]
      data[i]=data[pos]
      data[pos]=temp
    }
    console.log(data)
    for(let i=0;i<n-1;i++){
      let max=dataa[i],pos=i
      for(j=i+1;j<n;j++){
        if(max<dataa[j]){
          max=dataa[j]
          pos=j
        }
      }
      temp=dataa[i]
      dataa[i]=dataa[pos]
      dataa[pos]=temp
    }
    console.log(dataa)
  }
  sort([3,2,1,5,2])