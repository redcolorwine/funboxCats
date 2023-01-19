import { connect } from "react-redux"
import Main from "./Main"

let mapStateToProps = (state) => {
    return {
        cats: state.catsReducer.cats,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        chooseCat: (catId) => {
            dispatch({
                type: 'CHOOSE_CAT',
                catId
            })
        }
    }
}

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;