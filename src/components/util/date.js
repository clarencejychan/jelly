export default function getDateToday() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    return {
        year : 2019,
        month: 11,
        day : 30
    }
}
