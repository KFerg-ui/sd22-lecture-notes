rangeBound = [x, y]

guess = 
function handleInput {
    for {"H" : guess=x}
    else if {"L" : guess = y}
    else if {"Y" : console.log("nailed it!")}
}

process.stdin.on("response", handleInput)

reassignBound(H)