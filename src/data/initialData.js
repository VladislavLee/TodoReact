import uuid from "uuid";

export const cards = [
    {
        cardTitle: "1 task",
        cardDescription: "learn react",
        cardIsDone: false,
        cardId: uuid.v4()
    },

    {
        cardTitle: "2 task",
        cardDescription: "learn js",
        cardIsDone: false,
        cardId: uuid.v4()
    }
];

export const markers = [
    {
        markerName: '1 marker',
        markerId: uuid.v4(),
    }
];


export const trash = [

    ];