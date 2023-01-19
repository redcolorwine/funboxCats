let initialState = {
    cats: [
        { id: 1, about: 'Сказочное заморское яство', name: 'Нямушка', taste: 'с фуа-гра', count: '10 порций', gift: 'мышь в подарок', kg: 0.5, available: true, chosen: false },
        { id: 2, about: 'Сказочное заморское яство', name: 'Нямушка', taste: 'с рыбой', count: '40 порций', gift: '2 мыши в подарок', kg: 1.5, available: true, chosen: false },
        { id: 3, about: 'Сказочное заморское яство', name: 'Нямушка', taste: 'с курой', count: '100 порций', gift: '5 мышей в подарок', kg: 3.5, available: false, chosen: false },
    ],

}

let catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE': {
            return {
                ...state,
                cats: state.cats.map(cat => {
                    if (cat.id === action.cat.id) {
                      
                        return { ...action.cat }
                    } else {
                        return { ...cat }
                    }
                })
            }
        }
        case 'CHOOSE_CAT': {
            return {
                ...state,
                cats: state.cats.map(cat => {
                    if (cat.id === action.catId && cat.available) {
                        if (cat.chosen) {
                            return { ...cat, chosen: false }
                        } else {

                            return { ...cat, chosen: true }
                        }
                    }
                    return cat;
                }),
            }
        }
        default: return state;
    }
}

export default catsReducer;