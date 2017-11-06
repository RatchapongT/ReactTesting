import fetch from "dva/fetch";
import { notification } from "antd";

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    description: response.statusText,
    message: `Internal server error ${response.status}: ${response.url}`
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request (url, options) {
  const defaultOptions = {
    credentials: "include"
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === "POST" || newOptions.method === "PUT" || newOptions.method === "PATCH") {
    newOptions.headers = {
      "Accept": "application/json",
      "Content-Type": "application/json; charset=utf-8",
      ...newOptions.headers
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  try {
    const response = checkStatus(await fetch(url, newOptions));
    return response.json();
  } catch (err) {
    if (err.code) {
      notification.error({
        description: err.message,
        message: err.name
      });
    }
    if ("stack" in err && "message" in err) {
      notification.error({
        description: err.message,
        message: `Encounter a problem for: ${url}`
      });
    }
    return err;
  }
}
