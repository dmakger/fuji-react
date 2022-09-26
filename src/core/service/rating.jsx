import cl from '../components/rating/_Rating.module.scss'

export default function getClassNameColor(rating) {
    if (rating == 0)
        return cl.default
    else if (rating < 3)
        return cl.red
    else if (rating < 4)
        return cl.yellow
    return cl.green
}