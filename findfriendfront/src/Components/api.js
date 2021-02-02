import axios from "axios";

export const mainpath ='';

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// axios.defaults.withCredentials = true;
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export const Login = (email, password) => {
	const data = {
		email,
		password,
	};
	axios.post('/login', data).then(response => {
		const { accessToken } = response.data;

		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

		// accessToken을 localStorage, cookie 등에 저장하지 않는다!
		
		return "d";
	}).catch(error => {
		// ... 에러 처리
		return error;
	});
}