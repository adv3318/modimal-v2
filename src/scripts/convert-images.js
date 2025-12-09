/* eslint-disable no-console */
import sharp from "sharp"
import path from "path"
import glob from "fast-glob"

const convertImages = async () => {
  const images = await glob("src/images/**/*.{jpg,jpeg,png}")

  for (const imagePath of images) {
    const dir = path.dirname(imagePath)
    const ext = path.extname(imagePath)
    const name = path.basename(imagePath, ext)

    console.log(`Processing: ${imagePath}`)

    // WebP
    await sharp(imagePath)
      .webp({ quality: 80 })
      .toFile(path.join(dir, `${name}.webp`))

    // AVIF
    await sharp(imagePath)
      .avif({ quality: 80 })
      .toFile(path.join(dir, `${name}.avif`))
  }

  console.log("Image conversion complete!")
}

convertImages()
