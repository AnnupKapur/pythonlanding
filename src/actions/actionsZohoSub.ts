import { URL_ENDPOINTS } from "../constants";
const axios = require('axios');

// ONLY VALID FOR 1 HOUR
export const getZohoSubAccessToken = () => {
  axios.get(
    URL_ENDPOINTS.ZOHO_SUB_OAUTH,
    { 
      params: {
        refresh_token: process.env.REACT_APP_ZOHOSUB_REFRESH_TOKEN,
        client_id: process.env.REACT_APP_ZOHOSUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_ZOHOSUB_CLIENT_SECRET,
        grant_type: process.env.REACT_APP_ZOHOSUB_GRANT_TYPE,
        redirect_uri: 'https://www.Skittles.School',
      },
    })
  .then((response:Object) => {
    console.log('res');
    console.log(response);
  })
  .catch((error:Object) => {
    console.log('err')
    console.log(error);
  });
}

export const postNewSubscription = (
  display_name:String,
  salutation:String,
  first_name:String,
  email:String,
  billing_address_street:String,
  billing_address_city: String,
  billing_address_zip: String,
  shipping_address_street: String,
  shipping_address_city: String,
  shipping_address_zip: String,
  plan_code: String,
  start_date: String,
  redirect_url:String,
) => {
  axios.get(
    URL_ENDPOINTS.ZOHO_DOMAIN,
    {
      query: {

      },
    }
  )
}

/*
data: {
  customer: {
    display_name : `${req.query.client_first_name} ${req.query.client_last_name}`,
    salutation: req.query.salutation,
    first_name: req.query.client_first_name,
    lase_name: req.query.client_last_name,
    email : req.query.client_email,
    billing_address: {
      street: req.query.billing_address_street,
      city: req.query.billing_address_city,
      zip: req.query.billing_address_zip,
    },
    shipping_address:{
      street:req.query.shipping_address_street,
      city: req.query.shipping_address_city,
      zip: req.query.shipping_address_zip,
    },
    payment_terms: 1,
    payment_terms_label: 'Due on receipt',
  },
  plan:{
    plan_code: req.query.plan_code,
  },
  starts_at:req.query.start_date,
  redirect_url:req.query.redirect_url,
},
*/