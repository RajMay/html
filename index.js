console.log("running")

document.querySelector('.wrong').style.dispaly = 'none';
document.querySelector('.hold').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.sidbar').style.dispaly = 'inline'
        document.querySelector('.wrong').style.dispaly = 'none'
    }
    else {
        document.querySelector('.wrong').style.dispaly = 'inline'
        document.querySelector('.sidbar').style.dispaly = 'none'
    }
})