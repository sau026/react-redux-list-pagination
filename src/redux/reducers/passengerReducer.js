const initialState = {
    passengerData: {},
    selectedPassengerData: null,
    isLoading: false,
  };
  
  const passengerData = (state = initialState, action) => {
    switch (action.type) {
      case 'PASSENGER_DATA':
        return { ...state, passengerData: action.passengerData };
      case 'SELECTED_PASSENGER':
        return { ...state, selectedPassengerData: action.selectedPassengerData };
      case 'SET_LOADING':
        return { ...state, isLoading: action.status };
      default:
        return state;
    }
  };
  
  export default passengerData;
  