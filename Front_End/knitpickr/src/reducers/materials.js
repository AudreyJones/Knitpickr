export default (state=[], action) => {
        switch (action.type) {
            case 'ADD_MATERIAL':
                console.log('We want to add a material here')
                return state

            // case 'EDIT_MATERIAL':
            //     dispatch({type: 'EDIT_MATERIAL', payload: 'something'})

            // case 'REMOVE_MATERIAL':
            //     dispatch({type: 'REMOVE_MATERIAL', payload: 'something'})

            default:
                return state
        }
}