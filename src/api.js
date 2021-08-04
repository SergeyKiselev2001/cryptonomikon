
const API_KEY = '5b122270f9ff64c0a513d8fb6f709e265dedf25d4952a685b14870979b3fe42b';

export const loadTicker = (BufferName) => {
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${BufferName}&tsyms=USD&api_key=5b122270f9ff64c0a513d8fb6f709e265dedf25d4952a685b14870979b3fe42b`
    ).then(p => p.json());
    
};

