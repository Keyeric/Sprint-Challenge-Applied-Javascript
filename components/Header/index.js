// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const Header = document.createElement("div");
    Header.classList.add("header");

    const headDate = document.createElement("span");
    headDate.classList.add("date");
    Header.append(headDate);
    headDate.textContent = "MARCH 28, 2019";

    const headH1 = document.createElement("h1");
    Header.append(headH1);
    headH1.textContent = "Lambda Times"

    const headTemp = document.createElement("span");
    headTemp.classList.add("temp");
    Header.append(headTemp);    
    headTemp.textContent = "98°"

    return Header;
}

const entryPoint = document.querySelector(".header-container");
entryPoint.append(Header());