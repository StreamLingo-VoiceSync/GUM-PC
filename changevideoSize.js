
const supportedConstraints=navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

const changeVideoSize =()=>{
    stream.getVideoTracks().forEach(track=>{
         const height=document.querySelector('#vid-height').value
         const width=document.querySelector('#vid-width').value

         const vConstraints={
             height:{exact:height<capabilities.height.max ? height : capabilities.height.max},
             width:{exact:width<capabilities.width.max ? width : capabilities.width.max},
             //frameRate:10,
             //aspectRatio:10,
         }
         track.applyConstraints(vConstraints)
    })
    //  stream.getTracks().forEach(track=>{
    //      const cap=track.getCapabilities()
    //      console.log(cap);
    //  })
}

