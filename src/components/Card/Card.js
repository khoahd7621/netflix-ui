import React, { useState, useContext, createContext } from "react";

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
  Meta,
  Item,
  Image,
} from "./styles/CardStyle";

export const CardContext = createContext();

const Card = ({ children, ...restProps }) => {
  const [showCard, setShowCard] = useState(false);
  const [itemCard, setItemCard] = useState({});

  return (
    <CardContext.Provider
      value={{ showCard, setShowCard, itemCard, setItemCard }}
    >
      <Container {...restProps}>{children}</Container>
    </CardContext.Provider>
  );
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showCard, itemCard, setShowCard } = useContext(CardContext);

  return showCard ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemCard.genre}/${itemCard.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemCard.title}</FeatureTitle>
        <FeatureText>{itemCard.description}</FeatureText>
        <FeatureClose onClick={() => setShowCard(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemCard.maturity}>
            {itemCard.maturity < 12 ? "PG" : itemCard.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemCard.genre.charAt(0).toUpperCase() + itemCard.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowCard, setItemCard } = useContext(CardContext);

  return (
    <Item
      onClick={() => {
        setItemCard(item);
        setShowCard(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Card;
