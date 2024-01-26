export function buildPaginationMetadata(totalItems: number, currentPage: number, pageSize: number) {
  const totalPages = Math.ceil(totalItems / pageSize);

  return {
    totalItems,
    currentPage,
    totalPages,
  };
}

export function getPagination(page: number = 1, size: number = 10) {
  const skip = (page - 1) * size;
  const take = size;

  return { skip, take, page, size };
}

export function payloadValidation(obj: any): any {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined && value !== ''),
  );
}

export function getUploadPath(filename: string) {
  return `/uploads/${filename}`;
}


export function converImageToBase64(file: File) {
  const reader = new FileReader()

  return reader.readAsDataURL(file)
}