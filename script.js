let menuMain = document.querySelector("#menuMain");
let sideBar = document.querySelector(".containerSideBar");
let sideBarState = 0;

let menuAnnouncements = document.querySelector("#menuAnnouncements");
let announcements = document.querySelector(".containerAnnouncements");
let announceState = 0;

let menuTrending = document.querySelector("#menuTrending");
let trending = document.querySelector(".containerTrending");
let trendingState = 0;

function menuBars (typeOfMenuItem, itemContainer, itemContainer2, itemContainer3, state) {
    typeOfMenuItem.addEventListener("click", () => {
        switch (state) {
            case 0:
                itemContainer.style.visibility = 'visible';
                itemContainer2.style.visibility = 'hidden';
                itemContainer3.style.visibility = 'hidden';
                state = 1;
                break;
            case 1:
                itemContainer.style.visibility = 'hidden'
                state = 0;
                break;
            }
        }
    );
}

menuBars(menuMain, sideBar, announcements, trending, sideBarState);
menuBars(menuAnnouncements, announcements, sideBar, trending, announceState);
menuBars(menuTrending, trending, announcements, sideBar, trendingState);