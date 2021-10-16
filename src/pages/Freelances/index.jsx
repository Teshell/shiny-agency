import { useState, useEffect } from "react";

import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card";

import colors from "../../utils/style/colors";

import styled from "styled-components";
import { Loader } from "../../utils/style/Atoms";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: #000;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Freelances = () => {
  const [freelances, setFreelances] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true);

      try {
        const response = await fetch("http://localhost:8000/freelances");
        const { freelancersList } = await response.json();
        setFreelances(freelancersList);
      } catch (err) {
        console.log("===== error =====", err);
        setError(err);
      } finally {
        setDataLoading(false);
      }
    }

    fetchFreelances();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème.</span>;
  }

  return (
    <div>
      <PageTitle>Voici les Freelances</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>

      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelances.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
};

export default Freelances;
