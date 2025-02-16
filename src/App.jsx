import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [teamAgility, setTeamAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    const newTeam = team.filter((_, index) => index !== index);
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
  };

  const calculateTeamStrength = () => {
    const teamStrength = team.reduce(
      (accumulator, fighter) => accumulator + fighter.strength
    );
    setTotalStrength(teamStrength);
  };

  const calculateTeamAgility = () => {
    const teamAgility = team.reduce(
      (accumulator, fighter) => accumulator + fighter.agility
    );
    setTeamAgility(teamAgility);
  };

  return (
    <>
      <h1>Zombie Fighters!</h1>
      <p>Money: ${money}</p>
      <br />
      <h2>Fighters</h2>
      <ul className="figthers">
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="fighterItem">
            <img src={fighter.img} alt={fighter.name} />
            <div className="fighterDetails">
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>
                Add Fighter
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>My Zombie Fighters</h2>
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {teamAgility}</p>
      {team.length === 0 ? (
        <p>Pick Fighthers for Your Team!</p>
      ) : (
        <ul className="myTeam">
          {team.map((fighter, index) => (
            <li key={index} className="myFighter">
              <img src={fighter.img} alt={fighter.name} />
              <div className="myFighterDetails">
                <h3>{fighter.name}</h3>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <p>Price: ${fighter.price}</p>
                <button onClick={handleRemoveFighter}>Remove Fighter</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
