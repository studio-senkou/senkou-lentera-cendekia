import { Fragment } from 'react'
import { Navbar as NavbarComponent } from '@/shared/ui/navbar'
import { Hero as HeroComponent } from '@/features/home/components/hero'
import { Feature as FeatureComponent } from '@/features/home/components/feature'
import { Blog as BlogComponent } from '@/features/home/components/blog'
import { Button } from '@/shared/ui/button'
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
    TestimonyReadMore,
} from '@/features/home/components/testimony'
import { Banner } from '@/features/home/components/banner'
import { teachers } from '@/entities/teachers'
import { TeacherCard, TeacherContent, TeacherDescription, TeacherImage, TeacherSocial, TeacherTitle } from '@/features/home/components/teacher'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { faqs } from '@/entities/faqs'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { getTestimonies } from '@/shared/lib/testimony'
import { getStaticAssets } from '@/shared/lib/asset'
import { Facility, FacilityContent, FacilityIcon } from '@/features/home/components/facility'
import { AirVent, FlaskConical, User, Video } from 'lucide-react'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
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
                <FeatureComponent direction="start" className="container mx-auto my-6 lg:my-12">
                    <FeatureComponent.Content>
                        <FeatureComponent.Title>Belum Mengenal Kami? Kenali Kami Lebih Dekat!</FeatureComponent.Title>
                        <FeatureComponent.Description>
                            Lentera Cendekia hadir untuk mengatasi permasalahan belajar anak. Kami menciptakan lingkungan belajar yang menyenangkan
                            namun efektif melalui metode <b>&quot;Fun and Meaningful Learning&quot;</b>, yang memastikan siswa memahami konsep dasar,
                            bukan hanya menghafal.
                        </FeatureComponent.Description>
                    </FeatureComponent.Content>
                    <FeatureComponent.Image src="/images/about__one.svg" alt="Tutoring Solutions" />
                </FeatureComponent>
            </div>

            {/* Blog Section */}
            <div id="blog">
                <BlogComponent className="container mx-auto mt-12">
                    <BlogComponent.Header>
                        <BlogComponent.Title>Solusi Belajar Terbaik untuk Semua Jenjang</BlogComponent.Title>
                        <BlogComponent.Description>
                            Kami menawarkan program bimbingan belajar yang personal untuk SD, SMP, hingga SMA. 
                            Apa pun kebutuhan belajarmu—matematika, sains, atau bahasa—lami siap membantumu meraih prestasi terbaik.
                        </BlogComponent.Description>
                    </BlogComponent.Header>

                    <BlogComponent.Cards>
                        <BlogComponent.Card
                            image="/images/child-0.jpg"
                            title="Mata Pelajaran Lengkap"
                            description="Tersedia untuk semua jenjang dari SD hingga SMA, mencakup kurikulum nasional."
                        />
                        <BlogComponent.Card
                            image="/images/child-1.jpg"
                            title="Tutor Berpengalaman & Seru"
                            description="Pengajar kami tidak hanya ahli, tapi juga asik dan mengerti cara belajar kamu."
                        />
                        <BlogComponent.Card
                            image="/images/child-0.jpg"
                            title="Jadwal Fleksibel"
                            description="Pilih waktu belajarmu sendiri agar tetap bisa menyeimbangkan hobi dan prestasi."
                        />
                    </BlogComponent.Cards>

                    <BlogComponent.Actions>
                        <Button variant="outline" size="lg">
                            Pelajari Lebih Lanjut
                        </Button>
                        <Button variant="primary" size="lg">
                            Daftar Sekarang
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

            {/* Blog Section */}
            <BlogComponent className="container mx-auto mt-12">
                <BlogComponent.Header>
                    <BlogComponent.Title>Kabar Terbaru & Tips Belajar</BlogComponent.Title>
                    <BlogComponent.Description>
                        Ikuti terus update terbaru seputar pendidikan, tips belajar efektif, dan info menarik lainnya dari Lentera Cendekia.
                    </BlogComponent.Description>
                </BlogComponent.Header>

                <BlogComponent.Cards>
                    <BlogComponent.Card
                        image="/images/child-0.jpg"
                        title="Cara Mengatur Waktu Belajar yang Efektif"
                        description="Tips jitu membagi waktu antara sekolah, les, dan bermain agar tetap produktif."
                    />
                    <BlogComponent.Card
                        image="/images/child-1.jpg"
                        title="Mengenal Gaya Belajar Visual"
                        description="Apakah kamu tipe visual? Yuk cari tahu cara belajar yang paling pas buat kamu."
                    />
                    <BlogComponent.Card
                        image="/images/child-0.jpg"
                        title="Persiapan Ujian Tanpa Stres"
                        description="Strategi menghadapi ujian dengan tenang dan percaya diri."
                    />
                </BlogComponent.Cards>

                <BlogComponent.Actions>
                    <Button variant="outline" size="lg">
                        Lihat Artikel Lainnya
                    </Button>
                </BlogComponent.Actions>
            </BlogComponent>

            <div id="testimonials">
                <Testimonials className="my-12">
                    <TestimonialsHeader>
                        <TestimonialsTitle>Kata Mereka Tentang Kami</TestimonialsTitle>
                        <TestimonialsDescription>
                            Jangan hanya percaya kata kami. Dengarkan langsung pengalaman para siswa dan orang tua yang telah bergabung dengan keluarga besar Lentera Cendekia.
                        </TestimonialsDescription>
                    </TestimonialsHeader>

                    <TestimonialsCarousel>
                        {testimonies?.map((testimonial) => (
                            <Testimony key={testimonial.id}>
                                <TestimonyImage src={testimonial.testimoner_photo || '/images/placeholder.jpg'} alt={testimonial.testimoner_name} />
                                <TestimonyContent>
                                    <TestimonyQuote>{testimonial.testimony_text}</TestimonyQuote>
                                    <TestimonyAuthor name={testimonial.testimoner_name} role={testimonial.testimoner_current_position} />
                                    <TestimonyReadMore href={`/testimonials/${testimonial.id}`} />
                                </TestimonyContent>
                            </Testimony>
                        ))}
                    </TestimonialsCarousel>
                </Testimonials>
            </div>

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

            <div className="my-24 container mx-auto px-8">
                <Banner
                    title="Tingkatkan Prestasimu"
                    description="Temukan perbedaan belajar dengan pendampingan yang tepat. Kami siap mendukung setiap langkahmu."
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg"
                    style={{ backgroundImage: "url('/images/child-2.jpg')" }}
                />
            </div>

            <div id="teachers" className="bg-bright-sun-lightest py-24 px-8 lg:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-4xl font-medium text-neutral-darkest mb-4">Temui Pengajar Terbaik Kami</h2>
                        <p className="text-lg text-neutral-dark w-full max-w-3xl mx-auto transition-transform">
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
                </div>
            </div>

            <div className="container mx-auto my-24 px-8">
                <div className="flex flex-col items-start mb-12">
                    <h2 className="text-4xl font-medium text-neutral-darkest mb-4">Pertanyaan Umum (FAQ)</h2>
                    <p className="text-lg text-neutral-dark w-full max-w-3xl transition-transform">
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
                    <h2 className="text-2xl font-medium text-neutral-darkest mb-4">Masih punya pertanyaan?</h2>
                    <p className="text-lg text-neutral-dark w-full max-w-3xl transition-transform">
                        Kami siap membantu! Jika kamu memiliki pertanyaan lain atau butuh informasi lebih lanjut, jangan ragu untuk menghubungi kami.
                    </p>
                    <Button variant="outline" size="lg" className="mt-4">
                        Hubungi Kami
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
