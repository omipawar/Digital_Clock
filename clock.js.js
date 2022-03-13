function run() {
    let date = new Date();
    // console.log(date);

    let hrs = date.getHours();
    // console.log(hrs);
    let minutes = date.getMinutes();
    // console.log(minutes);
    let sec = date.getSeconds();
    // console.log(sec);
    let session = "";
    if(hrs > 0 && hrs < 12 ){
        session = 'AM';
    }
    else{
        session = 'PM';
    }
    // console.log(session)

    let newdate = hrs + ':' + minutes.toString().padStart(2, 0) + ':' + sec.toString().padStart(2, 0) + ' ' + session;
    // console.log(newdate);

    document.getElementById('clock').innerHTML = newdate;
    setTimeout(run,1000);
}

run();
