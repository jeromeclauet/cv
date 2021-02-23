function HideAndShow(selectedIndex) {
    var onglet = document.getElementsByTagName('section');
    for (ongletIndex = 0; ongletIndex < onglet.length; ongletIndex++) {
        if (ongletIndex == selectedIndex) {
            onglet[ongletIndex].style.display = 'block';
        } else {
            onglet[ongletIndex].style.display = 'none';
        }
    }
}
const title = document.getElementById('work');
const text = 'Développeur Web & Web Mobile';
let index = 0;

function play() {
    title.innerHTML = text.slice(0, index);
    index++;
    //la condition permet de rejouer l'animation a l'infini.
    // if (index > text.length) {
    //     index = 0;
    // }
}
// setInterval permet d'appeller une fonction tout les x interval
// ici tout les 300 ms, la fonction play est relancé
let timer = setInterval(play, 100);