
import Card from "../src/components/Card"


const companies = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    name: "Google",
    daysAgo: 2,
    position: "Senior UI/UX Designer",
    tags: ["Full Time", "Senior Level"],
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
    daysAgo: 5,
    position: "Frontend Developer",
    tags: ["Part Time", "Junior Level"],
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Microsoft",
    daysAgo: 1,
    position: "Product Designer",
    tags: ["Full Time", "Senior Level"],
    pay: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    name: "Netflix",
    daysAgo: 7,
    position: "UI Engineer",
    tags: ["Full Time", "Senior Level"],
    pay: "$130/hr",
    location: "Remote"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    name: "Meta",
    daysAgo: 3,
    position: "UX Researcher",
    tags: ["Part Time", "Senior Level"],
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
    daysAgo: 4,
    position: "Senior Product Designer",
    tags: ["Full Time", "Senior Level"],
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    name: "Airbnb",
    daysAgo: 6,
    position: "UI Designer",
    tags: ["Part Time", "Junior Level"],
    pay: "$50/hr",
    location: "Remote"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    name: "Spotify",
    daysAgo: 8,
    position: "Design Lead",
    tags: ["Full Time", "Senior Level"],
    pay: "$140/hr",
    location: "Pune, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
    name: "Uber",
    daysAgo: 9,
    position: "UX Designer",
    tags: ["Full Time", "Junior Level"],
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    name: "LinkedIn",
    daysAgo: 10,
    position: "Interaction Designer",
    tags: ["Part Time", "Senior Level"],
    pay: "$110/hr",
    location: "Chennai, India"
  }
];
const App = () => {

console.log(companies)
  return (

    <div className="parent">
      {companies.map((ele) => (
  <Card
    image={ele.image}
    name={ele.name}
    daysAgo={ele.daysAgo}
    position={ele.position}
    tags={ele.tags}
    pay={ele.pay}
    location={ele.location}
  />
))}
    </div>
  );
};

export default App;
