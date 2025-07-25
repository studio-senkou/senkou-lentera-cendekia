import { Fragment } from "react";
import { Navbar as NavbarComponent } from "@/components/navbar";
import { Hero as HeroComponent } from "@/features/components/hero";
import { Feature as FeatureComponent } from "@/features/components/feature";
import { Blog as BlogComponent } from "@/features/components/blog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Fragment>
      <NavbarComponent />
      <HeroComponent />
      <FeatureComponent direction="start" className="container mx-auto my-12">
        <FeatureComponent.Content>
          <FeatureComponent.Title>
            Unlock Your Potential with Tailored Tutoring Solutions Just for You
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

      <div className="bg-bright-sun-lightest py-12">
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
    </Fragment>
  );
}
