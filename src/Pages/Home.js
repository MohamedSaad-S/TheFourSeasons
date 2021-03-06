import React, { Fragment, useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import logo from "../logo/logo@2x.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Clock from "../Components/Clock";
import EmailNotify from "../Components/EmailNotify"
import "./Home.scss";



const Home = () => {

  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval;

  const startTimer = () => {

    const countdownDate = new Date("Dec 29, 2021 00:00:00").getTime()

    const now = new Date().getTime()

    const distance = countdownDate - now

    const days = Math.floor(distance / (24 * 60 * 60 * 1000))

    const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))

    const minutes = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000))

    const seconds = Math.floor(distance % (60 * 1000) / 1000)


    interval = setInterval(() => {

      if (distance < 0) {

        clearInterval(interval);
        console.log("Finish")

      } else {

        return (
          setTimerDays(days),
          setTimerHours(hours),
          setTimerMinutes(minutes),
          setTimerSeconds(seconds))
      }

    }, 1000)

  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(interval)
  })

  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, )
  }, [])

  return (
    <Fragment>
    {loading ?
      <FadeLoader
        size={60}
        margin={2}
        color={"#123abc"}
        loading={loading}
      />
      :

    <div className="App">
      <div className="logo">
        <a href="#top">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="header">
        <p>Our website is almost ready..</p>
        <p>Sivustomme on melkein valmis..</p>
      </div>

      <div className="threeWebBoxs">
        <Link to="./FullPower" className="box box1">
          <div className="box_content">
            <p>Full Power</p>
            <p>
              -Saneerauskohteiden purkaminen-J??tteiden ja kalusteiden
              kierr??tys-J??tteiden lajittelu
            </p>
          </div>
        </Link>

        <Link to="./TigerSpeed" className="box box2">
          <div className="box_content">
            <p>Tiger Speed</p>
            <p>
              Maahantuonti ja Vienti yritys-Elintarvikkeiden,
              kulutushy??dykkeiden ja p??ivitt??istavarat-Ajoneuvot-Kalusteet
            </p>
          </div>
        </Link>
        <Link to="./SkyPoint" className="box box3">
          <div className="box_content">
            <p>Sky Point</p>
            <p>-Matkailu ja ohjelmapalveluiden j??rjest??minen ja myynti.</p>
          </div>
        </Link>
      </div>

      <div className="underline"></div>

      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
      <EmailNotify />
      <Footer />
    </div>
    }

    </Fragment>
  );
};

export default Home;
