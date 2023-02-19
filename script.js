const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".button");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");
const deleteLast = document.querySelector(".deleteLast");

// Buton işlemleri
for (const button of buttons) {
    button.addEventListener("click", () => {
        screen.value = screen.value + button.textContent
    });
}


// Sıfırlama Butonu
reset.addEventListener("click", () => screen.value = "")



// Silme Butonu
deleteLast.addEventListener("click", () => {
    screen.value = screen.value.substring(0, screen.value.length - 1)
})


// Sonuç Butonu
result.addEventListener("click", () => {
    try {
        screen.value = eval(screen.value);
        if(eval(screen.value) == undefined){
            screen.value = ""
        }
    } catch (error) {
        screen.value = ""
        screen.placeholder = "HATALI İŞLEM"
        setInterval(() => { screen.placeholder = "|" }, 2000)
    }
})
