import { Wifi, ShieldCheck, Coffee, Sun, BookOpen, Tv, Zap, Droplets } from "lucide-react";

export const services = [
    {
        title: "24/7 Security",
        description: "Round-the-clock female warden and CCTV surveillance for complete safety.",
        icon: ShieldCheck,
    },
    {
        title: "Hygienic Meals",
        description: "Healthy and delicious breakfast, lunch, and dinner prepared daily.",
        icon: Coffee,
    },
    {
        title: "High-Speed Wi-Fi",
        description: "Unlimited high-speed internet perfect for students and professionals.",
        icon: Wifi,
    },
    {
        title: "Hot Water 24/7",
        description: "Solar and geyser heating systems ensure hot water availability.",
        icon: Sun, // Closest metaphor for hot/solar
    },
    {
        title: "Study Environment",
        description: "Peaceful atmosphere with dedicated study areas for students.",
        icon: BookOpen,
    },
    {
        title: "Power Backup",
        description: "Inverter backup ensures lights and charging points work during outages.",
        icon: Zap,
    },
    {
        title: "Purified Water",
        description: "RO purified safe drinking water available at all times.",
        icon: Droplets,
    },
    {
        title: "Entertainment",
        description: "Common room with TV and recreational area for relaxation.",
        icon: Tv,
    },
];

export const testimonials = [
    {
        id: 1,
        name: "Sita Sharma",
        role: "Student (BBA)",
        content: "Goma's Hostel feels just like home. The warden is very supportive and the food is great!",
        rating: 5,
    },
    {
        id: 2,
        name: "Anita Gurung",
        role: "Working Professional",
        content: "The security is top-notch. As someone who works late, I feel very safe here.",
        rating: 5,
    },
    {
        id: 3,
        name: "Priya K.C.",
        role: "Student (+2)",
        content: "The environment is perfect for studies. Clean rooms and friendly staff.",
        rating: 4,
    },
    {
        id: 4,
        name: "Rina Tamang",
        role: "Nurse",
        content: "Best ladies hostel in the area. Affordable and very clean.",
        rating: 5,
    },
];

export const roomTypes = [
    {
        id: "single",
        name: "Single Private Room",
        description: "Your own private space with a study table giving you full focus and privacy.",
        priceRange: "NPR 14,000 - 16,000",
        features: ["Single Bed", "Private Cupboard", "Study Table", "Bookshelf"],
        image: "/images/single-room.jpg",
    },
    {
        id: "twin",
        name: "Twin Sharing Room",
        description: "Share with a friend! Spacious room with two beds and separate storage.",
        priceRange: "NPR 11,000 - 13,000",
        features: ["2 Beds", "Separate Wardrobes", "2 Study Tables", "Balcony Access"],
        image: "/images/twin-room.jpg",
    },
    {
        id: "triple",
        name: "Triple Sharing Room",
        description: "Economic and social. Large room comfortable for three residents.",
        priceRange: "NPR 9,000 - 10,500",
        features: ["3 Beds", "Individual Lockers", "Common Table", "Attached Bathroom"],
        image: "/images/triple-room.jpg",
    },
    {
        id: "four",
        name: "Four Sharing Room",
        description: "Most affordable option. Big room with good ventilation and company.",
        priceRange: "NPR 8,000 - 9,000",
        features: ["4 Beds", "Individual Lockers", "Spacious", "Budget Friendly"],
        image: "/images/four-room.jpg",
    },
];
