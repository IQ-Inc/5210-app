export const LOADING_DATA = 'LOADING_DATA';

export const loadingData = (isLoading) => {
    return {
        type: LOADING_DATA,
        isLoading: isLoading
    }
}