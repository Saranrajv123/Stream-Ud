import _ from "lodash";
import {
  fetchStreams,
  fetchStream,
  streamCreate,
  editStream,
  deleteStream
} from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case fetchStreams:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case fetchStream:
      return { ...state, [action.payload.id]: action.payload };

    case streamCreate:
      return { ...state, [action.payload.id]: action.payload };

    case editStream:
      return { ...state, [action.payload.id]: action.payload };

    case deleteStream:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
