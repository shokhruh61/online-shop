import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Kompaniya",
    links: ["Biz haqimizda", "Blog", "Hamkorlik", "Vakansiyalar"],
  },
  {
    title: "Xizmatlar",
    links: ["Yetkazib berish", "To‘lovlar", "Qaytarish", "Qo‘llab-quvvatlash"],
  },
  {
    title: "Yordam",
    links: ["Savol-javob", "Maxfiylik", "Shartlar", "Kontaktlar"],
  },
];

function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-200">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.3fr_2fr]">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="h-10 w-10 rounded-2xl bg-primary/10 text-primary grid place-items-center">
              SM
            </span>
            Shu Market
          </Link>
          <p className="text-sm text-base-content/70 max-w-sm">
            Shu Market — ishonchli onlayn do‘kon. Biz bilan eng so‘nggi
            mahsulotlar, tezkor yetkazib berish va qulay to‘lovlarni tanlang.
          </p>
          <div className="flex gap-3">
            {["Visa", "Mastercard", "Uzcard", "Humo"].map((item) => (
              <span
                key={item}
                className="badge badge-outline badge-sm text-base-content/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2 text-sm text-base-content/70">
                {section.links.map((link) => (
                  <li key={link}>
                    <a className="link link-hover">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-base-200 py-4 text-center text-xs text-base-content/60">
        © 2024 Shu Market. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;
