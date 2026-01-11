"use client";

import { useLanguage } from "@/context/LanguageContext";
import { members, Member } from "@/data/members";
import Image from "next/image";

export default function MembersPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
                    {t({ en: "Lab Members", zh: "實驗室成員" })}
                </h1>

                <MemberSection
                    title={t({ en: "Professors", zh: "教授" })}
                    members={members.filter(m => m.role.en === "Professor")}
                    t={t}
                />

                <MemberSection
                    title={t({ en: "Staff", zh: "行政人員" })}
                    members={members.filter(m => ["Secretary", "Assistant"].includes(m.role.en))}
                    t={t}
                />

                <MemberSection
                    title={t({ en: "Doctoral Students", zh: "博士生" })}
                    members={members.filter(m => m.role.en === "Doctorate")}
                    t={t}
                />

                <MemberSection
                    title={t({ en: "Master Students", zh: "碩士生" })}
                    members={members.filter(m => m.role.en === "Master")}
                    t={t}
                />

                <MemberSection
                    title={t({ en: "Interns", zh: "實習生" })}
                    members={members.filter(m => m.role.en === "Intern")}
                    t={t}
                />

            </div>
        </div>
    );
}

function MemberSection({ title, members, t }: { title: string, members: Member[], t: any }) {
    if (members.length === 0) return null;
    return (
        <section className="mb-16">
            <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mr-4">{title}</h2>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-teal-400 flex-grow rounded-full opacity-50"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member, i) => (
                    <MemberCard key={i} member={member} t={t} />
                ))}
            </div>
        </section>
    );
}

function MemberCard({ member, t }: { member: Member, t: any }) {
    const Content = () => (
        <>
            <div className="p-6 flex flex-col items-center h-full">
                <div className="w-32 h-32 relative mb-6 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-blue-100 transition-colors">
                    <Image
                        src={member.image || "/images/default-person.png"}
                        alt="Member"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                    {t(member.name)}
                </h3>
                <p className="text-sm font-medium text-blue-500 mb-4 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {t(member.role)}
                </p>

                <div className="w-full pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <span className="font-semibold">{member.lab}</span>
                    {member.startYear !== "NA" && <span>{member.startYear}</span>}
                </div>
            </div>
        </>
    );

    const cardClassName = "group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100 flex flex-col";

    if (member.link) {
        return (
            <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
            >
                <Content />
            </a>
        );
    }

    return (
        <div className={cardClassName}>
            <Content />
        </div>
    );
}
