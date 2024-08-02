import Banner from "../components/Banner";

export type Bannertype = {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };

  export type BottomDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    banner: Bannertype;
    save: (updatedBanner: Bannertype) => void;
  };
  export type BannerProps = {
    data: Bannertype;
    openDrawer: () => void;
    edit: (data:Bannertype) => void;
  };