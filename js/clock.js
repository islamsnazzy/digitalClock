window.onload = getTime();
        function getTime(){
            var time = new Date();
            var hrs = time.getHours();
            var mns = time.getMinutes();
            var sec = time.getSeconds();
            
            mns = tick(mns);
            sec = tick(sec);

            document.getElementById('clock').innerHTML = hrs + ":" + mns;
            document.querySelector(".seconds").innerHTML = sec;

            
            if(hrs > 12){
                document.querySelector(".am_pm").innerHTML = "PM";
            }
            else{
                document.querySelector(".am_pm").innerHTML = "AM";
            }
    
          var interval = setInterval(getTime , 1000);
         
        }
        function tick(value){
                if(value < 10){
                value = "0" + value;
            }
            return value;
            }