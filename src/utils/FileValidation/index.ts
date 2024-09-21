export const validateFileSize = (file: File, maxSizeInMB: number): string | null => {
  const fileSizeInMB = file.size / 1024 / 1024;
  if (fileSizeInMB > maxSizeInMB) {
    return `ファイルサイズは${maxSizeInMB}MB以下にしてください`;
  }
  return null;
};
