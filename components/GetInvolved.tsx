import { Flower2, HandshakeIcon, Leaf } from "lucide-react";
import Link from "next/link";
import TitleModel from "./TitleModel";

const ways = [
  {
    Icon: Flower2,
    title: "We Need Volunteers",
    description:
      "Give your time and skills to help drive meaningful change in communities that need it most.",
    gradient: "from-pink-500 to-rose-400",
    bg: "bg-pink-50 dark:bg-pink-950/20",
    border: "border-pink-100 dark:border-pink-900/40",
  },
  {
    Icon: Leaf,
    title: "Become A Sponsor",
    description:
      "Partner with us to fund programmes that uplift lives and create lasting social impact.",
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "border-emerald-100 dark:border-emerald-900/40",
  },
  {
    Icon: HandshakeIcon,
    title: "Make A Donation",
    description:
      "Every contribution, big or small, brings us closer to the world we are working to build.",
    gradient: "from-blue-500 to-indigo-400",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-100 dark:border-blue-900/40",
  },
];

const GetInvolved = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-6">
        <TitleModel text="Get Involved" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map(({ Icon, title, description, gradient, bg, border }) => (
            <div
              key={title}
              className={`flex flex-col items-center gap-5 rounded-2xl border ${border} ${bg} p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-md`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <Link
                href="/get-involved"
                className="mt-auto rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
