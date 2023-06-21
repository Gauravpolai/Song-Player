export const playaudio=(isplaying, audioref)=>{
    if(isplaying){
        const playpromise= audioref.current.play();

        if(playpromise!==undefined){
            playpromise.then((audio)=>{
                audioref.current.play();
            })
        }
    }  
}
