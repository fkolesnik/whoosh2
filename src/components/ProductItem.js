import React from "react";
import ProductItemBackground from "./ProductItemBackground";
import Colors from "./Colors";
import { Link } from "gatsby";
import theme from "../styles/theme";
import { Box, T1 } from "../styles/Styles";

export default props => {
  const { slug, title, price, family } = props.product;
  return (
    <Box
      as="article"
      p={"n"}
      mb={"xs"}
      height="100vh"
      minHeight={500}
      position="relative"
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
      bg="rgba(0, 0, 0, 0.1)"
    >
      <Box width={[1, 1 / 2]}>
        <T1>
          <Link to={`/${slug}`}>
            <Box
              as="span"
              color="white"
              textShadow="0 1px 1px rgba(0, 0, 0, 0.25)"
              dangerouslySetInnerHTML={{ __html: `${title}` }}
            />
            <br />
            <Box as="small" color={theme.color.primary}>
              {price}₽
            </Box>
          </Link>
        </T1>
        <Colors family={family} hover />
      </Box>
      <ProductItemBackground product={props.product} />
    </Box>
  );
};
