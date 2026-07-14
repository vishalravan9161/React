// import React from 'react'

import Cards from "./components/Cards"

function App() {

  const jobPostings = [
  {
    id: 1,
    company: "Google",
    logo: "https://i1-c.pinimg.com/1200x/b7/86/79/b786795a5bfba85a9d0422b015d2a460.jpg",
    title: "Senior UI/UX Designer",
    level: "Senior",
    type: "Full-time",
    location: "Mumbai, India",
    payment: "$250k/Year",
    date: "30 minute ago",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "https://i1-c.pinimg.com/1200x/76/77/61/767761985739e7daeb5cd0233d618179.jpg",
    title: "Junior Software Engineer",
    level: "Junior",
    type: "Full-time",
    location: "Bengaluru, India",
    payment: "$120k/Year",
    date: "22 hour ago",
  },
  {
    id: 3,
    company: "Apple",
    logo: "https://i1-c.pinimg.com/736x/95/9e/37/959e37daed83babc25f8799a08c817af.jpg",
    title: "Senior Software Engineer (iOS)",
    level: "Senior",
    type: "Full-time",
    location: "Hyderabad, India",
    payment: "$220k/Year",
    date: "14 hour ago",
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://i1-c.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    title: "Product Designer",
    level: "Senior",
    type: "Part-time",
    location: "Remote, India",
    payment: "$120/Year",
    date: "12 hour ago",
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://i1-c.pinimg.com/736x/87/a7/e4/87a7e4337e31dd3093c3494fefaf82a4.jpg",
    title: "Junior UI/UX Designer",
    level: "Junior",
    type: "Part-time",
    location: "Mumbai, India",
    payment:  "$80/Hour",
    date: "21 hour ago",
  },
  {
    id: 6,
    company: "Amazon",
    logo: "https://i1-c.pinimg.com/736x/e9/b7/71/e9b771de9abdfe1a0642a99eec68254c.jpg",
    title: "Senior Frontend Engineer (React)",
    level: "Senior",
    type: "Full-time",
    location: "Pune, India",
    payment: "$200k/Year",
    date: "11 hour ago",
  },
  {
    id: 7,
    company: "Adobe",
    logo: "https://i1-c.pinimg.com/1200x/a7/28/46/a72846b8e86d910b5a901f35f58b7491.jpg",
    title: "Junior Graphic Designer",
    level: "Junior",
    type: "Full-time",
    location: "Noida, India",
    payment: "$70k/Year",
    date: "9 hour ago",
  },
  {
    id: 8,
    company: "Uber",
    logo: "https://i1-c.pinimg.com/1200x/11/c9/52/11c95229fb5a60cb92396f5fab58e309.jpg",
    title: "Senior Backend Developer",
    level: "Senior",
    type: "Full-time",
    location: "Bengaluru, India",
    payment: "$140/Year",
    date: "2 hour ago",
  },
  {
    id: 9,
    company: "Airbnb",
    logo: "https://i1-c.pinimg.com/736x/56/5c/2a/565c2a824c7c184e326c751a0fb7e73e.jpg",
    title: "UI/UX Researcher",
    level: "Senior",
    type: "Part-time",
    location: "Remote",
    payment: "$110/Year",
    date: "7 hour ago",
  },
  {
    id: 10,
    company: "Spotify",
    logo: "https://i1-c.pinimg.com/736x/14/8b/28/148b28a3992349e8db92184c65d24bbd.jpg",
    title: "Junior Data Analyst",
    level: "Junior",
    type: "Full-time",
    location: "Mumbai, India",
    payment: "$85k/Year",
    date: "4 hour ago",
  },
  {
    id: 11,
    company: "Stripe",
    logo: "https://i1-c.pinimg.com/736x/9a/3c/4d/9a3c4d07dc0afb6a0f2c95809a9b1749.jpg",
    title: "Senior Full Stack Engineer",
    level: "Senior",
    type: "Full-time",
    location: "Bengaluru, India",
    payment: "$240k/Year",
    date: "2 hour ago",
  },
  {
    id: 12,
    company: "Slack",
    logo: "https://i1-c.pinimg.com/1200x/7a/b4/a1/7ab4a197b14d8425627633d2f814f2b1.jpg",
    title: "Junior Frontend Developer",
    level: "Junior",
    type: "Part-time",
    location: "Delhi, India",
    payment: "$60/Hour",
    date: "1 month ago",
  },
  {
    id: 13,
    company: "Atlassian",
    logo: "https://i1-c.pinimg.com/1200x/f4/d1/08/f4d108f38beb7855e2cb0ad17c9d157f.jpg",
    title: "Senior DevOps Engineer",
    level: "Senior",
    type: "Full-time",
    location: "Remote, India",
    payment: "$195k/Year",
    date: "5 week ago",
  },
  {
    id: 14,
    company: "Zoom",
    logo: "https://i1-c.pinimg.com/1200x/9b/8c/b5/9b8cb57cc18cae42846d01e36884abb2.jpg",
    title: "Senior Support Engineer",
    level: "Senior",
    type: "Full-time",
    location: "Mumbai, India",
    payment: "$130k/Year",
    date: "3 week ago",
  },
  {
    id: 15,
    company: "GitHub",
    logo: "https://i1-c.pinimg.com/1200x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg",
    title: "Junior Systems Engineer",
    level: "Junior",
    type: "Full-time",
    location: "Hyderabad, India",
    payment: "$90k/Year",
    date: "4 month ago",
  },
  {
    id: 16,
    company: "Salesforce",
    logo: "https://i1-c.pinimg.com/1200x/07/91/6e/07916e8763ff503f2965b9a5b9622215.jpg",
    title: "Senior UI Architect",
    level: "Senior",
    type: "Full-time",
    location: "Gurugram, India",
    payment: "$210k/Year",
    date: "1 day ago",
  },
  {
    id: 17,
    company: "Twitter (X)",
    logo: "https://i1-c.pinimg.com/1200x/b6/c8/00/b6c800142f65721a573e90a33a86b34f.jpg",
    title: "Junior Backend Engineer",
    level: "Junior",
    type: "Part-time",
    location: "Remote",
    payment: "$75/Hour",
    date: "1 month ago",
  },
  {
    id: 18,
    company: "LinkedIn",
    logo: "https://i1-c.pinimg.com/1200x/4c/ea/62/4cea62557d3c8e345f51e9dd3e9347ad.jpg",
    title: "Senior Product Manager",
    level: "Senior",
    type: "Full-time",
    location: "Bengaluru, India",
    payment: "$260k/Year",
    date: "7 week ago",
  },
  {
    id: 19,
    company: "Canva",
    logo: "https://i1-c.pinimg.com/1200x/c9/35/61/c93561ce889c03839424e455d98579c3.jpg",
    title: "Junior UI/UX Designer",
    level: "Junior",
    type: "Part-time",
    location: "Chennai, India",
    payment: "$55/Hour",
    date: "3 week ago", 
  },
  {
    id: 20,
    company: "Tesla",
    logo: "https://i1-c.pinimg.com/1200x/29/92/5a/29925ae71627c8ba50710db01fcd2c57.jpg",
    title: "Senior Embedded Systems Engineer",
    level: "Senior",
    type: "Full-time",
    location: "Pune, India",
    payment: "$235k/Year" ,
    date: "1 week ago",
  }
];


  return (
   
   <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-center lg:pl-6.5 ">
   
    {   
      jobPostings.map(function(elem,idx){
        return <div key={idx}>
          <Cards company={elem.company} post={elem.title} logo={elem.logo} type={elem.type} location={elem.location} payment={elem.payment} level={elem.level} date={elem.date}/>
        
        </div>
          
        
      })
    }
  
    
   </div>
   
   
  )
}

export default App