import { useState, useEffect } from "react";
import NewsBox from "../components/NewsBox";
import CustomInput from "../components/Input";
// import axios from "axios";

const dummyData = [
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Gabriella Borter",
    title:
      "Maine manhunt for Lewiston mass shooter extends to another night - Reuters",
    description:
      "Police in Maine extended their round-the-clock search for suspected Lewiston mass shooter Robert R. Card into the early hours of Friday morning, as the U.S. Army reservist eluded a manhunt following the bar and bowling alley massacres that killed 18 people an…",
    url: "https://www.reuters.com/world/us/maine-manhunt-lewiston-mass-shooter-extends-another-night-2023-10-27/",
    urlToImage:
      "https://www.reuters.com/resizer/1Yy3IeIzQHYAv2Q9h46NsJMWi_w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U7A5OTT2QVMFZKUZV23U274AQQ.jpg",
    publishedAt: "2023-10-27T08:10:05Z",
    content:
      "LEWISTON, Maine, Oct 27 (Reuters) - Police in Maine extended their round-the-clock search for suspected Lewiston mass shooter Robert R. Card into the early hours of Friday morning, as the U.S. Army r… [+4656 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "The Moscow Times",
    title:
      "Hamas Delegates Arrive in Moscow for Talks – Foreign Ministry - The Moscow Times",
    description: null,
    url: "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnRoZW1vc2Nvd3RpbWVzLmNvbS8yMDIzLzEwLzI2L2hhbWFzLWRlbGVnYXRlcy1hcnJpdmUtaW4tbW9zY293LWZvci10YWxrcy1mb3JlaWduLW1pbmlzdHJ5LWE4MjkwMtIBAA?oc=5",
    urlToImage: null,
    publishedAt: "2023-10-27T07:54:44Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: "",
    title:
      "Damian Lillard's historic Bucks debut through the eyes of his teammates: 'It's really just a feast for us' - CBS Sports",
    description:
      "Lillard set a franchise record for points in a debut with 39, as he led the Bucks to a win over the Sixers",
    url: "https://www.cbssports.com/nba/news/damian-lillards-historic-bucks-debut-through-the-eyes-of-his-teammates-its-really-just-a-feast-for-us/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2023/10/27/71b0cbc5-c36b-4956-8ce8-f8746386f700/thumbnail/1200x675/54d1f73374376d02cc87a56930125c80/dame-lillard-bucks-green-g.jpg",
    publishedAt: "2023-10-27T06:11:00Z",
    content:
      "MILWAUKEE -- The most surprising aspect of Damian Lillard's historic debut with the Milwaukee Bucks, at least to his teammates, may have come after the game. As soon as the locker room doors opened t… [+4944 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Anders Hagstrom",
    title:
      "Israel conducts ground incursion in Gaza tanks roll through border area - Fox News",
    description:
      'Israeli forces conducted "brief" ground incursions into the Gaza Strip as the war with Hamas enters its 20th day. The Hamas-run Health Ministry claims at least 6,546 Palestinians have been killed and 17,439 wounded. More than 1,400 Israelis have been killed s…',
    url: "https://www.foxnews.com/live-news/israel-hamas-war-october-26",
    urlToImage:
      "https://livenews.foxnews.com/images/2023/10/d3f370375ae24cbeebc5f4af153c332b.jpg",
    publishedAt: "2023-10-27T05:46:04Z",
    content:
      "A New York City councilwoman who was arrested after allegedly bringing a handgun to a pro-Palestinian rally in Brooklyn earlier this month, slammed Cooper Union on social media after Jewish students … [+2670 chars]",
  },
  {
    source: {
      id: null,
      name: "MLB.com",
    },
    author: "MLB.com",
    title:
      "Evan Longoria's experience valuable for D-backs in 2023 World Series - MLB.com",
    description: null,
    url: "https://www.mlb.com/news/evan-longoria-experience-d-backs-2023-world-series",
    urlToImage: null,
    publishedAt: "2023-10-27T05:43:23Z",
    content: null,
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Steve Holland, Matt Spetalnick, Humeyra Pamuk",
    title:
      "Behind Biden's shift on Israel-Hamas war - Gaza deaths, international pressure - Reuters",
    description:
      'U.S. President Joe Biden and his team have markedly shifted their tone on the Israel-Hamas crisis in recent days, moving from unfettered support of Israel to emphasizing the need to protect Palestinian civilians in Gaza ahead of a looming <a href="/world/midd…',
    url: "https://www.reuters.com/world/behind-bidens-shift-israel-hamas-war-gaza-deaths-international-pressure-2023-10-27/",
    urlToImage:
      "https://www.reuters.com/resizer/eopB__FOyORC1T6yUwncGLKITfQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/URKYYBZU4FONPBZXVIVDRZEX5E.jpg",
    publishedAt: "2023-10-27T05:40:36Z",
    content:
      "WASHINGTON, Oct 27 (Reuters) - U.S. President Joe Biden and his team have markedly shifted their tone on the Israel-Hamas crisis in recent days, moving from unfettered support of Israel to emphasizin… [+7251 chars]",
  },
  {
    source: {
      id: null,
      name: "Hollywood Reporter",
    },
    author: "Carly Thomas",
    title:
      "Thousands of SAG Members Sign Letter in Solidarity of Actors Strike: “We Have Not Come All This Way to Cave Now” - Hollywood Reporter",
    description:
      "The letter comes at a critical time as talks between the union and the AMPTP resumed this week.",
    url: "https://www.hollywoodreporter.com/news/general-news/sag-aftra-members-sign-letter-solidarity-actors-strike-1235629663/",
    urlToImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Striking-SAG-AFTRA-members-getty-H-2023.jpg?w=1024",
    publishedAt: "2023-10-27T05:20:35Z",
    content:
      "A group of SAG-AFTRA strike captains organized an open letter signed by apparently thousands of union members in solidarity amid the ongoing actors strike, saying, “We have not come all this way to c… [+3360 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Meryl Kornfield",
    title:
      "Rep. Dean Phillips running for president in 2024 against Biden - The Washington Post",
    description:
      "The Minnesota congressman said he was concerned about how Democrats would perform in another match-up between President Biden and former president Donald Trump.",
    url: "https://www.washingtonpost.com/politics/2023/10/26/dean-phillips-2024-presidential-bid/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MBYURSRDDEI6ZKGZBAT2FJFZCU.jpg&w=1440",
    publishedAt: "2023-10-27T05:03:38Z",
    content:
      "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nRep. Dean Phillips (D-Minn.) on Thursday officially announced his long shot primary challenge against President Biden, pitching himsel… [+4267 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Natasha Bertrand",
    title:
      "Chinese fighter jet got within 10 feet of US bomber over South China Sea, US military says - CNN",
    description:
      "A Chinese fighter jet came within 10 feet of a US Air Force B-52 bomber flying over the South China Sea on Tuesday, according to US Indo-Pacific Command.",
    url: "https://www.cnn.com/2023/10/26/politics/china-fighter-jet-us-bomber-south-china-sea/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/231026153355-01-china-us-fighter-jet-intercept-south-china-sea-grab.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-10-27T04:47:00Z",
    content:
      "A Chinese fighter jet came within 10 feet of a US Air Force B-52 bomber flying over the South China Sea on Tuesday, according to the US military.\r\nThe Chinese pilot flew in an unsafe and unprofession… [+3789 chars]",
  },
  {
    source: {
      id: null,
      name: "Billboard",
    },
    author: "Lars Brandle",
    title:
      "Taylor Swift Presents ‘1989 (Taylor’s Version)’ With Poetic Soliloquy - Billboard",
    description:
      "“Never in my wildest dreams did I imagine the magic you would sprinkle on my life for so long,” TayTay writes.",
    url: "https://www.billboard.com/music/pop/taylor-swift-presents-1989-taylors-version-handwritten-social-post-1235456086/",
    urlToImage:
      "https://www.billboard.com/wp-content/uploads/2023/10/taylor-swift-15-Night-One-Of-Taylor-Swift-_-The-Eras-Tour-Los-Angeles-billboard-1548.jpg?w=1024",
    publishedAt: "2023-10-27T04:30:39Z",
    content:
      "Taylor Swift’s fourth and latest “Taylor’s Version” isn’t just a release, it’s a healing process.\r\nThe pop superstar’s re-recorded LP dropped at the stroke of midnight, nine years to the day since th… [+1697 chars]",
  },
  {
    source: {
      id: "financial-times",
      name: "Financial Times",
    },
    author: "Camilla Hodgson",
    title:
      "GM's Cruise to suspend all driverless car fleets after California ban - Financial Times",
    description:
      "Company says it needs to ‘rebuild public trust’ and will assess its processes and systems",
    url: "https://www.ft.com/content/6d427250-0fa9-4a18-9981-e6acffca2270",
    urlToImage: null,
    publishedAt: "2023-10-27T03:40:30Z",
    content:
      "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Simone McCarthy, Steven Jiang",
    title: "Former Chinese Premier Li Keqiang dead at 68: state media - CNN",
    description:
      "China’s former Premier Li Keqiang has died, state media said on Friday.",
    url: "https://www.cnn.com/2023/10/27/china/china-former-premier-li-keqiang-died/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/231027082650-li-keqiang-file.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-10-27T03:39:00Z",
    content:
      "Former Chinese Premier Li Keqiang, once seen as a reform-minded contender to the countrys top leadership role, died of a sudden heart attack early Friday in Shanghai, state media reported.\r\nHe was 68… [+4463 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "MacKenzie Sigalos",
    title:
      "Sam Bankman-Fried's defense team fails to land a blow as he takes the stand - CNBC",
    description:
      "Judge Lewis Kaplan sent the jury home early on Thursday to decide whether some lines of defense were admissible.",
    url: "https://www.cnbc.com/2023/10/26/sam-bankman-fried-defense-team-fails-to-land-a-blow-as-he-takes-stand.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107323989-1698350888068-PXL_20231026_1949159082.jpg?v=1698377794&w=1920&h=1080",
    publishedAt: "2023-10-27T03:36:00Z",
    content:
      "Sam Bankman-Fried took the stand in a New York courtroom on Thursday, as he and his defense team auditioned their best legal material for U.S. District Judge Lewis Kaplan. \r\nThe former crypto billion… [+7417 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Tampa Bay Buccaneers vs. Buffalo Bills | 2023 Week 8 Game Highlgihts - NFL",
    description:
      "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
    url: "https://www.youtube.com/watch?v=XuSrkkdZjkQ",
    urlToImage: "https://i.ytimg.com/vi/XuSrkkdZjkQ/maxresdefault.jpg",
    publishedAt: "2023-10-27T03:32:10Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Israel-Hamas conflict: Lack of fuel pushing Gaza to brink, as Israeli forces prepare for invasion - Global News",
    description:
      "WARNING: This video contains disturbing content. Viewer discretion is advised.  While some humanitarian aid is finally being allowed into the Gaza Strip, the...",
    url: "https://www.youtube.com/watch?v=kRmo3ELz7TE",
    urlToImage: "https://i.ytimg.com/vi/kRmo3ELz7TE/maxresdefault.jpg",
    publishedAt: "2023-10-27T02:45:02Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Department of Defense",
    },
    author: null,
    title:
      "Secretary of Defense Lloyd J. Austin III's Statement on U.S. Military Strikes in Eastern S - Department of Defense",
    description:
      "Secretary of Defense Lloyd J. Austin III issued a statement on U.S. military strikes in Eastern Syria.",
    url: "https://www.defense.gov/News/Releases/Release/Article/3570798/secretary-of-defense-lloyd-j-austin-iiis-statement-on-us-military-strikes-in-ea/",
    urlToImage:
      "https://media.defense.gov/2021/Sep/30/2002865254/1280/1280/0/210930-D-EX074-055.JPG",
    publishedAt: "2023-10-27T02:07:26Z",
    content:
      "Today, at President Biden’s direction, U.S. military forces conducted self-defense strikes on two facilities in eastern Syria used by Iran’s Islamic Revolutionary Guard Corps (IRGC) and affiliated gr… [+1486 chars]",
  },
  {
    source: {
      id: null,
      name: "Eonline.com",
    },
    author: "Gabrielle Chung",
    title:
      "Britney Spears' Ex Sam Asghari Reacts to Her Memoir Revelation About Their Marriage - E! NEWS",
    description:
      "Britney Spears' estranged husband Sam Asghari shared his \"honest\" reaction to the pop star's memoir The Woman in Me, in which she detailed her past troubled relationships with men.",
    url: "https://www.eonline.com/news/1388768/britney-spears-ex-sam-asghari-reacts-to-her-memoir-revelation-about-their-marriage",
    urlToImage:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2023926/cr_1200x1200-231026180734-GettyImages-1163661829.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    publishedAt: "2023-10-27T01:57:00Z",
    content:
      "During what Britney describes as her involuntary trip to rehab in early 2019\"My father said that if I didn't go, then I'd have to go to court, and I'd be embarrassed,\" she writesshe recalls being pre… [+1251 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: "Bryan Alexander",
    title:
      "'The Golden Bachelor' recap: Three women remain after tearful goodbyes - USA TODAY",
    description:
      "'Golden Bachelor' Episode 5 recap: Gerry loves being the group-date arcade player, but begins to hate rose game",
    url: "https://www.usatoday.com/story/entertainment/tv/2023/10/26/golden-bachelor-episode-5-recap/71325010007/",
    urlToImage:
      "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/26/USAT/71325015007-170013-0413.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp",
    publishedAt: "2023-10-27T01:02:32Z",
    content:
      "Houston, we have a rose problem on \"The Golden Bachelor.\"\r\nGerry Turner's big loving heart, the feature that makes the 72-year-old Indiana native so irresistible on ABC's reality dating show, is disr… [+4308 chars]",
  },
  {
    source: {
      id: "nbc-news",
      name: "NBC News",
    },
    author: "Monica Alba, Sahil Kapur",
    title:
      "What we know about Biden and House Speaker Mike Johnson's working relationship - NBC News",
    description:
      "Biden, who doesn't know Mike Johnson well, is first going to try to work with the new speaker to get additional aid for Ukraine and Israel and domestic priorities.",
    url: "https://www.nbcnews.com/politics/white-house/know-biden-johnsons-working-relationship-rcna122426",
    urlToImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-10/231026-joe-biden-mike-johnson-seamless-2-up-split-ac-856p-0241e9.jpg",
    publishedAt: "2023-10-27T01:01:00Z",
    content:
      "WASHINGTON The White House sees the election of House Speaker Mike Johnson as a new moment in which to, at least at the outset, work across the aisle, and it is beginning to assess whether its possib… [+4035 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "George Santos faces House expulsion vote next week - BBC.com",
    description:
      "A fellow Republican forced the vote after submitting a resolution that cited Mr Santos' federal indictments.",
    url: "https://www.bbc.com/news/world-us-canada-67224353",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1288A/production/_131541957_gettyimages-1742983561.jpg",
    publishedAt: "2023-10-27T00:04:59Z",
    content:
      "Embattled Republican Rep George Santos faces expulsion from the US House of Representatives next week in a vote called by members of his own party.\r\nCongressman Anthony D'Esposito took to the House f… [+3391 chars]",
  },
];

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(dummyData);
  }, []);

  //     const apiKey = "0d31d94bcc4a48b8b3f559287f507956";
  //   useEffect(() => {
  //     // axios
  //     //   .get(
  //     //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  //     //   )
  //     //   .then((res) => setNews(res.data.articles))
  //     //   .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="text-center h-full p-5">
      <h1 className="text-6xl font-semibold">News Feed</h1>
      <div className="flex space-x-2 justify-center pt-3">
          <CustomInput
            type="text"
            placeholder="Search for news"
          />
        </div>
      <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsBox news={item} key={item.title}/>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
