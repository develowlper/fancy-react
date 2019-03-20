function reducer(state, action) {
  const newBasket = [...state];
  switch (action.type) {
    case 'add':
      newBasket.push(action.payload);
      return newBasket;
    case 'remove':
      let index = -1;
      switch (typeof action.payload) {
        case 'string':
          index = newBasket.findIndex(x => x.sku === action.payload);
          break;
        case 'number':
          index = action.payload;
          break;
        default:
          index = newBasket.indexOf(action.payload);
      }

      if (index < 0) {
        throw 'No item found';
      }
      newBasket.splice(index, 1);
      return newBasket;
    case 'reset':
      return [];
    default:
      return newBasket;
  }
}

export default reducer;
