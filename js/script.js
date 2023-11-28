const image = document.getElementById('flag');

    function myFunction() {
        var x = document.getElementById("mySelect").value;
        if (x ==  'vn') {
            document.getElementById("home").innerHTML = "Trang Chủ";
            document.getElementById("project").innerHTML = "Dự Án";
            document.getElementById("achievements").innerHTML = "QA";
            document.getElementById("blog").innerHTML = "Blogs";
            document.getElementById("qa").innerHTML = "Contact";
            document.getElementById("flag").innerHTML = '🇻🇳'
            

            let plan = document.getElementsByName("plan");
            for (let k = 0; k < plan.length; k++) {
                plan[k].innerHTML = "Kế hoạch"
                
            }

            let detail = document.getElementsByName("detail");
            for (let k = 0; k < detail.length; k++) {
                detail[k].innerHTML = "Chi tiết"
                
            }
            
            let beacon = document.getElementsByName("beacon");
            for (let k = 0; k < beacon.length; k++) {
                beacon[k].innerHTML = "Ủng hộ"
                
            }
        
            document.getElementsByName("share")[0].innerHTML = "Chia sẽ";
            document.getElementById("sp").innerHTML = "Các trương trình";
            document.getElementById("op").innerHTML = "Trương trình đang triển khai";
            document.getElementById("ip").innerHTML = "Trương trình đã hoàn thành";
            document.getElementsByName("raised")[0].innerHTML = "Đã khuyên góp";
            document.getElementsByName("spo")[0].innerHTML = "Người ủng hộ";
            document.getElementsByName("contributor")[0].innerHTML = "Người đóng góp";
            document.getElementsByName("project-header")[0].innerHTML = "PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG";

        
            
        }
        if (x == "en") {
            document.getElementById("home").innerHTML = "Home"; 
            document.getElementById("project").innerHTML = "Project";
            document.getElementById("achievements").innerHTML = "Achivements";
            document.getElementById("blog").innerHTML = "Blogs";
            document.getElementById("qa").innerHTML = "QA & Contact";
            document.getElementById('flag').innerHTML = '🇬🇧'
          

            let plan = document.getElementsByName("plan");
            for (let k = 0; k < plan.length; k++) {
                plan[k].innerHTML = "Plan"
                
            }

            let detail = document.getElementsByName("detail");
            for (let k = 0; k < detail.length; k++) {
                detail[k].innerHTML = "Detail"
                
            }

            let beacon = document.getElementsByName("beacon");
            for (let k = 0; k < beacon.length; k++) {
                beacon[k].innerHTML = "Be A Contributor"

            }

    
            document.getElementsByName("share")[0].innerHTML = "Share"; 
            document.getElementById("sp").innerHTML = "Specific Programs";
            document.getElementById("op").innerHTML = "On-going Programs";
            document.getElementById("ip").innerHTML = "Implemted Programs";
            document.getElementsByName("raised")[0].innerHTML = "raised";
            document.getElementsByName("spo")[0].innerHTML = "sponsor";
            document.getElementsByName("contributor")[0].innerHTML = "contributor";
            document.getElementById("asd").innerHTML = "Implemted Programs";
        }
        if (x == "fr") {
            document.getElementById("home").innerHTML = "maison"
            
        }
        if (x == "jp") {
            document.getElementById("home").innerHTML = "ホームページ"
        }
        
      }
      

      
      var he
      var text
      var num
      he = document.getElementById('heart').innerHTML
      num = Number(he)
      function countHeart(){
        num = num + 1
        he.innerHTML = num
      }
      he.onclick = countHeart()