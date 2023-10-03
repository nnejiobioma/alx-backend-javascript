const updateUniqueItems = (itemsMap) => {
    if (!(itemsMap instanceof Map)) {
        throw new Error('Input is not a Map');
    }

    for (const [itemName, itemCount] of itemsMap.entries()) {
        if (itemCount === 1) {
            itemsMap.set(itemName, 100);
        }
    }

    return itemsMap;
};

export default updateUniqueItems;