import BannerImg from "@/components/Banner/BannerImg"
import { TracingBeamCard } from "@/components/Card/TracingBeamCard"
import { Review } from "@/components/DetailsProduct/review"

const page = () => {
  return (
    <div>
      <div>
        <BannerImg />
      </div>

      <div>
        <TracingBeamCard />
      </div>

      <div>
        <Review />
      </div>
    </div>
  )
}
export default page