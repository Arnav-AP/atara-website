import educationImg from "@/assets/impact-education.jpg";
import animalImg from "@/assets/impact-animal.jpg";
import healthImg from "@/assets/impact-health.jpg";
import drawingImg from "@/assets/event-drawing.jpg";
import speakingImg from "@/assets/event-speaking.jpg";
import founderImg from "@/assets/founder.jpg";
import heroImg from "@/assets/hero-botanical.jpg";
import healthcareImg from "@/assets/images/healthcare-thalassemia.jpg";
import awarenessImg from "@/assets/images/awareness-reels.jpg";

export const stats = [
  { value: 5000, prefix: "₹", suffix: "+", label: "Donated to Thalassemia care" },
  { value: 90, suffix: "+", label: "Young artists at our Drawing Competition" },
  { value: 60, suffix: "+", label: "Speakers at our Public Speaking meet" },
  { value: 4, suffix: "", label: "NGO partners across causes" },
  { value: 1, suffix: "", label: "School equipped with digital tablets" },
];

export const causes = [
  {
    slug: "education",
    title: "Education",
    lead: "Placing modern learning tools in the hands of every child.",
    body:
      "We facilitated the donation of digital writing tablets to students at a Zilla Parishad school in Gokulwadi — replacing chalk slates with modern learning tools for children who had limited exposure to digital education.",
    image: educationImg,
    tone: "from-leaf/25 to-forest/10",
  },
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    lead: "Water, dignity and compassion for street animals.",
    body:
      "In collaboration with APLA Animal Welfare NGO, Atara contributed toward placing water spouts and water stations across the city for stray animals during extreme summer conditions.",
    image: animalImg,
    tone: "from-palm/35 to-forest/10",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    lead: "Standing beside families facing long-term illness.",
    body:
      "Atara donated ₹5,000 to SSBB NGO in support of Thalassemia patients — contributing toward healthcare and long-term medical assistance for individuals and families in need.",
    image: healthcareImg,
    tone: "from-leaf/30 to-forest/10",
  },
  {
    slug: "awareness",
    title: "Awareness",
    lead: "Turning short-form media into long-term empathy.",
    body:
      "Through Instagram reels on @atara.fwgs we highlight the challenges faced by underprivileged Zilla Parishad schools, stray animals in extreme weather, and patients living with Thalassemia — proving young voices can shift the conversation.",
    image: awarenessImg,
    tone: "from-forest/20 to-leaf/10",
  },
  {
    slug: "community",
    title: "Community Development",
    lead: "Everything we do is designed with the community, not for it.",
    body:
      "From co-hosting events with local NGOs to inviting classrooms and parents into our fundraisers, Atara treats community as collaborators — not audiences.",
    image: drawingImg,
    tone: "from-leaf/20 to-palm/10",
  },
];

