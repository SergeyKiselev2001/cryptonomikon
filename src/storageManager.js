export const LSUpdate = (TickersToSave) => {
    localStorage.setItem('cryptonomican',JSON.stringify(TickersToSave));
};

export const getItemFromLS = (ItemName) => {
    return localStorage.getItem('cryptonomican');
};