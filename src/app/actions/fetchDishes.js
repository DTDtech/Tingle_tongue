'use server'

import client_DB from "../config/db.config";

const FetchDishes = async (signature) => {
    const projection = { _id: 0 };
    try {
        const result = await client_DB.collection("dishes").find({
            "signature": signature
        }).project(projection).toArray();
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

export default FetchDishes;