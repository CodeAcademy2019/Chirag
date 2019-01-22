const tally={
    frames: [],
    points: 0
};

function pins(strike){
    tally.frames.push(strike);
}

function score(){
    let i,j=0;
    let points=0;
    const game = tally.frames;

    for(i=0;i<9;i++){
        // if(j>=tally.frames.length)
        // throw new Error('To few inputs!!!');
        if(game[j]==10){
            points+=10+game[j+1]+game[j+2];
            j++;
        }else if(game[j]+game[j+1]==10){
            points+=10+game[j+2];
            j+=2;
        }else{
            points+=game[j]+game[j+1];
            j+=2;
        }
    }

    // if(j!=tally.frames.length)
    // throw new Error('Invalid Input!!!');
    if(game[j]!=10){
        points+=game[j]+game[j+1];
    }else{
        points+=game[j]+game[j+1]+game[j+2];
    }
    console.log(points);
    tally.points=points;
    return tally.points;
}

// function valid(){
//     if(tally.frames.length<10 || tally.frames.length>20)
//     throw new Error('Invalid Input');
// }

function runner(ip){
    tally.frames=[];
    tally.points=0;
// ip=[10,10,10,10,1,2,1,2,1,2,1,2,1,2,1,2]; //for testing;
ip.map((x) => pins(x));
// valid();
return score();
}

module.exports={runner,tally,pins,score};