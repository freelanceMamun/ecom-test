import Image from 'next/image';
import Banner from '@/components/banenr/banner';
import FeatureProduct from '@/components/FeatureProduct/featureProduct';
import SecondBanner from '@/components/banenr/secondBanner';
import BannerSlider from '@/components/banenr/bannerSlider';
import FeatureDeal from '@/components/FeatureProduct/featureDeal';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      {/* == Featured product == */}
      <FeatureProduct></FeatureProduct>
      <SecondBanner></SecondBanner>
      <BannerSlider></BannerSlider>
      <FeatureDeal></FeatureDeal>
    </div>
  );
}
