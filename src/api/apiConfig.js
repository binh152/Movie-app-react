const apiConfig= {
    URL:'https://api.themoviedb.org/3/',
    key: 'c5c1feef5d08621ed23aaa6858a780bc',
    originalImg:(imgPath)=> `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Img:(imgPath)=> `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig