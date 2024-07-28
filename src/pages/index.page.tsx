import type { CustomNextPage } from "next";
import Link from "next/link";
import { Layout } from "src/layout";
import FileUploader from "src/components/fileUploader";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <FileUploader
        label="Upload your files"
        labelAlt="Drag and drop your files here"
        acceptedFileTypes={['.jpg', '.jpeg', '.png']}
        allowMultiple
        url="http://localhost:3000/api/upload"
      />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
