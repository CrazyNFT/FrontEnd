import React from "react";
import { Container, Grid } from "semantic-ui-react";
import NFTCard from "./NFTCard";

const axios = require('axios');
let heroku = () => axios.get('https://crazynft.herokuapp.com/getall.php')
  .then(function (response) {
    // handle success
    console.log(response);
    heroku=response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
  });



const response = async () => await fetch("");
// const db = async () => await response.json();
// const uri = async () => await fetch(`ipfs://${db.uri}`);
// const uridb = async () => await db.json();
// const pic = async () => await fetch(`ipfs://${uridb.nftFile}`);
// const picdb = async () => await pic.json();



const TableMaker = () => {
  // response();
  // console.log(contacts);
  console.log(heroku());
  return (    
    <div style={{ margin: "84px 320px" }}>
      {/* <Grid columns={3} relaxed style={{ margin: "auto" }}>
        <Grid.Row>
          <Grid.Column>
            <NFTCard
              name={contacts[0].name}
              img={contacts[0].imgURL}
              details={contacts[0].details}
            />
          </Grid.Column>
          <Grid.Column>
            <NFTCard
              name={contacts[1].name}
              img={contacts[1].imgURL}
              details={contacts[1].details}
            />
          </Grid.Column>
          <Grid.Column>
            <NFTCard
              name={contacts[2].name}
              img={contacts[2].imgURL}
              details={contacts[2].details}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <NFTCard
              name={contacts[3].name}
              img={contacts[3].imgURL}
              details={contacts[3].details}
            />
          </Grid.Column>
          <Grid.Column>
            <NFTCard
              name={contacts[4].name}
              img={contacts[4].imgURL}
              details={contacts[4].details}
            />
          </Grid.Column>
          <Grid.Column>
            <NFTCard
              name={contacts[5].name}
              img={contacts[5].imgURL}
              details={contacts[5].details}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
   );
};
export default TableMaker;
