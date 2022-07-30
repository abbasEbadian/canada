import fgd from './blog/fgd.png'

export const get_image = (image_name) => {
    switch (image_name) {
        case "fgd": 
           return fgd
    
        default:
            break
    }
}

export {
    fgd
}

