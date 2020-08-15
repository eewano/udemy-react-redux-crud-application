export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({ // ここの()は引数
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})