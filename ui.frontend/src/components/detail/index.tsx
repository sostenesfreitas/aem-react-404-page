import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Style from "./detail.styles";
import { MapTo } from "@adobe/aem-react-editable-components";
import { useAuth } from "../../hooks/Auth";

function Detail(): JSX.Element {
  const { user, history } = useAuth();
  const [response, setResponse] = useState([
    {
      name: "",
      description: "",
    },
  ]);

  useEffect(() => {
    if (!user.login) {
      history.push("/content/reactapp/us/en/search.html")
    } else {
      const getDetail = async () => {
        const w = await axios.get(
          `https://api.github.com/users/${user.login}/repos`
        );
        setResponse(w.data);
      };
      getDetail();
    }
  }, []);

  return (
    <Style.Login>
      <Style.Card>
        <Style.AvatarLayer>
          <Style.LogoAvatar src={user.avatar_url} className='logoAvatar' />
          <Style.InfoUser>
            <h3>{user.name}</h3>
            <span>{user.bio || "Description"}</span>
          </Style.InfoUser>
        </Style.AvatarLayer>
        <Style.RepoCard>
          
          <Style.Repos>
            {response.map((rep) => (
              <Style.ReposInner>
                <Style.NameRepos>
                  <h4 className='name'>{rep.name}</h4>
                  <span className='subRepo'>{rep.description}</span>
                </Style.NameRepos>
                <div className='share'>
                  <Style.ShareButton>Compartilhar</Style.ShareButton>
                </div>
              </Style.ReposInner>
            ))}
          </Style.Repos>
        </Style.RepoCard>
        <Style.Back
          onClick={() => history.push("/content/reactapp/us/en/search.html")}
        >
          voltar
        </Style.Back>
      </Style.Card>
    </Style.Login>
  );
}

export default MapTo("reactapp/components/page-detail")(Detail);
