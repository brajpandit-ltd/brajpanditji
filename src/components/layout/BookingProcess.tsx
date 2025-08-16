import { Card } from "@/components/ui";
import { CheckCircle } from "lucide-react";
import { bookingSteps } from "@/constants/static";

const BookingProcess = () => {
  return (
    <section className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to <span className="text-primary">Book Your Puja?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple and seamless booking process to connect you with divine
            blessings
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {bookingSteps.map((step, index) => (
              <Card
                key={index}
                className="p-8 shadow-sacred hover:shadow-divine transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <CheckCircle className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
