
let mediaRecorder;
let recordedBlobs;

const startRecording =()=>{
    if(!stream){
        alert("No current feed")
        return
    }
    console.log("Start Recording")
    recordedBlobs=[]; //an array to hold the blobs for playback
    mediaRecorder=new MediaRecorder(stream); //make a mediaRecorder from the constructor
    mediaRecorder.ondataavailable=e=>{
        //ondataavailable will run when the stream ends, or stopped, or we specifically asks for it
        console.log("Data is available for the media recorder")
        recordedBlobs.push(e.data)
    }
    mediaRecorder.start();
    changeButtons([
        'green','green','blue','blue','green','blue','grey','blue'
    ])

}


const stopRecording =()=>{
    if(!mediaRecorder){
        alert("Please record before stopping")
        return
    }
    console.log("Start Recording")
    mediaRecorder.stop();
}


const playRecording =()=>{
    console.log("Start Recording")
    if(!recordedBlobs){
        alert("No Recording saved")
        return
    }
    const superBuffer=new Blob(recordedBlobs) //superBUffer is a super buffer of our array of blobs
    const recordedVideoELe=document.querySelector('#other-video');
    recordedVideoELe.src=window.URL.createObjectURL(superBuffer);
    recordedVideoELe.controls=true;
    recordedVideoELe.play();
    changeButtons([
        'green','green','blue','blue','green','green','green','blue'
    ])
}

