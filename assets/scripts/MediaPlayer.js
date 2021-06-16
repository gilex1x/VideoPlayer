class MediaPlayer{
    constructor(config){
        this.media = config.element;
        this.plugins = config.plugins || []; 
        this._initPlugin();
    }

    play(){
        this.media.play();
    }

    pause(){
        this.media.pause();
    }

    mute(){
        this.media.muted = true;
    }

    unmute(){
        this.media.muted = false;
    }

    togglePlayer(){
        if(this.media.paused){
            this.play();
        }else{
            this.pause();
        }
    }

    toggleMute(){
        if(!this.media.muted){
            this.mute()
        }else{
            this.unmute();
        }
    }
// vamos a hacer que nuestros plugins se inicien 
    _initPlugin(){
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
}
//El querySelector usa los selectores de CSS

export default MediaPlayer;