import type { CustomNextPage } from "next";
import FileUploader from "src/components/fileUploader";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <FileUploader
        label="Upload your files"
        labelAlt="Drag and drop your files here"
        acceptedFileTypes={['image/jpeg', 'image/jpg', 'image/png']}
        allowMultiple
        url="http://localhost:3000/api/upload"
      />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
