import {
    CREATE_LABEL,
    DELETE_LABEL, FIND_ALL_LABELS,
    FIND_LABEL_BY_ID,
    FIND_LABELS_FOR_GROUP,
    UPDATE_LABEL
} from "../actions/labelActions";

const labelReducer = (state={labels:[{id: 1, title: "No Current Labels"}]}, action) => {
    switch (action.type) {
        case FIND_LABELS_FOR_GROUP:
            return {
                labels: action.labels
            };
        case CREATE_LABEL:
            return {
                labels: [
                    ...state.labels,
                    action.label
                ]
            };
        case UPDATE_LABEL:
            return {
                labels: state.labels.map(label =>
                    label.id === action.labelId ? action.label : label
                )
            };
        case DELETE_LABEL:
            return {
                labels: state.labels.filter(label => label.id !== action.labelId)
            };
        case FIND_ALL_LABELS:
            return {
                labels: action.labels
            };
        case FIND_LABEL_BY_ID:
            return {
                labels: action.label
            };
        default:
            return state
    }
};

export default labelReducer