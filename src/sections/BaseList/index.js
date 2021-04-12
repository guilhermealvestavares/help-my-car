import React from "react";
import { BaseListList, BaseListListItem, Wrapper } from "./styles";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  FirestoreCollection,
  FirestoreProvider,
} from "@react-firebase/firestore";
import { config } from "../../../firebase.config";

const WhoWeAre = () => {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <FirestoreCollection path="/parts/">
        {(response) => (
          <Wrapper>
            {response.isLoading === false && (
              <>
                <BaseListList variant="label">
                  <BaseListListItem>Índice</BaseListListItem>
                  <BaseListListItem>nome</BaseListListItem>
                  <BaseListListItem>categoria</BaseListListItem>
                  <BaseListListItem>descrição</BaseListListItem>
                </BaseListList>
                {response.value.map(
                  ({ name, category, description }, index) => (
                    <BaseListList key={`${name}${index}`}>
                      {console.log(category, description)}
                      <BaseListListItem>{index}</BaseListListItem>
                      <BaseListListItem>{name}</BaseListListItem>
                      <BaseListListItem>{category}</BaseListListItem>
                      <BaseListListItem>{description}</BaseListListItem>
                    </BaseListList>
                  )
                )}
              </>
            )}
          </Wrapper>
        )}
      </FirestoreCollection>
    </FirestoreProvider>
  );
};

export default WhoWeAre;
