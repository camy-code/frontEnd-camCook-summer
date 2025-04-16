const colorArr = ["#b48291","#79ADDC", "white"];  // This would be our color array
    // The following are the colours I got from the color picking
    // Website: https://coolors.co/visualizer/f5e0b7-d6ba73-8bbf9f

const colorArrHover = ["#c0657f", "#79ADDC","white"]; // This would be our hover color array

    // The purpose of these methods are to avoid copy pasting long
    // color codes

const getColor = () => {
    return colorArr;
}

const getPrimary = () => {
    if (colorArr.length < 0) {
        return null;
    }


    return colorArr[0];
}

const getSecondary = () => {
    if (colorArr.length < 1) {
        return null;
    }
    return colorArr[1]
}


const getThird = () => {
    if (colorArr.length < 2) {
        return null;
    }
    return colorArr[1]
}

const getWhite = () => {
    return "white"
}

// time to do the hover stuff
const getHoverColor = () => {
    return colorArrHover;
}
const getHoverColorPrimary = () => {
    if (colorArrHover.length < 0) {
        return null;
    }
    return colorArrHover[0];
}
const getHoverColorSecondary = () => {
    if (colorArrHover.length < 1) {
        return null;
    }
    return colorArrHover[1]
}

export default {getColor, getPrimary, getSecondary, getThird, getWhite,
    getHoverColor,getHoverColorPrimary,getHoverColorSecondary}

// This could be used for more colors, this seems like an easy shortcut