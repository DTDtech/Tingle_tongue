'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddDish from "@/app/actions/addDish";

const AddDishForm = () => {

    const [ingredients, setIngredients] = useState([""]);

    const addIngredientField = () => {
        setIngredients([...ingredients, ""]);
    }

    const deleteIngredientField = (index) => {
        let data = [...ingredients];
        data.splice(index, 1);
        console.log(index);
        setIngredients(data);
    }

    const handleIngredientChange = (index, e) => {
        let data = [...ingredients];
        data[index] = e.target.value;
        setIngredients(data);
    }

    return (
        <div className="w-3/4">
            <form className="form-control space-y-5" action={AddDish}>
                <input type="text" name="name" id="name" placeholder="Name" className="block input input-bordered text-black" />

                <input type="text" name="time" id="time" placeholder="Time" className="block input input-bordered text-black" />

                <input type="text" name="video_id" id="video_id" placeholder="Video ID" className="block input input-bordered text-black" />

                <select name="signature" defaultValue="" className="select select-bordered text-black">
                    <option disabled value="">Signature</option>
                    <option value="garlicky"> Garlicky </option>
                    <option value="spicy"> Spicy </option>
                    <option value="crunchy"> Crunchy </option>
                    <option value="sweet"> Sweet </option>
                    <option value="comforting"> Comforting </option>
                    <option value="seafoody"> Seafoody </option>
                    <option value="savory"> Savory </option>
                    <option value="beefy"> Beefy </option>
                </select>



                <h1 className="text-black"> Ingredients: </h1>
                <ul className="w-full list-disc text-black space-y-5">
                    {ingredients.map((ingredient, index) => {
                        return (
                            <li key={index}>
                                <span className="w-full flex space-x-5">
                                    <input type="text" id="ingredient" className="input grow input-bordered w-2/3 text-black"
                                        autoFocus onChange={e => handleIngredientChange(index, e)} value={ingredient} />
                                    <button type="button" className="btn inline" onClick={() => deleteIngredientField(index)}>Delete</button>
                                </span>
                            </li>
                        )
                    })}
                </ul>

                <button type="button" className="btn" onClick={addIngredientField}> Add Ingredient </button>

                <textarea name="ingredients" id="ingredients" className="textarea textarea-bordered text-black hidden"
                    readOnly value={ingredients} />

                <span className="flex flex-row gap-x-5 justify-between">
                    <button type="submit" className="btn w-1/3"> Submit </button>
                    <button type="reset" className="btn w-1/3"> Reset </button>
                </span>

            </form>
        </div>
    )
}

export default AddDishForm;