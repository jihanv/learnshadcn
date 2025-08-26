import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col gap-9 m-9">
            <Link href="/card">
                <Button className="hover:cursor-pointer" >Checkout Card Component</Button>
            </Link>
            <Link href="/chart1">
                <Button className="hover:cursor-pointer" >Checkout chart1</Button>
            </Link>
            <Link href="/chart2">
                <Button className="hover:cursor-pointer" >Checkout chart2</Button>
            </Link>
        </div>
    );
}
