module.exports = {
    a:1,
    b:2
}

let c = 56
module.exports = c;

// module.exports can only hold ONE thing
// Second module.exports = overwrites the first one
// So only the last export survives