function leakyBucket(){
    const buffer=(document.querySelector('.leakyArray').value).split(',');
    console.log(buffer)
    let leak_size=parseInt(document.querySelector('.leakRate').value);
    const len=buffer.length;
    var i=len-1;
    var sum=0;
    var z=0;
    let previous=0
    // while(i<length){
    //     sum=0;
    //     while(z<length)
    //     {
    //         sum=sum+buffer[i];
    //         if(leak_size<buffer[previous]){
    //           leak_size=document.querySelector('.leakRate').value; 
    //         }
    //         if(sum<leak_size)
    //         {
    //           console.log("in frame "+buffer[i]);
    //           z=z+1;
    //         }
    //         else{
    //             previous=z
    //             break;
    //         }
    //     }

    //     i=i+1;

    //     console.log("tick")
    //     z=i;    
    // }
    while(i>=-1){
      if(sum<=leak_size){
        sum=sum+parseInt(buffer[i])
        z+=1
        i--
        leak_size-=parseInt(buffer[i])
      }
      else{
        if(z==0 && sum>leak_size){
          leak_size=document.querySelector('.leakRate').value;
          sum=0
        }
        else{
          for(let i=0;i<z;i++){
            console.log(buffer.pop())
          }
          console.log('tick')
          z=0
          sum=0
          if(i==-1){
            i--
          }
        }
      }
    }
}

class Tok {
  constructor(arr ,bucketSize, refillInterval) {
    this.tokens = bucketSize;
    this.a=arr
    setInterval(() => {
      if (this.tokens < bucketSize) {
        this.tokens++;
      }
    }, refillInterval);
  }

  redeem() {
    if (this.tokens) {
      this.tokens--;
      let t=this.a.pop()
      return t;
    }
    return false;
  }
};

function tokenBucket(){
    console.log('hsdhgyshugyufrw')
    let tokenArr=document.querySelector('.tokenArray').value
    let size=document.querySelector('.tokenSize').value
    let interval=document.querySelector('.tokenInterval').value
    console.log(tokenArr)
    ta=tokenArr.split(',');

    let token = new Tok(ta,size,interval)
    console.log(ta)
    while(ta.length!=0){
        console.log(token.redeem())
    }
}