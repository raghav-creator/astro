import React from "react";
import Header from "./../shared/header";
import Footer from "./../shared/footer";
import Banner from "./banner";
import Astrologer from "./astrologer";
import AstrologerList from "./astrologerlist";
import UsercardSlider from "./../shared/slider/usercard";
import Heading from "../shared/common/heading";
import Paragraph from "../shared/common/paragraph";
import Accordion1 from "./Accordion";
import Subheading from "../shared/common/subheading";
import CTA from "./cta";

const Home = () => {
  return (
    <div>
      {" "}
      <Header />
      <Banner />
      <Astrologer />
      <AstrologerList />
      <CTA />
      <UsercardSlider />
      <div className="container my-4">
        <Heading title="What is Astrology?" />
        <Paragraph
          className="text-left"
          paragraph="Lorem ipsum dolor sit amet consectetur. Tempus cursus feugiat eu sed sem pulvinar. Eu ac in accumsan faucibus ac pulvinar donec erat habitant. Nulla dictum sociis dolor gravida ac sit. In lorem ac lorem fames id quam curabitur metus. Felis odio fermentum platea eget. Est aliquet aliquet viverra nec ullamcorper. Consectetur pharetra vitae integer sociis hac nunc pharetra. Facilisi nunc adipiscing aliquam ut ut bibendum molestie sem augue. Lacus curabitur donec arcu vehicula mattis donec sed.
Laoreet in congue etiam viverra eros. Quis proin sed id tincidunt morbi. Congue aliquet non eget vulputate nisl lectus non cursus sollicitudin. Sit proin venenatis habitant scelerisque integer mi eget sed elementum. Pellentesque eu placerat nisi arcu imperdiet at egestas. Lorem ipsum amet diam turpis.
Aliquet duis volutpat sit magna potenti ullamcorper. Sed faucibus fames amet mi habitant posuere vulputate. Morbi ornare mi aliquam consequat amet mi rhoncus viverra. Morbi neque pellentesque nisl leo fermentum id mi ullamcorper. Eu id laoreet tellus tellus. Sed at nunc et tincidunt dolor risus risus."
        />

        <Accordion1 />
        <Heading className="no-border" title="FAQ’s about Astrology" />
        <Subheading title="Why is Astrology so accurate?" />
        <Paragraph
          className="text-left"
          paragraph="Lorem ipsum dolor sit amet consectetur. Tempus cursus feugiat eu sed sem pulvinar. Eu ac in accumsan faucibus ac pulvinar donec erat habitant. Nulla dictum sociis dolor gravida ac sit. In lorem ac lorem fames id quam curabitur metus. Felis odio fermentum platea eget. Est aliquet aliquet viverra nec ullamcorper. Consectetur pharetra vitae integer sociis hac nunc pharetra. Facilisi nunc adipiscing aliquam ut ut bibendum molestie sem augue. Lacus curabitur donec arcu vehicula mattis donec sed.
Laoreet in congue etiam viverra eros. Quis proin sed id tincidunt morbi. Congue aliquet non eget vulputate nisl lectus non cursus sollicitudin. Sit proin venenatis habitant scelerisque integer mi eget sed elementum. Pellentesque eu placerat nisi arcu imperdiet at egestas. Lorem ipsum amet diam turpis.
Aliquet duis volutpat sit magna potenti ullamcorper. Sed faucibus fames amet mi habitant posuere vulputate. Morbi ornare mi aliquam consequat amet mi rhoncus viverra. Morbi neque pellentesque nisl leo fermentum id mi ullamcorper. Eu id laoreet tellus tellus. Sed at nunc et tincidunt dolor risus risus."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
