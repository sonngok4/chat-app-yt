import { format, isThisWeek, isToday } from 'date-fns';
import { enUS } from 'date-fns/locale';


const formatMessageTime = timestamp => {
	const messageDate = new Date(timestamp);

	if (isToday(messageDate)) {
		// If message is from today, show time only (e.g., "14:30")
		return format(messageDate, 'HH:mm');
	} else if (isThisWeek(messageDate)) {
		// If message is from this week, show day of week (e.g., "Thứ hai")
		return format(messageDate, 'EEEE', { locale: enUS });
	} else {
		// If message is older, show full date (e.g., "20/01/2024")
		return format(messageDate, 'dd/MM/yyyy');
	}
};

export default formatMessageTime;