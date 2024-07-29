import type { DragEvent, FC } from "react";
import { useState } from "react";

import Content from "@/components/DropImageZone/Content";

type Props = {
  onDropFile: (file: File) => void;
};

const DropImageZone: FC<Props> = ({ onDropFile }) => {
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragActive(true);
    }
  };

  const onDragLeave = () => {
    setIsDragActive(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files !== null && e.dataTransfer.files.length > 0) {
      if (e.dataTransfer.files.length === 1) {
        onDropFile(e.dataTransfer.files[0]);
      } else {
        alert("ファイルは１個まで！");
      }
      e.dataTransfer.clearData();
    }
  };

  return (
    <div
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className={`w-96 h-96 ${isDragActive ? "opacity-50" : "opacity-80"}`}
    >
      <Content/>
    </div>
  );
};

export default DropImageZone;
