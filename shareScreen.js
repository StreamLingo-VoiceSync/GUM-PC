

const shareScreen= async()=>{
    const options={
        video:true,
        audio:true,
        surfaceSwitching:'include', //surface Switching takes only values include or exclude 
    }
    try{
        mediaStream=await navigator.mediaDevices.getDisplayMedia(options)
    }catch(err){
        console.log(err)
    }

    changeButtons([
        'green','green','blue','blue','green','green','green','green'
    ])
}