const defaultState = {
    cash: 0
  }
  //   Функция, которая принимает текущее состояние и экшен и возвращает новое состояние. 
  export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_CASH':
        // state.cash это предыдущее значение
        // action.payload это добавляемое или снимаемое значение , действие пользователя
        // Возвращаем новый state с измененным cash
        return {...state, cash: state.cash + action.payload}
      case 'GET_CASH':
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }
  }