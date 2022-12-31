document.addEventListener("DOMContentLoaded",
    function(e) {
        let FasFaCog = document.querySelector("#id i")
        let Idtext = document.querySelector("#id span")
        
        FasFaCog.addEventListener("click",
            function(e){
                Idtext.textContent = prompt("새로운 아이디를 입력하세요.")
            }
        )

        let ProfileChange = document.querySelector("#profile_info button")
        let UserInfo = document.querySelector("#userInfo")
        let Summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false
        
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

        let ProfilePic = document.querySelector("#profile_pic")

        ProfilePic.addEventListener("mouseover",
            function(e) {
                e.target.style.border = "solid red"
            }
        )
        ProfilePic.addEventListener("mouseleave",
            function(e){
                e.target.style.border = "none"
            })
        ProfilePic.addEventListener("click",
            function(e){
                ProfilePic.setAttribute("src", prompt("이미지 url을 입력해주세요."))
            })
    }
)