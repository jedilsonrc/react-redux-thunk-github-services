import store from '../store/index'
import { fetch_post, receive_error, receive_post } from '../actions/index'

const thunk_action_creator = userName => {
    const user = userName.replace(/\s/g, "");
    store.dispatch(fetch_post());
    return function (dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found!!");
                } else dispatch(receive_post(data));
            })
            .catch(err => dispatch(receive_error()));
    };
};


export default thunk_action_creator; 