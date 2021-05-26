import axios from "axios";
export const API_BASE_URL = "https://pure-plains-52435.herokuapp.com";

function handlerError(error, callback) {
  if (error.message === "Network Error") {
    alert("There is a problem while connecting to server");
  }
  if (error.response === undefined) {
    console.log();
  } else if (error.response.status === 500) {
    alert("Something Went Wrong !");
  } else {
    callback &&
      callback({
        status: "error",
        response: error,
      });
  }
}

class RestAPI {
  static UserApi(data) {
    return axios({
      method: "post",
      url: `${API_BASE_URL}/user-form`,
      data: data,
    }).then((res) => res);
  }
}

export default RestAPI;

export const listUsersAPI = (callback) => {
  let url = `${API_BASE_URL}/user-form`;
  axios
    .get(url)
    .then((response) => {
      callback &&
        callback({
          status: "success",
          response: response,
        });
    })
    .catch((error) => {
      handlerError(error, callback);
    });
};
