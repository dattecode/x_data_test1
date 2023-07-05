
let pj_final_fantasy = [
    {ff_1 : [
        "Arylon", "Bahamult", "chaos"
    ]},
    {ff_2 : [
        "Firion", "Maria", "Guy", "Josef"
    ]},
    {ff_3 : [
        "Luneth", "Arc", "Refia", "Cid", "Refia"
    ]},
    {ff_4: [
        "Cecil Harvey", "Rosa Farrel", "Cain", "Golbez", "Edward"
    ]},
    {ff_5 : [
        "Bartz Klauder", "Gilgamesh", "Galuf", "Cid Previa"
    ]}
]

let pj_final_fantasyS2 = [
    {ff_6 : [
        "Terra Branford", "Locke Cole", "Celes Chere", "Edgar Figaro", "Sabin Figaro"
    ]},
    {ff_7 : [
        "Cloud Strife", "Tifa Lockhart", "Aerith Gainsborough", "Barret Wallace", "Sephiroth"
    ]},
    {ff_8 : [
        "Squall Leonhart", "Rinoa Heartilly", "Quistis Trepe", "Zell Dincht", "Selphie Tilmitt"
    ]},
    {ff_9 : [
        "Zidane Tribal", "Garnet Til Alexandros XVII", "Vivi Ornitier", "Steiner", "Freya Crescent"
    ]}
]

let superheroes = [
    {dc_comics : [
        "Batman", "Superman", "Wonder Woman", "Flash"
    ]},
    {marvel : [
        "Iron Man", "Spider-Man", "Thor", "Black Widow"
    ]},
    {xmen : [
        "Wolverine", "Cyclops", "Storm", "Jean Grey"
    ]},
    {avengers : [
        "Captain America", "Hulk", "Black Panther", "Captain Marvel"
    ]}
]

let paises = [
    {america : [
        "Estados Unidos", "Canadá", "Brasil", "México"
    ]},
    {europa : [
        "España", "Francia", "Alemania", "Italia"
    ]},
    {asia : [
        "China", "Japón", "India", "Corea del Sur"
    ]},
    {africa : [
        "Egipto", "Sudáfrica", "Kenia", "Marruecos"
    ]}
]

let deportes = [
    {futbol : [
        "Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Mohamed Salah"
    ]},
    {basketball : [
        "LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"
    ]},
    {tenis : [
        "Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"
    ]}
]


const groupsHtml = document.querySelector(".groups")

function tranform_data (arr, nameArr) {

    let html = `<div class"group">${nameArr}</div>` // inner 1
    groupsHtml.innerHTML = html

    for (const arrIter of arr) {
        let obj = arrIter

        for (key in obj) {
            let objArr = obj[key]
            let gp_name = `<div class="subGroup">${key}
                                <div class="partecipants">
                                </div>
                            </div>` // inner 2 a 1
            document.querySelector(".group").innerHTML += gp_name

            for (const u in objArr) {
                element += `<div class="part">
                                <p>${u}</p>
                            </div>` // iner 2 a 3
            }
            let element = ""
            document.querySelector(".subGroup:last-child .partecipants").innerHTML = element
        }
    }
}