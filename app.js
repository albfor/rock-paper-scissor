let computerPlay = () => {
    let hand;
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            hand = 'Rock';
            break;
        case 1:
            hand = 'Paper';
            break;
        case 2:
            hand = 'Scissor';
            break;
    }
    return hand;
}