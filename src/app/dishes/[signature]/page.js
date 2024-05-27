'use server'

import FetchDishes from "@/app/actions/fetchDishes";
import DishesSection from "@/app/container/dishes-page/dishes-section";
import Script from "next/script";

const dishes = async ({ params }) => {

    const signature = params.signature;

    const dishesList = await FetchDishes(signature);

    return (
        <>
            <DishesSection dishes={dishesList} />
        </>
    )
}

export default dishes;