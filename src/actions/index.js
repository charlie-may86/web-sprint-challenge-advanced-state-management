import axios from "axios";
export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAILED = "SMURF_FAILED";
export const SMURF_ADD = "SMURF_ADD";



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
// export const fetchSmurfs = () => {
//     return(dispatch) => {
//         dispatch
//     }
// }


//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
