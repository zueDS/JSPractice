

class Backpack{
    constructor(
        name,
        volume,
        color,
        pocketNum,
        racketL,
        racketR,
        lidOpen,
        dateAcquired
    ){
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.racket = {
            left: racketL,
            right: racketR,
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
    }
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newRacket(racketLeft, racketRight){
        this.racket.left = racketLeft;
        this.racket.right = racketRight;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
      }
}
    
    export default Backpack;
