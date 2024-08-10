import Link from "next/link"



export const Nav= () => {
    return(
        <div>
            <ul id="ulID1">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/AllNotes"}>All Notes</Link></li>
                <li><Link href={"/About"}>About</Link></li>
            </ul>
        </div>
    )
}