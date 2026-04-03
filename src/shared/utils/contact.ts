export const sendWhatsappMessage = () => {
    const message = encodeURIComponent(
        'Saya tertarik untuk mengetahui lebih lanjut tentang bimbingan belajar di Lentera Cendekia, Bisakah saya mendapatkan informasi lebih lanjut?'
    )

    window.open(`https://wa.me/6285749688821?text=${message}`, '_blank')
}
