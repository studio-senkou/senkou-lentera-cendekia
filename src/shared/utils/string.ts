export const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '');
}

export const createExcerpt = (text: string, length: number = 150) => {
    const cleanText = stripHtml(text);
    return cleanText.length > length ? cleanText.substring(0, length) + '...' : cleanText;
}

export const estimateReadTime = (text: string) => {
    const cleanText = stripHtml(text);
    const wordsPerMinute = 200;
    const words = cleanText.split(/\s/g).length;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
}
