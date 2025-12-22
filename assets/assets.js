import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.png'
import work2 from './work-2.png'
import work3 from './work-3.png'
import work4 from './work-4.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Ecommerce website',
        description: 'Web Development',
        bgImage: work1,
        link: 'https://ecommerce-frontend-murex-ten.vercel.app'
    },
    {
        title: 'AI Blog webapp',
        description: 'Web dev with AI intigration',
        bgImage: work2,
        link: 'https://quick-blog-client-orpin.vercel.app'
    },
    {
        title: 'Doctor Online Appointment Booking Website',
        description: 'Web Development',
        bgImage: work3,
        link: 'https://medi-q-frontend-theta.vercel.app/'
    },
    {
        title: 'Landing page for Agency',
        description: 'Web Design',
        bgImage: work4,
        link: 'https://think-media.vercel.app/'
    },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Web Development',
        description:
            'Building responsive, performant websites and web applications using modern technologies and best practices.',
        link: 'https://en.wikipedia.org/wiki/Web_development',
    },
    {
        icon: assets.web_icon,
        title: 'Backend Development',
        description:
            'Creating scalable backend systems, APIs, authentication, and database architectures.',
        link: 'https://en.wikipedia.org/wiki/Backend_(computing)',
    },
    {
        icon: assets.mobile_icon,
        title: 'E-Commerce Solutions',
        description:
            'Developing secure e-commerce platforms with payments, product management, and admin dashboards.',
        link: 'https://en.wikipedia.org/wiki/E-commerce',
    },
    {
        icon: assets.ui_icon,
        title: 'UI/UX Design',
        description:
            'Designing clean, user-friendly interfaces focused on usability, accessibility, and smooth user experience.',
        link: 'https://en.wikipedia.org/wiki/User_experience_design',
    }
];


export const infoList = [ 
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Tech Stack',
        description: 'JavaScript, Node.js, Express.js, React, Next.js, MongoDB',
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'Self-taught web developer with strong backend focus',
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: 'Built 5+ full-stack and backend-focused projects',
    },
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];