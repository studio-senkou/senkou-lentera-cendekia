import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export type TeacherPromotionProps = ComponentProps<'div'>

export function TeacherPromotion({ className, ...props }: TeacherPromotionProps) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-2xl bg-deep-navy px-6 py-12 md:px-12 md:py-16 mt-16 md:mt-24 shadow-level-2',
                className
            )}
            {...props}
        >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-learning-blue/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-lentera-orange/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left justify-between gap-8">
                <div className="max-w-2xl">
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                        Tertarik Menjadi Bagian dari Kami?
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                        Punya passion mengajar dan ingin berdampak bagi masa depan anak bangsa? Lentera Cendekia membuka peluang bagi tentor berbakat untuk bergabung bersama tim pengajar kami.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Button variant="primary" size="lg" className="px-8 bg-lentera-orange hover:bg-lentera-orange/90 text-white border-none">
                        Daftar Jadi Tentor
                    </Button>
                </div>
            </div>
        </div>
    )
}
