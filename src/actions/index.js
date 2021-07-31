import axios from "axios";
export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAILED = "SMURF_FAILED";
export const SMURF_ADD = "SMURF_ADD";
export const SET_ERROR = 'SET_ERROR'

export const smurfFetch = () => {
  return {
    type: SMURF_FETCH,
  };
};

export const smurfSuccess = (smurfs) => {
  return {
    type: SMURF_SUCCESS,
    payload: smurfs,
  };
};

export const smurfFailed = () => {
  return {
    type: SMURF_FAILED,
  };
};

export const addSmurf = (newSmurf) => {
  return {
    type: SMURF_ADD,
    payload: newSmurf,
  };
};

export const setError = () => {
    return {
        type: SET_ERROR
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.

// export const fetchSmurfs = () => {
//     console.log('log this');

//     }
// }

export const fetchSmurfs = () => {
  console.log("test this");
  return (dispatch) => {
    dispatch(smurfFetch());
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => dispatch(smurfSuccess(res.data)))
      .catch((err) => console.log("Axios Error", err));
  };
};

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
