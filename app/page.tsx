import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Link href="/card">
                <Button className="hover:cursor-pointer" >Checkout Card Component</Button>
            </Link>
        </>
    );
}
