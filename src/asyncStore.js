import { AsyncStorage } from 'react-native';

const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', JSON.stringify(token));
    } catch (e) {
        console.error(e);
    }
};

const getToken = async() => {
    try {
        const token = await AsyncStorage.getItem('token');
        return JSON.parse(token);
    } catch (e) {
        console.error(e);
    }
};

const removeToken = async() => {
    try {
        await AsyncStorage.removeItem('token');
        return 'Success';
    } catch (e) {
        console.error(e);
        return 'Fail';
    }
};

export default {
    setToken,
    getToken,
    removeToken
};
