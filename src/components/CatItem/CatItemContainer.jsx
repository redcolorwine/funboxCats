import { connect } from "react-redux"
import CatItem from "./CatItem"

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        chooseCat: (catId) => {
            dispatch({
                type: 'CHOOSE_CAT',
                catId
            })
        },
        updateCat: (id, about, name, taste, gift, count, kg,available) => {
            dispatch({
                type: 'UPDATE',
                cat: { id, about, name, taste, gift, count, kg,available }
            })
        }
    }
}

let CatItemContainer = connect(mapStateToProps, mapDispatchToProps)(CatItem);

export default CatItemContainer;