const clubs = {
    clmk:{
        name:'創客社',
        description:'Where Dreamers, Become Makers.',
        image: 'https://i.meee.com.tw/2H8plgm.jpg',
        social: {
            site: 'https://sites.google.com/clhs.tyc.edu.tw/maker/home',
            instagram: 'https://www.instagram.com/clhs_clmk/'
        },
        type: '學術'
    }
}

export default defineEventHandler(event => {
    return clubs
});