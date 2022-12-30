document.addEventListener("DOMContentLoaded",
    function(e) {
        let FasFaCog = document.querySelector("#id i")
        let Idtext = document.querySelector("#id span")
        let ProfileChange = document.querySelector("#profile info button")
        let UserInfo = document.querySelector("#userInfo")
        let Summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        FasFaCog.addEventListener("click",
            function(e){
                Idtext.textContent = prompt("새로운 아이디를 입력하세요.")
            })
        
        ProfileChange.addEventListener("click",
            function(e) {
                if (changing) {
                    let _UserInfo = UserInfo.querySelector("input").value
                    let _Summary = Summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    UserInfo.innerHTML = _UserInfo
                    Summary.innerHTML = _Summary

                    if(_profileDetail.startsWith("http")){
                        _profileDetail = "<a href="+ _profileDetail +
 ">"+ _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false
                } else{
                    let _UserInfo = UserInfo.textContent
                    let _Summary = Summary.textContent
                    let _profileDetail = profileDetail.textContent

                    UserInfo.innerHTML = "<input value="+ _UserInfo +
"></input>"
                    Summary.innerHTML = "<input value="+ _Summary + 
"></input>"
                    profileDetail.innerHTML = "<input value="+_profileDetail
+"></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }        
            }
        )
    }
)