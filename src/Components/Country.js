import React, { Component } from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import { Slide } from "react-slideshow-image";
import IconButton from "@material-ui/core/IconButton";

class Comp2 extends Component {
  state = { flag: false };
  style1 = { marginRight: 100 };
  style2 = { marginRight: 15 };
  style3 = { width: 1000, backgroundColor: "lightGrey", color: "black" };
  style4 = { width: 1000, backgroundColor: "white", color: "black" };
  style5 = { marginTop: 20 };
  style6 = { marginTop: 20 };

  slideImages = [
    "../images/nature1.jpg",
    "../images/takaMountains.jpg",
    "../images/nature3.jpg"
  ];

  properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2>Nature</h2>
        <Slide {...this.properties}>
          <div className="each-slide">
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: 350,
                width: 600,
                backgroundImage: `url(${this.slideImages[0]})`
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: 350,
                width: 600,
                backgroundImage: `url(${this.slideImages[1]})`
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: 350,
                width: 600,
                backgroundImage: `url(${this.slideImages[2]})`
              }}
            ></div>
          </div>
        </Slide>
        <h2>History</h2>
        <p>
          let's start a bit before the date when sudan got it's independency. it
          was proclaimed on Jan. 1, 1956. Since independence, Sudan has been
          ruled by a series of unstable parliamentary governments and military
          regimes. Under Maj. Gen. Gaafar Mohamed Nimeiri, Sudan instituted
          fundamentalist Islamic law in 1983. This exacerbated the rift between
          the Arab north, the seat of the government, and the black African
          animists and Christians in the south. Differences in language,
          religion, ethnicity, and political power erupted in an unending civil
          war between government forces, strongly influenced by the National
          Islamic Front (NIF) and the southern rebels, whose most influential
          faction is the Sudan People's Liberation Army (SPLA). Human rights
          violations, religious persecution, and allegations that Sudan had been
          a safe haven for terrorists isolated the country from most of the
          international community. In 1995, the UN imposed sanctions against it.
        </p>
        <p>
          Ever since Lt. Gen. Omar Bashir's(Not a Good Guy) military coup in
          1989, the de facto ruler of Sudan had been Hassan el-Turabi, a cleric
          and political leader who is a major figure in the pan-Arabic Islamic
          fundamentalist resurgence. In 1999, however, Bashir ousted Turabi and
          placed him under house arrest. (He was freed in Oct. 2003.) Since then
          Bashir has made overtures to the West, and in Sept. 2001, the UN
          lifted its six-year-old sanctions. The U.S., however, still officially
          considers Sudan a terrorist state.
        </p>
        <p>
          On Jan. 9, 2005, after three years of negotiations, the peace deal
          between the southern rebels, led by John Garang of the SPLA, and the
          Khartoum government to end the two-decades-long civil war was signed,
          giving roughly half of Sudan’s oil wealth to the south, as well as
          nearly complete autonomy and the right to secede after six years. But
          just two weeks after Garang was sworn in as first vice president as
          part of the power-sharing agreement, he was killed in a helicopter
          crash during bad weather. Rioting erupted in Khartoum, killing nearly
          100. Garang’s deputy, Salva Kiir, was quickly sworn in as the new vice
          president, and both north and south vowed that the peace agreement
          would hold.
        </p>
        <p>
          In April 2010, Bashir easily won Sudan's first multi-party elections
          since 1986, with 68% of the vote. Several opposition parties boycotted
          the election, and international observers questioned the fairness of
          it, citing ballot-box stuffing and other allegations of fraud.
          Bashir's supporters cite the marked improvement in infrastructure
          completed during his presidency—new schools, hospitals, and roads. All
          are products of the oil boom. Salva Kiir, head of the Sudan People's
          Liberation Movement, was reelected president of the semi-autonomous
          South, taking 93% of the vote. A referendum on Southern independence
          is scheduled for January 2011. President Bashir has vowed to honor the
          results of the vote. Many fear renewed violence if the referendum
          passes, as the South is home to about 90% of the country's oil.
        </p>
      </React.Fragment>
    );
  }
}

export default Comp2;
