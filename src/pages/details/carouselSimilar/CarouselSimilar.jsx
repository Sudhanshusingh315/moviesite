// for similar movies carousel
import { Carousel } from "../../../components/carouselSection/Carousel";
import useFetch from "../../../hooks/useFetch";

export default function Similar({ media, id }) {
  const { data, loading } = useFetch(`/${media}/${id}/similar`);
  const title = media === "tv" ? "Similar TV Shows" : "Similar Movies";
  console.log(data);
  <Carousel
    data={data?.results}
    loading={loading}
    title={title}
    media={media}
  />;
}
