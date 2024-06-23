/* creating classes
Class no1: */

class BadmintonBackpack {
    constructor(
        //define parameters 
        name,
        size,
        color,
        racket1,
        racket2,
        pocketNum,
        strapLengthL,
        strapLengthR,
        pocketOpen,
    ){
        //now define the properties
        this.name = name;
        this.size = size;
        this.color = color;
        this.racket = {
            racket1: racket1,
            racket2: racket2,
        },
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.pocketOpen = pocketOpen;
    }

    //calling method like normal function

    packOpen(packStatus) {
    this.packOpen = packStatus;
}
    newRacket(racket1, racket2){
        this.racket.racket1 = racket1;
        this.racket.racket2 = racket2;
    }
}

export default BadmintonBackpack;


