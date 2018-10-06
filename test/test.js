const loadingPiture = "https://cdn.dribbble.com/users/108183/screenshots/5331825/loading_xxi.gif"

const realPitureArray = [
    "https://cdn.dribbble.com/users/39141/screenshots/4792135/ezgif-5-e7068fd8a1.gif",
    "https://cdn.dribbble.com/users/408943/screenshots/2887008/loading-macro-animation-for-brewery-website.gif",
    "https://cdn.dribbble.com/users/352436/screenshots/5084238/loading.gif",
    "https://cdn.dribbble.com/users/380263/screenshots/5254783/gifloader.gif",
    "https://cdn.dribbble.com/users/1099032/screenshots/2649140/bootup_final_preview_1loop.gif"
]

document.addEventListener('DOMContentLoaded', () => {
    initLazyPicture('img', 'src', loadingPiture, realPitureArray)
    lazyPicture()
})