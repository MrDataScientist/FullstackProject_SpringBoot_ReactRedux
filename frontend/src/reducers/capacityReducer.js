import {
  GET_CAPACITIES,
  DELETE_CAPACITY,
  ADD_CAPACITY,
  GET_CAPACITY,
  CLEAR_CAPACITY_CLOSE_MODAL,
  UPDATE_CAPACITY
} from "../actions/ActionTypes";

const initialState = {
  capacities: [],
  capacity: {},
  links: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CAPACITIES:
      return {
        ...state,
        capacities: action.payload,
        links: action.links
      };

    case DELETE_CAPACITY:
      return {
        ...state,
        capacities: state.capacities.filter(
          capacity => capacity.id !== action.payload
        )
      };

    case ADD_CAPACITY:
      return {
        ...state,
        capacities: [action.payload, ...state.capacities]
      };

    case GET_CAPACITY:
      return {
        ...state,
        capacity: state.capacities.find(
          capacity => capacity.id === action.payload
        )
      };

    case CLEAR_CAPACITY_CLOSE_MODAL:
      return {
        ...state,
        capacity: action.payload
      };

    case UPDATE_CAPACITY:
      return {
        ...state,
        capacities: state.capacities.map(capacity =>
          capacity.id === action.payload.id
            ? (capacity = action.payload)
            : capacity
        )
      };

    default:
      return state;
  }
}
