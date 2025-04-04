

export const useYoutubeThumbnail = (thumbnailID: string) => {
    const res = fetch(`https://i.ytimg.com/vi/${thumbnailID}/mqdefault.jpg`).then(r => r.b)
}