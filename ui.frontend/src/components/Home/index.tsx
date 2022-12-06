import React from "react";
import { useState, useEffect } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useAuth } from "../../hooks/Auth";
import * as Style from "./home.styles";

function Home(): JSX.Element {
  const { history } = useAuth();
  const [seconds, setSeconds] = useState(0);
  const [day, setDay] = useState("");
  const [temp, setTemp] = useState({
    current: {
      temp_c: "",
      condition: {
        icon: "",
      },
    },
    location: {
      name: "",
      region: "",
    },
  });

  const now = new Date();

  const showPosition = async (position: any) => {
    window.localStorage.setItem("long", position.coords.longitude);
    window.localStorage.setItem("lati", position.coords.latitude);
    return {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
  };

  useEffect(() => {
    const weather = async () => {
      let long = localStorage.getItem("long");
      let lati = localStorage.getItem("lati");
      if (!long && !long) {
        const { longitude, latitude }: any =
          await navigator.geolocation.getCurrentPosition(showPosition);
        long = longitude;
        lati = latitude;
      }
      const w = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=0654539c14dc40b8b24143200222511&q= ${lati},${long}&aqi=no`
      );
      setTemp(w.data);
    };
    const formattedDate = format(now, "EEEE, dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
    setDay(formattedDate);
    weather();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds: number) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    window.localStorage.removeItem("login");
    history.push("/content/reactapp/us/en/login.html");
  };

  useEffect(() => {
    if (seconds === 600) logout();
  }, [seconds]);

  return (
    <Style.Home>
      <Style.Header>
        <Style.LogoCompass src='https://s3-alpha-sig.figma.com/img/a743/74ba/892b5a8cbe3228b5f0ce7a2af9d7cac8?Expires=1670198400&Signature=IeHi~5hAkQ2j0OC1Pz2WmcB3CVqOtC4tnqU7fctrv~dBPT8zW5adBA37mdwVuTXHnEcfJXhxImhBwxBss-HgA7S~CYRK11vzktoOl4a232xAaOMmRnZUZmhQT5-22B937Vrj5FFZ8VrVIa1dZHEGFcw44aBv~nbtmaok3Hbvb8nqlZ5caQ3E-HiEAGAl8AWVaNvQFwvMeEC0stVnPe4paE7wUveZnOGwfli1c9UD0LsLFcgEnIr1X88w5cJl9MsVzrC0kOhD7Y22qKKEFlVtiYimFGotTQZ7dBdC8WM36-at167V2L2pg1v~6oWWtbhywmfDqTRnpPSR0Avw~7YFtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />

        <Style.Timer>
          <Style.Hour>{format(now, "HH:mm")}</Style.Hour>
          <Style.Day>{day}</Style.Day>
        </Style.Timer>

        <Style.Weather>
          <Style.Local>
            {temp?.location.name} - {temp?.location.region}{" "}
          </Style.Local>
          <Style.IconsTemps>
            <Style.Icon src={temp?.current.condition.icon} />
            <Style.Temp>{temp?.current?.temp_c}º</Style.Temp>
          </Style.IconsTemps>
        </Style.Weather>
      </Style.Header>

      <Style.Body>
        <div>
          <Style.ImgAbsolute src='https://s3-alpha-sig.figma.com/img/7c12/ba15/ff6a9bbe0918d78eedb423ece259f365?Expires=1670198400&Signature=gxlYw2KJYrE6PdRLzt8bfTYqQZkUQaiQ9IXfger2o-oH343lnZ9lCrmA4adImmIS7Lq9odCU5jwZAhBBvFemGZXEFne~op-vVYXDihgMNOxelPZxUtMTRaHQ7ngKmLY3sz4zLQ-~abiWIQXLd0H~cL9s3kGYeb4N4BE4itL8FgPAl4M2pKxeXymd5D-EvZHS7d7Q-4W7ZC~FRs3hlNSiS8tyVSyJh6czfIWP2rSbQktZomEeFkXNKg12ASpufrJBlh7owanS4m8pj6UJ~FoSGuCxKQd-HdwU5EZ~jaHf82UCp0ZHkn5db9u97XGiImDHXiWDoYnFxuhQD4Y-fo0rJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
        </div>

        <Style.TextBlock>
          <Style.InnerText>
            <Style.TitleH3>Our mission is</Style.TitleH3>
            <Style.SubTitle>Nossa missao e</Style.SubTitle>
          </Style.InnerText>

          <Style.InnerText>
            <Style.TitleH3>to transform the world</Style.TitleH3>
            <Style.SubTitle>transformar o mundo</Style.SubTitle>
          </Style.InnerText>

          <Style.InnerText>
            <Style.TitleH3>building digital experiences</Style.TitleH3>
            <Style.SubTitle>construindo experiências digitais</Style.SubTitle>
          </Style.InnerText>

          <Style.InnerText>
            <Style.TitleH3>that enable our client’s growth</Style.TitleH3>
            <Style.SubTitle>
              que permitam o crescimento dos nossos clientes
            </Style.SubTitle>
          </Style.InnerText>
        </Style.TextBlock>
      </Style.Body>

      <Style.Footer>
        <Style.InfoText>
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
          janela para continuar a navegar.
        </Style.InfoText>

        <Style.Intersection />

        <Style.Refresh>
          <Style.InfoRefresh>Application refresh in</Style.InfoRefresh>

          <Style.TimeBlock>
            <Style.TokenTime>{seconds}</Style.TokenTime>
            <Style.Sec>seconds</Style.Sec>
          </Style.TimeBlock>
        </Style.Refresh>
        <Style.Buttons>
          <Style.Search>
            <a
              onClick={() =>
                history.push("/content/reactapp/us/en/search.html")
              }
            >
              Acessar Busca
            </a>
          </Style.Search>

          <Style.Logout>
            <a onClick={() => logout()}>Logout</a>
          </Style.Logout>
        </Style.Buttons>
      </Style.Footer>
    </Style.Home>
  );
}

export default MapTo("reactapp/components/page-home")(Home);
