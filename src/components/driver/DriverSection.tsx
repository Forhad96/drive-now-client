import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import SectionHeader from "../Shared/SectionHeader";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../Shared/Icons";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "Senior Chauffeur",
    image:
      "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/team-1.jpg",
    socials: {
      facebook: "#",
      youtube: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Taylor Smith",
    role: "City Tour Guide",
    image:
      "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/team-1.jpg",
    socials: {
      facebook: "#",
      youtube: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Jordan Brown",
    role: "Distance Driver",
    image:
      "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/team-1.jpg",
    socials: {
      facebook: "#",
      youtube: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Davis Casey",
    role: "Travel Specialist",
    image:
      "https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/team-1.jpg",
    socials: {
      facebook: "#",
      youtube: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

export default function DriverSection() {
  return (
    <Container>
      <SectionHeader
        size="large"
        title="Ensuring your safety and <br/> comfort on every journey"
        subtitle="Our Experienced Drivers"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {member.socials && (
                <div className="">
                  <div className="absolute group-hover:bottom-4 -bottom-40 transition-all duration-300 ease-in-out left-4 flex gap-2">
                    {member.socials.facebook && (
                      <Link
                        to={member.socials.facebook}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FacebookIcon />
                      </Link>
                    )}
                    {member.socials.youtube && (
                      <Link
                        to={member.socials.youtube}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <YoutubeIcon />
                      </Link>
                    )}
                    {member.socials.instagram && (
                      <Link
                        to={member.socials.instagram}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <InstagramIcon />
                      </Link>
                    )}
                    {member.socials.twitter && (
                      <Link
                        to={member.socials.twitter}
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <TwitterIcon /> 
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
