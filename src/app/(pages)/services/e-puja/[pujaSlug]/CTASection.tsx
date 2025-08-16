import { Button } from "@/components/common";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Book Your Krishna Janmashtami Puja Today &
              <span className="block bg-gradient-divine text-transparent">
                Invite Lord Krishna&apos;s Blessings!
              </span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Don&apos;t miss this sacred opportunity to celebrate the divine
              birth of Lord Krishna with authentic Braj traditions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              label="Proceed to Booking"
              variant="primary"
              size="medium"
              icon={<Calendar className="w-6 h-6" />}
            />
            <Button
              label="Call Now"
              icon={<Phone className="w-6 h-6" />}
              variant="default"
              size="medium"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="backdrop-blur-sm rounded-lg p-6 border">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 " />
              </div>
              <h3 className="text-lg font-bold  mb-2">24/7 Support</h3>
              <p className="/70">Instant assistance via WhatsApp</p>
            </div>

            <div className="backdrop-blur-sm rounded-lg p-6 border">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 " />
              </div>
              <h3 className="text-lg font-bold  mb-2">Flexible Booking</h3>
              <p className="/70">Easy rescheduling available</p>
            </div>

            <div className="backdrop-blur-sm rounded-lg p-6 border">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 " />
              </div>
              <h3 className="text-lg font-bold  mb-2">Instant Confirmation</h3>
              <p className="/70">Immediate booking confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