export const events = [
  {
    slug: "drawing-competition",
    title: "ATARA's Drawing Competition",
    kicker: "Fundraiser",
    date: "25 July 2025",
    participants: 90,
    beneficiaries: "Zilla Parishad school, Gokulwadi",
    image: drawingImg,
    summary:
      "ATARA successfully organised its first-ever fundraiser, bringing together over 90 participants from different age groups. The competition provided young artists with a platform to express their creativity, imagination, and originality through themed artwork. Beyond celebrating artistic talent, the event promoted confidence, self-expression, and community participation while raising funds to support ATARA's future social impact initiatives.",
    outcome:
      "Funds raised were directed toward donating digital writing tablets to underprivileged students, and every participant was recognised for their effort. The event set the foundation for ATARA's mission of transforming student talent into meaningful social impact.",
  },
  {
    slug: "public-speaking",
    title: "ATARA's Public Speaking Competition",
    kicker: "Fundraiser",
    date: "8 October 2025",
    participants: 60,
    beneficiaries: "SSBB NGO — Thalassemia patients",
    image: speakingImg,
    summary:
      "Building on the success of its inaugural event, ATARA hosted its Public Speaking Competition with 60 enthusiastic participants. Students presented speeches on diverse and thought-provoking topics, developing confidence, communication, leadership, and critical thinking skills. The event encouraged meaningful discussions while empowering students to become articulate and responsible future leaders, with proceeds contributing towards ATARA's social initiatives.",
    outcome:
      "Contributions from the meet supported Thalassemia patients through SSBB NGO. Outstanding speakers were acknowledged for their performance, and the event further established ATARA as a platform for student voice and leadership.",
  },
  {
    slug: "donation-initiative",
    title: "ATARA Donation Initiative",
    kicker: "Healthcare Impact",
    date: "14 April 2026",
    participants: 5000,
    beneficiaries: "Shri Sai Blood Bank — Thalassemia patients",
    image: healthcareImg,
    summary:
      "ATARA made its first donation under the ATARA Donation Initiative by contributing ₹5,000 to Shri Sai Blood Bank (SSBB) in support of Thalassemia patients. This initiative aimed to assist individuals requiring lifelong blood transfusions while spreading awareness about Thalassemia and encouraging greater community support for healthcare-related causes.",
    outcome:
      "The donation directly supported Thalassemia patients requiring regular blood transfusions. The initiative also raised awareness about Thalassemia within the school community and beyond, encouraging others to contribute towards healthcare causes.",
  },
  {
    slug: "digital-tablet-donation",
    title: "Educational Impact",
    kicker: "Digital Writing Tablet Donation",
    date: "16 April 2026",
    participants: 1,
    beneficiaries: "Zilla Parishad School, Gokulwadi",
    image: educationImg,
    summary:
      "ATARA donated digital writing tablets to every student at the Zilla Parishad School, Gokulwadi, replacing traditional slate boards with reusable digital learning tools. The initiative improved access to modern educational resources, reduced recurring expenses on chalk and slates, and created a more engaging learning experience for students from underserved communities.",
    outcome:
      "Every student at the Zilla Parishad School received a digital writing tablet, replacing traditional slate boards with modern learning tools. The initiative reduced recurring expenses on chalk and slates while creating a more engaging and interactive learning environment.",
  },
  {
    slug: "water-pot-donation",
    title: "Animal Impact Initiative",
    kicker: "Water Pot Donation Drive",
    date: "26 April 2026",
    participants: 1,
    beneficiaries: "APLA Animal Welfare NGO — Stray animals",
    image: animalImg,
    summary:
      "In collaboration with APLA Animal Welfare NGO, ATARA supported the installation of water pots across the city to provide clean drinking water for stray animals during the peak summer season. This initiative promoted compassion towards animals while raising awareness about the importance of environmental responsibility and animal welfare.",
    outcome:
      "Water pots were installed across the city, providing stray animals with access to clean drinking water during extreme summer conditions. The initiative fostered compassion towards animals and highlighted the importance of environmental responsibility.",
  },
];

export const team = [
  { name: "Aditya Sawargonkar", role: "Founder", image: "/team/aditya.png" },
  { name: "Shaurya Raniwala", role: "Secretary", image: "/team/shauurya.png" },
  { name: "Smitkrishna Ambekar", role: "Project Coordinator", image: "/team/smitkrishna.png" },
  { name: "Viresh Agrawal", role: "Project Coordinator", image: "/team/viresh.png" },
  { name: "Nirveg Jain", role: "Chief of Staff", image: "/team/nirveg.png" },
  { name: "Devansh Tibriwala", role: "Head of Logistics", image: "/team/devansh.png" },
  { name: "Rudra Bajaj", role: "Head of Finance", image: "/team/rudra.png" },
  { name: "Zahrafatima Khawaja", role: "Head of Marketing & Public Relations", image: "/team/zahrafatima.png" },
  { name: "Rushika Jain", role: "Head of Creative Media", image: "/team/rushika.png" },
  { name: "Saishi Sharma", role: "Volunteer Coordinator", image: "/team/saishi.png" },
  { name: "Angelina D'souza", role: "Creative Executive", image: "/team/angelina.png" },
  { name: "Arnav Pardeshi", role: "Volunteer", image: "/team/arnav-pardeshi.png" },
  { name: "Sanvi Panchal", role: "Volunteer", image: "/team/sanvi.png" },
  { name: "Preet Agrawal", role: "Volunteer", image: "/team/preet.png" },
  { name: "Arnavi Jadhav", role: "Volunteer", image: "/team/arnavi.png" },
  { name: "Sarvesh Pawar", role: "Volunteer", image: "/team/sarvesh.png" }
];

