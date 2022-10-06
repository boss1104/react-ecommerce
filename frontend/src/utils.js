export const getError = (error) => {
  return error.response && error.response.data.message //check if error response and error message exist
    ? error.response.data.message // than return data from backend
    : error.message; // otherwise return general message
};
