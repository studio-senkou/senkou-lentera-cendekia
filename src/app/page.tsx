import { Fragment } from 'react'
import { Navbar as NavbarComponent } from '@/components/navbar'
import { Hero as HeroComponent } from '@/features/components/hero'
import { Feature as FeatureComponent } from '@/features/components/feature'
import { Blog as BlogComponent } from '@/features/components/blog'
import { Button } from '@/components/ui/button'
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
} from '@/features/components/testimony'
// removed unused import: testimonials (we load testimonies from getTestimonies())
import { Banner } from '@/features/components/banner'
import { teachers } from '@/data/teachers'
import {
  TeacherCard,
  TeacherContent,
  TeacherDescription,
  TeacherImage,
  TeacherSocial,
  TeacherTitle,
} from '@/features/components/teacher'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/data/faqs'
import {
  Footer,
  FooterSection,
  FooterContact,
  FooterLinksGroup,
  FooterSocial,
  FooterBottom,
  FooterOverlayContact,
} from '@/components/footer'
import { getTestimonies } from '@/lib/testimony'
import { getAssetUrl } from '@/utils/asset'
import { getStaticAssets } from '@/lib/asset'
import {
  Facility,
  FacilityContent,
  FacilityIcon,
} from '@/features/components/facility'
import { AirVent, FlaskConical, User, Video } from 'lucide-react'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const testimonies = await getTestimonies()
  const assets = await getStaticAssets()

  return (
    <Fragment>
      <NavbarComponent />
      <div id="hero">
        <HeroComponent assets={assets} />
      </div>

      {/* Feature Section */}
      <div id="features">
        <FeatureComponent
          direction="start"
          className="container mx-auto my-6 lg:my-12"
        >
          <FeatureComponent.Content>
            <FeatureComponent.Title>
              Belum Mengenal Kami? Kenali Kami Lebih Dekat!
            </FeatureComponent.Title>
            <FeatureComponent.Description>
              Lentera Cendekia hadir untuk mengatasi permasalahan belajar anak.
              Kami menciptakan lingkungan belajar yang menyenangkan namun
              efektif melalui metode{' '}
              <b>&quot;Fun and Meaningful Learning&quot;</b>, yang memastikan
              siswa memahami konsep dasar, bukan hanya menghafal.
            </FeatureComponent.Description>
            {/* <FeatureComponent.Plans>
              <FeatureComponent.Plan
                title="Rencana Pembelajaran Personal"
                description="Kami membuat rencana pembelajaran yang disesuaikan dengan kebutuhan Anda secara individu."
              />
              <FeatureComponent.Plan
                title="Tutor Berpengalaman"
                description="Tutor kami adalah profesional berpengalaman yang berdedikasi untuk membantu Anda meraih kesuksesan."
              />
            </FeatureComponent.Plans> */}
          </FeatureComponent.Content>
          <FeatureComponent.Image
            src="/images/about__one.svg"
            alt="Tutoring Solutions"
          />
        </FeatureComponent>
      </div>

      {/* Blog Section */}
      <div id="blog">
        <BlogComponent className="container mx-auto mt-12">
          <BlogComponent.Header>
            <BlogComponent.Title>
              Program Bimbingan Belajar yang Disesuaikan untuk Setiap Siswa
            </BlogComponent.Title>
            <BlogComponent.Description>
              Pusat bimbingan belajar kami menawarkan program yang
              dipersonalisasi di berbagai mata pelajaran dan jenjang. Baik Anda
              membutuhkan bantuan matematika, sains, atau bahasa, kami memiliki
              sumber daya yang tepat untuk Anda.
            </BlogComponent.Description>
          </BlogComponent.Header>

          <BlogComponent.Cards>
            <BlogComponent.Card
              image="/images/child-0.jpg"
              title="Pilihan Mata Pelajaran Lengkap untuk Semua Jenjang"
              description="Dari SD hingga SMA, kami menyediakan semuanya."
            />
            <BlogComponent.Card
              image="/images/child-1.jpg"
              title="Tutor Berpengalaman Siap Mendukung Perjalanan Anda"
              description="Tutor kami yang berpengalaman berdedikasi untuk kesuksesan Anda."
            />
            <BlogComponent.Card
              image="/images/child-0.jpg"
              title="Jadwal Fleksibel Sesuai Kebutuhan Anda"
              description="Kami menawarkan waktu sesi yang fleksibel untuk menyesuaikan jadwal Anda yang sibuk."
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
      <div className="container mx-auto p-8" id="features-2">
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3 lg:space-x-6">
          <div className="flex flex-col w-full gap-3 md:gap-6">
            <Facility>
              <FacilityIcon>
                <div className="p-4 bg-[#E67514]/20 rounded-lg">
                  <AirVent size={40} color="#E67514" />
                </div>
              </FacilityIcon>
              <FacilityContent
                title="Full AC & Wifi"
                description="Kelas dil lengkapi dengan Air Conditioner dan Wifi yang akan menunjang kenyamanan belajar anak"
              />
            </Facility>
            <Facility>
              <FacilityIcon>
                <div className="p-4 bg-[#212121]/20 rounded-lg">
                  <FlaskConical size={40} color="#212121" />
                </div>
              </FacilityIcon>
              <FacilityContent
                title="Praktikum Kelas Offline/Online"
                description="Terdapat praktikum untuk dapat membantu siswa dalam memahami materi pembelajaran dengan mudah"
              />
            </Facility>
          </div>
          <div className="relative overflow-hidden flex items-end justify-center w-full h-[500px] md:h-full bg-cover bg-center rounded-xl bg-[url('/images/hero.png')] border-[1px] border-neutral-20">
            <Image
              src="/images/about__one.svg"
              alt="mockup1"
              width={1000}
              height={1000}
              className="absolute object-contain w-11/12 top-20 h-fit"
            />
          </div>
          <div className="flex flex-col w-full gap-3 md:gap-6">
            <Facility>
              <FacilityIcon>
                <div className="p-4 bg-[#06923E]/20 rounded-lg">
                  <User size={40} color="#06923E" />
                </div>
              </FacilityIcon>
              <FacilityContent
                title="Kelas Eksklusif Pendampingan Ujian Sekolah"
                description="Membuat kelompok belajar kecil dengan 5-6 anak, yang akan mendapatkan pendampingan khusus untuk memaksimalkan hasil ujian sekolah"
              />
            </Facility>
            <Facility>
              <FacilityIcon>
                <div className="p-4 bg-[#03A6A1]/20 rounded-lg">
                  <Video size={40} color="#03A6A1" />
                </div>
              </FacilityIcon>
              <FacilityContent
                title="Follow Up"
                description="Bimbingan via Whatsapp, G-Meet atau perantara lain yang dapat membantu siswa memahami tugas atau pun materi yang diberikan"
              />
            </Facility>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <BlogComponent className="container mx-auto mt-12">
        <BlogComponent.Header>
          <BlogComponent.Title>
            Informasi Terbaru dan Tips Belajar
          </BlogComponent.Title>
          <BlogComponent.Description>
            Ikuti blog kami untuk mendapatkan informasi terbaru tentang program
            bimbingan belajar, tips belajar efektif, dan berita pendidikan
            lainnya.
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
              Don&apos;t just take our word for it. Here&apos;s what our
              students and parents have to say about their experience with our
              tutoring services.
            </TestimonialsDescription>
          </TestimonialsHeader>

          <TestimonialsCarousel>
            {testimonies?.map((testimonial) => (
              <Testimony key={testimonial.id}>
                <TestimonyImage
                  src={getAssetUrl(testimonial.testimoner_photo)}
                  alt={testimonial.testimoner_name}
                />
                <TestimonyContent>
                  <TestimonyQuote>{testimonial.testimony_text}</TestimonyQuote>
                  <TestimonyAuthor
                    name={testimonial.testimoner_name}
                    role={testimonial.testimoner_current_position}
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
                      ([platform, url]) => ({ platform, url }),
                    )}
                  />
                </TeacherContent>
              </TeacherCard>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto my-24 px-8">
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
            We&apos;re here to help! If you have any other questions or need
            more information, feel free to reach out to us.
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
                { label: 'Tutoring Programs', href: '/programs' },
                { label: 'Online Learning', href: '/online' },
                { label: 'Test Preparation', href: '/test-prep' },
                { label: 'Academic Support', href: '/support' },
              ]}
            />

            <FooterLinksGroup
              title="About"
              links={[
                { label: 'Our Story', href: '/about' },
                { label: 'Our Teachers', href: '/teachers' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Contact Us', href: '/contact' },
              ]}
            />

            <FooterSocial
              links={[
                {
                  platform: 'twitter',
                  url: 'https://twitter.com/lenteracendekia',
                },
                {
                  platform: 'facebook',
                  url: 'https://facebook.com/lenteracendekia',
                },
                {
                  platform: 'instagram',
                  url: 'https://instagram.com/lenteracendekia',
                },
                {
                  platform: 'linkedin',
                  url: 'https://linkedin.com/company/lenteracendekia',
                },
              ]}
            />
          </div>
        </FooterSection>

        <FooterBottom />

        <FooterOverlayContact />
      </Footer>
    </Fragment>
  )
}
