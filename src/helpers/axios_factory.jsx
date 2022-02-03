import axios from "axios";

export const METHOD_GET = "GET",
  METHOD_POST = "POST",
  METHOD_PUT = "PUT",
  METHOD_DELETE = "DELETE";

export default async function axiosFactory({
  url,
  method,
  data,
  isFake = false,
}) {
  const header = getHeader(url, method, data);
  const urlToUse = isFake ? url : process.env.REACT_APP_BASE_URL + url;
  let response;
  try {
    switch (method) {
      case METHOD_GET:
        response = await axios.get(urlToUse, header);
        break;
      case METHOD_POST:
        response = await axios.post(urlToUse, data, header);
        break;
      case METHOD_PUT:
        response = await axios.put(urlToUse, data, header);
        break;
      case METHOD_DELETE:
        response = await axios.delete(urlToUse, header);
        break;
      default:
        new Error("Method not supported");
    }
  } catch (error) {
    if (error.response) {
      response.error = error.response;
    } else if (error.request) {
      response.error = error.request;
    } else {
      response.error = error.message;
    }
  } finally {
    return {
      data: response.data,
      status: response.status,
      error: response.error,
    };
  }
}

function getHeader(url, method, data) {
  let header = {
    "Content-Type": "application/json",
  };
    header["Authorization"] = `Bearer ${sessionStorage.getItem("token")}`;
  if (method === METHOD_DELETE) {
    return { headers: header, data: data };
  }
  return { headers: header };
}