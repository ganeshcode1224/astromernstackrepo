//frontend\src\components\Horoscope.jsx    After nav,sub , and all 

import React, { useState } from "react";
import ariesImage from "../images/ARIES.webp";
import taurusImage from "../images/TAURUS.png";
import geminiImage from "../images/GEMINI.jpg";
import cancerImage from "../images/CANCER.png";
import leoImage from "../images/LEO.png";
import virgoImage from "../images/VIRGO.png";
import libraImage from "../images/LIBRA.png";
import scorpioImage from "../images/SCORPIO.png";
import sagittariusImage from "../images/SAGITTARIUS.png";
import capricornImage from "../images/CAPRICORN.png";
import aquariusImage from "../images/AQUARIUS.png";
import piscesImage from "../images/PISCES.png";
import logoImage from '../images/image11.png';


const zodiacData = {
  Aries: {
    image: ariesImage,
    title: "Aries 2025 Horoscope",
    paragraphs: [
      "Aries, 2025 is your year to shine, but it’s not without its challenges. You’ll face ups and downs in areas like health, work, and love, but your inner strength and leadership will help you navigate it all. As someone who craves freedom and excitement, it’s important to balance your adventurous spirit with patience and planning. The stars align for massive growth and transformation, so take charge and embrace the opportunities coming your way.",

    "This yearly horoscope, predicted by top astrologers at AstroTalk, is your guide to making the most of 2025. Use it to prepare for both the tough times and the breakthroughs. While you’re known for your courage and independence, this horoscope will help you know when to act and when to step back. Trust in the universe’s plan, and get ready for an adventure-filled year full of growth and new beginnings.",
    ],
    months: [
      {
        name: "January 2025",
        content:
            "January is a mix of luck. With Sun entering the 10th house on January 14, you might face some workplace challenges that’ll need your attention. Business looks good at first with Saturn and Venus in the 11th house (house of gains), but watch out for rising costs as Rahu is in your 12th house. Students might need to put in extra effort, and family life will be a bit tense. With Mars in the 2nd house aspecting the 5th house, stay patient and talk things out. Health-wise planets are favorable, but be careful to avoid accidents. Overall, January demands resilience and proactive planning."      },
      {
    name: "February 2025",
    content:
      "Say hello to transformation season! Jupiter’s position in your 2nd house sets the stage for financial growth, while Mars aspecting Ketu in the 6th house puts health in the spotlight. In terms of career, there are chances of better opportunities after mid-February, resulting in growth in income. But avoid any impulsive decisions. With Venus positioned in the 12th house, romance is in the air! Singles might find unexpected connections, while committed ones will experience deepening trust and intimacy. The stars are asking you to balance your natural confidence with thoughtful strategy this month.",
  },
  {
    name: "March 2025",
    content:
      "March is packed with numerous opportunities. While it starts with exciting possibilities, Saturn’s transit into the 12th house of Pisces on March 29th signals a time for deep inner work. Furthermore, Rahu’s influence will bring opportunities and challenges that were previously unknown, so you need to stay flexible. Venus going retrograde on March 2nd and Mercury going retrograde on March 15th create a powerful period for reflection. Warning: Avoid hasty decisions, especially around the 15th (because Mercury retrograde can lead to confusion, misunderstanding, and delay.) Instead, channel your energy into strategic planning and inner work. Overall, this month’s your golden ticket!",
  },
  {
    name: "April 2025",
    content:
      "April is all set to be an eventful month. The Sun’s transit in Aries on April 14 will lead to an increase in energy and motivation. Also, with Mars, your ruling planet, in Gemini till April 13, 2025, your communication skills will be supercharged, and you’ll find it easier to express your ideas and thoughts. A solar eclipse this month brings unexpected developments in both personal and professional spheres. While some workplace disputes might arise, the lunar positions support steady income flow. Your influence is growing, Aries, but remember – success requires staying proactive and avoiding any tendency toward laziness. Friends will be supportive, helping you achieve victories in disputed matters. Family time will be mixed, leaving things a bit unsettled.",
  },
  {
    name: "May 2025",
    content:
      "Mark your calendar for May 14th – Jupiter’s significant transit into Gemini opens new doors for expansion! While Saturn’s influence continues to guide your path, asking you to balance your enthusiasm with strategic thinking. This month’s planetary configuration calls for measured steps in both personal and professional ventures. With a flexible attitude and open communication combined, you can make the most out of your transformative period.",
  },
  {
    name: "June 2025",
    content:
      "June will change and shake things up a bit. You will experience a fair share of both challenges and opportunities. The influences of Mars, Jupiter, Saturn, Rahu, and Ketu will play crucial roles, urging Aries to focus on their career, financial planning, relationships, and overall well-being. Health-wise, this month should ease long-term aches, making it a time to feel refreshed and full of life. But when it comes to money and work, Aries needs to be more careful and plan ahead. Educational pursuits are likely to see notable success, particularly for those involved in technical and artistic fields. Family life seems peaceful, with chances to celebrate happy times and grow closer.",
  },
  {
    name: "July 2025",
    content:
      "Your ruling planet Mars brings a surge of positive energy this month, supporting personal development and new beginnings. However, you need to balance enthusiasm with patience and strategic planning, and avoid impulsive decisions as they might lead to challenges later. Financial matters require careful planning, and professional advancement might need patience. In terms of education, this is an excellent time for growth and learning, and you may see promising results. Family relationships need nurturing to avoid potential conflicts, and travel plans might not go as planned.",
  },
  {
    name: "August 2025",
    content:
      "With Mars in the 6th house, your productivity levels are soaring, making it an excellent time to set and pursue new goals. This enhances your natural leadership abilities while calling for diplomatic communication at work. Financial planning needs conservative approaches – avoid speculative ventures for now. The planetary positions support academic pursuits and suggest maintaining a balanced approach to health through regular exercise and proper diet. Overall, embrace the dynamic energy of the month, but remember to stay grounded and thoughtful in your actions and decisions.",
  },
  {
    name: "September 2025",
    content:
      "There are multiple powerful transits shaping September. Mars transiting in the sign of Libra on 13th September 2025, Venus transiting in Leo on 15th September, and Sun and Mercury transiting in Virgo on 17th and 15th September 2025. These movements promote financial gains early in the month and boost your social standing. While travel might not yield the expected results, your family life strengthens with potential leadership opportunities. Academic pursuits remain favorable, but watch out for any tendencies toward overconfidence. Overall, personal growth and introspection play a vital role in shaping your experiences. Remember to balance ambition with caution, specifically in financial matters, to avoid any pitfalls.",
  },
  {
    name: "October 2025",
    content:
      "October 2025 appears to be a promising month for Aries natives. The stars align to accelerate previously delayed projects! Your children’s achievements bring joy, and unconventional income opportunities may arise. Watch your step in others’ conflicts – discretion is your ally this month. Property matters might create tension among siblings, calling for your diplomatic touch. A special encounter lifts your spirits, and social events, particularly weddings, bring unexpected opportunities for connection and growth.",
  },
  {
    name: "November 2025",
    content:
      "The Aries native will find November 2025 to be very energetic and with many changes. From the overall planetary position, this month seems to be dedicated to growth, professional upliftment, and financial stability with bigger relationships. Energetic shifts intensify as Mars transits through Scorpio and a new moon at the same sign. Mercury’s retrograde from November 10th in Scorpio asks for careful reflection. These transits support career advancement and relationship building but require thoughtful strategy. Focus on introspection and strategic planning, especially in professional matters. Your natural Aries leadership qualities shine through when balanced with careful consideration.",
  },
  {
    name: "December 2025",
    content:
      "December 2025 will be an action-packed and transformative month for Aries. Venus enters Sagittarius on the 20th, while the Sun’s journey through Sagittarius from the 16th illuminates your path forward. Mars, your ruling planet, energizes your ambitions and drives for success. These planetary positions support both personal growth and professional advancement. Use this energy to wrap up pending projects and set powerful intentions for the coming year.",
  },
    ],
  },
  Gemini: {
  image: geminiImage,
  title: "Gemini 2025 Horoscope",
  paragraphs: [
    "Gemini, prepare for a transformative year filled with opportunities for growth, success, and self-discovery. The year starts with a focus on career advancements, financial gains, and meaningful collaborations, especially in the first half. As the months progress, you’ll find yourself navigating a mix of highs and lows—while some challenges may test your patience, your adaptability ensures you bounce back stronger. Relationships, both personal and professional, take center stage, with support from loved ones boosting your confidence. Financially, staying disciplined and strategic will lead to stability. The latter part of the year emphasizes personal growth, with planetary transits urging introspection and long-term planning. Health and well-being require attention throughout, but maintaining balance will keep you energized. By December, you’ll feel more focused, resilient, and ready to embrace 2026 with clarity and optimism.",
    "This year, your natural ability to communicate and adapt will serve you well. Expect opportunities to make strides in both your personal and professional life, though it's important to keep your patience and resilience high during challenging periods. Relationships will bloom with a little extra effort, and financial stability is achievable if you stay disciplined. As the year winds down, you'll feel empowered and prepared for the future.",
  ],
  months: [
    {
      name: "January 2025",
      content:
        "Get ready for an eventful month, Gemini. The Sun in the 7th house and Mars in Cancer emphasize health and well-being, urging you not to overexert yourself. Financially, the first half of the month is favorable for trading and transport-related ventures due to the Sun-Mercury conjunction in the 7th house. Relationships may strengthen, and singles may find new romantic connections. However, communication issues may arise after mid-month, so patience is key. Career prospects improve as strategic planning sets the stage for future growth. Health demands attention, with balanced routines and stress management being crucial. Overall, January is a month of reflection, meticulous planning, and steady progress across personal, professional, and financial domains.",
    },
    {
      name: "February 2025",
      content:
        "Gemini, February can prove to be a transformative month for you. Saturn in Aquarius highlights career growth, requiring discipline and long-term planning. The New Moon on February 1 sparks fresh professional opportunities, supported by Mars in the 1st house boosting confidence. Around the middle of the month, because of the conjunction between the Sun and Saturn, some issues may arise, so make sure not to react. Financially, the month starts strong but requires caution as Mercury’s transit on February 27 may cause delays in transactions. Educationally, Venus in the 10th house favors technical studies and competitive exams, enhancing focus and learning. Relationships demand patience during early conflicts. Health remains a priority, with balanced diets and stress management essential. Overall, February is a powerful month for personal growth.",
    },
    {
      name: "March 2025",
      content:
        "March 2025 brings dynamic changes and growth for Geminis. Saturn’s transit in the 10th house demands discipline and strategic planning for career advancements. Early in the month, professional life shines with efficiency, while mid-month introduces collaborative opportunities. However, patience is required to navigate challenges arising from financial fluctuations and market miscommunications. Educational pursuits thrive as Mars boosts focus, particularly for competitive exams. Family life begins on a harmonious note but may face minor disputes that call for open communication. Health requires attention, with minor concerns like digestive issues or joint pain surfacing. With careful planning and resilience, March offers substantial progress across career, finances, and relationships.",
    },
    {
      name: "April 2025",
      content:
        "April 2025 is a month of mixed influences for Geminis. Saturn and Rahu in the 10th house may create professional tensions. Avoid hasty decisions and stay calm. Mars’ transit on April 3 improves career dynamics, rewarding hard work and perseverance. Financially, Jupiter brings unexpected gains and opportunities, but caution is needed to avoid impulsive spending. Educational pursuits face initial challenges but gain momentum mid-month, especially for students in competitive fields. Relationships demand understanding as family conflicts may arise, necessitating open communication. Health concerns like back pain or fevers need proactive management with balanced routines. By leveraging Jupiter’s positive influence and navigating Saturn’s challenges, Geminis can achieve progress and stability in April 2025.",
    },
    {
      name: "May 2025",
      content:
        "May is a month filled with growth and transformation for Geminis. Saturn in the 10th house emphasizes career focus, urging disciplined efforts and strategic planning. Jupiter’s move into the 1st house on May 14 sparks personal growth, confidence, and new beginnings. Financially, the month is stable with potential for gains, though Rahu in the 9th house from May 18 encourages caution in transactions. Educationally, this is a period of success in learning and expanding knowledge. Relationships improve as cooperation and harmony prevail, though anger management is essential to avoid conflicts. With business trips and opportunities on the horizon, May offers personal and professional growth, provided Geminis balances ambition with patience and careful decision-making.",
    },
    {
      name: "June 2025",
      content:
        "Guess what, Geminis? June is a month of notable progress. Jupiter and Saturn influence career and public life, promoting progress with disciplined efforts. This period is marked by substantial opportunities and challenges. The key? Leverage positive energies and remain cautious of potential pitfalls. Financial prospects appear promising, with opportunities for growth and advancement. Relationship-wise, the Mars-Ketu conjunction can create some tension initially but then the influence of Jupiter, Mercury, and Sun can bring a lot of positivity. Educational pursuits benefit from focused energy, making this a favorable time for exams and learning. Health demands attention, particularly in managing stress and maintaining a balanced routine. June is a promising period of progress, fostering personal, professional, and emotional well-being for Geminis.",
    },
    {
      name: "July 2025",
      content:
        "Ready for some twists and turns? The month starts with some potential challenges but things get better as the month passes. If you’re collaborating on official or government-related tasks, expect significant progress. Strong support from family enhances your confidence, while children bring joy and encouragement. While travel might come with a few hiccups, it can still lead to profitable outcomes. Workplace tensions ease, leaving you with a much-needed sense of harmony. Siblings lend their support, boosting your confidence, while children bring added joy. While luck favors you in the latter half of the month, careful planning and resilience will be key to maximizing opportunities. Overall, July offers a gradual shift toward success and stability across various domains.",
    },
    {
      name: "August 2025",
      content:
        "August 2025 is a month of balanced opportunities and challenges for Geminis – but don’t worry, you’ve got this! Health and education sectors shine, giving you a chance to focus on self-improvement and learning something new. Career growth requires extra effort, particularly during the early part of the month, but gradual improvements are expected. Financially, you’ll see some progress, though gains might be moderate rather than substantial. Also, it’s wise to stay cautious with spending. Family life is a bright spot, with potential celebrations adding cheer, but minor misunderstandings could pop up—handle them with care. Travel might test your patience, so double-check those plans. Stay strategic, keep calm, and you’ll find this month full of hidden opportunities waiting to be uncovered.",
    },
    {
      name: "September 2025",
      content:
        "September starts with a few bumps, especially in finances, but don’t let that shake you—better days are just around the corner! A dip in income and inconsistent cash flow may create strain, but recovery is expected after the 13th, as Mars’ transit into the 5th house boosts career and business opportunities. Relationships improve as opposition quiets down, and previously delayed funds may be recovered. Professional prospects brighten with job advancements and promising business ventures. However, caution is advised in interactions with friends to avoid misunderstandings. Support from your partner strengthens emotional bonds, contributing to greater confidence and happiness. As the month progresses, workplace efficiency and financial stability improve, ending on a positive note.",
    },
    {
      name: "October 2025",
      content:
        "October is a rollercoaster ride for Geminis, but you know how to navigate those twists and turns! Health requires attention, though minor issues are short-lived. Financially, cautious planning is needed as this month isn’t particularly lucrative – be cautious while spending and also do careful planning. Career prospects shine, with productive efforts leading to significant achievements. Travel, especially to the west, may bring fruitful results. Education is a bright spot, as intellectual pursuits gain momentum. However, family relationships may experience turbulence, particularly with siblings, necessitating empathetic communication to maintain harmony. Handle them with care, and you’ll come out of October wiser and stronger than before.",
    },
    {
      name: "November 2025",
      content:
        "November brings transformational vibes, Gemini, so buckle up for some exciting changes! Key planetary movements, including Mercury Retrograde in Scorpio, encourage introspection and careful planning. Career-wise, you’re in the zone—targets feel achievable, and your efforts start paying off. Financially, it’s all about discipline. Manage your money wisely, and you’ll feel more in control. On the personal front, meaningful conversations deepen bonds, making you feel closer to loved ones. Health is steady as long as you stick to your routines. The New Moon brings fresh starts, so lean into those opportunities. November pushes you to level up in both your career and emotional connections.",
    },
    {
      name: "December 2025",
      content:
        "December is all about growth and self-discovery for Geminis. With Mercury in Sagittarius, your thoughts turn practical, and communication flows with ease. This is the perfect time to align your actions with long-term goals. The Sun shifts to Sagittarius mid-month, adding a sense of responsibility and focus to your plans. Financial opportunities arise, but careful planning is key to making the most of them. Emotional bonds grow stronger, though small family disagreements might test your patience—stay calm and empathetic. Learning and intellectual pursuits thrive, giving you a sense of accomplishment. By year’s end, you’ll be ready to step into 2026 with clarity, confidence, and a renewed sense of purpose.",
    },



    ],
  },
};

