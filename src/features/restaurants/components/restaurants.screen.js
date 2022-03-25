import React from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "./restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
  `;

  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

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
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
