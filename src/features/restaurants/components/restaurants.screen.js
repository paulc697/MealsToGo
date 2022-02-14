import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "./restaurant-info-card.component";
import styled from "styled-components/native";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  `;

  const SearchContainer = styled.View`
    padding: 16px;
  `;

  const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: blue;
  `;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          clearAccessibilityLabel="search bar"
          searchAccessibilityLabel="search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
