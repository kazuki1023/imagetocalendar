import type { CustomNextPage } from "next";

import ImageUploader from "@/features/imageUploader/ImageUploader";
import { Layout } from "@/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <ImageUploader />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
