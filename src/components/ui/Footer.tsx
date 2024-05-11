import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="w-full flex justify-center text-xs mb-4 mt-4 md:mt-20">
			<Link href="/" className="mx-1 md:mx-3">
				<span className={`${titleFont.className} antialiased font-bold`}>
					ContactShip{" "}
				</span>

				<span>© {new Date().getFullYear()}</span>
			</Link>
		</div>
	);
};
