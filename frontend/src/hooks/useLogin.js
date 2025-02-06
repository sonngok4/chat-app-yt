import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { authUser, setAuthUser } = useAuthContext();

	const login = async (email, password) => {
		const success = handleInputError(email, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch(`/api/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error);
			}
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem('chat-auth-user', JSON.stringify(data.user));
			setAuthUser(data.user);

			toast.success('Logged in successfully!');
        } catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { login, loading };
};

export default useLogin;

const handleInputError = (email, password) => {

	if (!email.trim()) {
		toast.error('Email is required');
		return false;
	}

	if (!password.trim()) {
		toast.error('Password is required');
		return false;
	}

	return true;
};
