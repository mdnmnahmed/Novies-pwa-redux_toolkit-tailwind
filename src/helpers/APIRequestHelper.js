/*
 * Filename: APIRequestHelper.js
 * Created Date: Saturday, September 16th 2021, 11:00:21 pm
 * Author: Md Numan Ahmed
 * 
 * Copyright (c) 2021 Numan-Dev
*/

import axios from "axios";


/**
 * Fetch Data from the API & return Response
 * @param {String} method - HTTP requests - GET || POST || PUT || DELETE
 * @param {String} endpoint 
 * @param {Object} data 
 * @returns - {Object} - API response
 */
const APIRequestHelper = async (method = 'get', endpoint, data = null) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    let config = {};

    if ((method === 'post' || method === 'put') && data) {
        config = {
            method: method,
            url: BASE_URL + endpoint,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
    }

    if (method === 'get') {
        config = {
            method: 'get',
            url: BASE_URL + endpoint,
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }

    let response = await axios(config)
        .catch((error) => {
            if (error.response) {
                if (error.response.data.msg) {
                    console.error('Error occur in Fetching data from API: ', error.response.data.msg);
                }
            }
        });

    return response;
}

export default APIRequestHelper;