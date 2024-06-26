class Backpack{
    constructor(
        name,
        volume,
        color,
        pocketName,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired,
        image
    ){
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketName = pocketName;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
        this.image = image;
    }

    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
    BackpackAge(){
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; //elapse the time range ino milliseconds 
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
}

export default Backpack;