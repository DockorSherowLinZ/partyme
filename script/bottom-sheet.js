function showBottomSheet() {
    let container = document.querySelector(" #bottomSheetContainer");
    let bottomSheet = document.querySelector(" #bottomSheetContainer #bottomSheet");

    container.classList.add("active");

    setTimeout(() => {
        bottomSheet.classList.add("active");
    }, 1);
}

function hideBottomSheet() {
    let container = document.querySelector(" #bottomSheetContainer");
    let bottomSheet = document.querySelector(" #bottomSheetContainer #bottomSheet");

    bottomSheet.classList.remove("active");

    setTimeout(() => {
        container.classList.remove("active");
    }, 300);
}