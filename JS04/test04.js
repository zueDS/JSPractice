for(i=0; i < 10; i++){

    // in this case code will skip the number 5 and 3
    if(i === 5 || i === 3){
        continue;
    }

    //From this part, the code will be execute from number 7
    console.log(i);

    if(i==7){
        break;
    }
}
console.log("I have broken the loop");