export const FIND_LABELS_FOR_GROUP = "FIND_LABELS_FOR_GROUP";
export const findLabelsForGroup = (labels) => ({
    type: FIND_LABELS_FOR_GROUP,
    labels: labels
});

export const CREATE_LABEL = "CREATE_LABEL";
export const createLabel = (label) => ({
    type: CREATE_LABEL,
    label: label
});

export const DELETE_LABEL = "DELETE_LABEL";
export const deleteLabel = (labelId) => ({
    type: DELETE_LABEL,
    labelId: labelId
});

export const UPDATE_LABEL = "UPDATE_LABEL";
export const updateLabel = (labelId, label) => ({
    type: UPDATE_LABEL,
    labelId: labelId,
    label: label
});

export const FIND_LABEL_BY_ID = "FIND_LABEL_BY_ID";
export const findLabel = (label) => ({
    type: FIND_LABEL_BY_ID,
    LABEL: label
});

export const FIND_ALL_LABELS = "FIND_ALL_LABELS";
export const findAllLabels = (labels) => ({
    type: FIND_ALL_LABELS,
    labels: labels
});