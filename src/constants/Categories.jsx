import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";

const categories = [
  { id: 1, name: "cleaning", icon: FaBucket, color: "#b12fde" },
  { id: 2, name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
  { id: 3, name: "painting", icon: FaBrush, color: "#e23e40" },
  { id: 4, name: "shifting", icon: FaTruck, color: "#059e96" },
  { id: 5, name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
  { id: 6, name: "electric", icon: FaLightbulb, color: "#1f71c5" },
];

export default categories;
