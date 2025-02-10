import Link from "next/link";
import Dependencies from "./Dependencies";
import Options from "./Options";

export default function Sidebar() {
    const items: string[] = [
        "2.34-mr",
        "2.32",
        "2.34",
        "2.30",
        "2.28"
    ]

    return (
        <div>
            <div className="drawer drawer-open">
                <input id="navbar" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content ">
                    <div className="drawer-content" >
                        <Dependencies />
                        <Options />
                    </div>
                </div>

                <div className="drawer-side 
                                bg-neutral
                                fixed 
                                h-screen
                                text-secondary-content 
                                p-6"
                >
                    {items.map((elem, index) =>
                        <div
                            key={"div_key_" + index}
                            className="p-3 m-1">
                            <Link key={"key_" + index} href={"/"}>{elem}</Link>
                        </div>

                    )}
                </div>
            </div>
        </div>

    )
}