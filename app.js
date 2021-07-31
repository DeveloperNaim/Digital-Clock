
function digitalClock() {

    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let timeFormat = 'AM';


    if ( hour === 0){
        hour = 12;
    }else if (hour > 12){
        hour = hour - 12;
        timeFormat = 'PM';
    };

    hour = hour < 12? '0' + hour : hour;
    minutes = minutes < 12? '0' + minutes : minutes;
    second = second < 12? '0' + second : second;   
    date = date < 12? '0' + date : date;
    month = month < 12? '0' + month : month;
 



    let finaTime = `${hour}:${minutes}:${second}`;
    let finaDate = `${date},${month},${year}`;

    document.querySelector('#time').innerText = finaTime;
    document.querySelector('#timeFormat').innerText = timeFormat;
    document.querySelector('#date').innerText = finaDate;


    setInterval(digitalClock, 1000);
};
digitalClock();