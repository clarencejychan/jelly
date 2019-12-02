export default function getDateToday() {
    let today = new Date();
    let day = String(today.getDate());
    let month = String(today.getMonth() + 1);
    let year = today.getFullYear();
    return {
        year : year,
        month: month,
        day : day
    }
}
