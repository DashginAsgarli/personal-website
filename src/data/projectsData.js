import nextyou from '../Img/project/nextyou.jpeg';
import todo from '../Img/project/todo.jpeg';
import portfilo from '../Img/project/portfilo.jpeg';
import valyuta from '../Img/project/valyuta.jpeg';
import flagQuiz from '../Img/project/flagQuiz.png';


const projects = [
    {
        id: 1,
        title: "NextYou",
        cat: "React / CSS",
        image: nextyou,
        iconName: "Sparkles",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
        iconColor: "text-blue-500",
        link: "https://next-you-pro.vercel.app/"
    },
    {
        id: 2,
        title: "Flag Quiz",
        cat: "React / Tailwind CSS",
        image: flagQuiz,
        iconName: "Flag",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(220,38,38,0.5)]",
        iconColor: "text-red-500",
        link: "https://gleaming-pudding-920aba.netlify.app/"
    },
    {
        id: 3,
        title: "Currency Converter",
        cat: "HTML / Tailwind CSS / JavaScript",
        image: valyuta,
        iconName: "CircleDollarSign",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
        iconColor: "text-purple-500",
        link: "https://dashginasgarli.github.io/Currency-converter-layout/"
    }
    ,
    {
        id: 4,
        title: "Portfolio",
        cat: "React / Tailwind CSS",
        image: portfilo,
        iconName: "Layout",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)]",
        iconColor: "text-orange-500",
        link: "#"
    },
    {
        id: 5,
        title: "To-Do List",
        cat: "HTML / CSS / JavaScript",
        image: todo,
        iconName: "ClipboardCheck",
        glow: "group-hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]",
        iconColor: "text-green-500",
        link: "https://dashginasgarli.github.io/To-do-List/"
    }
];

export default projects;