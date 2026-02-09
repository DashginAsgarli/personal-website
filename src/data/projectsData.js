import nextYouImg from '../Img/project/nextyou.jpg';

const projects = [
    {
        id: 1,
        title: "NextYou",
        cat: "React / CSS",
        image: nextYouImg, 
        iconName: "Sparkles",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
        iconColor: "text-blue-500",
        link: "https://next-you-pro.vercel.app/"
    },
    {
        id: 2,
        title: "To-Do List",
        cat: "HTML / CSS / JavaScript",
        image: nextYouImg, 
        iconName: "ClipboardCheck",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]",
        iconColor: "text-green-500",
        link: "https://dashginasgarli.github.io/To-do-List/"
    },
    {
        id: 3,
        title: "Currency Converter",
        cat: "HTML / Tailwind CSS / JavaScript",
        image: nextYouImg,
        iconName: "CircleDollarSign",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
        iconColor: "text-purple-500",
        link: "https://dashginasgarli.github.io/Currency-converter-layout/"
    },
    {
        id: 4,
        title: "Portfolio",
        cat: "React / Tailwind CSS",
        image: nextYouImg,
        iconName: "Layout",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)]",
        iconColor: "text-orange-500",
        link: "#"
    }
];

export default projects;