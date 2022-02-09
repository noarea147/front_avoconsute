export default function formatDate(date) {
  
    if (typeof date.getDate !== 'function') {
        date = new Date(parseInt(date));
    }
    let day = `${date.getDate()}`;
    let month = `${date.getMonth() + 1}`;
    let year = `${date.getFullYear()}`;
    date = day + '/' + month + '/' + year;
    return date;
}