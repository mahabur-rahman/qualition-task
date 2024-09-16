import patientOne from '../assets/patient1.png'
import patientTwo from '../assets/patient2.png'
import patientThree from '../assets/patient3.png'
import patientFour from '../assets/patient4.png'
import patientFive from '../assets/patient5.png'
import patientSix from '../assets/patient6.png'
import patientSeven from '../assets/patient7.png'
import patientEight from '../assets/patient8.png'
import patientNine from '../assets/patient9.png'
import patientTen from '../assets/patient10.png'
import patientEleven from '../assets/patient11.png'
import patientTwelve from '../assets/patient12.png'
import profile from "../assets/profile.png";

import { CalendarOutlined, CreditCardOutlined, EllipsisOutlined, HomeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

export const menuItems = [
  { id: '1', icon: <HomeOutlined />, label: 'Overview' },
  { id: '2', icon: <UserOutlined />, label: 'Patients', style: 'text-white bg-[#01F0D0] w-[110px]' },
  { id: '3', icon: <CalendarOutlined />, label: 'Schedule' },
  { id: '4', icon: <MessageOutlined />, label: 'Message' },
  { id: '5', icon: <CreditCardOutlined />, label: 'Transactions' },
];

export const userProfile = {
  name: 'Dr. Jose Simmons',
  role: 'General Practitioner',
  avatar: profile, 
};


export const sideMenuItems = [
  {
    key: "1",
    icon: patientOne,
    name: "Emily Williams",
    gender: "Female",
    age: "18",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "2",
    icon: patientTwo,
    name: "Ryan Johnson",
    gender: "Male",
    age: "45",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "3",
    icon: patientThree,
    name: "Brandon Mitchell",
    gender: "Male",
    age: "36",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "4",
    icon: patientFour,
    name: "Jessica Taylor",
    gender: "Female",
    age: "28",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "5",
    icon: patientFive,
    name: "Emily Williams",
    gender: "Female",
    age: "18",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "6",
    icon: patientSix,
    name: "Samantha Johnson",
    gender: "Female",
    age: "56",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "7",
    icon: patientSeven,
    name: "Ashley Martinez",
    gender: "Female",
    age: "54",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "8",
    icon: patientEight,
    name: "Olivia Brown",
    gender: "Female",
    age: "32",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "9",
    icon: patientNine,
    name: "Tyler Davis",
    gender: "Male",
    age: "19",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "10",
    icon: patientTen,
    name: "Kevin Anderson",
    gender: "Male",
    age: "30",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "11",
    icon: patientEleven,
    name: "Dylan Thompson",
    gender: "Male",
    age: "36",
    rightIcon: <EllipsisOutlined />,
  },
  {
    key: "12",
    icon: patientTwelve,
    name: "Nathan Evans",
    gender: "Male",
    age: "58",
    rightIcon: <EllipsisOutlined />,
  },
];
