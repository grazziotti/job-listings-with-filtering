export const filterList = (list: string[], filters: string[]) => {
    let c = 0

    for (let i in list) {
        for (let f in filters) {
        if (list[i] === filters[f]) {
            c++
        }
        }
    }

    return filters.length === c
}