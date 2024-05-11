import { titleFont } from "@/config/fonts";

interface Props {
	title: string;
	subTitle?: string;
	className?: string;
}

export const Title = ({ title, subTitle, className }: Props) => {
	return (
		<div className={`mt-3 ${className}`}>
			<h1
				className={`${titleFont.className} antialiased text-2xl md:text-4xl font-semibold text-center my-7`}
			>
				{title}
			</h1>

			{subTitle && (
				<h3 className={`${className} text-xl text-center mb-5`}>{subTitle}</h3>
			)}
		</div>
	);
};
