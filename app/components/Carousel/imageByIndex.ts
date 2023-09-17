export const images: string[] = [
  'https://picsum.photos/1024',
  'https://picsum.photos/1024',
  'https://picsum.photos/1024',
  'https://picsum.photos/1024',
]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex