import instance from './instance';

class Api {
    static news = async () => await instance.get('/top-headlines?sources=lenta');
    static login = async (login, password) => {
    	if (login.toLowerCase() !== 'admin' || password !== '12345') throw new Error('Неверные логин или пароль');
	}
}

export default Api;