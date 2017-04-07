import { AsyncStorage } from 'react-native'

export function PutProgress(key, progress) {
	AsyncStorage.mergeItem("@5210App:" + key, JSON.stringify(progress))
		.then(() => console.log("Stored " + key))
		.catch(err => console.log("Error: " + error))
}

export function GetProgress(key, callback) {
	AsyncStorage.getItem("@5210App:" + key)
		.then(item => callback(item))
		.catch(err => console.log("Error getting " + key + " : " + error))
}
