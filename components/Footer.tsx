import { createClient } from "@/utils/supabase/server";
import {
  Clock9Icon,
  Facebook,
  Instagram,
  MailCheck,
  MapPinIcon,
  PhoneCallIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import LogoComponent from "./LogoComponent";

export const revalidate = 0;

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=61576218584823&mibextid=ZbWKwL",
    Icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://x.com/dagceotouch_F",
    Icon: X,
    label: "X",
  },
  {
    href: "https://www.instagram.com/dagceotouch_foundation",
    Icon: Instagram,
    label: "Instagram",
  },
];

const Footer = async () => {
  const supabase = createClient();

  const [{ data: blogs }, { data: contact }, { data: footerNote }] =
    await Promise.all([
      supabase
        .from("blogs")
        .select("id, title")
        .order("created_at", { ascending: false })
        .range(0, 3),
      supabase.from("contactus").select("*").single(),
      supabase.from("footernote").select("*").single(),
    ]);

  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <LogoComponent classnames="w-14 h-14" />
              <p className="text-base font-semibold text-white">
                Dagceo Touch Foundation
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {footerNote?.text}
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-gray-500 hover:bg-gray-800 hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Link
              href="/get-involved"
              className="w-fit rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-500">
              Donate Now
            </Link>
          </div>

          {/* Recent posts */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Recent Posts
            </p>
            <div className="flex flex-col gap-2.5">
              {!blogs || blogs.length < 1 ? (
                <span className="text-sm text-gray-500">
                  No blog posts yet.
                </span>
              ) : (
                blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className="truncate text-sm text-gray-400 transition-colors duration-150 hover:text-white">
                    {blog.title}
                  </Link>
                ))
              )}
            </div>
            <Link
              href="/sign-in"
              className="mt-2 w-fit rounded-full border border-gray-700 px-5 py-2 text-xs font-medium text-gray-400 transition-all duration-200 hover:border-gray-500 hover:text-white">
              Admin Login
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Head Office: {contact?.headoffice}</span>
              </div>
              <div className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Branch Office: {contact?.branchoffice}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCallIcon className="h-4 w-4 flex-shrink-0" />
                <span>{contact?.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MailCheck className="h-4 w-4 flex-shrink-0" />
                <span>{contact?.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock9Icon className="h-4 w-4 flex-shrink-0" />
                <span>{contact?.officehours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Dagceo Touch Foundation. All rights
            reserved.
          </span>
          <Link
            href="/about-us"
            className="transition-colors duration-150 hover:text-gray-300">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
