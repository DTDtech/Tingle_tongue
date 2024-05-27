'use server'

import client_DB from "../config/db.config";

const AddDish = async (formData) => {
    const rawFormData = {
        name: formData.get('name'),
        time: formData.get('time'),
        ingredients: formData.get('ingredients').split(","),
        signature: formData.get('signature'),
        video_id: formData.get('video_id')
    }

    if (rawFormData.name !== "" && rawFormData.name !== "" && rawFormData.ingredients !== ""
        && rawFormData.time !== "" && rawFormData.signature !== "" && rawFormData.video_id !== "") {
        try {
            await client_DB.collection("dishes").insertOne(rawFormData);
        }
        catch (error) {
            console.log(error);
        }
    }

}

export default AddDish;