
const getControllerContent = controllerName => {
    return `export const ${controllerName} = () => { };
`;
};

const getStyleContent = () => {
    return `import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#FFFFFF"
        },
    });
};
`;
};

const getScreenContent = screenNamePascal => {
    return `import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { getStyle } from "./styles";
import { I${screenNamePascal}Props } from "./types";

export const ${screenNamePascal}: FC<I${screenNamePascal}Props> = memo(({}: I${screenNamePascal}Props) => {
    const styles = getStyle();

    return (
        <View style={styles.container}>
            <Text>${screenNamePascal}</Text>
        </View>
    );
});
`;
};

const getIndexContent = (screenNamePascal, screenNameCamel) => {
    return `export { ${screenNamePascal} } from "./${screenNameCamel}";\n`;
};

const getTypesContent = screenNamePascal => {
    return `export interface I${screenNamePascal}Props {
}`;
};

module.exports = {
    getControllerContent,
    getStyleContent,
    getScreenContent,
    getIndexContent,
    getTypesContent
};
