import Link from "next/link";


export const Nav= () => {
    return(
        <div>
            <ul id="ulID1">
                <li><Link href={"/"}>Shop</Link></li>
                <li><Link href={"/AllNotes"}>All Notes</Link></li>
                <li><Link href={"/AddProductFrom"}>Add Product</Link></li>
                <li><Link href={"/Posts"}>Posts</Link></li>
            </ul>
        </div>
    )
}