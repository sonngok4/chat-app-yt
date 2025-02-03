import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: `${process.env.JWT_EXPIRES_IN}d`,
	});

	const cookieOptions = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
		),
		httpOnly: true,
		sameSite: 'Strict',
	};

	if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

	res.cookie('jwt', token, cookieOptions);

	return token;
};

export default generateTokenAndSetCookie;
