import { showData } from './database.js'

// TODO add date filtering
export const requestShows  = () => {
    return {"shows": showData()}
}