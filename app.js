document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider input");
    const dragLine = document.querySelector(".slider .drag-line");
    const img = document.querySelector("#slider-photo-2");
    const btnMoveLeft = document.querySelector(".drag-line span .box:first-of-type");
    const btnMoveRight = document.querySelector(".drag-line span .box:last-of-type");

    slider.addEventListener("input", () => {
        let sliderVal = slider.value;
        dragLine.style.left = sliderVal + "%";
        slider.style.left = sliderVal + "%";
        img.style.width = sliderVal + "%";
        document.documentElement.style.setProperty("--positionThumb", sliderVal + "%");
    })

    btnMoveLeft.addEventListener("click", () => {
        let sliderVal = parseInt(slider.value);
        if (window.innerWidth > 576) {
            if (sliderVal < 20) {
                sliderVal = 0;
            } else {
                sliderVal -= 20;
            }
        } else {
            if (sliderVal < 25) {
                sliderVal = 0;
            } else {
                sliderVal -= 25;
            }
        }
        slider.value = sliderVal;
        dragLine.style.left = sliderVal + "%";
        slider.style.left = sliderVal + "%";
        img.style.width = sliderVal + "%";
        document.documentElement.style.setProperty("--positionThumb", sliderVal + "%");
    })

    btnMoveRight.addEventListener("click", () => {
        let sliderVal = parseInt(slider.value);
        if (window.innerWidth > 576) {
            if (sliderVal > 80) {
                sliderVal = 100;
            } else {
                sliderVal += 20;
            }
        } else {
            if (sliderVal > 75) {
                sliderVal = 100;
            } else {
                sliderVal += 25;
            }
        }
        slider.value = sliderVal;
        dragLine.style.left = sliderVal + "%";
        slider.style.left = sliderVal + "%";
        img.style.width = sliderVal + "%";
        document.documentElement.style.setProperty("--positionThumb", sliderVal + "%");
    })
})