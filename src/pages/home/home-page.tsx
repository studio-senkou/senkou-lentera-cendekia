import { Navbar as NavbarComponent } from '@/shared/ui/navbar'
import { Hero as HeroComponent } from '@/features/home/components/hero'
import { Feature as FeatureComponent } from '@/features/home/components/feature'
import { Blog as BlogComponent } from '@/features/home/components/blog'
import { Button } from '@/shared/ui/button'
import { Banner } from '@/features/home/components/banner'
import {
    TestimonyAuthor,
    TestimonyCard,
    TestimonyContent,
    TestimonyImage,
    TestimonyQuote,
    TestimonyReadMore,
} from '@/features/home/components/testimony'
import { teachers } from '@/entities/teachers'
import { TeacherCard, TeacherContent, TeacherDescription, TeacherImage, TeacherSocial, TeacherTitle } from '@/features/home/components/teacher'
import { TeacherPromotion } from '@/features/home/components/teacher-promotion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { faqs } from '@/entities/faqs'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { getTestimonies } from '@/shared/lib/testimony'
import { getStaticAssets } from '@/shared/lib/asset'
import { Facility, FacilityContent, FacilityIcon } from '@/features/home/components/facility'
import { HomeMotion } from '@/features/home/components/home-motion'
import { AirVent, FlaskConical, User, Video } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
    const testimonies = await getTestimonies()
    const featuredTestimonies = testimonies.slice(0, 10)
    const assets = await getStaticAssets()

    return (
        <HomeMotion>
            <div className="relative overflow-hidden bg-white-surface">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div data-gsap-parallax className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-lentera-orange/35 blur-3xl" />
                    <div data-gsap-parallax className="absolute right-[-5rem] top-96 h-96 w-96 rounded-full bg-learning-blue/25 blur-3xl" />
                    <div
                        data-gsap-parallax
                        className="absolute left-1/2 top-[48rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-deep-navy/20 blur-3xl"
                    />
                </div>

                <NavbarComponent />

                <div id="hero" data-gsap-hero className="relative z-10">
                    <HeroComponent assets={assets} />
                </div>

                {/* Feature Section */}
                <div id="features" data-gsap-reveal className="relative z-10">
                    <FeatureComponent direction="start" className="container mx-auto my-6 lg:my-12">
                        <FeatureComponent.Content>
                            <FeatureComponent.Title>Belum Mengenal Kami? Kenali Kami Lebih Dekat!</FeatureComponent.Title>
                            <FeatureComponent.Description>
                                Lentera Cendekia hadir untuk mengatasi permasalahan belajar anak. Kami menciptakan lingkungan belajar yang
                                menyenangkan namun efektif melalui metode <b>&quot;Fun and Meaningful Learning&quot;</b>, yang memastikan siswa
                                memahami konsep dasar, bukan hanya menghafal.
                            </FeatureComponent.Description>
                        </FeatureComponent.Content>
                        <FeatureComponent.Image src="/images/about__one.svg" alt="Tutoring Solutions" />
                    </FeatureComponent>
                </div>

                {/* Blog Section */}
                <div id="blog" data-gsap-reveal className="relative z-10">
                    <BlogComponent className="container mx-auto mt-12">
                        <BlogComponent.Header>
                            <BlogComponent.Title>Solusi Belajar Terbaik untuk Semua Jenjang</BlogComponent.Title>
                            <BlogComponent.Description>
                                Kami menawarkan program bimbingan belajar yang personal untuk SD, SMP, hingga SMA. Apa pun kebutuhan
                                belajarmu—matematika, sains, atau bahasa—lami siap membantumu meraih prestasi terbaik.
                            </BlogComponent.Description>
                        </BlogComponent.Header>

                        <BlogComponent.Cards>
                            <BlogComponent.Card
                                data-gsap-card
                                image="https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-SD"
                                title="Bimbingan Belajar SD"
                                description="Program bimbingan belajar untuk siswa SD yang dirancang untuk membangun fondasi akademik yang kuat sejak dini."
                            />
                            <BlogComponent.Card
                                data-gsap-card
                                image="https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-SMP"
                                title="Bimbingan Belajar SMP"
                                description="Program bimbingan belajar untuk siswa SMP yang dirancang untuk membangun pemahaman konsep yang kuat."
                            />
                            <BlogComponent.Card
                                data-gsap-card
                                image="https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-SMA"
                                title="Bimbingan Belajar SMA"
                                description="Program bimbingan belajar untuk siswa SMA yang dirancang untuk mempersiapkan mereka menghadapi tantangan akademik dan ujian masuk perguruan tinggi."
                            />
                            <BlogComponent.Card
                                data-gsap-card
                                image="https://is3.cloudhost.id/lentera-cendekia/programs/BIMBINGAN-UTBK"
                                title="Program Intensif UTBK"
                                description="Program intensif persiapan UTBK yang dirancang untuk membantu siswa meraih skor tinggi dan masuk ke perguruan tinggi impian mereka."
                            />
                            <BlogComponent.Card
                                data-gsap-card
                                image="https://is3.cloudhost.id/lentera-cendekia/programs/ENLGISH-FOR-KIDS"
                                title="English for Kids"
                                description="Program pembelajaran bahasa Inggris untuk anak-anak yang dirancang untuk membangun kemampuan bahasa sejak dini dengan metode yang menyenangkan."
                            />
                        </BlogComponent.Cards>

                        <BlogComponent.Actions>
                            <Button variant="outline" size="lg">
                                Pelajari Lebih Lanjut
                            </Button>
                            <Button asChild variant="primary" size="lg">
                                <a
                                    href="https://wa.me/6285749688821?text=Saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20bimbingan%20belajar%20di%20Lentera%20Cendekia.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Daftar Sekarang
                                </a>
                            </Button>
                        </BlogComponent.Actions>
                    </BlogComponent>
                </div>

                {/* Featured Section */}
                <div className="relative z-10 container mx-auto px-4 lg:p-8" id="features-2" data-gsap-reveal>
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
                        <div className="relative overflow-hidden flex items-end justify-center w-full h-[500px] md:h-full bg-cover bg-center rounded-xl bg-[url('/images/hero.png')] border-[1px] border-border-default">
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
                                    title="Kelas Eksklusif Pendampingan Ujian"
                                    description="Kelompok belajar kecil (5-6 siswa) dengan pendampingan intensif untuk hasil ujian maksimal"
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

                <div id="testimonials" className="relative z-10" data-gsap-reveal>
                    <section className="my-12 px-4 py-16 lg:py-20">
                        <div className="container mx-auto">
                            <div className="mb-8 max-w-2xl lg:mb-12">
                                <h2 className="text-3xl font-medium text-text-heading lg:text-4xl font-serif">Kata Mereka Tentang Kami</h2>
                                <p className="mt-4 text-base leading-relaxed text-text-secondary lg:text-lg">
                                    Jangan hanya percaya kata kami. Dengarkan langsung pengalaman para siswa dan orang tua yang telah bergabung dengan
                                    keluarga besar Lentera Cendekia.
                                </p>
                            </div>

                            <div className="md:hidden">
                                <Carousel
                                    opts={{
                                        align: 'start',
                                        loop: false,
                                    }}
                                    className="w-full"
                                >
                                    <CarouselContent className="-ml-4">
                                        {featuredTestimonies.map((testimonial) => (
                                            <CarouselItem key={testimonial.id} className="basis-[90%] pl-4 sm:basis-[75%]">
                                                <TestimonyCard className="h-full">
                                                    <TestimonyImage
                                                        src={testimonial.testimoner_photo || '/images/placeholder.jpg'}
                                                        alt={testimonial.testimoner_name}
                                                    />
                                                    <TestimonyContent>
                                                        <TestimonyQuote className="line-clamp-6">{testimonial.testimony_text}</TestimonyQuote>
                                                        <TestimonyAuthor
                                                            name={testimonial.testimoner_name}
                                                            role={testimonial.testimoner_current_position || 'Keluarga Lentera Cendekia'}
                                                        />
                                                        <TestimonyReadMore href={`/testimonials/${testimonial.id}`} />
                                                    </TestimonyContent>
                                                </TestimonyCard>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>

                            <div className="hidden md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
                                {featuredTestimonies.map((testimonial) => (
                                    <TestimonyCard key={testimonial.id} className="h-full">
                                        <TestimonyImage
                                            src={testimonial.testimoner_photo || '/images/placeholder.jpg'}
                                            alt={testimonial.testimoner_name}
                                        />
                                        <TestimonyContent>
                                            <TestimonyQuote className="line-clamp-6">{testimonial.testimony_text}</TestimonyQuote>
                                            <TestimonyAuthor
                                                name={testimonial.testimoner_name}
                                                role={testimonial.testimoner_current_position || 'Keluarga Lentera Cendekia'}
                                            />
                                            <TestimonyReadMore href={`/testimonials/${testimonial.id}`} />
                                        </TestimonyContent>
                                    </TestimonyCard>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/testimonials">Lihat Semua Testimoni</Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="relative z-10" data-gsap-reveal>
                    <Banner
                        title="Bergabunglah Bersama Kami!"
                        description="Rasakan pengalaman belajar yang personal bersama tutor ahli kami. Daftar sekarang dan mulailah perjalanan menuju kesuksesan akademik."
                        className="my-12"
                    >
                        <Button variant="primary" size="lg">
                            Daftar Sekarang
                        </Button>
                        <Button variant="outline" size="lg" className="ml-4">
                            Info Lebih Lanjut
                        </Button>
                    </Banner>
                </div>

                <div className="my-12 lg:my-24 container mx-auto px-4 lg:px-8 relative z-10" data-gsap-reveal>
                    <Banner
                        title="Tingkatkan Prestasimu"
                        description="Temukan perbedaan belajar dengan pendampingan yang tepat. Kami siap mendukung setiap langkahmu."
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 md:p-8 rounded-lg"
                        style={{ backgroundImage: "url('/images/child-2.jpg')" }}
                    />
                </div>

                <div id="teachers" className="relative z-10 bg-ivory-bg py-12 lg:py-24 px-4 lg:px-0" data-gsap-reveal>
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
                            <h2 className="text-3xl lg:text-4xl font-medium text-text-heading mb-4 font-serif">Temui Pengajar Terbaik Kami</h2>
                            <p className="text-lg text-text-secondary w-full max-w-3xl mx-auto transition-transform">
                                Tim pengajar kami yang berpengalaman berkomitmen untuk memberikan pengalaman belajar terbaik bagi siswa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teachers.map((teacher) => (
                                <TeacherCard key={teacher.id}>
                                    <TeacherImage src={teacher.image} alt={teacher.name} />
                                    <TeacherContent>
                                        <TeacherTitle>{teacher.name}</TeacherTitle>
                                        <TeacherDescription>{teacher.description}</TeacherDescription>
                                        <TeacherSocial links={Object.entries(teacher.social ?? {}).map(([platform, url]) => ({ platform, url }))} />
                                    </TeacherContent>
                                </TeacherCard>
                            ))}
                        </div>
                        <TeacherPromotion />
                    </div>
                </div>

                <div className="container mx-auto my-12 lg:my-24 px-4 lg:px-8 relative z-10" data-gsap-reveal>
                    <div className="flex flex-col items-start mb-8 lg:mb-12">
                        <h2 className="text-3xl lg:text-4xl font-medium text-text-heading mb-4 font-serif">Pertanyaan Umum (FAQ)</h2>
                        <p className="text-lg text-text-secondary w-full max-w-3xl transition-transform">
                            Temukan jawaban atas pertanyaan umum tentang layanan bimbingan belajar, program, dan lainnya.
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
                        <h2 className="text-2xl font-medium text-text-heading mb-4 font-serif">Masih punya pertanyaan?</h2>
                        <p className="text-lg text-text-secondary w-full max-w-3xl transition-transform">
                            Kami siap membantu! Jika kamu memiliki pertanyaan lain atau butuh informasi lebih lanjut, jangan ragu untuk menghubungi
                            kami.
                        </p>
                        <Button variant="outline" size="lg" className="mt-4">
                            Hubungi Kami
                        </Button>
                    </div>
                </div>

                <Footer className="relative z-10">
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
            </div>
        </HomeMotion>
    )
}
