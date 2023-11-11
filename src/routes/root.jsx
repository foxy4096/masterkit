import Hero from "../components/Hero";
import ToolCard from "../components/ToolCard";
import { TfiNotepad } from "react-icons/tfi";
import { LuListTodo } from "react-icons/lu";
import { PiMathOperationsBold } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsGearFill, BsCalendarDate, BsQrCodeScan } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { useState } from "react";
import CustomInput from "../components/Input";

const tools = [
  {
    title: "Note-Taker",
    description: "Create and organize your notes efficiently",
    icon: <TfiNotepad />,
    url: "/notetaker",
  },
  {
    title: "Task Manager",
    description: "Keep track of your to-do lists and tasks",
    icon: <LuListTodo />,
    url: "/taskmanager",
  },
  {
    title: "Calculator",
    description: "Perform calculations with ease",
    icon: <PiMathOperationsBold />,
    url: "/calculator",
  },
  {
    title: "Weather Updates",
    description: " Check the weather forecast for your location",
    icon: <TiWeatherPartlySunny />,
    url: "/weather",
  },
  {
    title: "Converter",
    description: "Convert units, currencies, and more",
    icon: <BsGearFill />,
  },
  {
    title: "News Feed",
    description: "Stay informed with the latest news",
    icon: <BiNews />,
    url: "/news",
  },
  {
    title: "Calander",
    description: "Stay on top of your schedule",
    icon: <BsCalendarDate />,
  },
  {
    title: "QR Code Scanner & Reader",
    description: "Create or Read QR Code easily",
    icon: <BsQrCodeScan />,
    url: "/qr",
  },
  {
    title: "Github Proifle",
    description: "View your Github Profile",
    icon: <FaGithubAlt />,
    url: "/github-profile",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="h-full">
      <Hero />
      <hr />
      <h1 className="text-4xl font-bold text-center pt-4">Our Tools</h1>
      <CustomInput
        type="text"
        placeholder="Search for tools..."
        onChange={() => setQuery(event.target.value)}
      />
      <ul className="mt-6 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 px-6 py-8">
        {filteredTools.map((tool) => (
          <ToolCard tool={tool} key={tool.title} />
        ))}
      </ul>
    </div>
  );
}
