import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


import ViewDetails from "./components/ViewDetails";

function App(props) {
  const [champions, setChampions] = useState([]);
  const [currentChampion, setCurrentChampion] = useState(null);


  const getChampions = async () => {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/10.2.1/data/pt_BR/champion.json"
    );
    const json = await response.json();
    const champions = json.data;
    setChampions(Object.keys(champions).map((key) => champions[key]));
    console.log(champions);
  };

  const viewDetails = (champion, e) => {
    const filteredChampion = champions.filter(
      (champ) => champ.key === champion.key
    );
    const newCurrentChampion =
      filteredChampion.length > 0 ? filteredChampion[0] : null;
    setCurrentChampion(newCurrentChampion);
    console.log(filteredChampion);
  };

  const closeDetails = () => {
    setCurrentChampion(null);
  }

  useEffect(() => {
    getChampions();
  }, []);

  const rowStyle = {
    width: "900px",
    margin: "auto",
  }

  return (
    <div className="App">
      <div>
        {
         currentChampion === null ? (
            <Row className="py-5 no-gutters">
            {champions.map((champion) => (
              <Col xs={6} lg={2} key={champion.key}  onClick={(e) => viewDetails(champion, e)}>
                <Card>
                  {champion.image ? (
                    <Card.Img
                      variant="top"
                      className="champion-image img-fluid"
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/100"
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{champion.name}</Card.Title>
                    <Card.Text>{champion.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          ) : 
          <ViewDetails champion={currentChampion} closeDetails={closeDetails} />

        }
        
      </div>
    </div>
  );
}

export default App;
