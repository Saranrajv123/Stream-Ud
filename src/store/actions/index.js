import streams from "../../apis/streams";

export const signIn = userId => {
  return {
    type: "SIGNIN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGNOUT"
  };
};

export const streamCreate = formvalue => async dispatch => {
  const response = await streams.post("/streams", formvalue);
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: "FECTH_STREAMS", payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

export const editStream = (id, formvalues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formvalues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
};
