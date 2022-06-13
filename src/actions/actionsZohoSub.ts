import { URL_ENDPOINTS } from "../constants";
const axios = require('axios');

// ONLY VALID FOR 1 HOUR
export const getZohoSubAccessToken = () => {
  axios.post(URL_ENDPOINTS.ZOHO_SUB_OAUTH, {
    refresh_token: process.env.REACT_APP_ZOHOSUB_REFRESH_TOKEN,
    client_id: process.env.REACT_APP_ZOHOSUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_ZOHOSUB_CLIENT_SECRET,
    grant_type: process.env.REACT_APP_ZOHOSUB_GRANT_TYPE,
  })
  .then(function (response:Object) {
    console.log(response);
  })
  .catch(function (error:Object) {
    console.log(error);
  });
}