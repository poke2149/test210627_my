let clothing = 0, eating = 1, health = 2,
    communication = 3, rules = 4, life_main_img = 5 ,life_rules_img = 6;
let life_item = [
    document.getElementById("clothing"),
    document.getElementById("eating"),
    document.getElementById("health"),
    document.getElementById("communication"),
    document.getElementById("rules"),
    document.getElementById("life_main_img"),
    document.getElementById("life_rules_img")
]

function init() {
    life_item[life_rules_img].style.display = "none";
}

init();

function click_item(_num) {
    switch (_num) {
        case clothing:
            break;
        case eating:
            break;
        case health:
            break;
        case communication:
            break;
        case rules:
            setTimeout(() => {
                life_item[life_main_img].style.display = "none";
                life_item[life_rules_img].style.display = "block"; 
                }, 100);
            break;
    }
}