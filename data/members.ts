export type Member = {
    role: { en: string; zh: string };
    lab: "MDRE" | "SSAT" | "Both";
    startYear: string;
    name: { en: string; zh: string };
    image?: string;
    link?: string;
};

export const members: Member[] = [
    {
        role: { en: "Professor", zh: "教授" },
        lab: "MDRE",
        startYear: "NA",
        name: { en: "Wei-Chun Hsu", zh: "許維君" },
        image: "/images/wei-chun-hsu.jpg",
        link: "https://assb2021.conf.tw/site/userdata/1348/abstract/Wei-Chun%20Hsu%2C%20PhD%2C%20PT.pdf"
    },
    {
        role: { en: "Professor", zh: "教授" },
        lab: "SSAT",
        startYear: "NA",
        name: { en: "Yi-Jia Lin", zh: "林儀佳" },
        image: "/images/yi-jia-lin.jpg",
        link: "https://innc.ntust.edu.tw/p/405-1111-120617,c11556.php?Lang=en"
    },
    { role: { en: "Secretary", zh: "秘書" }, lab: "Both", startYear: "NA", name: { en: "Sunny Lin", zh: "林季樺" } },
    { role: { en: "Assistant", zh: "助理" }, lab: "Both", startYear: "NA", name: { en: "Li-Hsin Tang", zh: "唐笠馨" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2023", name: { en: "Hsiang-Hsin Wei", zh: "魏祥興" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2023", name: { en: "Zoe Chung", zh: "鐘若瑜" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2024", name: { en: "Hank Huang", zh: "黃冠瀚" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2024", name: { en: "Yi-Shang Chou", zh: "周義盛" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2024", name: { en: "Yi-Chen Wang", zh: "王怡臻" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2024", name: { en: "Poen Huang", zh: "黃鉑恩" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2024", name: { en: "Jian-Zhi Fu", zh: "傅建智" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2024", name: { en: "Alexandre Morinvil", zh: "莫然" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2025", name: { en: "Tony Zhang", zh: "張戎狄" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2025", name: { en: "Pin-Jun Chou", zh: "周品均" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2025", name: { en: "Yu-Wei Chung", zh: "鍾宇葳" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2025", name: { en: "Min-Han Hsieh", zh: "謝旻翰" } },
    { role: { en: "Master", zh: "碩士" }, lab: "MDRE", startYear: "2025", name: { en: "Min-Yan Cai", zh: "蔡旻諺" } },
    { role: { en: "Intern", zh: "實習" }, lab: "MDRE", startYear: "2025", name: { en: "Yen-Tzu Chang", zh: "張晏慈" } },
    { role: { en: "Doctorate", zh: "博士" }, lab: "SSAT", startYear: "2025", name: { en: "Wen-Yen Chang", zh: "張文彥" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2025", name: { en: "Janice Kuo", zh: "郭尚蓁" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2025", name: { en: "Nelson Lin", zh: "林郅恒" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2025", name: { en: "Fang-Hsun Lee", zh: "李方薰" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2025", name: { en: "Zhi-Ying Cai", zh: "蔡芝瑩" } },
    { role: { en: "Master", zh: "碩士" }, lab: "SSAT", startYear: "2025", name: { en: "Po-Chih Hsu", zh: "許博智" } },
];
