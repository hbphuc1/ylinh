const contentLetterSrart_actived = "Biết mở thư không thì bảo !?." 
const mainContentLetter = "Chúc ylinh tuổi mới vui vẻ ngày càng xinh đẹp, sớm tán đổ crush (tỉnh ngủ đi nhé) và học giỏi hơn mình (ý là không biết chúc gì thêm nhưng mà ylinh cute !!!)"


let imgStart = document.querySelector(".myAI");
imgStart.src = "./img/lovleyfinger.jpg";


let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/emoji-tim.png"; 
const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { 
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { 
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})


const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createHearts(a) {
    var container = document.querySelector(".backgroundParty");
    const count = a;
    const allHeartImages = [
        'url("./img/pic1.jpg")', 
        'url("./img/pic2.jpg")', 
        'url("./img/pic3.jpg")',
        'url("./img/pic4.jpg")', 
        'url("./img/pic5.jpg")', 
        'url("./img/pic6.jpg")',
        'url("./img/pic7.jpg")', 
        'url("./img/pic8.jpg")', 
        'url("./img/pic9.jpg")',
        'url("./img/pic10.jpg")', 
        'url("./img/pic11.jpg")'
    ];


    const spacing = width / count;

    for (var i = 0; i < count; i++) {
        var leftPosition = i * spacing; 
        var heartImage = allHeartImages[Math.floor(Math.random() * allHeartImages.length)];
        var size = Math.floor(Math.random() * 50) + 30;
        var moveTime = Math.random() * 2 + 3;

        var div = document.createElement("div");
        div.classList.add("heart");
        div.style.position = "absolute";
        div.style.backgroundImage = heartImage;
        div.style.backgroundSize = "contain";
        div.style.backgroundRepeat = "no-repeat";
        div.style.height = size + "px";
        div.style.width = size + "px";
        div.style.left = leftPosition + "px";
        div.style.top = "0px"; 
        div.style.animation = `moveHeart ${moveTime}s linear infinite`;

        container.appendChild(div);
    }
}


const style = document.createElement('style');
style.innerHTML = `
@keyframes moveHeart {
    0% { 
        transform: translateY(0); 
    }
    100% { 
        transform: translateY(100vh); 
    }
}
`;
document.head.appendChild(style);

createHearts(20);
