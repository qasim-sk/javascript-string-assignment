//Capitalizing Each Word Function

export function capitalize(capital) {
    capital = capital.split(" ");
    for (var i = 0, x = capital.length; i < x; i++) {
        capital[i] = capital[i][0].toUpperCase() + capital[i].substr(1);
    }

    return capital.join(" ");
}

export function capitalizeAll(allcapital){
    return allcapital.toUpperCase();
    }
