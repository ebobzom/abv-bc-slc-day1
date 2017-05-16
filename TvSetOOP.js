
TelevisionSet=function(make,model,screenSize){
    /*
    TelevisionSet servers as the constructor function (ie class in other languages).
    */
    this.make=make;
    this.model=model;
    this.screenSize=screenSize;
    this.volume=0;
}
TelevisionSet.prototype={
    onTelevisionSet:function (){return 'on';},
    offTelevisionSet:function (){return 'off';},
    displayImage: function(){return 'displaying';},
    increaseVolumeTo:function(valueToIncreaseTo){
        if (this.volume<=100 && valueToIncreaseTo+this.volume<=100){
            this.volume+=valueToIncreaseTo;
            return this.volume;
        }else{
            return 'MAX 100';
        }
    },
    decreaseVolumeBy:function(valueToDecreaseTo){
        if (this.volume===0){
            return 0;
        }else if(this.volume-valueToDecreaseTo>=0){
            this.volume-=valueToDecreaseTo;
            return this.volume;
        }
    },
    changeChannel:function(channelNumber){return 'channel '+channelNumber},
    mute:function(){return 'volume off';},
    unMute:function(){return this.volume;}
};
// creating new subclass of TelevisionSet object
let tvLED=function (make,model,screenSize,resolution){
    TelevisionSet.call(this,make,model,screenSize);
    this.resolution=720;

    //tvLED subclass can be instantiated by doing: let instanceName = new tvLED(make,model,screenSize,resolution)
};
tvLED.prototype=Object.create(TelevisionSet.prototype);
tvLED.prototype.constructor=tvLED;

// creating new subclass of TelevisionSet object
let tvPlasma=function (make,model,screenSize,resolution){
    TelevisionSet.call(this,make,model,screenSize,resolution);
    this.resolution=1020;
};
tvPlasma.prototype=Object.create(TelevisionSet.prototype);
tvPlasma.prototype.constructor=tvPlasma;
//tvPlasma subclass can be instantiated by doing: let instanceName = new tvPlasma(make,model,screenSize,resolution)

            