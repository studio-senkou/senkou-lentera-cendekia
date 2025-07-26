import { Fragment } from "react";
import { Navbar as NavbarComponent } from "@/components/navbar";
import { Hero as HeroComponent } from "@/features/components/hero";
import { Feature as FeatureComponent } from "@/features/components/feature";
import { Blog as BlogComponent } from "@/features/components/blog";
import { Button } from "@/components/ui/button";
import {
  Testimonials,
  TestimonialsCarousel,
  TestimonialsDescription,
  TestimonialsHeader,
  TestimonialsTitle,
  Testimony,
  TestimonyAuthor,
  TestimonyContent,
  TestimonyImage,
  TestimonyQuote,
} from "@/features/components/testimony";
import { testimonials } from "@/data/testimonials";
import { Banner } from "@/features/components/banner";
import { teachers } from "@/data/teachers";
import {
  TeacherCard,
  TeacherContent,
  TeacherDescription,
  TeacherImage,
  TeacherSocial,
  TeacherTitle,
} from "@/features/components/teacher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import {
  Footer,
  FooterSection,
  FooterContact,
  FooterLinksGroup,
  FooterSocial,
  FooterBottom,
  FooterOverlayContact,
} from "@/components/footer";

export default function Home() {
  return (
    <Fragment>
      <NavbarComponent />
      <div id="hero">
        <HeroComponent />
      </div>

      {/* Feature Section */}
      <div id="features">
        <FeatureComponent
          direction="start"
          className="container mx-auto my-6 lg:my-12"
        >
          <FeatureComponent.Content>
            <FeatureComponent.Title>
              Unlock Your Potential with Tailored Tutoring Solutions Just for
              You
            </FeatureComponent.Title>
            <FeatureComponent.Description>
              At our tutoring center, we prioritize your unique learning needs.
              Our experienced tutor craft personalized learning plans to ensure
              your success
            </FeatureComponent.Description>
            <FeatureComponent.Plans>
              <FeatureComponent.Plan
                title="Personalized Learning Plans"
                description="We create customized learning plans that cater to your individual needs."
              />
              <FeatureComponent.Plan
                title="Expert Tutors"
                description="Our tutors are experienced professionals dedicated to helping you succeed."
              />
            </FeatureComponent.Plans>
          </FeatureComponent.Content>
          <FeatureComponent.Image
            src="/images/child-1.jpg"
            alt="Tutoring Solutions"
          />
        </FeatureComponent>
      </div>

      {/* Blog Section */}
      <div id="blog">
        <BlogComponent className="container mx-auto mt-12">
          <BlogComponent.Header>
            <BlogComponent.Title>
              Tailored Tutoring Programs for Every Learner
            </BlogComponent.Title>
            <BlogComponent.Description>
              Our tutoring center offers personalized programs across various
              subjects and grade levels. Whether you need help with math,
              science, or language arts, we have the right resources for you.
            </BlogComponent.Description>
          </BlogComponent.Header>

          <BlogComponent.Cards>
            <BlogComponent.Card
              image="/images/child-0.jpg"
              title="Comprehensive Subject Offerings for All Grades"
              description="From elementary to high school, we cover it all."
            />
            <BlogComponent.Card
              image="/images/child-1.jpg"
              title="Expert Tutors Ready to Support Your Journey"
              description="Our experienced tutors are dedicated to your success."
            />
            <BlogComponent.Card
              image="/images/child-0.jpg"
              title="Flexible Scheduling to Fit Your Lifestyle"
              description="We offer convenient session times to accommodate busy schedules."
            />
          </BlogComponent.Cards>

          <BlogComponent.Actions>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
            <Button variant="primary" size="lg">
              Sign Up
            </Button>
          </BlogComponent.Actions>
        </BlogComponent>
      </div>

      {/* Featured Section */}
      <div className="bg-bright-sun-lightest py-12" id="features-2">
        <FeatureComponent direction="start" className="container mx-auto my-12">
          <FeatureComponent.Content>
            <FeatureComponent.Title>
              Unlock Your Potential with Tailored Tutoring Solutions Just for
              You
            </FeatureComponent.Title>
            <FeatureComponent.Description>
              At our tutoring center, we prioritize your unique learning needs.
              Our experienced tutor craft personalized learning plans to ensure
              your success
            </FeatureComponent.Description>
            <FeatureComponent.Plans>
              <FeatureComponent.Plan
                title="Personalized Learning Plans"
                description="We create customized learning plans that cater to your individual needs."
              />
              <FeatureComponent.Plan
                title="Expert Tutors"
                description="Our tutors are experienced professionals dedicated to helping you succeed."
              />
            </FeatureComponent.Plans>
          </FeatureComponent.Content>
          <FeatureComponent.Image
            src="/images/child-1.jpg"
            alt="Tutoring Solutions"
          />
        </FeatureComponent>
      </div>

      {/* Blog Section */}
      <BlogComponent className="container mx-auto mt-12">
        <BlogComponent.Header>
          <BlogComponent.Title>
            Tailored Tutoring Programs for Every Learner
          </BlogComponent.Title>
          <BlogComponent.Description>
            Our tutoring center offers personalized programs across various
            subjects and grade levels. Whether you need help with math, science,
            or language arts, we have the right resources for you.
          </BlogComponent.Description>
        </BlogComponent.Header>

        <BlogComponent.Cards>
          <BlogComponent.Card
            image="/images/child-0.jpg"
            title="Comprehensive Subject Offerings for All Grades"
            description="From elementary to high school, we cover it all."
          />
          <BlogComponent.Card
            image="/images/child-1.jpg"
            title="Expert Tutors Ready to Support Your Journey"
            description="Our experienced tutors are dedicated to your success."
          />
          <BlogComponent.Card
            image="/images/child-0.jpg"
            title="Flexible Scheduling to Fit Your Lifestyle"
            description="We offer convenient session times to accommodate busy schedules."
          />
        </BlogComponent.Cards>

        <BlogComponent.Actions>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
          <Button variant="primary" size="lg">
            Sign Up
          </Button>
        </BlogComponent.Actions>
      </BlogComponent>

      <div id="testimonials">
        <Testimonials className="my-12">
          <TestimonialsHeader>
            <TestimonialsTitle>What Our Students Say</TestimonialsTitle>
            <TestimonialsDescription>
              Don't just take our word for it. Here's what our students and
              parents have to say about their experience with our tutoring
              services.
            </TestimonialsDescription>
          </TestimonialsHeader>

          <TestimonialsCarousel>
            {testimonials.map((testimonial) => (
              <Testimony key={testimonial.id}>
                <TestimonyImage
                  src={testimonial.image}
                  alt={testimonial.testimoner}
                />
                <TestimonyContent>
                  <TestimonyQuote>{testimonial.quote}</TestimonyQuote>
                  <TestimonyAuthor
                    name={testimonial.testimoner}
                    role={testimonial.testimoner_position}
                  />
                </TestimonyContent>
              </Testimony>
            ))}
          </TestimonialsCarousel>
        </Testimonials>
      </div>

      <Banner
        title="Join Our Tutoring Center Today!"
        description="Experience personalized learning with our expert tutors. Sign up now to start your journey towards academic success."
        className="my-12"
      >
        <Button variant="primary" size="lg">
          Sign Up Now
        </Button>
        <Button variant="outline" size="lg" className="ml-4">
          Learn More
        </Button>
      </Banner>

      <div className="my-24 container mx-auto px-8">
        <Banner
          title="Empower Your Learning Journey"
          description="Discover the difference personalized tutoring can make. Our dedicated tutors are here to support you every step of the way."
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg"
          style={{ backgroundImage: "url('/images/child-2.jpg')" }}
        />
      </div>

      <div id="teachers" className="bg-bright-sun-lightest py-24 px-8 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl font-medium text-neutral-darkest mb-4">
              Meet Our Dedicated Teachers
            </h2>
            <p className="text-lg text-neutral-dark w-full max-w-3xl mx-auto transition-transform">
              Our team of experienced educators is committed to providing the
              best learning experience for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id}>
                <TeacherImage src={teacher.image} alt={teacher.name} />
                <TeacherContent>
                  <TeacherTitle>{teacher.name}</TeacherTitle>
                  <TeacherDescription>{teacher.description}</TeacherDescription>
                  <TeacherSocial
                    links={Object.entries(teacher.social ?? {}).map(
                      ([platform, url]) => ({ platform, url })
                    )}
                  />
                </TeacherContent>
              </TeacherCard>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto my-24 px-8 lg:px-0">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-4xl font-medium text-neutral-darkest mb-4">
            FAQs
          </h2>
          <p className="text-lg text-neutral-dark w-full max-w-3xl transition-transform">
            Find answers to common questions about our tutoring services,
            programs, and more.
          </p>
        </div>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.id} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col items-start mt-12">
          <h2 className="text-2xl font-medium text-neutral-darkest mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-neutral-dark w-full max-w-3xl transition-transform">
            We're here to help! If you have any other questions or need more
            information, feel free to reach out to us.
          </p>
          <Button variant="outline" size="lg" className="mt-4">
            Contact Us
          </Button>
        </div>
      </div>

      <Footer>
        <FooterSection>
          <FooterContact />

          <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-12">
            <FooterLinksGroup
              title="Services"
              links={[
                { label: "Tutoring Programs", href: "/programs" },
                { label: "Online Learning", href: "/online" },
                { label: "Test Preparation", href: "/test-prep" },
                { label: "Academic Support", href: "/support" },
              ]}
            />

            <FooterLinksGroup
              title="About"
              links={[
                { label: "Our Story", href: "/about" },
                { label: "Our Teachers", href: "/teachers" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
              ]}
            />

            <FooterSocial
              links={[
                {
                  platform: "twitter",
                  url: "https://twitter.com/lenteracendekia",
                },
                {
                  platform: "facebook",
                  url: "https://facebook.com/lenteracendekia",
                },
                {
                  platform: "instagram",
                  url: "https://instagram.com/lenteracendekia",
                },
                {
                  platform: "linkedin",
                  url: "https://linkedin.com/company/lenteracendekia",
                },
              ]}
            />
          </div>
        </FooterSection>

        <FooterBottom />

        <FooterOverlayContact />
      </Footer>
    </Fragment>
  );
}
