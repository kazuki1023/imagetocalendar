import type { CustomNextPage } from "next";
import ImageUploader from "src/features/imageUploader/ImageUploader";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <ImageUploader />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
