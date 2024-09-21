import { useState } from "react";

import { validateFileSize } from "@/utils/FileValidation";

export const useFileUpload = (maxSizeInMB: number) => {
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleFileUpload = (file: File) => {
    const errorMessage = validateFileSize(file, maxSizeInMB);
    if (errorMessage) {
      setValidationError(errorMessage);
      return false;
    }
    setValidationError(null);
    return true;
  };

  return { handleFileUpload, validationError };
};
