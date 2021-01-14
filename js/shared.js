var Shared = {
    generate(fifthsEnabled) {
        r = getRandomInt(0, 12);
        roots = ['C', 'Db', 'D', 'E', 'Eb', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
        root = roots[r];
    
        q = getRandomInt(0, 3);
        qualities = ['maj7', '-7', '7'];
        quality = qualities[q];
    
        if(fifthsEnabled)
        {
            d = getRandomInt(0, 3);
            degrees = ['third', 'fifth', 'seventh'];
        } else {
            d = getRandomInt(0, 2);
            degrees = ['third', 'seventh'];
        }
        degree = degrees[d];
    
        //console.log(`You need to guess what is ${degree} of ${root}${quality} chord`);
        return {
            root: root,
            quality: quality,
            degree: degree
        }
    }
}