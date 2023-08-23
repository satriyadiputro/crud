import Brand from "@/components/shared/header/Brand";

const brandData = {
  full: "Vanjohn News",
  first: "Vanjohn",
  last: "News",
  description:
    " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.  Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
};

export default function Footer() {
    return (
        <footer className="footer p-4 px-8 bg-primary text-base-content w-full border-t-4 border-secondary">
        <div className=" mx-auto max-w-screen-2xl">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
                <Brand data={brandData} />
                <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-white">{brandData.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5 lg:col-span-4 md:grid-cols-4">
                <div>
                    <p className="font-semibold tracking-wide text-white">Category</p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            News
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            World
                        </a>
                        </li>
                    </ul>
                </div>
                <div>
                <p className="font-semibold tracking-wide text-white">Category</p>
                <ul className="mt-2 space-y-2">
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        News
                    </a>
                    </li>
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        World
                    </a>
                    </li>
                </ul>
                </div>
                <div>
                <p className="font-semibold tracking-wide text-white">Business</p>
                <ul className="mt-2 space-y-2">
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        Web
                    </a>
                    </li>
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        eCommerce
                    </a>
                    </li>
                </ul>
                </div>
                <div>
                <p className="font-semibold tracking-wide text-white">Apples</p>
                <ul className="mt-2 space-y-2">
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        Media
                    </a>
                    </li>
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        Brochure
                    </a>
                    </li>
                </ul>
                </div>
                <div>
                <p className="font-semibold tracking-wide text-white">Cherry</p>
                <ul className="mt-2 space-y-2">
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        Infopreneur
                    </a>
                    </li>
                    <li>
                    <a
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        Personal
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-2 border-t sm:flex-row">
            <p className="text-sm text-white">
                © Copyright 2023 {brandData["full"]}. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
}
