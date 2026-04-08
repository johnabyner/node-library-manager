//Validate input
function validateInputCommands(input){
    //sanatazing our input
    const inputSanitazed = input.map(item => item.trim());
    return inputSanitazed
}
function validateInputForBD(input){
    let inputAddBookSanitazed = input.splice(1,input.length);

    return inputAddBookSanitazed;
}

export {validateInputCommands, validateInputForBD};