import React, { UseState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../store/actions";

const StreamList = props => {
  useEffect(() => {
    props.fetchStreams();
    console.log('props.stream', props.stream)
  });

  return <div>Hello from stream list</div>;
};

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        stream: Object.values(state.streamReducer)
    }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
