import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function saveBase64AsImageFile(
  userId: number,
  base64String: string,
  type: string,
): Promise<string> {
  const imageBuffer = Buffer.from(base64String.split(';base64,').pop() || '', 'base64');

  const dir = path.join(process.cwd(), 'public', 'uploads');
  fs.mkdirSync(dir, { recursive: true });

  const filename = `${type}-${userId}-${Date.now()}.jpg`;
  const filepath = path.join(dir, filename);

  await sharp(imageBuffer).jpeg().toFile(filepath);

  return filename;
}
