"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const AddAProduct = async (formData) => {
    const newProduct = {
                    title: formData.get("title"),
                    description: formData.get("description"),
                    price: formData.get("price"),
                    image: formData.get("image"),
    }

    await fetch('http://localhost:4000/products', {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {"content-type" : "application/json"},
    })
    // revalidatePath("/Shop");
    revalidateTag("products");
}