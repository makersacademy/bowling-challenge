export let sumArray = collection => collection.reduce((pv, cv, index) => {
    if (index > 2) {
        return pv
    }
    return pv + cv
}, 0)