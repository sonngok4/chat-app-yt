import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
	const [loading, setLoading] = useState(false);

	const { authUser, setAuthUser } = useAuthContext();

	const signUp = async ({ name, email, password, confirmPassword, gender }) => {
		const success = handleInputErrors({
			name,
			email,
			password,
			confirmPassword,
			gender,
		});
		if (!success) return;

		setLoading(true);
		toast.loading('Creating account...');
		try {
			const res = await fetch(
				// `https://chat-app-yt.onrender.com/api/auth/signup`,
				`/api/auth/signup`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name,
						email,
						password,
						confirmPassword,
						gender,
					}),
				},
			);
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// local storage
			localStorage.setItem('chat-auth-user', JSON.stringify(data.user));
			// context
			setAuthUser(data.user);

			toast.dismiss();
		} catch (error) {
			toast.dismiss();
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, signUp };
};

export default useSignUp;

function handleInputErrors({ name, email, password, confirmPassword, gender }) {
	if (!name || !email || !password || !confirmPassword || !gender) {
		toast.error(`Please fill in all required fields`);
		return false;
	}

	if (password < 6) {
		toast.error(`Password must be at least 6 characters long`);
		return false;
	}

	if (password !== confirmPassword) {
		toast.error(`Passwords do not match`);
		return false;
	}

	return true;
}
