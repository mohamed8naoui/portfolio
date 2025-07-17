import Container from "../container";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import MoreMessage from "../ui/more-message";
import Title from "../ui/title";

function Certificates() {
  return (
    <div className="bg-black">

    <Container className="m-0">
      <div className="space-y-8  p-5 md:p-0" id="certificates">
        <div>
          <Title>Equipped for Success!</Title>
          <p className="text-lg md:text-2xl font-normal text-white leading-9">
            Equipped with knowledge and skills! Dive into the certificates that
            highlight my dedication to mastering my craft.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  gap-20 relative">
          <DirectionAwareHover className="md:size-full" imageUrl="/cert1.jpg">
            <p className="font-bold text-xl">Google Certificate</p>
            <p className="font-normal text-sm">
              Digital Marketing Certificate in 2022.
            </p>
          </DirectionAwareHover>
          <DirectionAwareHover className="md:size-full" imageUrl="/cert2.jpg">
            <p className="font-bold text-xl">BitDegree Certificate</p>
            <p className="font-normal text-sm">
              Wordpress Masterclass Certificate in 2023.
            </p>
          </DirectionAwareHover>
        </div>
        <MoreMessage>More Certificates coming soon...</MoreMessage>
      </div>
    </Container>
    </div>
  );
}

export default Certificates;
