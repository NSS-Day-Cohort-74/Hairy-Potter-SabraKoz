let item = 1;

export const makePottery = (shape, weight, height) => {
    const newItem = {
        shape: shape,
        weight: weight,
        height: height,
        id: item
    };
    item++;

    return newItem

};