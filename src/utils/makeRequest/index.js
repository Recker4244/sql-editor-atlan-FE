import axios from 'axios';
import { BACKEND_URL} from '../../constants/apiEndpoints';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndPoint, navigate, dynamicConfig = {}) => {
	try {
		const requestDetails = {
			baseURL: BACKEND_URL,
			url: apiEndPoint.url,
			method: apiEndPoint.method,
			...dynamicConfig,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};
		const { data } = await axios(requestDetails);
		return data;
	} catch (e) {
		const errorStatus = e.response?.status;
		if (errorStatus) {
			navigate(`${ERROR_ROUTE}/${errorStatus}`);
		} else {
			navigate(ERROR_ROUTE);
		}
		return null;
	}
};

export default { makeRequest };
