export function DateAsStorageKey() {
	let dateObj = new Date();
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();

	return (year + "/" + month + "/" + day)
}