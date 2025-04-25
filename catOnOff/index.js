let lightImg=document.getElementById("bulbImage");
let status=document.getElementById("statuss");
let catImg=document.getElementById("catImage");
function  switchOff(){
    lightImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    status.textContent="Switched Off";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("onBtn").style.backgroundColor="#cbd2d9";
    document.getElementById("offBtn").style.backgroundColor="red";
}
function switchOn(){
    lightImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    status.textContent="Switched On";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("onBtn").style.backgroundColor="green";
    document.getElementById("offBtn").style.backgroundColor="#cbd2d9";
}