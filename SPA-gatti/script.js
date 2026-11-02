const img = document.getElementById("gatto-random")
const btn  = document.getElementById("btn-new")

//funziona in modo non bloccante
async function getRandomCat(){  //asincrona perchè mentre aspetto l'immagine il resto va avanti
    const url = "https://cataas.com/cat?json=true"

    try {
        const response = await fetch(url)

        if (response.ok){
            const cat = await response.json()
            console.log(cat)
            img.src = cat.url
        }
    } catch (e) {
        console.log(e.message)
    }
}

//btn.addEventListener("click", () => getRandomCat())
btn.addEventListener("click", getRandomCat) //semplifica

getRandomCat();