export const updates = [
  {
    date: "26 Apr 2026",
    title: "Water pots installed across the city",
    body: "In collaboration with APLA Animal Welfare NGO, ATARA installed water stations across Aurangabad for stray animals during peak summer.",
    category: "Impact",
    image: animalImg,
    link: "/events/water-pot-donation",
  },
  {
    date: "16 Apr 2026",
    title: "Digital tablets for Zilla Parishad students",
    body: "Every student at Zilla Parishad School, Gokulwadi received a digital writing tablet — replacing chalk slates with modern tools.",
    category: "Impact",
    image: educationImg,
    link: "/events/digital-tablet-donation",
  },
  {
    date: "14 Apr 2026",
    title: "First donation to Thalassemia care",
    body: "ATARA donated ₹5,000 to Shri Sai Blood Bank, supporting Thalassemia patients who require lifelong blood transfusions.",
    category: "Impact",
    image: healthImg,
    link: "/events/donation-initiative",
  },
  {
    date: "8 Oct 2025",
    title: "Public Speaking Competition",
    body: "60 students took the stage at ATARA's second fundraiser, building confidence and raising funds for Thalassemia support.",
    category: "Event",
    image: speakingImg,
    link: "/events/public-speaking",
  },
  {
    date: "25 Jul 2025",
    title: "First-ever fundraiser",
    body: "ATARA's Drawing Competition brought together 90+ young artists — the first step in turning student talent into social impact.",
    category: "Event",
    image: drawingImg,
    link: "/events/drawing-competition",
  },
  {
    date: "4 May 2025",
    title: "The beginning of ATARA",
    body: "Founded by Aditya Sawargonkar as an IB Service as Action project, ATARA set out to prove that students can lead real change.",
    category: "Milestone",
    image: "/team/aditya.png",
    link: "/about",
  },
  {
    date: "Coming soon",
    title: "Next fundraiser announced",
    body: "ATARA is planning its next event. Follow @atara.fwgs on Instagram for the first announcement.",
    category: "Announcement",
    image: heroImg,
    link: "https://instagram.com/atara.fwgs",
    cta: "Follow us",
  },
];

export const timeline = [
  {
    year: "4 May 2025",
    title: "The Beginning of ATARA",
    body: "Founded by Aditya Sawargonkar, ATARA was established as a student-led social impact initiative under the IB Service as Action Programme with the vision of empowering young people to create meaningful change. Built on the belief that creativity, leadership, and compassion can transform communities, ATARA set out to organise impactful initiatives that raise awareness, support important causes, and inspire students to become responsible changemakers."
  },
  {
    year: "25 July 2025",
    title: "ATARA's First Fundraiser",
    kicker: "Drawing Competition",
    body: "ATARA successfully organised its first-ever fundraiser, bringing together over 90 participants from different age groups. The competition provided young artists with a platform to express their creativity, imagination, and originality through themed artwork. Beyond celebrating artistic talent, the event promoted confidence, self-expression, and community participation while raising funds to support ATARA's future social impact initiatives."
  },
  {
    year: "8 October 2025",
    title: "ATARA's Second Fundraiser",
    kicker: "Public Speaking Competition",
    body: "Building on the success of its inaugural event, ATARA hosted its Public Speaking Competition with 60 enthusiastic participants. Students presented speeches on diverse and thought-provoking topics, developing confidence, communication, leadership, and critical thinking skills. The event encouraged meaningful discussions while empowering students to become articulate and responsible future leaders, with proceeds contributing towards ATARA's social initiatives."
  },
  {
    year: "14 April 2026",
    title: "ATARA Donation Initiative",
    kicker: "Healthcare Impact",
    body: "ATARA made its first donation under the ATARA Donation Initiative by contributing ₹5,000 to Shri Sai Blood Bank (SSBB) in support of Thalassemia patients. This initiative aimed to assist individuals requiring lifelong blood transfusions while spreading awareness about Thalassemia and encouraging greater community support for healthcare-related causes."
  },
  {
    year: "16 April 2026",
    title: "Educational Impact",
    kicker: "Digital Writing Tablet Donation",
    body: "ATARA donated digital writing tablets to every student at the Zilla Parishad School, Gokulwadi, replacing traditional slate boards with reusable digital learning tools. The initiative improved access to modern educational resources, reduced recurring expenses on chalk and slates, and created a more engaging learning experience for students from underserved communities."
  },
  {
    year: "26 April 2026",
    title: "Animal Impact Initiative",
    kicker: "Water Pot Donation Drive",
    body: "In collaboration with APLA Animal Welfare NGO, ATARA supported the installation of water pots across the city to provide clean drinking water for stray animals during the peak summer season. This initiative promoted compassion towards animals while raising awareness about the importance of environmental responsibility and animal welfare."
  }
];
