import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    //  This action will receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}.
    addCard: (state, action) => {
      const { id } = action.payload;
      //   inside state object, inside cards property object, create a property witht the payload 'id' and assign it the whole payload it will recieve.
      state.cards[id] = action.payload;
    },
  },
});

export const { addCard } = cardsSlice.actions;
export const selectCardById = (id) => (state) => state.cards.cards[id];
export default cardsSlice.reducer;
