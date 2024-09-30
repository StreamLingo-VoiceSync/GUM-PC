let videoEl=document.querySelector('#my-video');
let stream=null //stream variable to use
let mediaStream=null; //init mediaStream var for screenShare

const constraints={
    audio:true, //use headphones because audio access both mic and speaker audio
    video:true,
}


const getMicAndCamera=async()=>{

    try{
        stream=await navigator.mediaDevices.getUserMedia(constraints);
       
        console.log(stream)
        changeButtons([
            'green','blue','blue','grey','grey','grey','grey','grey'
        ])
    }catch(err){
        console.log("user need to alllow mic and camera")
        console.log(err)
    }
    
}
const showMyFeed =e=>{
    console.log("showmy feed is working")
    videoEl.srcObject = stream; //set our media stream to our video tag in html
    if(!stream){
        alert("Stream is loading")
        return;
    }
    const tracks = stream.getTracks();
    console.log(tracks);
    changeButtons([
        'green','green','blue','blue','blue','grey','grey','blue'
    ])
}
const stopMyFeed=e=>{
    if(!stream){
        alert("Stream is loading")
        return;
    }
    const tracks = stream.getTracks();
    tracks.forEach(track=>{
        //console.log(track)
        track.stop(); //disconnects the track with the source
    })
    changeButtons([
        'blue','grey','grey','grey','grey','grey','grey','blue'
    ])

}

document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e))
document.querySelector('#show-video').addEventListener('click',e=>showMyFeed(e))
document.querySelector('#stop-video').addEventListener('click',e=>stopMyFeed(e))
document.querySelector('#change-size').addEventListener('click',e=>changeVideoSize(e))
document.querySelector('#start-record').addEventListener('click',e=>startRecording(e))
document.querySelector('#stop-record').addEventListener('click',e=>stopRecording(e))
document.querySelector('#play-record').addEventListener('click',e=>playRecording(e))
document.querySelector('#share-screen').addEventListener('click',e=>shareScreen(e))

document.querySelector('#audio-input').addEventListener('change',e=>changeAudioInput(e))
document.querySelector('#audio-output').addEventListener('change',e=>changeAudioOutput(e))
document.querySelector('#video-input').addEventListener('change',e=>changeVideo(e))


