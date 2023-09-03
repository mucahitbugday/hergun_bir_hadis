import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://api.kodcuadam.com/api/';

export const getApiData = async (endpoint: string): Promise<any> => {
    console.log("endpoint", `${BASE_URL}${endpoint}`);
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
        throw error;
    }
};

export const postApiData = async (endpoint: string, data: any): Promise<AxiosResponse | undefined> => {
    console.log("endpoint", `${BASE_URL}${endpoint}`);
    try {
        const response: AxiosResponse = await axios.post(`${BASE_URL}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'DeviceID': '2fcc300345d131921',
            },
        });

        return response;
    } catch (error) {
        console.error('Veri gönderilirken hata oluştu:', error);
        throw error;
    }
};

export const putApiData = async (endpoint: string, data: any): Promise<AxiosResponse | undefined> => {
    console.log("endpoint", `${BASE_URL}${endpoint}`);
    try {
        const response: AxiosResponse = await axios.put(`${BASE_URL}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Veri güncellenirken hata oluştu:', error);
        throw error;
    }
};

export const deleteApiData = async (endpoint: string): Promise<AxiosResponse | undefined> => {
    console.log("endpoint", `${BASE_URL}${endpoint}`);
    try {
        const response: AxiosResponse = await axios.delete(`${BASE_URL}/${endpoint}`);
        return response;
    } catch (error) {
        console.error('Veri silinirken hata oluştu:', error);
        throw error;
    }
};
