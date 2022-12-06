import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MapTo } from "@adobe/aem-react-editable-components";
import axios from "axios";
import Input from "../input";
import * as Style from "./search.styles";
import { useAuth } from "../../hooks/Auth";

function Search(): JSX.Element {
  const [search, setSearch] = useState("");
  const { user, setUser, history } = useAuth();

  const handleSearch = async () => {
    const w = await axios.get(`https://api.github.com/users/${search}`);
    if (w.data) {
      setUser(w.data);
    }
  };

  return (
    <Style.Login>
      <Style.Form>
      <Style.Back
          onClick={() => history.push("/content/reactapp/us/en/home-page.html")}
        >
          voltar
        </Style.Back>
        <Style.Title>Busca</Style.Title>
        <Style.SubTitle>
          Para encontrar o usuário desejado digite seu nome abaixo.{" "}
        </Style.SubTitle>
        <Style.Container>
          <Input
            label="Ex: sostenes"
            onChange={setSearch}
            value={search}
          ></Input>
          <Style.Button onClick={() => handleSearch()}>
            Buscar <AiOutlineSearch />
          </Style.Button>
        </Style.Container>
        {user.avatar_url && (
          <Style.FormInner>
            <Style.Avatar src={user.avatar_url} />
            <Style.ContainerInner>
              <Style.Name>{user.name}</Style.Name>
              <Style.SubName>{user.bio || "Description"}</Style.SubName>
            </Style.ContainerInner>
            <Style.ButtonSee onClick={() => history.push("/content/reactapp/us/en/detail.html")}>ver mais</Style.ButtonSee>
          </Style.FormInner>
        )}
        
      </Style.Form>

      <Style.ImgBg src="https://s3-alpha-sig.figma.com/img/dd5c/a72b/f7361f224fa873f2f0878af28a00fbf1?Expires=1670198400&Signature=Yf1l43b1ssQDaFYvuI677h6tmgpF9H4I4~H6QL4NZqJRBykRKkO0IptBizx15htNuRaFRUq9h49dHcVmUFeZQutUOss~AGNYSTIhUDxQH2S8FxFppcyRvko0G27Xoxctswg4B0lzXgZo6JMjJRPUj3XhM8POvrHvqfRoeNDLNTlKgRE2oK4xDTHk2OQg8rcCUeizmMCRa4vIz1kvvf5AreS5iJMTgXzBo2B3ysLaLgqPYUzQlF9IlzZwRb52jBAmHjeAnwLMmBjfwdDJE6GGDWI8y6ite0c30U7gvaWVDuG7oJiZ7djRArjFkgb4HJVEnUFTxK3SrFGetmIy70EtoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></Style.ImgBg>
      <Style.Logo src="https://s3-alpha-sig.figma.com/img/f7ec/6bea/9ac0e9dd0bb5dbef069fa061c1de9b19?Expires=1670198400&Signature=PKnr8uqK8SHm361ohVSlPp8avrpbktyo-sv8lAK100xolb4ffRUsa3wKSnzw8~fnU4OV4np4E9gR-7T41eunfp3dfDqnE~zgE60m739Np0v3KDCv2UkIYdcBhvmqIbqO1MPAueKVgoGFPruHgPp1ah8cbbGIRQzPuIqGmZlfxmq6aiWXKqVu0DpZjHBL5hz7hehsKtrDutKzpqvViqmsg2P38z5OG5gEfUPxP3VpGjyyIkNO7UByA6hSuasaNh0nOxmb0MZ4Oe-nC046YUzq~pbJ0jQpuUEL7XKxxLWE72Q9K4uiBhaeIitoX~SJCRP4HL2-qu~~CusXmBdYpg1kaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></Style.Logo>
    </Style.Login>
  );
}

export default MapTo("reactapp/components/page-search")(Search);