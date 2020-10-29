import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./launchitem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3"> Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading</h4>; //put spinner here
            if (error) console.log(error);

            return  <Fragment>
            {data.launches.map( launch => (
              <LaunchItem key={launch.flight_number} launch={launch} />
            ))}
          </Fragment>
           
          }}
        </Query>
      </Fragment>
    );
  }
}

export default launches;
