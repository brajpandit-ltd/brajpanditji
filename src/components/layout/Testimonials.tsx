import { Card } from "@/components/ui";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/constants/static";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-sacred">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="bg-primary">Devotees Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from families who experienced divine blessings through our
            authentic puja services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 shadow-sacred hover:shadow-divine transition-all duration-300 group relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.image}
                  </div>

                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Message */}
                    <p className="text-foreground leading-relaxed mb-6 text-lg">
                      &quot;{testimonial.message}&quot;
                    </p>

                    {/* Name and Location */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
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

export default Testimonials;
