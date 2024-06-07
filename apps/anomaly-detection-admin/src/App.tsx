import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnomalyRuleList } from "./anomalyRule/AnomalyRuleList";
import { AnomalyRuleCreate } from "./anomalyRule/AnomalyRuleCreate";
import { AnomalyRuleEdit } from "./anomalyRule/AnomalyRuleEdit";
import { AnomalyRuleShow } from "./anomalyRule/AnomalyRuleShow";
import { NetworkEventList } from "./networkEvent/NetworkEventList";
import { NetworkEventCreate } from "./networkEvent/NetworkEventCreate";
import { NetworkEventEdit } from "./networkEvent/NetworkEventEdit";
import { NetworkEventShow } from "./networkEvent/NetworkEventShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnomalyDetection"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AnomalyRule"
          list={AnomalyRuleList}
          edit={AnomalyRuleEdit}
          create={AnomalyRuleCreate}
          show={AnomalyRuleShow}
        />
        <Resource
          name="NetworkEvent"
          list={NetworkEventList}
          edit={NetworkEventEdit}
          create={NetworkEventCreate}
          show={NetworkEventShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