const Horoscope = () => {
  const zodiacSigns = [
    { sign: "Aries", image: ariesImage },
    { sign: "Taurus", image: taurusImage },
    { sign: "Gemini", image: geminiImage },
    { sign: "Cancer", image: cancerImage },
    { sign: "Leo", image: leoImage },
    { sign: "Virgo", image: virgoImage },
    { sign: "Libra", image: libraImage },
    { sign: "Scorpio", image: scorpioImage },
    { sign: "Sagittarius", image: sagittariusImage },
    { sign: "Capricorn", image: capricornImage },
    { sign: "Aquarius", image: aquariusImage },
    { sign: "Pisces", image: piscesImage },
  ];


  const [selectedSign, setSelectedSign] = useState("Aries");
  const data = zodiacData[selectedSign];

  const handleAuthClick = () => {
    console.log("Login / Signup clicked"); };


      return (
    <div>
      {/* NAVBAR */}
      <nav className="bg-purple-700 text-white px-6 py-4 shadow-md flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold">Sanatan AstroFolks</h1>
        </div>

          {/* Search Bar */}
<div className="relative w-64">
  <div className="relative text-gray-600 focus-within:text-purple-600">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
    </span>
    <input
      type="search"
      name="q"
      className="w-full py-2 pl-10 pr-4 text-sm text-black bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out"
      placeholder="Search services, astrologers..."
      autoComplete="off"
    />

        
          </div>
        </div>

        <div>
          <button
            onClick={handleAuthClick}
            className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 hover:shadow-md transition duration-300 ease-in-out"
          >
            Login / Signup
          </button>
        </div>
      </nav>

     

     {/* SUBNAV */}
      <div className="bg-white shadow border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-sm font-medium text-gray-700">
            <button className="hover:text-purple-700">Home</button>
          <button className="hover:text-purple-700">Astrology</button>
          <button className="hover:text-purple-700">About Us</button>
          <button className="hover:text-purple-700">Solutions</button>
          <button className="hover:text-purple-700">Consultation</button>
          <button className="hover:text-purple-700">Booking</button>
          <button className="hover:text-purple-700">Contact Us</button>
        </div>
      </div>

{/* Main Horoscope Section */}

    <div className="bg-[#fffefc] min-h-screen py-10 px-4 flex flex-col items-center font-serif">
      <h1 className="text-3xl md:text-4xl font-bold text-[#a63636] mb-8 border-b-2 border-[#a63636] pb-3 text-center w-full max-w-5xl">
        Yearly Horoscope 2025
      </h1>

      {/* Zodiac Icons */}
      <div className="flex overflow-x-auto justify-start gap-6 mb-10 max-w-5xl w-full">
        {zodiacSigns.map(({ sign, image }) => (
          <div
            key={sign}
            className="flex flex-col items-center w-20 cursor-pointer"
            onClick={() => zodiacData[sign] && setSelectedSign(sign)}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-gray-300 shadow">
              <img src={image} alt={sign} className="object-cover w-full h-full" />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-800 text-center">
              {sign.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {/* Horoscope Box and Floating Image */}
      <div className="relative max-w-3xl w-full pr-20">
        {/* <div className="bg-[#fff5ed] border border-[#ffcab0] rounded-2xl p-6 md:p-8 shadow-lg"> */}
          
<div className="bg-[#f8fdff] border border-[#e0f2f8] rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl w-full relative">



    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#a63636] mb-2">
  {data.title}
</h2>
<div className="w-24 h-0.5 bg-[#f3a896] rounded mx-auto mb-6"></div>


          <div className="text-gray-800 space-y-4 text-base leading-relaxed">
            {data.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            {/* Monthly Forecast */}
            <div className="mt-10 space-y-8">
              {data.months.map((month, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-[#a63636] mb-2">{month.name}</h3>
                  <p className="text-gray-800 leading-relaxed">{month.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Image */}
        <div
          className="absolute top-6 right-[-40px] w-16 h-16 rounded-full border border-gray-300 shadow-md bg-[#fffefc] flex items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <img
            src={data.image}
            alt={selectedSign}
            className="object-cover w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </div>
        </div>
  );
  };
export default Horoscope;



