import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// axios.defaults.withCredentials = true;
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export const Login = async (email, password) => {;
	const data = {
		email,
		password,
	};
	await axios.post('/login', data)
	.then(response => {
		//console.log(response.data.success);
		const { token } = response.data.data;

		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		localStorage.setItem("token",token); // key-value 
		
	}).catch(error => {
		// ... 에러 처리
		return error;
	});
}

export const Join = async (name,email, password,c_password) => {;
	const data = {
		name,
		email,
		password,
		c_password
	};
	await axios.post('/register', data)
	.then(response => {
		//console.log(response.data.success);
		const { token } = response.data.data;

		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		localStorage.setItem("token",token); // key-value 
		
	}).catch(error => {
		// ... 에러 처리
		return error;
	});
}