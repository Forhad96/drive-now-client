import { Card } from "antd";
import ReusableButton from "../Shared/ReusableButton";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
 export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <Card className="bg-white group overflow-hidden relative">
        <div className="p-6 flex flex-col items-start gap-4 relative z-10">
          <div className="relative text-primary before:bg-light-input before:group-hover:bg-white before:h-12 before:w-12 before:rounded-full before:absolute before:right-2 before:bottom-2 before:-z-20 group-hover:text-white w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-semibold text-lg group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
          <ReusableButton />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0 bg-primary  rounded-full transition-all duration-700 ease-out group-hover:h-full" />
      </Card>
    );
  }
  