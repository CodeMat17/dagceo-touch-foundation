import { createClient } from "@/utils/supabase/server";
import { Footprints, PlugZap, ScanEyeIcon } from "lucide-react";
import Link from "next/link";
import TitleModel from "./TitleModel";

const icons = [
  { Icon: Footprints, gradient: "from-blue-500 to-cyan-400" },
  { Icon: ScanEyeIcon, gradient: "from-violet-500 to-purple-400" },
  { Icon: PlugZap, gradient: "from-orange-500 to-amber-400" },
];

const Statements = async () => {
  const supabase = createClient();

  const [{ data: mission }, { data: values }, { data: impact }] =
    await Promise.all([
      supabase.from("ourmission").select("*").single(),
      supabase.from("ourvalues").select("*").single(),
      supabase.from("ourimpact").select("*").single(),
    ]);

  const statements = [
    { id: mission.id, title: "Our Mission", content: mission.content, index: 0 },
    { id: values.id, title: "Our Values", content: values.content, index: 1 },
    { id: impact.id, title: "Our Impact", content: impact.content, index: 2 },
  ];

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <TitleModel text="Our Statements" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {statements.map((item) => {
            const { Icon, gradient } = icons[item.index];
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="line-clamp-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/about-us"
            className="rounded-full border border-gray-200 bg-white px-7 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Statements;
