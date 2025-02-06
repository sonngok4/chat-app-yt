// loggerMiddleware.js
const loggerMiddleware = (req, res, next) => {
	const start = Date.now();

	// Lưu thông tin request trước khi xử lý
	console.log(
		`[LOG] Request - ${req.method} ${req.originalUrl} - ${new Date().toISOString()}`,
);
    
    if (req.body) {
			console.log(`[LOG] Request Body:`, req.body);
		}

	// Ghi lại response sau khi xử lý xong
	const originalSend = res.send;
	res.send = function(body) {
		const duration = Date.now() - start;
		console.log(`[LOG] Response - ${req.method} ${req.originalUrl} - Duration: ${duration}ms - Status: ${res.statusCode} Body:`, body);
		originalSend.call(this, body);
	};

	next();
};

export default loggerMiddleware;
